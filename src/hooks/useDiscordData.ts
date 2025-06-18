
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useServerStats = (serverId?: string) => {
  return useQuery({
    queryKey: ['serverStats', serverId],
    queryFn: async () => {
      console.log('Fetching server stats for:', serverId);
      
      // Get bot statistics for today
      const today = new Date().toISOString().split('T')[0];
      
      const { data: stats, error } = await supabase
        .from('bot_statistics')
        .select('*')
        .eq('server_id', serverId || 'default')
        .eq('date', today)
        .maybeSingle();

      if (error) {
        console.error('Error fetching stats:', error);
        // Return default stats if no data found
        return {
          songs_played: 0,
          commands_executed: 0,
          ai_queries: 0,
          voice_greetings: 0,
          safety_alerts: 0,
          new_users: 0
        };
      }

      return stats || {
        songs_played: 0,
        commands_executed: 0,
        ai_queries: 0,
        voice_greetings: 0,
        safety_alerts: 0,
        new_users: 0
      };
    },
    refetchInterval: 30000, // Refetch every 30 seconds for real-time updates
  });
};

export const useRecentActivity = (serverId?: string) => {
  return useQuery({
    queryKey: ['recentActivity', serverId],
    queryFn: async () => {
      console.log('Fetching recent activity for:', serverId);
      
      const { data, error } = await supabase
        .from('ai_conversations')
        .select(`
          *,
          discord_users(username)
        `)
        .eq('server_id', serverId || 'default')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching activity:', error);
        return [];
      }

      return data || [];
    },
    refetchInterval: 10000, // Refetch every 10 seconds
  });
};

export const useReminders = (serverId?: string) => {
  return useQuery({
    queryKey: ['reminders', serverId],
    queryFn: async () => {
      console.log('Fetching reminders for:', serverId);
      
      const { data, error } = await supabase
        .from('scheduled_messages')
        .select('*')
        .eq('server_id', serverId || 'default')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reminders:', error);
        return [];
      }

      return data || [];
    },
  });
};

export const useSecurityAlerts = (serverId?: string) => {
  return useQuery({
    queryKey: ['securityAlerts', serverId],
    queryFn: async () => {
      console.log('Fetching security alerts for:', serverId);
      
      const { data, error } = await supabase
        .from('safety_logs')
        .select(`
          *,
          discord_users(username)
        `)
        .eq('server_id', serverId || 'default')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching security alerts:', error);
        return [];
      }

      return data || [];
    },
    refetchInterval: 15000, // Refetch every 15 seconds
  });
};

export const useMusicQueue = (serverId?: string) => {
  return useQuery({
    queryKey: ['musicQueue', serverId],
    queryFn: async () => {
      console.log('Fetching music queue for:', serverId);
      
      const { data, error } = await supabase
        .from('music_queues')
        .select(`
          *,
          discord_users(username)
        `)
        .eq('server_id', serverId || 'default')
        .order('position', { ascending: true });

      if (error) {
        console.error('Error fetching music queue:', error);
        return [];
      }

      return data || [];
    },
    refetchInterval: 5000, // Refetch every 5 seconds for real-time music updates
  });
};
