
import React from 'react';
import { Users, MessageCircle, Music, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ServerStats = () => {
  const stats = [
    { label: 'Active Users', value: '1,234', icon: Users, color: 'text-blue-400' },
    { label: 'Songs Played Today', value: '567', icon: Music, color: 'text-green-400' },
    { label: 'Bot Commands Used', value: '2,891', icon: MessageCircle, color: 'text-purple-400' },
    { label: 'Hours Streamed', value: '45.2', icon: Clock, color: 'text-yellow-400' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
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
            {[
              { user: 'User123', action: 'Added "Bohemian Rhapsody" to queue', time: '2 minutes ago' },
              { user: 'MusicLover', action: 'Skipped current song', time: '5 minutes ago' },
              { user: 'Admin', action: 'Set daily reminder for 9:00 AM', time: '10 minutes ago' },
              { user: 'NewUser', action: 'Used AI assistant for help', time: '15 minutes ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <p className="text-white">
                    <span className="font-semibold text-purple-300">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-purple-200 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
