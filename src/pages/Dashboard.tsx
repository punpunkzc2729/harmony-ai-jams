
import React, { useState } from 'react';
import { Music, Users, Settings, Calendar, Shield, Bot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MusicPlayer } from '@/components/MusicPlayer';
import { ServerStats } from '@/components/ServerStats';
import { RemindersPanel } from '@/components/RemindersPanel';
import { SecurityAlerts } from '@/components/SecurityAlerts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('music');
  const [serverId] = useState('default'); // This could be set from user selection or URL params

  const navItems = [
    { id: 'music', label: 'Music Player', icon: Music },
    { id: 'stats', label: 'Server Stats', icon: Users },
    { id: 'reminders', label: 'Reminders', icon: Calendar },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'music':
        return <MusicPlayer serverId={serverId} />;
      case 'stats':
        return <ServerStats serverId={serverId} />;
      case 'reminders':
        return <RemindersPanel serverId={serverId} />;
      case 'security':
        return <SecurityAlerts serverId={serverId} />;
      case 'settings':
        return <div className="p-6 text-white">Settings panel coming soon...</div>;
      default:
        return <MusicPlayer serverId={serverId} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Bot className="h-8 w-8 text-purple-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">Discord Music Bot</h1>
              <p className="text-purple-200">AI-Enhanced Music & Community Assistant</p>
            </div>
          </div>
          <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-800">
            Connect Discord
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === item.id 
                    ? "bg-purple-600 hover:bg-purple-700" 
                    : "text-white hover:bg-purple-800"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Main Content */}
        <Card className="bg-white/10 backdrop-blur-lg border-purple-400/30">
          <CardContent className="p-0">
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
