export function CommanderiesFraternelles() {
  const commanderies = [
    { nom: "Commanderie de Paris", ville: "Paris", membres: 45 },
    { nom: "Commanderie de Lyon", ville: "Lyon", membres: 32 },
    { nom: "Commanderie de Bordeaux", ville: "Bordeaux", membres: 28 },
    { nom: "Commanderie de Marseille", ville: "Marseille", membres: 38 },
    { nom: "Commanderie de Toulouse", ville: "Toulouse", membres: 25 },
    { nom: "Commanderie de Nantes", ville: "Nantes", membres: 22 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Commanderies Fraternelles
        </h1>

        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Nos commanderies locales sont des centres de rencontre et de pratique spirituelle 
          où les membres se rassemblent pour partager, apprendre et progresser ensemble.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {commanderies.map((cmd, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-16 w-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚜️</span>
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-2 text-center">{cmd.nom}</h3>
              <div className="text-center text-gray-600 space-y-1">
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span> {cmd.ville}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>👥</span> {cmd.membres} membres
                </p>
              </div>
              <button className="w-full mt-4 bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition">
                Contacter
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">
            Créer une Nouvelle Commanderie
          </h2>
          <p className="text-gray-700 mb-6">
            Intéressé à établir une commanderie dans votre région ? Contactez-nous pour en savoir plus.
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium">
            Nous Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
