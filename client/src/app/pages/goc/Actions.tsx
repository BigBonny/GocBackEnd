export function GOCActions() {
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
          Actions du GOC
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6">Nos Actions dans le Monde</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Séminaires Initiatiques</h3>
              <p className="text-gray-700">
                Organisation de séminaires et retraites spirituelles permettant aux membres 
                d'approfondir leur cheminement ésotérique et de vivre des expériences initiatiques transformatrices.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Conférences Publiques</h3>
              <p className="text-gray-700">
                Diffusion des savoirs ésotériques et philosophiques à travers des conférences 
                ouvertes au public sur des thèmes spirituels, mystiques et métaphysiques.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Publications</h3>
              <p className="text-gray-700">
                Édition de livres, journaux et documents pédagogiques préservant et transmettant 
                les enseignements traditionnels de l'ésotérisme occidental et oriental.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Rituels Collectifs</h3>
              <p className="text-gray-700">
                Célébration des rituels saisonniers et initiatiques permettant aux membres 
                de se connecter aux forces cosmiques et de renforcer l'égrégore de l'Ordre.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-8 border-2 border-amber-300">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">Programme Annuel</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">Printemps</span>
              <span>Rituels d'équinoxe, séminaire de renouveau spirituel</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">Été</span>
              <span>Retraite estivale, célébration du solstice, initiations</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">Automne</span>
              <span>Séminaires philosophiques, rituels de moisson spirituelle</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-amber-900 min-w-[100px]">Hiver</span>
              <span>Solstice d'hiver, méditations profondes, enseignements secrets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
