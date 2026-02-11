// Videos.tsx
export function BibliothèqueVideos() {
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
          Vidéothèque Ésotérique
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
            Notre vidéothèque propose des conférences, rituels filmés, méditations guidées 
            et enseignements du Grand Maître. Contenu exclusif pour les membres du GOC.
          </p>

          {/* Catégories de vidéos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Conférences</h3>
              <p className="text-gray-700 text-sm mb-4">
                Conférences magistrales sur l'ésotérisme, l'alchimie, la Kabbale et 
                la philosophie hermétique par nos maîtres initiés.
              </p>
              <div className="text-amber-700 font-semibold text-sm">45+ vidéos</div>
              <div className="text-xs text-gray-600 mt-1">🔒 Accès membres</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Méditations Guidées</h3>
              <p className="text-gray-700 text-sm mb-4">
                Séances de méditation guidée pour le développement spirituel, 
                l'activation des chakras et la connexion au divin.
              </p>
              <div className="text-amber-700 font-semibold text-sm">30+ vidéos</div>
              <div className="text-xs text-gray-600 mt-1">✅ Accès libre</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Rituels Filmés</h3>
              <p className="text-gray-700 text-sm mb-4">
                Enregistrements de rituels initiatiques, cérémonies saisonnières 
                et pratiques ésotériques transmises dans l'Ordre.
              </p>
              <div className="text-amber-700 font-semibold text-sm">25+ vidéos</div>
              <div className="text-xs text-gray-600 mt-1">🔒 Initiés uniquement</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Cours Théoriques</h3>
              <p className="text-gray-700 text-sm mb-4">
                Cours complets de formation sur l'ésotérisme, les sciences occultes, 
                la philosophie et le symbolisme sacré.
              </p>
              <div className="text-amber-700 font-semibold text-sm">60+ vidéos</div>
              <div className="text-xs text-gray-600 mt-1">🔒 Accès membres</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Pratiques Énergétiques</h3>
              <p className="text-gray-700 text-sm mb-4">
                Exercices pratiques de développement des facultés psychiques, 
                travail énergétique et magnétisme.
              </p>
              <div className="text-amber-700 font-semibold text-sm">35+ vidéos</div>
              <div className="text-xs text-gray-600 mt-1">🔒 Accès membres</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Enseignements Secrets</h3>
              <p className="text-gray-700 text-sm mb-4">
                Enseignements réservés transmis par le Grand Maître sur les 
                mystères profonds de la tradition hermétique.
              </p>
              <div className="text-amber-700 font-semibold text-sm">20+ vidéos</div>
              <div className="text-xs text-gray-600 mt-1">🔒 Maîtres uniquement</div>
            </div>
          </div>

          {/* Vidéos récentes */}
          <div className="border-t-2 border-amber-200 pt-8">
            <h2 className="text-2xl font-serif text-amber-800 mb-6">Dernières Publications</h2>
            <div className="space-y-4">
              <div className="flex gap-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="w-32 h-20 bg-amber-200 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">▶️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Introduction à la Kabbale pratique
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Conférence du Grand Maître sur les fondements de la Kabbale et son application dans la vie quotidienne.
                  </p>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <span>⏱️ 1h 25min</span>
                    <span>📅 Janvier 2026</span>
                    <span>🔒 Membres</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="w-32 h-20 bg-amber-200 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">▶️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Méditation de pleine lune
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Méditation guidée spéciale pour se connecter aux énergies lunaires et recevoir l'illumination.
                  </p>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <span>⏱️ 45min</span>
                    <span>📅 Janvier 2026</span>
                    <span>✅ Accès libre</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="w-32 h-20 bg-amber-200 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">▶️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Rituel du solstice d'hiver 2025
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Enregistrement complet du rituel cérémoniel célébré lors du solstice d'hiver à la Commanderie centrale.
                  </p>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <span>⏱️ 2h 10min</span>
                    <span>📅 Décembre 2025</span>
                    <span>🔒 Initiés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 text-center">
            Notre Collection Vidéo
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">200+</div>
              <div className="text-sm text-gray-700">Vidéos au total</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">300h</div>
              <div className="text-sm text-gray-700">De contenu exclusif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">4K</div>
              <div className="text-sm text-gray-700">Qualité HD & 4K</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">24/7</div>
              <div className="text-sm text-gray-700">Accès illimité</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Accéder à la Vidéothèque</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Devenez membre pour accéder à l'intégralité de notre collection de vidéos 
            et bénéficier de nouveaux contenus chaque mois.
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
            S'inscrire maintenant
          </button>
        </div>
      </div>
    </div>
  );
}