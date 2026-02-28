import { useTranslation } from 'react-i18next';

export function GOCFraternite() {
  const { t } = useTranslation();

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
          {t('goc.fraternity.title')}
        </h1>

        {/* New section: Notre Fraternité */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-50 shadow-xl rounded-lg p-8 mb-8 border-2 border-amber-300">
          <h2 className="text-3xl font-serif text-amber-900 mb-6 text-center">
            {t('goc.fraternity.ourFraternity')}
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            {t('goc.fraternity.description')}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">
            {t('goc.fraternity.transcendentLink')}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            {t('goc.fraternity.transcendentDesc')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {t('goc.fraternity.features.spiritualHelp.title')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('goc.fraternity.features.spiritualHelp.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {t('goc.fraternity.features.knowledge.title')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('goc.fraternity.features.knowledge.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {t('goc.fraternity.features.mutualSupport.title')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('goc.fraternity.features.mutualSupport.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {t('goc.fraternity.features.rituals.title')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('goc.fraternity.features.rituals.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {t('goc.fraternity.features.network.title')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('goc.fraternity.features.network.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {t('goc.fraternity.features.meditation.title')}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t('goc.fraternity.features.meditation.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 border-2 border-amber-200 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">
            {t('goc.fraternity.commanderies.title')}
          </h2>
          <p className="text-gray-700 mb-6">
            {t('goc.fraternity.commanderies.description')}
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>{t('goc.fraternity.commanderies.activities.meditation')}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>{t('goc.fraternity.commanderies.activities.celebrations')}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>{t('goc.fraternity.commanderies.activities.meals')}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>{t('goc.fraternity.commanderies.activities.library')}</span>
            </li>
          </ul>
        </div>

        <div className="text-center bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-4">
            {t('goc.fraternity.join.title')}
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('goc.fraternity.join.description')}
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            {t('goc.fraternity.join.button')}
          </button>
        </div>
      </div>
    </div>
  );
}