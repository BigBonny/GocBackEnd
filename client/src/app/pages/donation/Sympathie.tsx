export function DonationSympathie() {
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
          Don de Sympathie
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Un Geste du Cœur</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Le don de sympathie est un geste libre et spontané qui ne requiert aucune contrepartie. 
            C'est une manifestation de votre soutien et de votre connexion avec les valeurs du Grand Ordre du Cercle, 
            sans attente ni obligation.
          </p>

          <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-700 p-6 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Une Liberté Totale</h3>
            <p className="text-gray-700">
              Contrairement aux autres formes de donation, le don de sympathie est entièrement libre : 
              montant libre, fréquence libre, anonymat possible. C'est simplement un moyen d'exprimer 
              votre appréciation pour le travail de l'Ordre et de contribuer, à votre mesure, 
              à la préservation de la tradition ésotérique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Pourquoi faire un don de sympathie ?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">💛</span>
                  <span>Vous appréciez notre mission et nos valeurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">💛</span>
                  <span>Vous souhaitez soutenir sans vous engager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">💛</span>
                  <span>Vous voulez offrir un geste ponctuel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">💛</span>
                  <span>Vous ne pouvez pas devenir membre mais voulez aider</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 text-xl">💛</span>
                  <span>Vous ressentez une connexion spirituelle avec l'Ordre</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Comment est-il utilisé ?</h3>
              <p className="text-gray-700 mb-4">
                Les dons de sympathie contribuent globalement au fonctionnement de l'Ordre. 
                Ils sont utilisés là où le besoin se fait le plus sentir :
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Amélioration de nos services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Développement de nouveaux contenus gratuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Aides ponctuelles aux membres en difficulté</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Projets spéciaux et opportunités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Fonds de réserve pour les imprévus</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-100 rounded-lg p-6 border-2 border-amber-300 mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-4 text-center">
              Aucune Contrepartie, Juste de la Gratitude
            </h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Nous ne vous offrons rien en échange de votre don de sympathie, si ce n'est notre 
              profonde gratitude. Vous ne recevrez pas de newsletter spéciale, pas d'invitation 
              exclusive, pas de reconnaissance publique (sauf si vous le souhaitez). C'est un acte 
              pur de générosité et de bienveillance.
            </p>
          </div>
        </div>

        {/* Témoignages */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 text-center">
            Pourquoi ils ont fait un don de sympathie
          </h2>
          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <p className="text-gray-700 italic mb-3">
                "Je ne suis pas membre du GOC mais je lis vos publications gratuites depuis 2 ans. 
                Elles m'ont beaucoup apporté et je voulais simplement dire merci."
              </p>
              <p className="text-sm text-amber-900 font-semibold">— Marie L., sympathisante</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <p className="text-gray-700 italic mb-3">
                "Votre travail de préservation des traditions ésotériques est précieux. 
                Je ne peux pas m'engager pleinement mais je voulais contribuer à ma façon."
              </p>
              <p className="text-sm text-amber-900 font-semibold">— Jean-Marc D., ami de l'Ordre</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <p className="text-gray-700 italic mb-3">
                "J'étais membre il y a quelques années et j'ai dû arrêter pour raisons personnelles. 
                Ce petit don est ma façon de rester connectée à la fraternité."
              </p>
              <p className="text-sm text-amber-900 font-semibold">— Sophie R., ancienne membre</p>
            </div>
          </div>
        </div>

        {/* Formulaire de don */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-4 text-center">Faire un Don de Sympathie</h2>
          <p className="text-center text-amber-50 mb-8 max-w-2xl mx-auto">
            Choisissez le montant qui vous parle, aucun montant n'est trop petit. 
            Chaque geste compte et est apprécié.
          </p>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-center">
                Montant de votre don (montant libre)
              </label>
              <div className="grid grid-cols-5 gap-3 mb-3">
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  5€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  10€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  20€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  50€
                </button>
                <button type="button" className="bg-white/20 hover:bg-white/30 border-2 border-white py-3 rounded-md transition">
                  100€
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 text-lg"
                  placeholder="Ou entrez un montant libre"
                  min="1"
                />
                <span className="text-lg font-bold">€</span>
              </div>
            </div>

            <div className="border-t border-white/30 pt-6">
              <p className="text-sm text-amber-100 mb-4 text-center">
                Les informations ci-dessous sont optionnelles
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom (optionnel)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nom (optionnel)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">Email (optionnel)</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                  placeholder="votre.email@exemple.com"
                />
                <p className="text-xs text-amber-100 mt-1">
                  Uniquement pour un reçu de confirmation
                </p>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Un message pour nous ? (optionnel)
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-md text-gray-900 h-24"
                  placeholder="Laissez-nous un petit mot si vous le souhaitez..."
                ></textarea>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" id="anonyme" />
                <label htmlFor="anonyme" className="text-sm text-amber-50">
                  Je préfère rester totalement anonyme
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" id="mention" />
                <label htmlFor="mention" className="text-sm text-amber-50">
                  Vous pouvez mentionner mon prénom dans vos remerciements publics
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-amber-700 py-4 rounded-md hover:bg-amber-50 transition font-medium text-lg"
            >
              💛 Envoyer mon don de sympathie
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-amber-100">
            <p>✓ Paiement 100% sécurisé</p>
          </div>
        </div>

        <div className="mt-8 bg-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-amber-900 mb-4">Du fond du cœur, merci</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Chaque don de sympathie, quel que soit son montant, est reçu avec une profonde gratitude. 
            Ces gestes spontanés de générosité nous rappellent que notre mission touche les cœurs et 
            contribue réellement au bien-être spirituel de nombreuses personnes. Merci d'être là.
          </p>
          <p className="text-amber-700 font-semibold mt-6 text-lg">
            🙏 Avec toute notre reconnaissance 🙏
          </p>
        </div>
      </div>
    </div>
  );
}
