import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useUserRole } from '@/hooks/useUserRole';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { ROLE_PRICES } from '@/types';

export function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { refetch, userRole } = useUserRole();
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 10;

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) return;

    // Poll for role update every 2 seconds
    const interval = setInterval(async () => {
      if (attempts >= maxAttempts) {
        clearInterval(interval);
        return;
      }

      await refetch();
      setAttempts(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [searchParams, refetch, attempts]);

  // Stop polling once we have a role
  useEffect(() => {
    if (userRole) {
      // Role updated successfully!
    }
  }, [userRole]);

  return (
    <div className="container max-w-2xl mx-auto p-8 min-h-screen flex items-center justify-center">
      <Card className="w-full border-amber-200">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {userRole ? (
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            ) : (
              <Loader2 className="h-16 w-16 text-amber-600 animate-spin" />
            )}
          </div>
          <CardTitle className="text-3xl text-amber-900">
            {userRole ? 'Paiement Réussi !' : 'Traitement en cours...'}
          </CardTitle>
          <CardDescription className="text-lg">
            {userRole ? 'Merci pour votre achat' : 'Veuillez patienter'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          {userRole ? (
            <>
              <p className="text-lg">
                Votre accès <span className="font-semibold">{ROLE_PRICES[userRole].name}</span> a été activé !
              </p>
              <p className="text-muted-foreground">
                Vous pouvez maintenant accéder à tout le contenu disponible pour votre niveau.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button 
                  onClick={() => navigate('/espace-membre')}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Accéder à l'Espace Membre
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  Retour à l'Accueil
                </Button>
              </div>
            </>
          ) : attempts >= maxAttempts ? (
            <>
              <p className="text-muted-foreground">
                Le traitement prend plus de temps que prévu.
              </p>
              <p className="text-sm text-muted-foreground">
                Votre paiement a été reçu. Si votre accès n'est pas activé dans quelques minutes,
                veuillez nous contacter.
              </p>
              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                className="border-amber-600 text-amber-600"
              >
                Nous Contacter
              </Button>
            </>
          ) : (
            <p className="text-muted-foreground">
              Vérification de votre paiement... (Tentative {attempts}/{maxAttempts})
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}