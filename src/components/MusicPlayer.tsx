
import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Search, Plus, List, Shuffle, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSong, setCurrentSong] = useState({
    title: "Welcome to your Music Bot",
    artist: "Get started by searching for a song",
    duration: "0:00",
    progress: 0
  });

  const [queue] = useState([
    { id: 1, title: "Song Example 1", artist: "Artist 1", duration: "3:45" },
    { id: 2, title: "Song Example 2", artist: "Artist 2", duration: "4:20" },
    { id: 3, title: "Song Example 3", artist: "Artist 3", duration: "3:12" }
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Search Section */}
      <Card className="bg-purple-800/30 border-purple-400/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search Music</span>
          </CardTitle>
          <CardDescription className="text-purple-200">
            Search for songs on Spotify and add them to your queue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Search for songs, artists, or albums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Now Playing */}
        <Card className="bg-purple-800/30 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-white">Now Playing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto flex items-center justify-center">
                <Play className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{currentSong.title}</h3>
              <p className="text-purple-200">{currentSong.artist}</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress value={currentSong.progress} className="w-full" />
              <div className="flex justify-between text-sm text-purple-200">
                <span>0:00</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-white" />
              <Progress value={75} className="flex-1" />
            </div>
          </CardContent>
        </Card>

        {/* Queue */}
        <Card className="bg-purple-800/30 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <List className="h-5 w-5" />
                <span>Queue</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700">
                <Plus className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {queue.map((song, index) => (
                <div key={song.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-300 text-sm w-6">{index + 1}</span>
                    <div>
                      <p className="text-white font-medium">{song.title}</p>
                      <p className="text-purple-200 text-sm">{song.artist}</p>
                    </div>
                  </div>
                  <span className="text-purple-300 text-sm">{song.duration}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
