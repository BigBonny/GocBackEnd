import { Link } from "react-router-dom";
import logo from "@/assets/logoGOC.png";
import africaMap from "@/assets/maps/africa.png";
import americasMap from "@/assets/maps/americas.png";
import asiaMap from "@/assets/maps/asia.png";
import europeMap from "@/assets/maps/europe.png";
import mideastMap from "@/assets/maps/mideast.png";
import oceaniaMap from "@/assets/maps/oceania.png";

export function CommanderiesFraternelles() {
  const commanderies = [
    { nom: "Commanderies Afriques", ville: "Yaoundé", membres: 54, map: africaMap, flag:'🌍' },
    { nom: "Commanderies Ameriques", ville: "Boston", membres: 35, map: americasMap, flag:'🌎' },
    { nom: "Commanderies Asie", ville: " ", membres: 48, map: asiaMap, flag:'🌏' },
    { nom: "Commanderies Europe", ville: "Paris", membres: 44, map: europeMap, flag:'🇪🇺' },
    { nom: "Commanderies Moyen-Orient", ville: " ", membres: 20, map: mideastMap, flag:'🕌' },
    { nom: "Commanderies Oceanie", ville: "Australie", membres: 14, map: oceaniaMap, flag:'🏝️' },
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
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative group flex flex-col"
            >
              {/* Map Background */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${cmd.map})` }}
              />
              
              <div className="relative z-10 p-6 flex flex-col flex-grow">
                <div className="h-20 w-20 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden bg-white/80 backdrop-blur-sm shadow-md">
                  <img 
                    src={logo} 
                    alt="Logo GOC" 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-serif text-amber-900 mb-2 text-center">{cmd.nom}</h3>
                
                <div className="text-center text-gray-600 space-y-1 flex-grow">
                  <p className="flex items-center justify-center gap-2 font-medium min-h-[1.5rem]">
                    {cmd.ville.trim() || "\u00A0"}
                  </p>
                  <p className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-amber-600">{cmd.flag}</span> {cmd.membres} membres
                  </p>
                </div>
                
                <Link 
                  to="/contact"
                  className="w-full mt-4 bg-amber-700 text-white py-2 rounded-md hover:bg-amber-800 transition shadow-md text-center block"
                >
                  Contacter
                </Link>
              </div>
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
          <Link 
            to="/contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </div>
  );
}