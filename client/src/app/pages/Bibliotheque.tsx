export function Bibliotheque() {
  const books = [
    { title: "Les Mystères Hermétiques", category: "Hermétisme", level: "Débutant" },
    { title: "L'Alchimie Intérieure", category: "Alchimie", level: "Intermédiaire" },
    { title: "Rituels Sacrés", category: "Pratique", level: "Avancé" },
    { title: "Symbolisme Universel", category: "Symbolisme", level: "Tous niveaux" },
    { title: "Méditation Transcendante", category: "Méditation", level: "Débutant" },
    { title: "Les Arcanes Majeurs", category: "Tarot", level: "Intermédiaire" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Bibliothèque
        </h1>

        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Accédez à notre collection d'ouvrages ésotériques, de textes sacrés et de 
          ressources spirituelles soigneusement sélectionnées pour votre évolution.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-md mb-4 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-2">{book.title}</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{book.category}</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                  {book.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-serif text-amber-900 mb-4">
            Accès réservé aux membres
          </h2>
          <p className="text-gray-700 mb-6">
            Devenez membre pour accéder à l'intégralité de notre bibliothèque ésotérique.
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium">
            Devenir Membre
          </button>
        </div>
      </div>
    </div>
  );
}
