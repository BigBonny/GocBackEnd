import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useUserRole } from '@/hooks/useUserRole';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function Success() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { refetch, userRole } = useUserRole();
  const [isRefetching, setIsRefetching] = useState(false);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId && !isRefetching) {
      setIsRefetching(true);
      // Give webhook time to process
      setTimeout(() => {
        refetch().then(() => {
          setIsRefetching(false);
        });
      }, 2000);
    }
  }, [searchParams, refetch, isRefetching]);

  return (
    <div className="container max-w-2xl mx-auto p-8 min-h-screen flex items-center justify-center">
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-3xl">Payment Successful!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for your purchase
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          {isRefetching ? (
            <p className="text-muted-foreground">
              Activating your access...
            </p>
          ) : userRole ? (
            <>
              <p className="text-lg">
                Your <span className="font-semibold">{userRole}</span> access has been activated!
              </p>
              <p className="text-muted-foreground">
                You can now access all the content available for your tier.
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">
              Your access is being processed. This may take a few moments.
            </p>
          )}
          
          <div className="flex gap-4 justify-center pt-4">
            <Button onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}