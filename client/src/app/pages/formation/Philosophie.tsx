// formation/Philosophie.tsx
import { useTranslation } from 'react-i18next';

export function Philosophie() {
  const { t } = useTranslation();

  const traditions = [
    { key: 'hermetic' },
    { key: 'neoplatonic' },
    { key: 'eastern' },
    { key: 'modern' },
  ] as const;

  const themes = t('formation.philosophy.themes.items', { returnObjects: true }) as string[];
  const methods = t('formation.philosophy.methods.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-12">
        <p className="text-md md:text-xl italic font-serif">
          {t('home.motto')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          {t('formation.philosophy.title')}
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">{t('formation.philosophy.subtitle')}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('formation.philosophy.intro')}
          </p>

          <div className="space-y-6">
            {traditions.map((tradition) => (
              <div key={tradition.key} className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {t(`formation.philosophy.traditions.${tradition.key}.title`)}
                </h3>
                <p className="text-gray-700">
                  {t(`formation.philosophy.traditions.${tradition.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('formation.philosophy.themes.title')}</h3>
            <ul className="space-y-2 text-gray-700">
              {themes.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('formation.philosophy.methods.title')}</h3>
            <ul className="space-y-2 text-gray-700">
              {methods.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-amber-700">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">{t('formation.philosophy.continuous.title')}</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('formation.philosophy.continuous.description')}
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            {t('formation.philosophy.continuous.button')}
          </button>
        </div>
      </div>
    </div>
  );
}