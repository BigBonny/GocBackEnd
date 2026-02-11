import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useUserRole } from "../hooks/useUserRole";
import type { UserRole } from "@/types/index";

interface RequireClerkAuthProps {
  children: ReactNode;
  requiredRole?: UserRole;
  redirectTo?: string;
}

export function RequireClerkAuth({ 
  children, 
  requiredRole,
  redirectTo = "/devenir-membre"
}: RequireClerkAuthProps) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();
  const { userRole, loading, hasAccess } = useUserRole();

  // Loading state for Clerk auth
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Chargement…</div>
      </div>
    );
  }

  // Not signed in - redirect to sign in
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace state={{ from: location.pathname }} />;
  }

  // Loading user role from database
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  // If a specific role is required, check if user has access
  if (requiredRole && !hasAccess(requiredRole)) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }

  // If no specific role required but route is protected, check if user has ANY role
  if (!requiredRole && !userRole) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }

  // All checks passed - render children
  return <>{children}</>;
}