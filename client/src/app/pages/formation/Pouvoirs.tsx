import { useTranslation } from 'react-i18next';

export function Pouvoirs() {
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
          {t('formation.powers.title')}
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">
            {t('formation.powers.subtitle')}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('formation.powers.intro')}
          </p>

          <div className="bg-amber-100 border-l-4 border-amber-600 p-6 mb-8">
            <p className="text-amber-900 font-semibold mb-2">
              {t('formation.powers.warning.title')}
            </p>
            <p className="text-gray-700 text-sm">
              {t('formation.powers.warning.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Clairvoyance */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('formation.powers.abilities.clairvoyance.title')}
              </h3>
              <p className="text-gray-700 mb-3">
                {t('formation.powers.abilities.clairvoyance.description')}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('formation.powers.abilities.clairvoyance.items.0')}</li>
                <li>• {t('formation.powers.abilities.clairvoyance.items.1')}</li>
                <li>• {t('formation.powers.abilities.clairvoyance.items.2')}</li>
              </ul>
            </div>

            {/* Telepathy */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('formation.powers.abilities.telepathy.title')}
              </h3>
              <p className="text-gray-700 mb-3">
                {t('formation.powers.abilities.telepathy.description')}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('formation.powers.abilities.telepathy.items.0')}</li>
                <li>• {t('formation.powers.abilities.telepathy.items.1')}</li>
                <li>• {t('formation.powers.abilities.telepathy.items.2')}</li>
              </ul>
            </div>

            {/* Magnetism */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('formation.powers.abilities.magnetism.title')}
              </h3>
              <p className="text-gray-700 mb-3">
                {t('formation.powers.abilities.magnetism.description')}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('formation.powers.abilities.magnetism.items.0')}</li>
                <li>• {t('formation.powers.abilities.magnetism.items.1')}</li>
                <li>• {t('formation.powers.abilities.magnetism.items.2')}</li>
              </ul>
            </div>

            {/* Astral Projection */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('formation.powers.abilities.astral.title')}
              </h3>
              <p className="text-gray-700 mb-3">
                {t('formation.powers.abilities.astral.description')}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('formation.powers.abilities.astral.items.0')}</li>
                <li>• {t('formation.powers.abilities.astral.items.1')}</li>
                <li>• {t('formation.powers.abilities.astral.items.2')}</li>
              </ul>
            </div>

            {/* Psychometry */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('formation.powers.abilities.psychometry.title')}
              </h3>
              <p className="text-gray-700 mb-3">
                {t('formation.powers.abilities.psychometry.description')}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('formation.powers.abilities.psychometry.items.0')}</li>
                <li>• {t('formation.powers.abilities.psychometry.items.1')}</li>
                <li>• {t('formation.powers.abilities.psychometry.items.2')}</li>
              </ul>
            </div>

            {/* Deep Meditation */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {t('formation.powers.abilities.meditation.title')}
              </h3>
              <p className="text-gray-700 mb-3">
                {t('formation.powers.abilities.meditation.description')}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('formation.powers.abilities.meditation.items.0')}</li>
                <li>• {t('formation.powers.abilities.meditation.items.1')}</li>
                <li>• {t('formation.powers.abilities.meditation.items.2')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-4 text-center">
            {t('formation.powers.program.title')}
          </h2>
          <p className="text-center mb-6 text-amber-50">
            {t('formation.powers.program.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">
                {t('formation.powers.program.year1.title')}
              </div>
              <div className="text-sm text-amber-50">
                {t('formation.powers.program.year1.description')}
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">
                {t('formation.powers.program.year2.title')}
              </div>
              <div className="text-sm text-amber-50">
                {t('formation.powers.program.year2.description')}
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">
                {t('formation.powers.program.year3.title')}
              </div>
              <div className="text-sm text-amber-50">
                {t('formation.powers.program.year3.description')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}