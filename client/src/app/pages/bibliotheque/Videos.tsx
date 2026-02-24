// Videos.tsx
import { useTranslation } from 'react-i18next';

export function BibliothèqueVideos() {
  const { t } = useTranslation();

  const categories = [
    { key: 'conferences', icon: '🎓' },
    { key: 'meditations', icon: '🧘' },
    { key: 'rituals', icon: '🕯️' },
    { key: 'courses', icon: '📚' },
    { key: 'energy', icon: '✨' },
    { key: 'secret', icon: '🌟' },
  ] as const;

  const recentVideos = t('library.videos.recent.videos', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    duration: string;
    date: string;
    access: string;
  }>;

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
          {t('library.videos.title')}
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
            {t('library.videos.intro')}
          </p>

          {/* Catégories de vidéos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((cat) => (
              <div 
                key={cat.key}
                className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  {t(`library.videos.categories.${cat.key}.title`)}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {t(`library.videos.categories.${cat.key}.description`)}
                </p>
                <div className="text-amber-700 font-semibold text-sm">
                  {t(`library.videos.categories.${cat.key}.count`)}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {cat.key === 'meditations' ? '✅' : '🔒'} {t(`library.videos.categories.${cat.key}.access`)}
                </div>
              </div>
            ))}
          </div>

          {/* Vidéos récentes */}
          <div className="border-t-2 border-amber-200 pt-8">
            <h2 className="text-2xl font-serif text-amber-800 mb-6">{t('library.videos.recent.title')}</h2>
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div key={index} className="flex gap-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="w-32 h-20 bg-amber-200 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-900 mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-700 mb-2">{video.description}</p>
                    <div className="flex gap-4 text-xs text-gray-600">
                      <span>⏱️ {video.duration}</span>
                      <span>📅 {video.date}</span>
                      <span>{video.access === 'Accès libre' || video.access === 'Open access' || video.access === '自由アクセス' ? '✅' : '🔒'} {video.access}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 text-center">
            {t('library.videos.stats.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">200+</div>
              <div className="text-sm text-gray-700">{t('library.videos.stats.total')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">300h</div>
              <div className="text-sm text-gray-700">{t('library.videos.stats.hours')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">4K</div>
              <div className="text-sm text-gray-700">{t('library.videos.stats.quality')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">24/7</div>
              <div className="text-sm text-gray-700">{t('library.videos.stats.access')}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">{t('library.videos.cta.title')}</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('library.videos.cta.description')}
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            {t('library.videos.cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
}