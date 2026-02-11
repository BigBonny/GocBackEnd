import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useUserRole } from '../hooks/useUserRole';
import { ROLE_PRICES } from '../types';
import type { UserRole, CheckoutRequest, CheckoutResponse } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Check, Crown, Sparkles, Star } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

const roleIcons = {
  'auditeur': Star,
  'apprenti': Sparkles,
  'frere-soeur': Crown,
};

export function UpgradePage() {
  const { user } = useUser();
  const { userRole, isExpired } = useUserRole();
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async (role: UserRole) => {
    if (!user) return;
    
    setLoading(role);
    setError(null);
    
    try {
      const requestBody: CheckoutRequest = {
        role,
        userId: user.id,
        email: user.primaryEmailAddress?.emailAddress || ''
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const data: CheckoutResponse = await response.json();
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment error occurred');
      console.error('Payment error:', err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Access Level</h1>
        <p className="text-lg text-muted-foreground">
          Select the plan that best fits your needs
        </p>
        {userRole && (
          <Badge variant={isExpired ? "destructive" : "default"} className="mt-4">
            Current: {ROLE_PRICES[userRole].name} {isExpired && '(Expired)'}
          </Badge>
        )}
      </div>
      
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {(Object.entries(ROLE_PRICES) as [UserRole, typeof ROLE_PRICES[UserRole]][]).map(([roleKey, config]) => {
          const Icon = roleIcons[roleKey];
          const isCurrentRole = userRole === roleKey && !isExpired;
          const isPremium = roleKey === 'frere-soeur';
          
          return (
            <Card 
              key={roleKey} 
              className={`relative ${isPremium ? 'border-primary shadow-lg' : ''}`}
            >
              {isPremium && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon className="h-8 w-8 text-primary" />
                  {isCurrentRole && <Badge variant="secondary">Active</Badge>}
                </div>
                <CardTitle className="text-2xl">{config.name}</CardTitle>
                <CardDescription>{config.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€{config.price}</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                
                <ul className="space-y-3">
                  {config.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handlePurchase(roleKey)}
                  disabled={loading !== null || isCurrentRole}
                  variant={isPremium ? 'default' : 'outline'}
                >
                  {loading === roleKey ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Processing...
                    </>
                  ) : isCurrentRole ? (
                    'Current Plan'
                  ) : (
                    `Get ${config.name}`
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}