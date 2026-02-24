// Accessoires.tsx
import { useTranslation } from 'react-i18next';

export function Accessoires() {
  const { t } = useTranslation();

  const accessories = [
    { id: 'candles', icon: '🕯️' },
    { id: 'crystals', icon: '🔮' },
    { id: 'incense', icon: '✨' },
    { id: 'sword', icon: '⚔️' },
    { id: 'chalice', icon: '🏺' },
    { id: 'malas', icon: '📿' },
    { id: 'feathers', icon: '🪶' },
    { id: 'talismans', icon: '⭐' },
    { id: 'robes', icon: '🎭' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-12">
        <p className="text-md md:text-xl italic font-serif">
          {t('home.motto')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          {t('nav.libraryAccessories')}
        </h1>

        {/* BIBLIOTHEQUE Intro */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl font-serif text-amber-800 mb-4">{t('nav.library')}</h2>
            <p className="text-xl italic font-serif text-amber-700 mb-4">
              {t('library.intro.quote')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('library.intro.description')}
            </p>
            <div className="flex justify-end">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
                {t('library.intro.orderForm')}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
            {t('library.accessories.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {accessories.map((item) => (
              <div 
                key={item.id}
                className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition"
              >
                <div className="text-4xl text-amber-700 mb-4 text-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">
                  {t(`library.accessories.items.${item.id}.title`)}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {t(`library.accessories.items.${item.id}.description`)}
                </p>
                <div className="text-center">
                  <span className="text-amber-700 font-semibold">
                    {t(`library.accessories.items.${item.id}.availability`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">
            {t('library.accessories.cta.title')}
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('library.accessories.cta.description')}
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            {t('library.accessories.cta.button')}
          </button>
          <p className="text-sm text-amber-100 mt-4">
            {t('library.accessories.cta.note')}
          </p>
        </div>
      </div>
    </div>
  );
}