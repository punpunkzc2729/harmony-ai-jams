
import React from 'react';
import { Shield, AlertTriangle, CheckCircle, User, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const SecurityAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Unusual Command Activity',
      description: 'User "SuspiciousUser123" sent 50+ commands in 1 minute',
      time: '5 minutes ago',
      status: 'active'
    },
    {
      id: 2,
      type: 'info',
      title: 'New User Joined',
      description: 'Welcome message sent to "NewUser456"',
      time: '10 minutes ago',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'success',
      title: 'Security Check Passed',
      description: 'All bot permissions verified successfully',
      time: '1 hour ago',
      status: 'resolved'
    }
  ];

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

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-900/20 border-yellow-400/30';
      case 'success':
        return 'bg-green-900/20 border-green-400/30';
      default:
        return 'bg-blue-900/20 border-blue-400/30';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-900/20 border-green-400/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">Secure</p>
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
                <p className="text-2xl font-bold text-white">127</p>
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
                <p className="text-2xl font-bold text-white">99.9%</p>
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
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg ${getAlertColor(alert.type)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.type)}
                    <div>
                      <h4 className="text-white font-medium">{alert.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{alert.description}</p>
                      <p className="text-gray-400 text-xs mt-2">{alert.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      alert.status === 'active' 
                        ? 'bg-red-900/50 text-red-200' 
                        : 'bg-green-900/50 text-green-200'
                    }`}>
                      {alert.status}
                    </span>
                    {alert.status === 'active' && (
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                        Resolve
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
