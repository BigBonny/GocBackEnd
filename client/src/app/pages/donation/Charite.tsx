export function DonationCharite() {
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
          Donation pour la Charité
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Soutenir nos Œuvres Charitables</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Vos dons pour la charité permettent au Grand Ordre du Cercle de poursuivre ses missions 
            d'aide aux personnes dans le besoin. Nous croyons fermement que la spiritualité doit 
            se manifester par des actes concrets de compassion et de service.
          </p>

          <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-700 p-6 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Comment sont utilisés vos dons ?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-900 mb-3">Aide Directe</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Distribution alimentaire mensuelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Aide au logement d'urgence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Vêtements et nécessités de base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Soutien financier ponctuel</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-3">Services Gratuits</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Accompagnement spirituel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Soins énergétiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Cours de méditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700">•</span>
                    <span>Soutien psychologique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Nos Actions Caritatives en 2025</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-200">
                <div className="text-3xl font-bold text-amber-700 mb-2">450+</div>
                <div className="text-sm text-gray-700">Familles aidées</div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-200">
                <div className="text-3xl font-bold text-amber-700 mb-2">3000+</div>
                <div className="text-sm text-gray-700">Repas distribués</div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-200">
                <div className="text-3xl font-bold text-amber-700 mb-2">200+</div>
                <div className="text-sm text-gray-700">Soins gratuits offerts</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Projets Spéciaux 2026</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  🏠
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Centre d'Accueil</h4>
                  <p className="text-gray-700 text-sm">
                    Ouverture d'un centre d'accueil pour les personnes sans abri avec hébergement 
                    temporaire et accompagnement vers la réinsertion.
                  </p>
                  <div className="mt-2 bg-amber-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-700 h-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Objectif: 50,000€ • Collecté: 32,500€</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  📚
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Éducation Gratuite</h4>
                  <p className="text-gray-700 text-sm">
                    Programme de cours gratuits de développement personnel et spirituel 
                    pour les personnes en difficulté.
                  </p>
                  <div className="mt-2 bg-amber-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-700 h-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Objectif: 20,000€ • Collecté: 8,000€</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  💊
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Soins Holistiques</h4>
                  <p className="text-gray-700 text-sm">
                    Extension de notre programme de soins énergétiques gratuits pour les 
                    personnes souffrant de maladies chroniques.
                  </p>
                  <div className="mt-2 bg-amber-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-700 h-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Objectif: 15,000€ • Collecté: 12,000€</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de don */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-6 text-center">Faire un Don pour la Charité</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Montant du don</label>
              <div className="grid grid-cols-4 gap-3 mb-3">
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  20€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  50€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  100€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  200€
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900"
                  placeholder="Autre montant"
                  min="5"
                />
                <span className="text-lg">€</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Affectation (optionnel)</label>
              <select className="w-full px-4 py-2 rounded-md text-gray-900">
                <option value="">Où vous en avez le plus besoin</option>
                <option value="accueil">Centre d'Accueil</option>
                <option value="education">Éducation Gratuite</option>
                <option value="soins">Soins Holistiques</option>
                <option value="alimentaire">Aide Alimentaire</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prénom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md text-gray-900"
                placeholder="votre.email@exemple.com"
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm text-amber-50">
                Je souhaite rester anonyme
              </label>
            </div>

            {/* <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm text-amber-50">
                Je souhaite recevoir un reçu fiscal (déduction d'impôt possible)
              </label>
            </div> */}

            <button
              type="submit"
              className="w-full bg-white text-amber-700 py-3 rounded-md hover:bg-amber-50 transition font-medium text-lg"
            >
              Faire un don maintenant
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-amber-100">
            <p>✓ Paiement 100% sécurisé </p>
          </div>
        </div>

        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-amber-900">Merci</span> à tous nos donateurs qui rendent 
            ces actions possibles. Chaque contribution, quelle que soit sa taille, fait une vraie différence.
          </p>
          <p className="text-sm text-gray-600">
            Pour toute question concernant vos dons : charite@grandordreducercle.org
          </p>
        </div>
      </div>
    </div>
  );
}
