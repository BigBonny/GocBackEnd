// formation/Esoterisme.tsx
import { useTranslation } from 'react-i18next';

export function Esoterisme() {
  const { t } = useTranslation();

  const sections = [
    { key: 'symbolism', icon: '✦' },
    { key: 'alchemy', icon: '✦' },
    { key: 'kabbalah', icon: '✦' },
    { key: 'tarot', icon: '✦' },
  ] as const;

  const programLevels = [
    { key: 'level1' },
    { key: 'level2' },
    { key: 'level3' },
  ] as const;

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
          {t('formation.esoterism.title')}
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">{t('formation.esoterism.subtitle')}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('formation.esoterism.intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div key={section.key} className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  {t(`formation.esoterism.sections.${section.key}.title`)}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {(t(`formation.esoterism.sections.${section.key}.items`, { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-700">{section.icon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif mb-4">{t('formation.esoterism.program.title')}</h2>
          <div className="space-y-4">
            {programLevels.map((level) => (
              <div key={level.key} className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{t(`formation.esoterism.program.${level.key}.title`)}</h3>
                <p className="text-sm text-amber-50">
                  {t(`formation.esoterism.program.${level.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium">
            {t('formation.esoterism.signup')}
          </button>
        </div>
      </div>
    </div>
  );
}