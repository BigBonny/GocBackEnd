import { ReactNode } from 'react';
import { useUserRole } from '../hooks/useUserRole';
import { Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import type { UserRole } from '../types';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: UserRole;
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { userRole, loading, hasAccess } = useUserRole();

  return (
    <>
      <SignedIn>
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : requiredRole && !hasAccess(requiredRole) ? (
          <Navigate to="/upgrade" replace />
        ) : (
          children
        )}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}