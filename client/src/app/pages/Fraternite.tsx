import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Fraternite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          Notre Fraternité
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641587072431-03b5b6dffced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHBlb3BsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NjkwMTI4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fraternité"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-amber-900 mb-4">Une Communauté Spirituelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La fraternité du Grand Ordre du Cercle unit des chercheurs de vérité partageant 
                les mêmes aspirations spirituelles et philosophiques.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ensemble, nous formons un cercle de soutien mutuel et d'évolution collective, 
                guidés par les principes de sagesse, compassion et harmonie universelle.
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
              <h3 className="text-xl font-serif text-amber-900 mb-4">Valeurs Fraternelles</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Entraide et soutien mutuel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Respect et tolérance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Partage des connaissances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 mt-1">✦</span>
                  <span className="text-gray-700">Évolution collective</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
