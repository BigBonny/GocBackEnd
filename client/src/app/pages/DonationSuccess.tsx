import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function DonationSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-600" />
        </div>
        
        <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">
          Merci pour votre Générosité !
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Votre don a été reçu avec succès. Vous recevrez un email de confirmation sous peu.
        </p>
        
        <div className="bg-amber-50 rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Grâce à votre soutien, le Grand Ordre du Cercle peut continuer sa mission 
            d'aide et de solidarité envers les personnes dans le besoin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Retour à l'Accueil
          </Button>
          <Button
            onClick={() => navigate('/espace-membre')}
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50"
          >
            Mon Espace
          </Button>
        </div>

        {sessionId && (
          <p className="text-xs text-gray-400 mt-8">
            Référence: {sessionId.substring(0, 20)}...
          </p>
        )}
      </div>
    </div>
  );
}