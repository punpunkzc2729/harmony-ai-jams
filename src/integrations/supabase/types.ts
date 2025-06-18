export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_conversations: {
        Row: {
          ai_response: string
          channel_id: string
          created_at: string | null
          id: string
          response_time_ms: number | null
          server_id: string | null
          user_id: string | null
          user_message: string
        }
        Insert: {
          ai_response: string
          channel_id: string
          created_at?: string | null
          id?: string
          response_time_ms?: number | null
          server_id?: string | null
          user_id?: string | null
          user_message: string
        }
        Update: {
          ai_response?: string
          channel_id?: string
          created_at?: string | null
          id?: string
          response_time_ms?: number | null
          server_id?: string | null
          user_id?: string | null
          user_message?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_conversations_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "discord_servers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_conversations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
        ]
      }
      bot_discord: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      bot_statistics: {
        Row: {
          ai_queries: number | null
          commands_executed: number | null
          created_at: string | null
          date: string
          id: string
          new_users: number | null
          safety_alerts: number | null
          server_id: string | null
          songs_played: number | null
          voice_greetings: number | null
        }
        Insert: {
          ai_queries?: number | null
          commands_executed?: number | null
          created_at?: string | null
          date: string
          id?: string
          new_users?: number | null
          safety_alerts?: number | null
          server_id?: string | null
          songs_played?: number | null
          voice_greetings?: number | null
        }
        Update: {
          ai_queries?: number | null
          commands_executed?: number | null
          created_at?: string | null
          date?: string
          id?: string
          new_users?: number | null
          safety_alerts?: number | null
          server_id?: string | null
          songs_played?: number | null
          voice_greetings?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bot_statistics_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "discord_servers"
            referencedColumns: ["id"]
          },
        ]
      }
      discord_servers: {
        Row: {
          ai_assistant_enabled: boolean | null
          announcements_channel_id: string | null
          created_at: string | null
          id: string
          mod_alert_channel_id: string | null
          name: string
          prefix: string
          safety_monitoring_enabled: boolean | null
          updated_at: string | null
          voice_greetings_enabled: boolean | null
          welcome_channel_id: string | null
        }
        Insert: {
          ai_assistant_enabled?: boolean | null
          announcements_channel_id?: string | null
          created_at?: string | null
          id: string
          mod_alert_channel_id?: string | null
          name: string
          prefix?: string
          safety_monitoring_enabled?: boolean | null
          updated_at?: string | null
          voice_greetings_enabled?: boolean | null
          welcome_channel_id?: string | null
        }
        Update: {
          ai_assistant_enabled?: boolean | null
          announcements_channel_id?: string | null
          created_at?: string | null
          id?: string
          mod_alert_channel_id?: string | null
          name?: string
          prefix?: string
          safety_monitoring_enabled?: boolean | null
          updated_at?: string | null
          voice_greetings_enabled?: boolean | null
          welcome_channel_id?: string | null
        }
        Relationships: []
      }
      discord_users: {
        Row: {
          created_at: string | null
          display_name: string | null
          id: string
          preferred_language: string | null
          spotify_connected: boolean | null
          spotify_user_id: string | null
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          id: string
          preferred_language?: string | null
          spotify_connected?: boolean | null
          spotify_user_id?: string | null
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          id?: string
          preferred_language?: string | null
          spotify_connected?: boolean | null
          spotify_user_id?: string | null
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      music_queues: {
        Row: {
          created_at: string | null
          duration_ms: number | null
          id: string
          is_playing: boolean | null
          position: number
          requested_by: string | null
          server_id: string | null
          spotify_track_id: string | null
          track_artist: string | null
          track_title: string
          track_url: string | null
          youtube_url: string | null
        }
        Insert: {
          created_at?: string | null
          duration_ms?: number | null
          id?: string
          is_playing?: boolean | null
          position: number
          requested_by?: string | null
          server_id?: string | null
          spotify_track_id?: string | null
          track_artist?: string | null
          track_title: string
          track_url?: string | null
          youtube_url?: string | null
        }
        Update: {
          created_at?: string | null
          duration_ms?: number | null
          id?: string
          is_playing?: boolean | null
          position?: number
          requested_by?: string | null
          server_id?: string | null
          spotify_track_id?: string | null
          track_artist?: string | null
          track_title?: string
          track_url?: string | null
          youtube_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "music_queues_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "music_queues_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "discord_servers"
            referencedColumns: ["id"]
          },
        ]
      }
      playlist_tracks: {
        Row: {
          added_by: string | null
          created_at: string | null
          id: string
          playlist_id: string | null
          position: number
          spotify_track_id: string | null
          track_artist: string | null
          track_title: string
          youtube_url: string | null
        }
        Insert: {
          added_by?: string | null
          created_at?: string | null
          id?: string
          playlist_id?: string | null
          position: number
          spotify_track_id?: string | null
          track_artist?: string | null
          track_title: string
          youtube_url?: string | null
        }
        Update: {
          added_by?: string | null
          created_at?: string | null
          id?: string
          playlist_id?: string | null
          position?: number
          spotify_track_id?: string | null
          track_artist?: string | null
          track_title?: string
          youtube_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "playlist_tracks_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playlist_tracks_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
        ]
      }
      playlists: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          server_id: string | null
          track_count: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          server_id?: string | null
          track_count?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          server_id?: string | null
          track_count?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "playlists_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playlists_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "discord_servers"
            referencedColumns: ["id"]
          },
        ]
      }
      safety_logs: {
        Row: {
          alert_type: string
          created_at: string | null
          description: string
          id: string
          is_resolved: boolean | null
          metadata: Json | null
          resolved_at: string | null
          resolved_by: string | null
          server_id: string | null
          severity: string | null
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          description: string
          id?: string
          is_resolved?: boolean | null
          metadata?: Json | null
          resolved_at?: string | null
          resolved_by?: string | null
          server_id?: string | null
          severity?: string | null
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          description?: string
          id?: string
          is_resolved?: boolean | null
          metadata?: Json | null
          resolved_at?: string | null
          resolved_by?: string | null
          server_id?: string | null
          severity?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "safety_logs_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_logs_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "discord_servers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "safety_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduled_messages: {
        Row: {
          channel_id: string
          created_at: string | null
          created_by: string | null
          cron_schedule: string
          id: string
          is_active: boolean | null
          last_sent_at: string | null
          message_content: string
          next_send_at: string | null
          server_id: string | null
          updated_at: string | null
        }
        Insert: {
          channel_id: string
          created_at?: string | null
          created_by?: string | null
          cron_schedule: string
          id?: string
          is_active?: boolean | null
          last_sent_at?: string | null
          message_content: string
          next_send_at?: string | null
          server_id?: string | null
          updated_at?: string | null
        }
        Update: {
          channel_id?: string
          created_at?: string | null
          created_by?: string | null
          cron_schedule?: string
          id?: string
          is_active?: boolean | null
          last_sent_at?: string | null
          message_content?: string
          next_send_at?: string | null
          server_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_messages_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "discord_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scheduled_messages_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "discord_servers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
