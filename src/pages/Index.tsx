
import React from 'react';
import { Bot, Music, Shield, Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Music,
      title: "Spotify Integration",
      description: "Stream high-quality music directly from Spotify with seamless playlist management and queue controls."
    },
    {
      icon: MessageCircle,
      title: "AI Chat Assistant",
      description: "Intelligent command helper that answers questions and guides users through bot features using natural language."
    },
    {
      icon: Sparkles,
      title: "Voice Greetings",
      description: "Automated AI-powered voice greetings when users join voice channels, creating a welcoming atmosphere."
    },
    {
      icon: Calendar,
      title: "Smart Reminders",
      description: "Schedule daily, weekly, or custom announcements to keep your community engaged and organized."
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Real-time monitoring for suspicious activities with intelligent alerts to keep your server safe."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <Bot className="h-24 w-24 text-purple-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Music className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Discord Music Bot
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
              AI-Enhanced Music Streaming & Community Assistant
            </p>
            <p className="text-lg text-purple-300 max-w-2xl mx-auto">
              Transform your Discord server with seamless Spotify integration, intelligent AI assistance, 
              automated voice greetings, smart reminders, and advanced security monitoring.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-white border-purple-400 hover:bg-purple-800 px-8 py-3 text-lg">
              Add to Discord
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-purple-400/30 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Servers", value: "10K+" },
            { label: "Songs Played", value: "1M+" },
            { label: "Happy Users", value: "50K+" },
            { label: "Uptime", value: "99.9%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-lg border-purple-400/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Server?
              </h2>
              <p className="text-purple-200 mb-6">
                Join thousands of Discord communities already using our AI-enhanced music bot 
                to create amazing experiences for their members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg" className="text-white border-purple-400 hover:bg-purple-800">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
