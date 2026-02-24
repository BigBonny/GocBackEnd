import { useTranslation } from 'react-i18next';

export function GOCActions() {
  const { t } = useTranslation();

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
          {t('goc.actions.title')}
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6">
            {t('goc.actions.subtitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.actions.items.seminars.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.actions.items.seminars.description')}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.actions.items.conferences.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.actions.items.conferences.description')}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.actions.items.publications.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.actions.items.publications.description')}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.actions.items.rituals.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.actions.items.rituals.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-8 border-2 border-amber-300">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">
            {t('goc.actions.program.title')}
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">
                {t('goc.actions.program.seasons.spring.name')}
              </span>
              <span>{t('goc.actions.program.seasons.spring.activity')}</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">
                {t('goc.actions.program.seasons.summer.name')}
              </span>
              <span>{t('goc.actions.program.seasons.summer.activity')}</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">
                {t('goc.actions.program.seasons.autumn.name')}
              </span>
              <span>{t('goc.actions.program.seasons.autumn.activity')}</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">
                {t('goc.actions.program.seasons.winter.name')}
              </span>
              <span>{t('goc.actions.program.seasons.winter.activity')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}