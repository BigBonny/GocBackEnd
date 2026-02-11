export function Philosophie() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-3">
        <p className="text-sm md:text-base italic font-serif">
          Là où se trouve l'arbre de la connaissance, se trouve le bonheur
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Formation Philosophique
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Philosophie Ésotérique</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La philosophie ésotérique explore les questions fondamentales de l'existence : 
            qui sommes-nous, d'où venons-nous, où allons-nous ? Notre enseignement intègre 
            les grandes traditions philosophiques orientales et occidentales dans une synthèse unique.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Philosophie Hermétique
              </h3>
              <p className="text-gray-700">
                Étude des Sept Principes Hermétiques : Mentalisme, Correspondance, Vibration, 
                Polarité, Rythme, Cause et Effet, Genre. Application pratique de ces lois universelles.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Néoplatonisme & Gnose
              </h3>
              <p className="text-gray-700">
                Enseignements de Platon, Plotin et des gnostiques. La doctrine de l'Un, 
                l'émanation des mondes, la remontée de l'âme vers sa source divine.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Sagesse Orientale
              </h3>
              <p className="text-gray-700">
                Vedanta, Bouddhisme, Taoïsme : exploration des philosophies orientales et 
                de leurs pratiques contemplatives. Non-dualité, vacuité, Wu Wei.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Métaphysique Moderne
              </h3>
              <p className="text-gray-700">
                Synthèse entre science et spiritualité. Physique quantique et conscience, 
                nouveaux paradigmes de la réalité.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Thèmes Étudiés</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Nature de la conscience et de l'âme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Cosmogonie et création du monde</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Karma, réincarnation et destinée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Libre arbitre et déterminisme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Éthique spirituelle et morale ésotérique</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Méthodes Pédagogiques</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Cours théoriques et séminaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Dialogues socratiques et débats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Méditations philosophiques guidées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Lectures commentées de textes sacrés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✦</span>
                <span>Travaux écrits et dissertations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Formation Continue</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            La formation philosophique s'étend sur 3 ans avec des cours mensuels, 
            des séminaires trimestriels et un accès à notre bibliothèque ésotérique.
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            Programme détaillé
          </button>
        </div>
      </div>
    </div>
  );
}
