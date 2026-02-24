import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import formation from "@/assets/VisuelGoc4.png"

export function Formation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Notre Formation
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <ImageWithFallback
              src={formation}
              alt="Formation"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-amber-900 mb-4">
                Formation Ésotérique & Philosophique
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre formation vous guide à travers les mystères de la connaissance ésotérique, 
                combinant philosophie ancienne et pratiques spirituelles modernes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chaque étape de votre parcours initiatique est conçue pour éveiller votre conscience 
                et développer vos capacités latentes.
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
              <h3 className="text-xl font-serif text-amber-900 mb-4">Modules de Formation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Philosophie hermétique et principes universels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Méditation et développement spirituel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Rituels et pratiques initiatiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Symbolisme et interprétation des arcanes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Maîtrise énergétique et alchimie intérieure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            to="/enseignements"
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-amber-100"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📖</div>
            <h3 className="text-xl font-serif text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">Enseignements</h3>
            <p className="text-gray-600">Accès à notre bibliothèque de connaissances ésotériques</p>
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-amber-100">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎓</div>
            <h3 className="text-xl font-serif text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">Progression</h3>
            <p className="text-gray-600">Un parcours structuré vers la maîtrise spirituelle</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-amber-100">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✨</div>
            <h3 className="text-xl font-serif text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">Initiation</h3>
            <p className="text-gray-600">Rituels sacrés et cérémonies d'élévation</p>
          </div>
        </div>
      </div>
    </div>
  );
}