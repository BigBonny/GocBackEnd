// Journaux.tsx
import { useTranslation } from 'react-i18next';

export function Journaux() {
  const { t } = useTranslation();

  const publications = [
    { key: 'bulletin', icon: '📋' },
    { key: 'cahiers', icon: '📚' },
    { key: 'lettres', icon: '✉️' },
    { key: 'almanach', icon: '📖' },
  ] as const;

  // Type the arrays properly
  const mainJournalItems = t('library.journals.mainJournal.items', { returnObjects: true }) as string[];
  const mainJournalFormatItems = t('library.journals.mainJournal.formatItems', { returnObjects: true }) as string[];

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
          {t('library.journals.title')}
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
            {/* <div className="flex justify-end">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
                {t('library.intro.orderForm')}
              </button>
            </div> */}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
            {t('library.journals.intro')}
          </p>

          {/* Journal Principal */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-serif mb-2">{t('library.journals.mainJournal.title')}</h2>
                <p className="text-amber-100">{t('library.journals.mainJournal.subtitle')}</p>
              </div>
              <div className="text-4xl">📰</div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-amber-50">
              <div>
                <h3 className="font-semibold mb-2">{t('library.journals.mainJournal.summary')}</h3>
                <ul className="space-y-1 text-sm">
                  {mainJournalItems.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('library.journals.mainJournal.format')}</h3>
                <ul className="space-y-1 text-sm">
                  {mainJournalFormatItems.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Autres Publications */}
          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.key} className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">
                      {t(`library.journals.publications.${pub.key}.title`)}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t(`library.journals.publications.${pub.key}.description`)}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>📅 {t(`library.journals.publications.${pub.key}.frequency`)}</span>
                      <span>📄 {t(`library.journals.publications.${pub.key}.pages`)}</span>
                      <span>{pub.key === 'almanach' ? '✅' : '🔒'} {t(`library.journals.publications.${pub.key}.access`)}</span>
                    </div>
                  </div>
                  <div className="text-3xl ml-4">{pub.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archives */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6">{t('library.journals.archives.title')}</h2>
          <p className="text-gray-700 mb-6">
            {t('library.journals.archives.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">150+</div>
              <div className="text-sm text-gray-700">{t('library.journals.archives.stats.journal')}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">400+</div>
              <div className="text-sm text-gray-700">{t('library.journals.archives.stats.bulletins')}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">40+</div>
              <div className="text-sm text-gray-700">{t('library.journals.archives.stats.years')}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">{t('library.journals.cta.title')}</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('library.journals.cta.description')}
          </p>
          {/* <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
              {t('library.journals.cta.becomeMember')}
            </button>
            <button className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition font-medium border-2 border-white">
              {t('library.journals.cta.consultArchives')}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}