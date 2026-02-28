import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useDonation } from '@/hooks/useDonation';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export function DonationSympathie() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { createDonation, loading, error: donationError } = useDonation();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    anonymous: false,
    allowMention: false,
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

    if (!amount || amount < 25) {
      alert(t('donation.sympathie.form.minimumError') || 'Le montant minimum est de 25€');
      return;
    }

    const donationUrl = await createDonation('sympathie', {
      amount,
      name: formData.firstName && formData.lastName 
        ? `${formData.firstName} ${formData.lastName}` 
        : undefined,
      message: formData.message || undefined,
      anonymous: formData.anonymous,
      allowMention: formData.allowMention,
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
          {t('donation.sympathie.title')}
        </h1>

        {/* Donation info */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-50 shadow-xl rounded-lg p-8 mb-8 border-2 border-amber-300 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">{t('donation.sympathie.generosityInAction')}</h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            {t('donation.sympathie.message')}
          </p>
          <div className="inline-block bg-white rounded-lg px-8 py-4 shadow-md border-2 border-amber-400">
            <p className="text-sm text-gray-600 mb-2">{t('donation.sympathie.minimumLabel')}</p>
            <p className="text-4xl font-bold text-amber-900">{t('donation.sympathie.amount')}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">{t('donation.sympathie.gestureTitle')}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('donation.sympathie.gestureDescription')}
          </p>

          <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-700 p-6 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">{t('donation.sympathie.freedom.title')}</h3>
            <p className="text-gray-700">
              {t('donation.sympathie.freedom.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('donation.sympathie.why.title')}</h3>
              <ul className="space-y-3 text-gray-700">
                {(t('donation.sympathie.why.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-700 text-xl">💛</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('donation.sympathie.usage.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('donation.sympathie.usage.description')}
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {(t('donation.sympathie.usage.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-100 rounded-lg p-6 border-2 border-amber-300 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-4 text-center">
              {t('donation.sympathie.noReturn.title')}
            </h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              {t('donation.sympathie.noReturn.description')}
            </p>
          </div>
        </div>

        {/* Témoignages */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 text-center">
            {t('donation.sympathie.testimonials.title')}
          </h2>
          <div className="space-y-6">
            {(t('donation.sympathie.testimonials.items', { returnObjects: true }) as { quote: string; author: string }[]).map((testimonial, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <p className="text-gray-700 italic mb-3">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-amber-900 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
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
              Faire un Don de Sympathie
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Votre geste compte. Merci de votre soutien spontané.
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
                  {[25, 50, 75, 100, 200].map((amount) => (
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
                    placeholder="Autre montant (min. 25€)"
                    min="25"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">€</span>
                </div>
              </div>

              {/* Informations personnelles */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-600 mb-4 text-center font-medium">
                  Informations optionnelles (vous pouvez rester anonyme)
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
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
                    id="anonyme"
                    checked={formData.anonymous}
                    onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                  />
                  <label htmlFor="anonyme" className="text-sm text-gray-700 font-medium">
                    Je souhaite rester anonyme
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1.5 h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500" 
                    id="mention"
                    checked={formData.allowMention}
                    onChange={(e) => setFormData({...formData, allowMention: e.target.checked})}
                  />
                  <label htmlFor="mention" className="text-sm text-gray-700 font-medium">
                    J'accepte d'être mentionné(e) comme donateur
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
                    💝 Envoyer mon Don
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
            Votre don de sympathie nous permet de poursuivre notre mission. Chaque geste compte et nous touche profondément.
          </p>
          <p className="text-amber-700 font-semibold mt-6 text-lg">
            Que la lumière guide votre chemin 🙏
          </p>
        </div>
      </div>
    </div>
  );
}