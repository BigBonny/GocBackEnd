import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function Organisation() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-12">
        <p className="text-md md:text-xl italic font-serif">
          {t('organisation.motto')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          {t('organisation.title')}
        </h1>

        {/* Introduction */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">{t('organisation.goc')}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            {t('organisation.structure')}
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-1">4</div>
              <div className="text-sm font-semibold text-amber-900">{t('organisation.pillars')}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-1">7</div>
              <div className="text-sm font-semibold text-amber-900">{t('organisation.grades')}</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-1">1</div>
              <div className="text-sm font-semibold text-amber-900">{t('organisation.rule')}</div>
            </div>
          </div>
        </div>

        {/* Piliers */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            {t('organisation.pillarsTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{t('organisation.pillar1.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar1.item1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar1.item2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{t('organisation.pillar2.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar2.item1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar2.item2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{t('organisation.pillar3.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar3.item1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar3.item2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{t('organisation.pillar4.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar4.item1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{t('organisation.pillar4.item2')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Règles */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            {t('organisation.rulesTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <span className="text-amber-700 font-bold min-w-[24px]">{['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][i]}</span>
                <span className="text-gray-700">{t(`organisation.rules.${i + 1}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Organisation */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            {t('organisation.structureTitle')}
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">{t('organisation.level1.title')}</h3>
              <p className="text-gray-700">{t('organisation.level1.desc')}</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">{t('organisation.level2.title')}</h3>
              <p className="text-gray-700">{t('organisation.level2.desc')}</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">{t('organisation.level3.title')}</h3>
              <p className="text-gray-700">{t('organisation.level3.desc')}</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">{t('organisation.level4.title')}</h3>
              <p className="text-gray-700">{t('organisation.level4.desc')}</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4 bg-amber-50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">{t('organisation.level5.title')}</h3>
              <p className="text-gray-700">{t('organisation.level5.desc')}</p>
            </div>
          </div>
        </div>

        {/* Grades */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            {t('organisation.gradesTitle')}
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {["Apprenti", "Compagnon", "Officier", "Honorable", "Vénérable", "Maître", "Grand-maître"].map((grade, idx) => (
              <div key={idx} className="bg-amber-50 px-4 py-2 rounded-full border border-amber-200 text-amber-900 font-medium">
                {t(`organisation.grade.${idx + 1}`)}
              </div>
            ))}
          </div>
        </div>

        {/* Administration */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            {t('organisation.administration')}
          </h2>
          
          <div className="space-y-8">
            {/* Cercle */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">{t('organisation.admin1.title')}</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin1.item1')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin1.item2')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin1.item3')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin1.item4')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin1.item5')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin1.item6')}</li>
              </ul>
            </div>

            {/* District */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">{t('organisation.admin2.title')}</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin2.item1')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin2.item2')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin2.item3')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin2.item4')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin2.item5')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin2.item6')}</li>
              </ul>
            </div>

            {/* Commanderie */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">{t('organisation.admin3.title')}</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin3.item1')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin3.item2')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin3.item3')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin3.item4')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin3.item5')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin3.item6')}</li>
              </ul>
            </div>

            {/* Gouvernorat */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">{t('organisation.admin4.title')}</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin4.item1')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin4.item2')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin4.item3')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin4.item4')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin4.item5')}</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> {t('organisation.admin4.item6')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gouvernance mondiale */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif mb-6 border-b border-amber-400 pb-2">
            {t('organisation.globalGovernance')}
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">{t('organisation.global1.title')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">{t('organisation.global2.title')}</span>
                <span className="block text-amber-100 text-sm">{t('organisation.global2.desc')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">{t('organisation.global3.title')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">{t('organisation.global4.title')}</span>
                <span className="block text-amber-100 text-sm">{t('organisation.global4.desc')}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">{t('organisation.global5.title')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/devenir-membre/apprenti"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium"
          >
            {t('organisation.join')}
          </Link>
        </div>
      </div>
    </div>
  );
}