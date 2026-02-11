import { Link } from "react-router-dom";

export function Organisation() {
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
          Organisation du GOC
        </h1>

        {/* Introduction */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-4">GOC</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Le Grand Ordre du Cercle est structuré autour de :
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-1">4</div>
              <div className="text-sm font-semibold text-amber-900">Piliers</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-1">7</div>
              <div className="text-sm font-semibold text-amber-900">Grades</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-1">1</div>
              <div className="text-sm font-semibold text-amber-900">Règle</div>
            </div>
          </div>
        </div>

        {/* Piliers */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            Piliers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">I – L'Initiation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Formation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Perfectionnement</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">II – Offices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Rites</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Cérémonies</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">III – La Charité</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Œuvres caritatives</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Donations</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">IV – Mutualité</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Solidarité des initiés</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Appuis financiers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Règles */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            Règles du GOC
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">I</span>
              <span className="text-gray-700">Croyance au Grand Esprit Divin</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">II</span>
              <span className="text-gray-700">Fraternité initiatique et Devoir de solidarité</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">III</span>
              <span className="text-gray-700">Idéal d'Amour, de vérité, de justice et de paix</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">IV</span>
              <span className="text-gray-700">Perfectionnement des membres et de l'humanité</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">V</span>
              <span className="text-gray-700">Pratique du Rituel et du Symbolisme</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">VI</span>
              <span className="text-gray-700">Respect des Opinions et Croyances</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">VII</span>
              <span className="text-gray-700">Serment sur les Symboles sacrés</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">VIII</span>
              <span className="text-gray-700">Rassemblement et travail dans les commanderies</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">IX</span>
              <span className="text-gray-700">Honorabilité, Loyauté et discrétion</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">X</span>
              <span className="text-gray-700">Amour de la Patrie, respect des lois, respect des Autorités constituées</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">XI</span>
              <span className="text-gray-700">Comportement sage et digne</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-amber-700 font-bold min-w-[24px]">XII</span>
              <span className="text-gray-700">Aide et Protection mutuelle</span>
            </div>
          </div>
        </div>

        {/* Organisation */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            Organisation du GOC
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Echelon 1 : le Cercle des frères</h3>
              <p className="text-gray-700">Le CF réunit une communauté d'un maximum de 770 frères</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Echelon 2 : le District</h3>
              <p className="text-gray-700">Le District réunit l'ensemble des Cercles des Frères au niveau d'un département</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Echelon 3 : la Commanderie</h3>
              <p className="text-gray-700">La Commanderie réunit l'ensemble des Districts au niveau de la région</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Echelon 4 : le Gouvernorat</h3>
              <p className="text-gray-700">Le Gouvernorat réunit l'ensemble des Commanderies au niveau d'un pays</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-4 bg-amber-50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Echelon 5 : Le Primat Suprême</h3>
              <p className="text-gray-700">Le Primat Suprême est l'Instance suprême du GOC</p>
            </div>
          </div>
        </div>

        {/* Grades */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            Grades
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {["Apprenti", "Compagnon", "Officier", "Honorable", "Vénérable", "Maître", "Grand-maître"].map((grade, idx) => (
              <div key={idx} className="bg-amber-50 px-4 py-2 rounded-full border border-amber-200 text-amber-900 font-medium">
                {grade}
              </div>
            ))}
          </div>
        </div>

        {/* Administration */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
            Administration
          </h2>
          
          <div className="space-y-8">
            {/* Cercle */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">1) Le Cercle</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'Assemblée des frères</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Vénérable</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Secrétariat</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> La Trésorerie</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'intendance</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'Officium</li>
              </ul>
            </div>

            {/* District */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">2) Le District</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Conseil du District</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Maître</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Secrétariat</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> La Trésorerie</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'intendance</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'Officium</li>
              </ul>
            </div>

            {/* Commanderie */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">3) La Commanderie</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Conseil de la Commanderie</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Commandeur</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Secrétariat</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> La Trésorerie</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'intendance</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'Officium</li>
              </ul>
            </div>

            {/* Gouvernorat */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">4) Le Gouvernorat/Légat</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Cénacle</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Grand-Maître</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Le Secrétariat</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> La Trésorerie</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'intendance</li>
                <li className="flex items-center gap-2"><span className="text-amber-600">•</span> L'Officium</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gouvernance mondiale */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-serif mb-6 border-b border-amber-400 pb-2">
            La Gouvernance mondiale du GOC
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">Le Congrès</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">Le Cénacle Suprême</span>
                <span className="block text-amber-100 text-sm">(Conseil d'Administration du GOC)</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">Le Primat du GOC</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">Secrétariat Général</span>
                <span className="block text-amber-100 text-sm">(Instance de gestion du GOC)</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-200 font-bold min-w-[24px]">•</span>
              <div>
                <span className="font-semibold">Trésorerie Centrale</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/devenir-membre/apprenti"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition font-medium"
          >
            Rejoindre l'Ordre
          </Link>
        </div>
      </div>
    </div>
  );
}