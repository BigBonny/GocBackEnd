import { useUser } from '@clerk/clerk-react';
import { useUserRole } from '@/hooks/useUserRole';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ROLE_PRICES, ROLE_HIERARCHY } from '@/types';
import type { UserRole } from '@/types/index';
import { Crown, Sparkles, Star, Lock } from 'lucide-react';

const roleIcons = {
  'auditeur': Star,
  'apprenti': Sparkles,
  'frere-soeur': Crown,
};

export function EspaceMembre() {
  const { user } = useUser();
  const { userRole, loading, hasAccess } = useUserRole();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!userRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">
                Aucun Abonnement Actif
              </CardTitle>
              <CardDescription>
                Vous devez souscrire à un abonnement pour accéder à l'espace membre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/devenir-membre')}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Choisir un Abonnement
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const Icon = roleIcons[userRole];
  const currentRoleLevel = ROLE_HIERARCHY[userRole];

  const contentSections: Array<{
    title: string;
    description: string;
    requiredRole: UserRole;
    route: string;
  }> = [
    {
      title: 'Formation Ésotérique',
      description: 'Accédez aux enseignements de base',
      requiredRole: 'auditeur',
      route: '/formation/esoterisme'
    },
    {
      title: 'Formation Philosophique',
      description: 'Approfondissez votre connaissance',
      requiredRole: 'apprenti',
      route: '/formation/philosophie'
    },
    {
      title: 'Développement des Pouvoirs',
      description: 'Contenu premium exclusif',
      requiredRole: 'frere-soeur',
      route: '/formation/pouvoirs'
    },
    {
      title: 'Bibliothèque',
      description: 'Accès aux ressources documentaires',
      requiredRole: 'auditeur',
      route: '/bibliotheque'
    },
    {
      title: 'Vidéos',
      description: 'Contenus vidéo exclusifs',
      requiredRole: 'apprenti',
      route: '/videos'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-amber-900">
            Bienvenue, {user?.firstName || 'Membre'}
          </h1>
          
          <Card className="border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Icon className="h-12 w-12 text-amber-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-amber-900">
                      {ROLE_PRICES[userRole].name}
                    </h2>
                    <p className="text-gray-600">
                      {ROLE_PRICES[userRole].description}
                    </p>
                  </div>
                </div>
                <Badge className="bg-amber-600">Actif</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentSections.map((section) => {
            const canAccess = hasAccess(section.requiredRole);
            const requiredLevel = ROLE_HIERARCHY[section.requiredRole];
            const isLocked = requiredLevel > currentRoleLevel;

            return (
              <Card 
                key={section.route}
                className={`transition-all ${
                  canAccess 
                    ? 'border-amber-200 hover:shadow-lg cursor-pointer' 
                    : 'border-gray-200 opacity-60'
                }`}
                onClick={() => canAccess && navigate(section.route)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-amber-900">
                      {section.title}
                    </CardTitle>
                    {isLocked && <Lock className="h-5 w-5 text-gray-400" />}
                  </div>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {!canAccess && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Nécessite : {ROLE_PRICES[section.requiredRole].name}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-600 text-amber-600 hover:bg-amber-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/devenir-membre');
                        }}
                      >
                        Améliorer l'Abonnement
                      </Button>
                    </div>
                  )}
                  {canAccess && (
                    <Button
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Accéder
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upgrade CTA */}
        {userRole !== 'frere-soeur' && (
          <Card className="mt-12 border-amber-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Débloquez Plus de Contenu
                  </h3>
                  <p className="text-gray-600">
                    Améliorez votre abonnement pour accéder à tout le contenu exclusif
                  </p>
                </div>
                <Button
                  onClick={() => navigate('/devenir-membre')}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Améliorer
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}