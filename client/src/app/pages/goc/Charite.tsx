export function GOCCharite() {
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
          Charité & Œuvres Sociales
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Le Service Désintéressé</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Au cœur de notre enseignement ésotérique se trouve le principe du service désintéressé. 
            La vraie sagesse ne s'acquiert pas seulement par l'étude, mais aussi par l'action compassionnée 
            envers nos semblables.
          </p>

          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Assistance Spirituelle</h3>
              <p className="text-gray-700">
                Accompagnement spirituel gratuit pour les personnes en détresse morale ou existentielle. 
                Nos membres formés offrent écoute, conseil et soutien énergétique.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Aide Matérielle</h3>
              <p className="text-gray-700">
                Distribution d'aide matérielle aux familles dans le besoin : nourriture, vêtements, 
                soutien financier ponctuel pour les situations d'urgence.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Éducation Gratuite</h3>
              <p className="text-gray-700">
                Cours gratuits de philosophie, méditation et développement personnel pour les personnes 
                ne pouvant accéder aux enseignements payants.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Soins Énergétiques</h3>
              <p className="text-gray-700">
                Séances de soins énergétiques et de guérison holistique offertes gratuitement 
                aux personnes souffrant de maladies ou de déséquilibres.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Participez à nos Œuvres</h2>
          <p className="mb-6">
            Chaque membre du GOC consacre du temps et des ressources aux œuvres de charité. 
            Rejoignez-nous dans cette mission de service et de compassion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-amber-700 px-6 py-3 rounded-md hover:bg-amber-50 transition font-medium">
              Faire un don
            </button>
            <button className="bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-900 transition font-medium border-2 border-white">
              Devenir bénévole
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
