
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export const useAddReminder = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (reminder: {
      title: string;
      time: string;
      type: string;
      channel: string;
      serverId?: string;
    }) => {
      console.log('Adding reminder:', reminder);
      
      const { data, error } = await supabase
        .from('scheduled_messages')
        .insert({
          server_id: reminder.serverId || 'default',
          channel_id: reminder.channel,
          message_content: reminder.title,
          cron_schedule: `0 ${reminder.time.split(':')[1]} ${reminder.time.split(':')[0]} * * *`, // Convert to cron format
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reminders'] });
      toast({
        title: "Reminder Added",
        description: "Your reminder has been scheduled successfully.",
      });
    },
    onError: (error) => {
      console.error('Error adding reminder:', error);
      toast({
        title: "Error",
        description: "Failed to add reminder. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useResolveAlert = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (alertId: string) => {
      console.log('Resolving alert:', alertId);
      
      const { data, error } = await supabase
        .from('safety_logs')
        .update({
          is_resolved: true,
          resolved_at: new Date().toISOString(),
        })
        .eq('id', alertId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['securityAlerts'] });
      toast({
        title: "Alert Resolved",
        description: "Security alert has been marked as resolved.",
      });
    },
    onError: (error) => {
      console.error('Error resolving alert:', error);
      toast({
        title: "Error",
        description: "Failed to resolve alert. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useAddToQueue = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (track: {
      title: string;
      artist?: string;
      url?: string;
      serverId?: string;
    }) => {
      console.log('Adding track to queue:', track);
      
      // Get the next position in the queue
      const { data: queueData } = await supabase
        .from('music_queues')
        .select('position')
        .eq('server_id', track.serverId || 'default')
        .order('position', { ascending: false })
        .limit(1);

      const nextPosition = queueData && queueData.length > 0 ? queueData[0].position + 1 : 1;

      const { data, error } = await supabase
        .from('music_queues')
        .insert({
          server_id: track.serverId || 'default',
          track_title: track.title,
          track_artist: track.artist,
          track_url: track.url,
          position: nextPosition,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['musicQueue'] });
      toast({
        title: "Track Added",
        description: "Song has been added to the queue.",
      });
    },
    onError: (error) => {
      console.error('Error adding track:', error);
      toast({
        title: "Error",
        description: "Failed to add track to queue. Please try again.",
        variant: "destructive",
      });
    },
  });
};
