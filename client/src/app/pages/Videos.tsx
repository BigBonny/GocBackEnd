export function Videos() {
  const videos = [
    { title: "Introduction au GOC", duration: "15:30" },
    { title: "Philosophie Hermétique", duration: "22:45" },
    { title: "Méditation Guidée", duration: "18:20" },
    { title: "Symbolisme Ésotérique", duration: "25:10" },
    { title: "Rituels Sacrés", duration: "30:00" },
    { title: "Témoignages de Membres", duration: "12:15" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Vidéos
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <span className="text-6xl">🎥</span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-amber-900 mb-2">{video.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{video.duration}</span>
                  <button className="text-amber-700 hover:text-amber-800 text-sm font-medium">
                    Voir →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">
            Accès Complet pour les Membres
          </h2>
          <p className="text-gray-700 mb-6">
            Devenez membre pour accéder à l'intégralité de notre bibliothèque vidéo.
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium">
            Devenir Membre
          </button>
        </div>
      </div>
    </div>
  );
}
