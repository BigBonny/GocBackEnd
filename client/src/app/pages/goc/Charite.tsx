import { useTranslation } from 'react-i18next';

export function GOCCharite() {
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
          {t('goc.charity.title')}
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">
            {t('goc.charity.serviceTitle')}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('goc.charity.serviceDesc')}
          </p>

          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.charity.works.spiritual.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.charity.works.spiritual.description')}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.charity.works.material.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.charity.works.material.description')}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.charity.works.education.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.charity.works.education.description')}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('goc.charity.works.energy.title')}
              </h3>
              <p className="text-gray-700">
                {t('goc.charity.works.energy.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">
            {t('goc.charity.participate.title')}
          </h2>
          <p className="mb-6">
            {t('goc.charity.participate.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-amber-700 px-6 py-3 rounded-md hover:bg-amber-50 transition font-medium">
              {t('goc.charity.participate.donate')}
            </button>
            <button className="bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-900 transition font-medium border-2 border-white">
              {t('goc.charity.participate.volunteer')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}