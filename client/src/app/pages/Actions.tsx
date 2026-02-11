export function Actions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Nos Actions
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-2xl font-serif text-amber-900 mb-3">Actions Humanitaires</h3>
            <p className="text-gray-700">
              Le GOC s'engage dans diverses actions caritatives et humanitaires, 
              guidé par les principes de compassion et de service désintéressé.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-2xl font-serif text-amber-900 mb-3">Préservation du Savoir</h3>
            <p className="text-gray-700">
              Nous œuvrons à la préservation et la transmission des connaissances ésotériques 
              ancestrales pour les générations futures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-3">🕊️</div>
            <h3 className="text-2xl font-serif text-amber-900 mb-3">Promotion de la Paix</h3>
            <p className="text-gray-700">
              Nous promouvons la paix intérieure et collective à travers nos enseignements 
              et pratiques spirituelles.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-2xl font-serif text-amber-900 mb-3">Écologie Spirituelle</h3>
            <p className="text-gray-700">
              Nous encourageons une relation harmonieuse avec la nature et l'environnement, 
              en accord avec les lois universelles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
