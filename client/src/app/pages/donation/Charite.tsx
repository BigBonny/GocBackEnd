import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useDonation } from '@/hooks/useDonation';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export function DonationCharite() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { createDonation, loading, error: donationError } = useDonation();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    wantReceipt: false,
    joinCircle: false,
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

    if (!amount || amount < 100) {
      alert('Le montant minimum est de 100€');
      return;
    }

    const donationUrl = await createDonation('charite', {
      amount,
      name: formData.firstName && formData.lastName 
        ? `${formData.firstName} ${formData.lastName}` 
        : undefined,
      message: formData.message || undefined,
      isRecurring,
      frequency: isRecurring ? frequency : undefined,
    });

    if (donationUrl) {
      window.location.href = donationUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-12">
        <p className="text-md md:text-xl italic font-serif">
          Là où se trouve l'arbre de la connaissance, se trouve le bonheur
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Don de Charité
        </h1>

        {/* Donation info */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-50 shadow-xl rounded-lg p-8 mb-8 border-2 border-amber-300 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">Votre Générosité en Action</h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Le minimum ou plus de votre donation est une générosité qui nous permet de planifier nos actions d'aide et de solidarité envers des personnes qui en ont besoin.
          </p>
          <div className="inline-block bg-white rounded-lg px-8 py-4 shadow-md border-2 border-amber-400">
            <p className="text-sm text-gray-600 mb-2">Montant minimum</p>
            <p className="text-4xl font-bold text-amber-900">100€</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Un Acte de Grande Générosité</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Votre don de charité représente un engagement profond envers notre mission d'aide et de solidarité. Chaque contribution fait une différence tangible dans la vie de ceux qui en ont le plus besoin.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Impact de Votre Don</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Aide alimentaire aux familles dans le besoin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Soutien médical et sanitaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Bourses d'études pour jeunes défavorisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Accompagnement des personnes en difficulté</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Reconnaissance</h3>
              <p className="text-gray-700 mb-4">
                En tant que donateur charitable, vous bénéficiez de :
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Mention au Cercle des Bienfaiteurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Rapport annuel d'impact détaillé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Invitation aux événements spéciaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Reçu fiscal pour déduction d'impôts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-serif mb-4 text-center">Exemples d'Actions Financées</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">🍞</div>
                <div className="text-sm text-amber-50">Aide alimentaire d'urgence</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">🏥</div>
                <div className="text-sm text-amber-50">Soins médicaux essentiels</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-sm text-amber-50">Éducation et formation</div>
              </div>
            </div>
          </div>
        </div>

        {donationError && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{donationError}</AlertDescription>
          </Alert>
        )}

        {/* Formulaire de don - NOUVEAU DESIGN */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-8 border border-amber-200">
          {/* Header avec gradient doux */}
          <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-50 p-8 border-b border-amber-200">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2 text-center">
              Faire un Don de Charité
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Votre générosité change des vies. Merci pour votre engagement profond.
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
                  {[100, 250, 500, 1000, 2000].map((amount) => (
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
                    placeholder="Autre montant (min. 100€)"
                    min="100"
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
                  value={isRecurring ? frequency : 'unique'}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === 'unique') {
                      setIsRecurring(false);
                    } else {
                      setIsRecurring(true);
                      setFrequency(value as 'monthly' | 'quarterly' | 'annual');
                    }
                  }}
                >
                  <option value="unique">Don unique</option>
                  <option value="monthly">Don mensuel</option>
                  <option value="quarterly">Don trimestriel</option>
                  <option value="annual">Don annuel</option>
                </select>
              </div>

              {/* Informations personnelles */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  Vos coordonnées
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 transition-all"
                    placeholder="Prénom *"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 transition-all"
                    placeholder="Nom *"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>

                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-gray-900 h-24 transition-all"
                  placeholder="Votre message (optionnel)..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              {/* Options */}
              <div className="space-y-3 bg-amber-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1.5 h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500" 
                    id="recu"
                    checked={formData.wantReceipt}
                    onChange={(e) => setFormData({...formData, wantReceipt: e.target.checked})}
                  />
                  <label htmlFor="recu" className="text-sm text-gray-700 font-medium">
                    Je souhaite recevoir un reçu fiscal
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1.5 h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500" 
                    id="bienfaiteur"
                    checked={formData.joinCircle}
                    onChange={(e) => setFormData({...formData, joinCircle: e.target.checked})}
                  />
                  <label htmlFor="bienfaiteur" className="text-sm text-gray-700 font-medium">
                    J'accepte de rejoindre le Cercle des Bienfaiteurs
                  </label>
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
                    🤲 Envoyer mon Don de Charité
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
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
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

        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-amber-900 mb-4">Merci pour Votre Confiance</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Votre don de charité nous permet de poursuivre notre mission d'aide et de solidarité. Ensemble, nous changeons des vies et apportons de l'espoir à ceux qui en ont le plus besoin.
          </p>
          <p className="text-amber-700 font-semibold mt-6 text-lg">
            Que la lumière guide votre chemin 🙏
          </p>
        </div>
      </div>
    </div>
  );
}