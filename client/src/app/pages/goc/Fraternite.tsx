export function GOCFraternite() {
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
          La Fraternité Universelle
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Un Lien qui Transcende</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            La fraternité au sein du Grand Ordre du Cercle n'est pas une simple camaraderie, 
            mais un lien spirituel profond qui unit les âmes dans leur quête de lumière et de connaissance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Entraide Spirituelle</h3>
                  <p className="text-gray-700 text-sm">
                    Les frères et sœurs s'entraident dans leur cheminement initiatique
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Partage de Connaissances</h3>
                  <p className="text-gray-700 text-sm">
                    Transmission des savoirs ésotériques entre membres initiés
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Soutien Mutuel</h3>
                  <p className="text-gray-700 text-sm">
                    Présence et accompagnement dans les épreuves de la vie
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Rituels Fraternels</h3>
                  <p className="text-gray-700 text-sm">
                    Cérémonies renforçant les liens entre les membres de l'Ordre
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Réseau International</h3>
                  <p className="text-gray-700 text-sm">
                    Connexions avec des membres dans le monde entier
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-2xl">⚜</span>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Méditations Collectives</h3>
                  <p className="text-gray-700 text-sm">
                    Pratiques spirituelles en groupe pour amplifier l'énergie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 border-2 border-amber-200 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Les Commanderies Fraternelles</h2>
          <p className="text-gray-700 mb-6">
            Chaque région dispose de sa commanderie, lieu sacré où se réunissent les membres 
            pour cultiver la fraternité, pratiquer les rituels et partager les enseignements.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>Réunions mensuelles de méditation et d'étude</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>Célébrations des solstices et équinoxes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>Repas fraternels et moments de convivialité</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span>Bibliothèque partagée d'ouvrages ésotériques</span>
            </li>
          </ul>
        </div>

        <div className="text-center bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-serif mb-4">Rejoignez Notre Fraternité</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Devenez membre du Grand Ordre du Cercle et découvrez la profondeur 
            d'une fraternité authentique basée sur l'amour, la sagesse et le service.
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
