export function Donation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Faire un Don
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">
            Soutenez notre Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Votre générosité nous permet de continuer à transmettre les enseignements ésotériques 
            et à maintenir notre communauté spirituelle. Chaque don contribue à l'élévation collective.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <button className="bg-amber-100 border-2 border-amber-300 text-amber-900 py-4 rounded-lg hover:bg-amber-200 transition">
              <div className="text-2xl font-bold mb-1">25€</div>
              <div className="text-sm">Don mensuel</div>
            </button>
            <button className="bg-amber-700 text-white py-4 rounded-lg hover:bg-amber-800 transition shadow-lg">
              <div className="text-2xl font-bold mb-1">50€</div>
              <div className="text-sm">Don mensuel</div>
            </button>
            <button className="bg-amber-100 border-2 border-amber-300 text-amber-900 py-4 rounded-lg hover:bg-amber-200 transition">
              <div className="text-2xl font-bold mb-1">100€</div>
              <div className="text-sm">Don mensuel</div>
            </button>
          </div>

          <div className="border-t border-amber-200 pt-6">
            <label className="block text-amber-900 font-medium mb-2">Montant personnalisé</label>
            <div className="flex gap-4">
              <input
                type="number"
                className="flex-1 px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Montant en €"
              />
              <button className="bg-amber-700 text-white px-8 py-2 rounded-md hover:bg-amber-800 transition font-medium">
                Donner
              </button>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
          <h3 className="text-xl font-serif text-amber-900 mb-3">Comment vos dons sont utilisés</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-700">✦</span>
              <span className="text-gray-700">Maintien des lieux sacrés et prieurés</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700">✦</span>
              <span className="text-gray-700">Organisation de séminaires et retraites</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700">✦</span>
              <span className="text-gray-700">Développement de ressources pédagogiques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700">✦</span>
              <span className="text-gray-700">Soutien aux membres en difficulté</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
