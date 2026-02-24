import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";
import { useRegionalPricing } from "@/hooks/useRegionalPricing";
import { useTranslation } from 'react-i18next';
import { ROLE_PRICES } from "@/types/index";
import type { UserRole, CheckoutRequest, CheckoutResponse, PurchaseType, FormationType } from "@/types/index";
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
import { Check, Crown, Sparkles, Star, ArrowRight, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

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
  const { t } = useTranslation();
  const { user, isSignedIn } = useUser();
  const { userRole, isExpired } = useUserRole();
  const { pricing, loading: pricingLoading } = useRegionalPricing();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLearnMore = (role: UserRole) => {
    navigate(roleRoutes[role]);
  };

  const handlePurchase = async (
    role: UserRole, 
    purchaseType: PurchaseType,
    formationType?: FormationType
  ) => {
    if (!isSignedIn) {
      navigate("/sign-up");
      return;
    }
    if (!user) return;

    setLoading(`${role}-${purchaseType}`);
    setError(null);

    try {
      const requestBody: CheckoutRequest = {
        role,
        userId: user.id,
        email: user.primaryEmailAddress?.emailAddress || "",
        purchaseType,
        formationType,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
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
      setError(err instanceof Error ? err.message : t('membership.error'));
      console.error("Payment error:", err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-amber-900">
            {t('membership.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('membership.subtitle')}
          </p>

          {userRole && (
            <Badge variant={isExpired ? "destructive" : "default"} className="mt-6 bg-amber-600">
              {t('membership.current')}: {ROLE_PRICES[userRole].name}{" "}
              {isExpired && `(${t('membership.expired')})`}
            </Badge>
          )}
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8 max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="membership" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="membership">{t('membership.adhesion')}</TabsTrigger>
            <TabsTrigger value="formation">{t('membership.formation')}</TabsTrigger>
          </TabsList>

          <TabsContent value="membership" className="mt-8">
            {pricingLoading ? (
              <div className="grid md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border rounded-lg p-6 animate-pulse bg-gray-100 h-96" />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {(Object.entries(ROLE_PRICES) as [UserRole, typeof ROLE_PRICES[UserRole]][]).map(
                  ([roleKey, config]) => {
                    const Icon = roleIcons[roleKey];
                    const isCurrentRole = userRole === roleKey && !isExpired;
                    const isPremium = roleKey === "frere-soeur";

                    return (
                      <Card
                        key={roleKey}
                        className={`relative transition-all hover:shadow-xl ${
                          isPremium ? "border-amber-500 shadow-lg scale-105" : "border-amber-200"
                        }`}
                      >
                        {isPremium && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Badge className="bg-amber-600 text-white">{t('membership.mostPopular')}</Badge>
                          </div>
                        )}

                        <CardHeader className="text-center">
                          <div className="flex justify-center mb-4">
                            <Icon className="h-12 w-12 text-amber-600" />
                          </div>

                          {isCurrentRole && (
                            <Badge variant="secondary" className="mb-2">{t('membership.active')}</Badge>
                          )}

                          <CardTitle className="text-2xl text-amber-900">{config.name}</CardTitle>
                          <CardDescription className="text-base">
                            {config.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {pricing && (
                            <div className="bg-amber-50 rounded-lg p-4 space-y-3">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-700">{t('membership.adhesion')} ({t('membership.oneTime')})</span>
                                <span className="font-semibold text-gray-900">
                                  {pricing.adhesionPaid ? t('membership.renewal') : t('membership.firstYear')}
                                </span>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-700">{t('membership.cotisation')} ({t('membership.perYear')})</span>
                                <span className="font-semibold text-amber-900">
                                  €{pricing.prices.cotisation}
                                </span>
                              </div>
                              <div className="border-t border-amber-200 pt-2 flex justify-between items-center">
                                <span className="font-semibold text-gray-900">
                                  {pricing?.adhesionPaid ? t('membership.renew') : t('membership.becomeMember')}
                                </span>
                                <span className="text-2xl font-bold text-amber-900">
                                  €{pricing.adhesionPaid ? pricing.prices.renewal : pricing.prices.initial}
                                </span>
                              </div>
                            </div>
                          )}

                          <ul className="space-y-3">
                            {config.features.map((feature: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>

                        <CardFooter className="flex flex-col gap-3">
                          {!isCurrentRole && (
                            <Button
                              className={`w-full ${
                                isPremium
                                  ? "bg-amber-600 hover:bg-amber-700"
                                  : "bg-amber-500 hover:bg-amber-600"
                              }`}
                              onClick={() =>
                                handlePurchase(
                                  roleKey,
                                  pricing?.adhesionPaid ? "renewal" : "initial"
                                )
                              }
                              disabled={loading !== null}
                            >
                              {loading === `${roleKey}-${pricing?.adhesionPaid ? "renewal" : "initial"}` ? (
                                <>
                                  <span className="animate-spin mr-2">⏳</span>
                                  {t('membership.processing')}
                                </>
                              ) : isSignedIn ? (
                                <>
                                  {pricing?.adhesionPaid ? t('membership.renew') : t('membership.becomeMember')}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                              ) : (
                                t('membership.signupAndBuy')
                              )}
                            </Button>
                          )}

                          {isCurrentRole && (
                            <Badge className="w-full py-2 justify-center bg-green-600">
                              {t('membership.activeSubscription')}
                            </Badge>
                          )}

                          <Button
                            variant="outline"
                            className="w-full border-amber-600 text-amber-600 hover:bg-amber-50"
                            onClick={() => handleLearnMore(roleKey)}
                          >
                            {t('membership.learnMore')}
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  }
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="formation" className="mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <Alert className="border-amber-200 bg-amber-50">
                <Info className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-900">
                  {t('membership.formationAccessible')}
                </AlertDescription>
              </Alert>

              {/* Apprenti Formation */}
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-amber-600" />
                    {t('roles.apprenti.formationTitle')}
                  </CardTitle>
                  <CardDescription>
                    {t('roles.apprenti.formationDesc')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{t('membership.pricePerTrimester')}</span>
                      <span className="text-2xl font-bold text-amber-900">
                        €{pricing?.formation.apprenti_trimestre || 100}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{t('roles.apprenti.totalDuration')}</p>
                    <p className="text-sm text-gray-600">{t('roles.apprenti.totalCost')}: €{(pricing?.formation.apprenti_trimestre || 100) * 8}</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('roles.apprenti.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('roles.apprenti.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('roles.apprenti.feature3')}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={() => handlePurchase("apprenti", "formation", "apprenti_trimestre")}
                    disabled={!userRole || loading !== null}
                  >
                    {loading === "apprenti-formation" ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {t('membership.processing')}
                      </>
                    ) : !userRole ? t('membership.adhesionRequired') : 
                      t('membership.buyTrimester')}
                  </Button>
                </CardFooter>
              </Card>

              {/* Auditeur Formation */}
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Star className="h-8 w-8 text-amber-600" />
                    {t('roles.auditeur.formationTitle')}
                  </CardTitle>
                  <CardDescription>{t('roles.auditeur.formationDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{t('membership.pricePerCourse')}</span>
                      <span className="text-2xl font-bold text-amber-900">
                        €{pricing?.formation.auditeur_cours || 20}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{t('roles.auditeur.totalCourses')}</p>
                    <p className="text-sm text-gray-600">
                      {t('roles.auditeur.totalCost')}: €{(pricing?.formation.auditeur_cours || 20) * 40}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('roles.auditeur.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('roles.auditeur.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{t('roles.auditeur.feature3')}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={() => handlePurchase("auditeur", "formation", "auditeur_cours")}
                    disabled={!userRole || loading !== null}
                  >
                    {loading === "auditeur-formation" ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {t('membership.processing')}
                      </>
                    ) : !userRole ? (
                      t('membership.adhesionRequired')
                    ) : (
                      t('membership.buyCourse')
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">{t('membership.whyJoin')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                {t('membership.whyJoinDesc')}
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t('membership.benefit1')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t('membership.benefit2')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t('membership.benefit3')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t('membership.benefit4')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}