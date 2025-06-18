
import React from 'react';
import { Users, MessageCircle, Music, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useServerStats, useRecentActivity } from '@/hooks/useDiscordData';
import { Skeleton } from '@/components/ui/skeleton';

export const ServerStats = ({ serverId }: { serverId?: string }) => {
  const { data: stats, isLoading: statsLoading } = useServerStats(serverId);
  const { data: activities, isLoading: activitiesLoading } = useRecentActivity(serverId);

  if (statsLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-purple-800/30 border-purple-400/30">
              <CardContent className="p-4">
                <Skeleton className="h-16 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const statsData = [
    { label: 'Active Users', value: stats?.new_users?.toString() || '0', icon: Users, color: 'text-blue-400' },
    { label: 'Songs Played Today', value: stats?.songs_played?.toString() || '0', icon: Music, color: 'text-green-400' },
    { label: 'Bot Commands Used', value: stats?.commands_executed?.toString() || '0', icon: MessageCircle, color: 'text-purple-400' },
    { label: 'AI Queries', value: stats?.ai_queries?.toString() || '0', icon: Clock, color: 'text-yellow-400' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-purple-800/30 border-purple-400/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-purple-200 text-sm">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-purple-800/30 border-purple-400/30">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
          <CardDescription className="text-purple-200">
            Latest interactions with your music bot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activitiesLoading ? (
              [1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))
            ) : activities?.length > 0 ? (
              activities.map((activity: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div>
                    <p className="text-white">
                      <span className="font-semibold text-purple-300">
                        {activity.discord_users?.username || 'Unknown User'}
                      </span>{' '}
                      asked: {activity.user_message}
                    </p>
                    <p className="text-purple-200 text-sm">
                      {new Date(activity.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-purple-200 py-8">
                No recent activity found. Start using the bot to see activity here!
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
