// Accessoires.tsx
export function Accessoires() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-3">
        <p className="text-sm md:text-base italic font-serif">
          Là où se trouve l'arbre de la connaissance, se trouve le bonheur
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Accessoires Rituels
        </h1>

        {/* BIBLIOTHEQUE Intro */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl font-serif text-amber-800 mb-4">BIBLIOTHÈQUE</h2>
            <p className="text-xl italic font-serif text-amber-700 mb-4">
              La matière se recycle, l'esprit se ressource…
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lieu de connaissances, la Bibliothèque du GOC met à la disposition des membres, 
              des auditeurs affiliés et des sympathisants, sa publication « Mâat », les vidéos 
              et fascicules de ses enseignements, des livres de philosophie, de sagesse, de 
              connaissances sécrètes. Ainsi que les tenues des membres et autres accessoires 
              pour les rites.
            </p>
            <div className="flex justify-end">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
                Formulaire de commande
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
            Les accessoires rituels sont des outils sacrés utilisés dans les pratiques ésotériques 
            et les cérémonies initiatiques. Chaque objet est consacré et chargé énergétiquement 
            selon les traditions hermétiques.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">🕯️</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Bougies Rituelles</h3>
              <p className="text-gray-700 text-sm mb-4">
                Bougies consacrées de différentes couleurs pour les rituels spécifiques : 
                blanc (purification), or (spiritualité), rouge (amour), vert (prospérité).
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Disponible pour membres</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">🔮</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Cristaux & Pierres</h3>
              <p className="text-gray-700 text-sm mb-4">
                Collection de cristaux purifiés et programmés : quartz, améthyste, citrine, 
                obsidienne. Chaque pierre possède ses propriétés énergétiques spécifiques.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Disponible pour membres</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">✨</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Encens Sacrés</h3>
              <p className="text-gray-700 text-sm mb-4">
                Encens traditionnels pour la purification et l'élévation vibratoire : 
                oliban, myrrhe, benjoin, santal. Recettes ancestrales des temples.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Disponible pour membres</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">⚔️</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Épée Rituelle</h3>
              <p className="text-gray-700 text-sm mb-4">
                Épée symbolique utilisée pour tracer les cercles de protection et diriger 
                l'énergie lors des rituels. Forgée selon les traditions hermétiques.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Réservé aux initiés</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">🏺</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Calice Consacré</h3>
              <p className="text-gray-700 text-sm mb-4">
                Coupe sacrée représentant l'élément eau et le principe féminin. 
                Utilisée dans les rituels d'offrande et de communion spirituelle.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Réservé aux initiés</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">📿</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Chapelets & Malas</h3>
              <p className="text-gray-700 text-sm mb-4">
                Chapelets de méditation en bois sacré, pierres semi-précieuses ou graines de rudraksha. 
                108 perles pour la pratique du japa (répétition de mantras).
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Disponible pour membres</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">🪶</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Plumes Rituelles</h3>
              <p className="text-gray-700 text-sm mb-4">
                Plumes d'oiseaux sacrés utilisées pour disperser la fumée d'encens 
                et purifier l'espace rituel. Tradition amérindienne et chamanique.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Disponible pour membres</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">⭐</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Pentacles & Talismans</h3>
              <p className="text-gray-700 text-sm mb-4">
                Pentacles gravés selon les traditions de la magie salomoniennes. 
                Talismans personnalisés chargés selon votre thème astrologique.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Sur commande</span>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl text-amber-700 mb-4 text-center">🎭</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3 text-center">Robes & Vêtements</h3>
              <p className="text-gray-700 text-sm mb-4">
                Robes cérémonielles, capes et vêtements rituels aux couleurs de l'Ordre. 
                Confectionnés en tissus naturels selon la tradition.
              </p>
              <div className="text-center">
                <span className="text-amber-700 font-semibold">Réservé aux membres</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Commander des Accessoires</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Les accessoires rituels sont disponibles à l'achat pour les membres du GOC. 
            Chaque objet est consacré individuellement avant livraison.
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            Accéder à la boutique
          </button>
          <p className="text-sm text-amber-100 mt-4">
            * Connexion requise - Réservé aux membres initiés
          </p>
        </div>
      </div>
    </div>
  );
}