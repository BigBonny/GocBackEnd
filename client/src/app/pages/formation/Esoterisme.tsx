export function Esoterisme() {
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
          Formation en Ésotérisme
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Les Sciences Occultes</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            L'ésotérisme désigne l'ensemble des connaissances secrètes et des pratiques spirituelles 
            transmises de maître à disciple depuis la nuit des temps. Notre formation complète vous 
            initie aux mystères cachés de l'univers et aux lois qui régissent le plan subtil.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Symbolisme Sacré</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Interprétation des symboles hermétiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Géométrie sacrée et nombres mystiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Alphabets magiques et sigils</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Alchimie Spirituelle</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Grand Œuvre alchimique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Transmutation intérieure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Pierre philosophale et élixir de vie</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Kabbale & Arbre de Vie</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Étude des 10 sephiroth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Chemins de l'Arbre de Vie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Guématrie et numérologie hébraïque</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Tarot & Divination</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Arcanes majeurs et mineurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Arts divinatoires traditionnels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>Développement de l'intuition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif mb-4">Programme de Formation</h2>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Niveau 1 - Apprenti (12 mois)</h3>
              <p className="text-sm text-amber-50">
                Fondamentaux de l'ésotérisme, symbolisme, méditation, premiers rituels
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Niveau 2 - Compagnon (18 mois)</h3>
              <p className="text-sm text-amber-50">
                Alchimie, Kabbale, astrologie ésotérique, travail énergétique avancé
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Niveau 3 - Maître (24 mois)</h3>
              <p className="text-sm text-amber-50">
                Enseignements secrets, haute magie, initiation aux mystères profonds
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium">
            S'inscrire à la formation
          </button>
        </div>
      </div>
    </div>
  );
}
