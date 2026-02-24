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
          adhesion_paid: boolean
          last_cotisation_date: string | null
          formation_credits: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          clerk_user_id: string
          email: string
          role?: 'auditeur' | 'apprenti' | 'frere-soeur' | null
          role_expires_at?: string | null
          adhesion_paid?: boolean
          last_cotisation_date?: string | null
          formation_credits?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          clerk_user_id?: string
          email?: string
          role?: 'auditeur' | 'apprenti' | 'frere-soeur' | null
          role_expires_at?: string | null
          adhesion_paid?: boolean
          last_cotisation_date?: string | null
          formation_credits?: number
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
          status: 'pending' | 'completed' | 'failed'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stripe_payment_id: string
          role: 'auditeur' | 'apprenti' | 'frere-soeur'
          amount: number
          currency: string
          status: 'pending' | 'completed' | 'failed'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          stripe_payment_id?: string
          role?: 'auditeur' | 'apprenti' | 'frere-soeur'
          amount?: number
          currency?: string
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
        }
        Relationships: []
      }
      formations: {
        Row: {
          id: string
          user_id: string
          formation_type: 'apprenti_trimestre' | 'auditeur_cours'
          amount: number
          credits_added: number
          stripe_payment_id: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          formation_type: 'apprenti_trimestre' | 'auditeur_cours'
          amount: number
          credits_added: number
          stripe_payment_id: string
          status: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          formation_type?: 'apprenti_trimestre' | 'auditeur_cours'
          amount?: number
          credits_added?: number
          stripe_payment_id?: string
          status?: string
          created_at?: string
        }
        Relationships: []
      }
      donations: {
        Row: {
          id: string
          user_id: string | null
          donor_name: string | null
          donor_email: string
          donation_type: 'sympathie' | 'soutien' | 'charite'
          amount: number
          currency: string
          is_recurring: boolean
          frequency: 'monthly' | 'quarterly' | 'annual' | null
          stripe_payment_id: string | null
          stripe_subscription_id: string | null
          status: string
          message: string | null
          anonymous: boolean
          allow_mention: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          donor_name?: string | null
          donor_email: string
          donation_type: 'sympathie' | 'soutien' | 'charite'
          amount: number
          currency?: string
          is_recurring?: boolean
          frequency?: 'monthly' | 'quarterly' | 'annual' | null
          stripe_payment_id?: string | null
          stripe_subscription_id?: string | null
          status?: string
          message?: string | null
          anonymous?: boolean
          allow_mention?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          donor_name?: string | null
          donor_email?: string
          donation_type?: 'sympathie' | 'soutien' | 'charite'
          amount?: number
          currency?: string
          is_recurring?: boolean
          frequency?: 'monthly' | 'quarterly' | 'annual' | null
          stripe_payment_id?: string | null
          stripe_subscription_id?: string | null
          status?: string
          message?: string | null
          anonymous?: boolean
          allow_mention?: boolean
          created_at?: string
        }
        Relationships: []
      }
    }
  }
}