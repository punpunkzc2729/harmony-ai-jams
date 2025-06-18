
-- Create only the missing tables that don't exist yet
-- First, let's create the bot_discord table that was referenced but doesn't exist
CREATE TABLE IF NOT EXISTS public.bot_discord (
  id bigint PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on the new table
ALTER TABLE public.bot_discord ENABLE ROW LEVEL SECURITY;

-- Create policy for the new table
CREATE POLICY "Allow all operations" ON public.bot_discord FOR ALL USING (true);

-- Update any missing columns or constraints on existing tables
-- Add any missing indexes for better performance
CREATE INDEX IF NOT EXISTS idx_music_queues_server_id ON public.music_queues(server_id);
CREATE INDEX IF NOT EXISTS idx_music_queues_position ON public.music_queues(server_id, position);
CREATE INDEX IF NOT EXISTS idx_playlists_server_id ON public.playlists(server_id);
CREATE INDEX IF NOT EXISTS idx_scheduled_messages_server_id ON public.scheduled_messages(server_id);
CREATE INDEX IF NOT EXISTS idx_safety_logs_server_id ON public.safety_logs(server_id);
CREATE INDEX IF NOT EXISTS idx_ai_conversations_server_id ON public.ai_conversations(server_id);
CREATE INDEX IF NOT EXISTS idx_bot_statistics_server_date ON public.bot_statistics(server_id, date);
