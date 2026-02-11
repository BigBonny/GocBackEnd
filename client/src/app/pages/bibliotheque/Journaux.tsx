// Journeaux.tsx
export function Journaux() {
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
          Journaux & Publications
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
            Le Grand Ordre du Cercle publie régulièrement des journaux, bulletins et revues 
            destinés à la formation continue de ses membres et à la diffusion des savoirs ésotériques.
          </p>

          {/* Journal Principal */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-serif mb-2">La Lumière du Cercle</h2>
                <p className="text-amber-100">Journal officiel du GOC - Publication trimestrielle</p>
              </div>
              <div className="text-4xl">📰</div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-amber-50">
              <div>
                <h3 className="font-semibold mb-2">Au sommaire :</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Enseignements ésotériques approfondis</li>
                  <li>• Rituels et pratiques saisonnières</li>
                  <li>• Témoignages de membres</li>
                  <li>• Actualités de l'Ordre</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Format :</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 40-60 pages illustrées</li>
                  <li>• Version papier et numérique</li>
                  <li>• Archives complètes depuis 1985</li>
                  <li>• Réservé aux membres</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Autres Publications */}
          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Bulletin de la Fraternité
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Bulletin mensuel destiné à maintenir le lien entre les membres. 
                    Informations sur les rencontres, séminaires et événements à venir.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📅 Mensuel</span>
                    <span>📄 12-16 pages</span>
                    <span>🔒 Membres uniquement</span>
                  </div>
                </div>
                <div className="text-3xl ml-4">📋</div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Cahiers d'Études Hermétiques
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Revue académique approfondie sur des thèmes ésotériques spécifiques : 
                    alchimie, Kabbale, astrologie, symbolisme, philosophie mystique.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📅 Bimestriel</span>
                    <span>📄 60-80 pages</span>
                    <span>🔒 Membres initiés</span>
                  </div>
                </div>
                <div className="text-3xl ml-4">📚</div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Lettres du Grand Maître
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Enseignements directs du Grand Maître de l'Ordre, transmettant des 
                    connaissances profondes et des orientations spirituelles pour les membres avancés.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📅 Trimestriel</span>
                    <span>📄 8-12 pages</span>
                    <span>🔒 Initiés de 2ème degré</span>
                  </div>
                </div>
                <div className="text-3xl ml-4">✉️</div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    Almanach Ésotérique
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Publication annuelle contenant les dates importantes, phases lunaires, 
                    positions planétaires, calendrier des rituels et pratiques recommandées.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📅 Annuel</span>
                    <span>📄 120 pages</span>
                    <span>✅ Accessible à tous</span>
                  </div>
                </div>
                <div className="text-3xl ml-4">📖</div>
              </div>
            </div>
          </div>
        </div>

        {/* Archives */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6">Archives Historiques</h2>
          <p className="text-gray-700 mb-6">
            Accédez aux archives complètes de nos publications depuis la fondation de l'Ordre. 
            Des décennies de savoir ésotérique à portée de main.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">150+</div>
              <div className="text-sm text-gray-700">Numéros de La Lumière du Cercle</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">400+</div>
              <div className="text-sm text-gray-700">Bulletins mensuels</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">40+</div>
              <div className="text-sm text-gray-700">Années d'archives</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Accéder aux Publications</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Devenez membre du Grand Ordre du Cercle pour recevoir nos publications 
            et accéder aux archives complètes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-amber-700 px-8 py-3 rounded-md hover:bg-amber-50 transition font-medium">
              Devenir membre
            </button>
            <button className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition font-medium border-2 border-white">
              Consulter les archives
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}