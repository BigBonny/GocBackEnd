import { useState, useEffect, useCallback } from 'react';
import { useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabase';
import type { InsertTables } from '../lib/supabase';
import type { UserRole } from '@/types/index';
import { ROLE_HIERARCHY } from '@/types/index';

interface UseUserRoleReturn {
  userRole: UserRole | null;
  loading: boolean;
  hasAccess: (requiredRole: UserRole) => boolean;
  refetch: () => Promise<void>;
  isExpired: boolean;
}

export function useUserRole(): UseUserRoleReturn {
  const { user, isLoaded } = useUser();
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [isExpired, setIsExpired] = useState(false);

  const fetchUserRole = useCallback(async () => {
    if (!isLoaded || !user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .select('role, role_expires_at')
        .eq('clerk_user_id', user.id)
        .single();

      if (error && error.code === 'PGRST116') {
        // User doesn't exist, create them
        const newUser: InsertTables<'users'> = {
          clerk_user_id: user.id,
          email: user.primaryEmailAddress?.emailAddress || ''
        };

        const { error: insertError } = await supabase
          .from('users')
          .insert(newUser);

        if (insertError) {
          console.error('Error creating user:', insertError);
        }
        
        setUserRole(null);
        setIsExpired(false);
      } else if (data) {
        // Check if role is expired
        if (data.role_expires_at && new Date(data.role_expires_at) < new Date()) {
          setUserRole(null);
          setIsExpired(true);
        } else {
          setUserRole(data.role);
          setIsExpired(false);
        }
      }
    } catch (error) {
      console.error('Error fetching user role:', error);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    fetchUserRole();
  }, [fetchUserRole]);

  const hasAccess = useCallback(
    (requiredRole: UserRole): boolean => {
      if (!userRole) return false;
      return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
    },
    [userRole]
  );

  return { userRole, loading, hasAccess, refetch: fetchUserRole, isExpired };
}