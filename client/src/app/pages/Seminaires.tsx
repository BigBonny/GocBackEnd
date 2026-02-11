import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Seminaires() {
  const seminaires = [
    { title: "Initiation aux Mystères", date: "15-17 Mars 2026", lieu: "Prieuré de Lyon" },
    { title: "Alchimie et Transformation", date: "22-24 Avril 2026", lieu: "Prieuré de Bordeaux" },
    { title: "Méditation Avancée", date: "13-15 Mai 2026", lieu: "Prieuré de Paris" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Nos Séminaires
        </h1>

        <div className="mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1659439902271-8a310f0edeca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBzZW1pbmFyJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjkwMTI4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Séminaires"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {seminaires.map((sem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-serif text-amber-900 mb-3">{sem.title}</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p className="flex items-center gap-2">
                  <span>📅</span> {sem.date}
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> {sem.lieu}
                </p>
              </div>
              <button className="w-full bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition">
                S'inscrire
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">
            Retraites et Ateliers Spécialisés
          </h2>
          <p className="text-gray-700 mb-6">
            Participez à nos séminaires intensifs pour approfondir vos connaissances et pratiques spirituelles.
          </p>
        </div>
      </div>
    </div>
  );
}
