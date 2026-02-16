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
          Don de Charité
        </h1>

        {/* Donation info */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-50 shadow-xl rounded-lg p-8 mb-8 border-2 border-amber-300 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">Votre Générosité en Action</h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Le minimum ou plus de votre donation est une générosité qui nous permet de planifier nos actions 
            d'aide et de solidarité envers des personnes qui en ont besoin.
          </p>
          <div className="inline-block bg-white rounded-lg px-8 py-4 shadow-md border-2 border-amber-400">
            <p className="text-sm text-gray-600 mb-2">Don de Charité minimum</p>
            <p className="text-4xl font-bold text-amber-900">100€</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Un Acte de Grande Générosité</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Le don de charité représente un engagement significatif envers les valeurs d'entraide et de solidarité 
            du Grand Ordre du Cercle. Par ce geste généreux, vous permettez de soutenir durablement nos actions 
            caritatives et d'aider concrètement ceux qui en ont le plus besoin.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Impact de votre don de charité</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Aide directe aux personnes en grande difficulté</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Financement de programmes de solidarité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Soutien aux familles dans le besoin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Actions humanitaires concrètes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">🤲</span>
                  <span>Aide d'urgence lors de crises</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Reconnaissance spéciale</h3>
              <p className="text-gray-700 mb-4">
                En tant que donateur charitable, vous bénéficiez d'une reconnaissance particulière :
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Mention au Cercle des Bienfaiteurs (si souhaité)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Rapport annuel sur l'utilisation des fonds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Invitation aux événements caritatifs de l'Ordre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Certificat de reconnaissance (sur demande)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Reçu fiscal pour déduction d'impôts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-serif mb-4 text-center">Exemples d'Actions Financées</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">🍞</div>
                <div className="text-sm text-amber-50">Aide alimentaire aux familles</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">🏥</div>
                <div className="text-sm text-amber-50">Soutien médical d'urgence</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-sm text-amber-50">Bourses d'études pour enfants</div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif mb-4 text-center">Faire un Don de Charité</h2>
          <p className="text-center text-amber-50 mb-8 max-w-2xl mx-auto">
            Montant minimum : 100€. Votre générosité change des vies.
          </p>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-center">
                Montant de votre don charitable (minimum 100€)
              </label>
              <div className="grid grid-cols-5 gap-3 mb-3">
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  100€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  250€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  500€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  1000€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  2000€
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 text-lg"
                  placeholder="Ou entrez un montant (min. 100€)"
                  min="100"
                />
                <span className="text-lg font-bold">€</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Type de don</label>
              <select className="w-full px-4 py-2 rounded-md text-gray-900">
                <option value="">Don unique</option>
                <option value="mensuel">Don mensuel récurrent</option>
                <option value="trimestriel">Don trimestriel</option>
                <option value="annuel">Don annuel</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prénom *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nom *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="Votre nom"
                  required
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

            <div>
              <label className="block text-sm font-medium mb-2">
                Message (optionnel)
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md text-gray-900 h-24"
                placeholder="Partagez vos motivations ou dédiez votre don..."
              ></textarea>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" id="recu" />
                <label htmlFor="recu" className="text-sm text-amber-50">
                  Je souhaite recevoir un reçu fiscal
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" id="bienfaiteur" />
                <label htmlFor="bienfaiteur" className="text-sm text-amber-50">
                  J'accepte d'être mentionné au Cercle des Bienfaiteurs
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-amber-700 py-4 rounded-md hover:bg-amber-50 transition font-medium text-lg"
            >
              🤲 Faire mon don de charité (min. 100€)
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-amber-100">
            <p>✓ Paiement 100% sécurisé • ✓ Reçu fiscal disponible</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-serif text-amber-900 mb-6 text-center">Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-amber-800 mb-3">Siège</h4>
              <p className="text-gray-700">
                B.P. 13241<br />
                Yaoundé - Cameroun
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-amber-800 mb-3">France</h4>
              <p className="text-gray-700">
                Richard Mbouma Kohomm<br />
                11 av. Joseph Rollo<br />
                78320 La Verrière – France<br />
                <a href="mailto:mkohomm@gmail.com" className="text-amber-600 hover:text-amber-700">
                  mkohomm@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-amber-900 mb-4">Merci pour Votre Grande Générosité</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Votre don de charité fait une différence concrète dans la vie de nombreuses personnes. 
            Grâce à votre générosité, nous pouvons continuer nos actions d'aide et de solidarité 
            auprès de ceux qui en ont le plus besoin. Que votre geste soit béni.
          </p>
          <p className="text-amber-700 font-semibold mt-6 text-lg">
            🙏 Avec notre plus profonde gratitude 🙏
          </p>
        </div>
      </div>
    </div>
  );
}