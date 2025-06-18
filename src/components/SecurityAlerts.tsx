
import React from 'react';
import { Shield, AlertTriangle, CheckCircle, User, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSecurityAlerts } from '@/hooks/useDiscordData';
import { useResolveAlert } from '@/hooks/useDiscordMutations';
import { Skeleton } from '@/components/ui/skeleton';

export const SecurityAlerts = ({ serverId }: { serverId?: string }) => {
  const { data: alerts, isLoading } = useSecurityAlerts(serverId);
  const resolveAlertMutation = useResolveAlert();

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      default:
        return <Shield className="h-5 w-5 text-blue-400" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'critical':
        return 'bg-red-900/20 border-red-400/30';
      case 'medium':
        return 'bg-yellow-900/20 border-yellow-400/30';
      case 'low':
        return 'bg-green-900/20 border-green-400/30';
      default:
        return 'bg-blue-900/20 border-blue-400/30';
    }
  };

  // Calculate overview stats from alerts
  const activeAlerts = alerts?.filter(alert => !alert.is_resolved).length || 0;
  const totalUsers = 127; // This could be fetched from discord_users table
  const uptime = 99.9; // This could be calculated from bot_statistics

  return (
    <div className="p-6 space-y-6">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-900/20 border-green-400/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">
                  {activeAlerts === 0 ? 'Secure' : 'Alert'}
                </p>
                <p className="text-green-200 text-sm">Bot Status</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-900/20 border-blue-400/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <User className="h-8 w-8 text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-white">{totalUsers}</p>
                <p className="text-blue-200 text-sm">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-900/20 border-purple-400/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-2xl font-bold text-white">{uptime}%</p>
                <p className="text-purple-200 text-sm">Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Alerts */}
      <Card className="bg-purple-800/30 border-purple-400/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Alerts</span>
          </CardTitle>
          <CardDescription className="text-purple-200">
            Monitor and respond to security events in real-time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))
            ) : alerts?.length > 0 ? (
              alerts.map((alert: any) => (
                <div key={alert.id} className={`p-4 rounded-lg ${getAlertColor(alert.severity)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getAlertIcon(alert.alert_type)}
                      <div>
                        <h4 className="text-white font-medium">{alert.alert_type}</h4>
                        <p className="text-gray-300 text-sm mt-1">{alert.description}</p>
                        <p className="text-gray-400 text-xs mt-2">
                          {new Date(alert.created_at).toLocaleString()} • 
                          {alert.discord_users?.username && ` by ${alert.discord_users.username}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.is_resolved 
                          ? 'bg-green-900/50 text-green-200' 
                          : 'bg-red-900/50 text-red-200'
                      }`}>
                        {alert.is_resolved ? 'resolved' : 'active'}
                      </span>
                      {!alert.is_resolved && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-white hover:bg-white/10"
                          onClick={() => resolveAlertMutation.mutate(alert.id)}
                          disabled={resolveAlertMutation.isPending}
                        >
                          {resolveAlertMutation.isPending ? 'Resolving...' : 'Resolve'}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-purple-200 py-8">
                No security alerts found. Your Discord server is secure!
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
