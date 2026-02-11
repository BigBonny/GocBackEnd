export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          clerk_user_id: string
          email: string
          role: 'auditeur' | 'apprenti' | 'frere-soeur' | null
          role_expires_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          clerk_user_id: string
          email: string
          role?: 'auditeur' | 'apprenti' | 'frere-soeur' | null
          role_expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          clerk_user_id?: string
          email?: string
          role?: 'auditeur' | 'apprenti' | 'frere-soeur' | null
          role_expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          id: string
          user_id: string
          stripe_payment_id: string
          role: 'auditeur' | 'apprenti' | 'frere-soeur'
          amount: number
          currency: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stripe_payment_id: string
          role: 'auditeur' | 'apprenti' | 'frere-soeur'
          amount: number
          currency?: string
          status: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          stripe_payment_id?: string
          role?: 'auditeur' | 'apprenti' | 'frere-soeur'
          amount?: number
          currency?: string
          status?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
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