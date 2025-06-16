import React, { useState } from 'react';
import { Plus, Calendar, Clock, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const RemindersPanel = () => {
  const [reminders] = useState([
    { id: 1, title: 'Daily Game Night', time: '20:00', type: 'daily', channel: '#general' },
    { id: 2, title: 'Weekly Server Meeting', time: '19:00', type: 'weekly', channel: '#announcements' },
    { id: 3, title: 'New Music Friday', time: '12:00', type: 'weekly', channel: '#music' }
  ]);

  const [newReminder, setNewReminder] = useState({
    title: '',
    time: '',
    type: 'daily',
    channel: '#general'
  });

  return (
    <div className="p-6 space-y-6">
      {/* Add New Reminder */}
      <Card className="bg-purple-800/30 border-purple-400/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add New Reminder</span>
          </CardTitle>
          <CardDescription className="text-purple-200">
            Schedule announcements and reminders for your Discord server
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Reminder title..."
              value={newReminder.title}
              onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
              className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
            />
            <Input
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              className="bg-white/10 border-purple-400/30 text-white"
            />
          </div>
          <div className="flex space-x-2">
            <select 
              className="flex-1 bg-white/10 border border-purple-400/30 rounded-md px-3 py-2 text-white"
              value={newReminder.type}
              onChange={(e) => setNewReminder({ ...newReminder, type: e.target.value })}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <Input
              placeholder="Channel (e.g., #general)"
              value={newReminder.channel}
              onChange={(e) => setNewReminder({ ...newReminder, channel: e.target.value })}
              className="flex-1 bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              Add Reminder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Reminders */}
      <Card className="bg-purple-800/30 border-purple-400/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Active Reminders</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reminders.map((reminder) => (
              <div key={reminder.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{reminder.title}</h4>
                    <p className="text-purple-200 text-sm">
                      {reminder.time} • {reminder.type} • {reminder.channel}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-900/20">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
