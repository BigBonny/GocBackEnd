// Livres.tsx
export function Livres() {
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
          Bibliothèque Ésotérique
        </h1>

        {/* BIBLIOTHEQUE Intro - Enhanced as hero section */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif text-amber-800 mb-4">BIBLIOTHÈQUE</h2>
            <p className="text-2xl italic font-serif text-amber-700 mb-6">
              La matière se recycle, l'esprit se ressource…
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
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
            Notre bibliothèque contient une collection exceptionnelle d'ouvrages ésotériques, 
            hermétiques et philosophiques. Certains textes rares sont réservés aux membres initiés.
          </p>

          <div className="space-y-8">
            {/* Section Alchimie */}
            <div>
              <h2 className="text-2xl font-serif text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                Alchimie & Hermétisme
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Kybalion</h3>
                  <p className="text-sm text-gray-600 mb-2">Les Sept Principes Hermétiques</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">La Table d'Émeraude</h3>
                  <p className="text-sm text-gray-600 mb-2">Hermès Trismégiste - Commentaires</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Mutus Liber</h3>
                  <p className="text-sm text-gray-600 mb-2">Livre muet de l'Alchimie</p>
                  <span className="text-xs text-red-700">🔒 Réservé membres</span>
                </div>
              </div>
            </div>

            {/* Section Kabbale */}
            <div>
              <h2 className="text-2xl font-serif text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                Kabbale & Mystique Juive
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Sepher Yetzirah</h3>
                  <p className="text-sm text-gray-600 mb-2">Livre de la Formation</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Zohar</h3>
                  <p className="text-sm text-gray-600 mb-2">Livre de la Splendeur</p>
                  <span className="text-xs text-red-700">🔒 Réservé membres</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">La Kabbale dévoilée</h3>
                  <p className="text-sm text-gray-600 mb-2">S.L. MacGregor Mathers</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
              </div>
            </div>

            {/* Section Magie */}
            <div>
              <h2 className="text-2xl font-serif text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                Magie Cérémonielle
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">La Clavicule de Salomon</h3>
                  <p className="text-sm text-gray-600 mb-2">Grimoire traditionnel</p>
                  <span className="text-xs text-red-700">🔒 Réservé initiés</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Grand Grimoire</h3>
                  <p className="text-sm text-gray-600 mb-2">Magie évocatoire</p>
                  <span className="text-xs text-red-700">🔒 Réservé initiés</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">La Magie Sacrée d'Abramelin</h3>
                  <p className="text-sm text-gray-600 mb-2">Système de haute magie</p>
                  <span className="text-xs text-red-700">🔒 Réservé initiés</span>
                </div>
              </div>
            </div>

            {/* Section Philosophie */}
            <div>
              <h2 className="text-2xl font-serif text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                Philosophie Ésotérique
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Les Ennéades</h3>
                  <p className="text-sm text-gray-600 mb-2">Plotin - Néoplatonisme</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Corpus Hermeticum</h3>
                  <p className="text-sm text-gray-600 mb-2">Dialogues hermétiques</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">La Doctrine Secrète</h3>
                  <p className="text-sm text-gray-600 mb-2">H.P. Blavatsky - Théosophie</p>
                  <span className="text-xs text-red-700">🔒 Réservé membres</span>
                </div>
              </div>
            </div>

            {/* Section Tarot */}
            <div>
              <h2 className="text-2xl font-serif text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                Tarot & Symbolisme
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Tarot des Bohémiens</h3>
                  <p className="text-sm text-gray-600 mb-2">Papus - Clé universelle</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Méditations sur le Tarot</h3>
                  <p className="text-sm text-gray-600 mb-2">Anonyme - Voie chrétienne</p>
                  <span className="text-xs text-red-700">🔒 Réservé membres</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2">Le Symbolisme du Tarot</h3>
                  <p className="text-sm text-gray-600 mb-2">P.D. Ouspensky</p>
                  <span className="text-xs text-amber-700">📖 Accessible à tous</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Consultation sur Place</h3>
            <p className="text-gray-700 mb-4">
              Les membres peuvent consulter l'intégralité de la bibliothèque dans nos locaux. 
              Ambiance studieuse et propice à la méditation.
            </p>
            <p className="text-sm text-gray-600">
              📍 Accessible sur rendez-vous pour les membres
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Bibliothèque Numérique</h3>
            <p className="text-gray-700 mb-4">
              Accès à notre bibliothèque numérique avec des centaines d'ouvrages en format PDF, 
              accessible 24/7 depuis votre espace membre.
            </p>
            <p className="text-sm text-gray-600">
              💻 Réservé aux membres actifs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}