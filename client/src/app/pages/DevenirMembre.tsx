import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";
import { ROLE_PRICES } from "@/types/index";
import type { UserRole, CheckoutRequest, CheckoutResponse } from "@/types/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Check, Crown, Sparkles, Star, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/app/components/ui/alert";

const roleIcons: Record<UserRole, any> = {
  auditeur: Star,
  apprenti: Sparkles,
  "frere-soeur": Crown,
};

const roleRoutes: Record<UserRole, string> = {
  auditeur: "/devenir-membre/auditeur",
  apprenti: "/devenir-membre/apprenti",
  "frere-soeur": "/devenir-membre/frere-soeur",
};

export function DevenirMembre() {
  const { user, isSignedIn } = useUser();
  const { userRole, isExpired } = useUserRole();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLearnMore = (role: UserRole) => {
    navigate(roleRoutes[role]);
  };

  const handlePurchase = async (role: UserRole) => {
    if (!isSignedIn) {
      navigate("/sign-up");
      return;
    }
    if (!user) return;

    setLoading(role);
    setError(null);

    try {
      const requestBody: CheckoutRequest = {
        role,
        userId: user.id,
        email: user.primaryEmailAddress?.emailAddress || "",
      };

      // Recommended in dev: use Vite proxy and call relative URL.
      // If you do not use a proxy, replace with:
      // `${import.meta.env.VITE_API_URL}/api/create-checkout`
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        // Avoid crashing when backend returns HTML/empty body on errors.
        const text = await response.text();
        try {
          const parsed = JSON.parse(text);
          throw new Error(parsed.error || `Failed (${response.status})`);
        } catch {
          throw new Error(text || `Failed (${response.status})`);
        }
      }

      const data: CheckoutResponse = await response.json();
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      console.error("Payment error:", err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-amber-900">
            Rejoignez Notre Ordre
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choisissez le niveau d&apos;engagement qui correspond à votre
            parcours spirituel et philosophique
          </p>

          {userRole && (
            <Badge
              variant={isExpired ? "destructive" : "default"}
              className="mt-6 bg-amber-600"
            >
              Actuel : {ROLE_PRICES[userRole].name}{" "}
              {isExpired && "(Expiré)"}
            </Badge>
          )}
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8 max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {(Object.entries(ROLE_PRICES) as [
            UserRole,
            (typeof ROLE_PRICES)[UserRole]
          ][]).map(([roleKey, config]) => {
            const Icon = roleIcons[roleKey];
            const isCurrentRole = userRole === roleKey && !isExpired;
            const isPremium = roleKey === "frere-soeur";

            return (
              <Card
                key={roleKey}
                className={`relative transition-all hover:shadow-xl ${
                  isPremium
                    ? "border-amber-500 shadow-lg scale-105"
                    : "border-amber-200"
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white">
                      Le Plus Populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-amber-600" />
                  </div>

                  {isCurrentRole && (
                    <Badge variant="secondary" className="mb-2">
                      Actif
                    </Badge>
                  )}

                  <CardTitle className="text-2xl text-amber-900">
                    {config.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {config.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-amber-900">
                      €{config.price}
                    </span>
                    <span className="text-gray-600">/an</span>
                  </div>

                  <ul className="space-y-3">
                    {config.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <Button
                    className={`w-full ${
                      isPremium
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "bg-amber-500 hover:bg-amber-600"
                    }`}
                    onClick={() => handlePurchase(roleKey)}
                    disabled={loading !== null || isCurrentRole}
                  >
                    {loading === roleKey ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Traitement...
                      </>
                    ) : isCurrentRole ? (
                      "Abonnement Actuel"
                    ) : (
                      <>
                        {isSignedIn ? "Acheter Maintenant" : "S'inscrire et Acheter"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => handleLearnMore(roleKey)}
                  >
                    En Savoir Plus
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">
                Pourquoi Devenir Membre ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                En rejoignant notre ordre, vous accédez à une communauté dédiée
                à l&apos;éveil spirituel, à la connaissance ésotérique et à
                l&apos;entraide fraternelle.
              </p>
              <p>
                Chaque niveau d&apos;adhésion offre des avantages progressifs,
                vous permettant d&apos;approfondir votre engagement selon votre
                propre rythme et vos aspirations.
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Accès à des enseignements exclusifs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Participation à des événements et séminaires</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Réseau de fraternité et d&apos;entraide</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bibliothèque de ressources spirituelles</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
