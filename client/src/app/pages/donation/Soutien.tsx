import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useDonation } from '@/hooks/useDonation';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export function DonationSoutien() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { createDonation, loading, error: donationError } = useDonation();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignedIn) {
      navigate('/sign-up');
      return;
    }

    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;

    if (!amount || amount < 50) {
      alert('Le montant minimum est de 50€');
      return;
    }

    const donationUrl = await createDonation('soutien', {
      amount,
      name: formData.firstName && formData.lastName 
        ? `${formData.firstName} ${formData.lastName}` 
        : undefined,
      isRecurring,
      frequency: isRecurring ? 'monthly' : undefined,
    });

    if (donationUrl) {
      window.location.href = donationUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-6 md:py-3 px-4">
  <p className="text-lg md:text-2xl lg:text-3xl italic font-body tracking-wider leading-relaxed max-w-5xl mx-auto">
    {t('home.motto')}
  </p>
</div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Don de Soutien
        </h1>
        
        {/* Donation info */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-50 shadow-xl rounded-lg p-8 mb-8 border-2 border-amber-300 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">Votre Générosité en Action</h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Le minimum ou plus de votre donation est une générosité qui nous permet de planifier nos actions d'aide et de solidarité envers des personnes qui en ont besoin.
          </p>
          <div className="inline-block bg-white rounded-lg px-8 py-4 shadow-md border-2 border-amber-400">
            <p className="text-sm text-gray-600 mb-2">Montant minimum</p>
            <p className="text-4xl font-bold text-amber-900">50€</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Contribuez au Développement de l'Ordre</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Votre don de soutien nous aide à développer et maintenir nos activités. Chaque contribution compte et nous permet d'accomplir notre mission.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Financement des Formations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Création de nouveaux contenus pédagogiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Organisation de séminaires et ateliers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Développement de ressources numériques</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Maintenance des plateformes en ligne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Amélioration des espaces d'étude</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Sécurisation des données</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Publications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Édition de livres et journaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Production de contenus multimédias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Traductions et diffusion</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Rayonnement International</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Création de nouvelles commanderies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Organisation d'événements internationaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>Échanges interculturels</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-6">
            <h3 className="text-2xl font-serif mb-4 text-center">Répartition du Budget</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">35%</div>
                <div className="text-sm text-amber-50">Formations</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">25%</div>
                <div className="text-sm text-amber-50">Infrastructure</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">20%</div>
                <div className="text-sm text-amber-50">Publications</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">20%</div>
                <div className="text-sm text-amber-50">Rayonnement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Niveaux de soutien */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 text-center">
            Niveaux de Soutien
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
              <div className="text-2xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Ami de l'Ordre</h3>
              <div className="text-3xl font-bold text-amber-700 mb-4">50€<span className="text-lg">/mois</span></div>
              <ul className="text-sm text-gray-700 space-y-2 text-left mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Newsletter exclusive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Remerciements sur le site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Accès aux événements publics</span>
                </li>
              </ul>
              <button className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition">
                Devenir Ami
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-lg border-2 border-amber-400 text-center transform scale-105 shadow-lg">
              <div className="bg-amber-700 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
                RECOMMANDÉ
              </div>
              <div className="text-2xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Bienfaiteur</h3>
              <div className="text-3xl font-bold text-amber-700 mb-4">150€<span className="text-lg">/mois</span></div>
              <ul className="text-sm text-gray-700 space-y-2 text-left mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Tous les avantages Ami</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Invitation événements privés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Rapport d'activités trimestriel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Rencontre avec les dirigeants</span>
                </li>
              </ul>
              <button className="w-full bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition">
                Devenir Bienfaiteur
              </button>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
              <div className="text-2xl mb-4">👑</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Mécène</h3>
              <div className="text-3xl font-bold text-amber-700 mb-4">500€<span className="text-lg">/mois</span></div>
              <ul className="text-sm text-gray-700 space-y-2 text-left mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Tous les avantages Bienfaiteur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Plaque commémorative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Parrainage d'une initiative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">✓</span>
                  <span>Conseil consultatif</span>
                </li>
              </ul>
              <button className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition">
                Devenir Mécène
              </button>
            </div>
          </div>
        </div>

        {donationError && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{donationError}</AlertDescription>
          </Alert>
        )}

        {/* Don unique */}
        {/* Formulaire de don - NOUVEAU DESIGN */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-8 border border-amber-200">
          {/* Header avec gradient doux */}
          <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-50 p-8 border-b border-amber-200">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2 text-center">
              Don Unique ou Récurrent
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Soutenez notre développement de manière ponctuelle ou régulière.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Sélection du montant */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  Choisissez votre montant
                </label>
                <div className="grid grid-cols-5 gap-3 mb-4">
                  {[50, 100, 250, 500, 1000].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountClick(amount)}
                      className={`py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'bg-amber-600 text-white shadow-lg scale-105'
                          : 'bg-amber-50 text-amber-900 border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-100'
                      }`}
                    >
                      {amount}€
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 text-lg transition-all"
                    placeholder="Autre montant (min. 50€)"
                    min="50"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">€</span>
                </div>
              </div>

              {/* Type de don */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <label className="block text-base font-semibold text-gray-800 mb-3">Type de don</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 bg-white transition-all"
                  value={isRecurring ? 'mensuel' : 'unique'}
                  onChange={(e) => setIsRecurring(e.target.value === 'mensuel')}
                >
                  <option value="unique">Don unique</option>
                  <option value="mensuel">Don mensuel (soutien régulier)</option>
                </select>
              </div>

              {/* Informations personnelles */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  Vos informations (optionnel)
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 transition-all"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 transition-all"
                    placeholder="Nom"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              {/* Bouton de soumission */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Traitement en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    🌟 Envoyer mon Don de Soutien
                  </span>
                )}
              </button>

              {/* Sécurité */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Paiement 100% sécurisé par Stripe</span>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-serif text-amber-900 mb-6 text-center">Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-amber-800 mb-3">Siège</h4>
              <p className="text-gray-700">
                B.P. 13241<br />
                Yaoundé - Cameroun
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-amber-800 mb-3">France</h4>
              <p className="text-gray-700">
                Richard Mbouma Kohomm<br />
                11 av. Joseph Rollo<br />
                78320 La Verrière – France<br />
                <a href="mailto:mkohomm@gmail.com" className="text-amber-600 hover:text-amber-700">
                  mkohomm@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}