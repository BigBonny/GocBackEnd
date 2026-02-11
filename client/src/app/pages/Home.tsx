import { Link } from "react-router-dom";
import logo from "@/assets/logoGOC.png";
import egypt from "@/assets/symboleegyptien1.jpg";
import goc1 from "@/assets/visuelGoc1.jpg";
import goc2 from "@/assets/VisuelGoc2.jpg";
import goc4 from "@/assets/VisuelGoc4.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto - Hook #1 */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-4">
        <p className="text-sm md:text-lg italic font-body tracking-wide">
          Là où se trouve l'arbre de la connaissance, se trouve le bonheur
        </p>
      </div>

      {/* Main title */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-900 mb-2 tracking-tight">
          GRAND ORDRE DU CERCLE
        </h1>
        <div className="w-24 h-1 bg-amber-700 mx-auto mt-6 rounded-full opacity-60" />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          {/* Hook #2 */}
          <h2 className="text-3xl md:text-5xl font-serif text-amber-800 mb-16 leading-tight">
            Formation ésotérique & philosophique…
            <br />
            <span className="text-amber-700">Fraternité spirituelle.</span>
          </h2>

          {/* Feature box - Hook #3 */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 mb-16 border border-amber-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-30" />
            
            <h3 className="text-2xl md:text-3xl font-serif text-amber-900 mb-10 text-center">
              Accédez à la maîtrise totale de votre destin…
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-left">
              <ul className="space-y-3">
                {[
                  "Se connecter aux Forces bénéfiques",
                  "Découvrir son Être intérieur",
                  "Nettoyer son psychisme",
                  "Maîtriser son mental",
                  "Eveiller ses aptitudes cachées",
                  "Influer sur son milieu sans agir physiquement",
                  "Se régénérer physiquement",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-amber-600 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-700 leading-relaxed group-hover:text-amber-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  "Augmenter son espérance de vie",
                  "Se fixer des buts et les atteindre",
                  "Accéder au bien-être matériel",
                  "Améliorer la qualité de sa vie",
                  "Accéder à l'Éveil spirituel",
                  "Se protéger contre tous les coups du sort quelle qu'en soit l'origine",
                  "Acquérir une meilleure santé",

                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-amber-600 mt-1 text-lg group-hover:scale-110 transition-transform">✦</span>
                    <span className="text-gray-700 leading-relaxed group-hover:text-amber-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel (with labels) */}
        <div className="mb-20 px-4 md:px-12">
          <Carousel opts={{ loop: true }} className="relative w-full">
            <CarouselPrevious className="left-2 md:-left-12 bg-white/90 hover:bg-amber-50 border-amber-200 text-amber-900" />
            <CarouselNext className="right-2 md:-right-12 bg-white/90 hover:bg-amber-50 border-amber-200 text-amber-900" />

            <CarouselContent className="flex">
              {[
                { src: egypt, alt: "Séminaire", label: "Séminaire" },
                { src: goc2, alt: "Prieuré", label: "Prieuré" },
                { src: goc4, alt: "Groupe Membres", label: "Groupe Membres" },
                { src: goc1, alt: "Symboles", label: "Symboles" },
              ].map((slide, idx) => (
                <CarouselItem key={idx}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white group">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-96 md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="bg-gradient-to-r from-amber-50 to-white p-4 text-center border-t border-amber-100">
                      <p className="font-serif text-amber-900 text-lg tracking-wide">{slide.label}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Links Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-20">
          {[
            { to: "/", icon: logo, label: "GOC", isImage: true },
            { to: "/formation", emoji: "📚", label: "Notre Formation" },
            { to: "/fraternite", emoji: "🤝", label: "Notre Fraternité" },
            { to: "/seminaires", emoji: "🕯️", label: "Nos Séminaires" },
            { to: "/actions", emoji: "⚡", label: "Nos Actions" },
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group border border-amber-100"
            >
              {link.isImage ? (
                <img 
                  src={link.icon} 
                  alt="Logo GOC" 
                  className="h-16 w-16 mx-auto mb-3 rounded-full object-cover ring-2 ring-amber-200 group-hover:ring-amber-400 transition-all" 
                />
              ) : (
                <div className="h-16 w-16 mx-auto mb-3 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center group-hover:from-amber-200 group-hover:to-amber-100 transition-all duration-300 shadow-inner">
                  <span className="text-3xl filter drop-shadow-sm">{link.emoji}</span>
                </div>
              )}
              <h3 className="font-serif text-amber-900 font-medium group-hover:text-amber-700 transition-colors">
                {link.label}
              </h3>
            </Link>
          ))}
        </div>

        {/* Bottom Section with Text and Image */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            {/* Hook #4 - Moved here, integrated with vision */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl p-8 md:p-10 border border-amber-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <p className="text-xl md:text-2xl font-serif text-amber-900/90 leading-relaxed relative z-10">
                <span className="text-amber-700 font-semibold">Connaissances secrètes, Savoirs spirituels et initiatiques,</span>
                <br />
                <span className="italic text-amber-800">Éveil des pouvoirs, Puissance personnelle, Outils de mieux-être…</span>
              </p>
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-lg text-amber-900 font-medium mb-2">
                  Changer sa vie et accéder à la maîtrise totale de sa vie!
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Par une formation ésotérique qui vous donne accès aux connaissances sécrètes et aux savoirs spirituels et initiatiques, à l'éveil des pouvoirs, de la puissance personnelle et aux outils du bien-être…
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-amber-100 relative">
              <div className="absolute -top-3 left-8 bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-serif shadow-lg">
                Notre Vision
              </div>
              
              <h3 className="text-2xl font-serif text-amber-900 mb-6 mt-2">
                Grand Ordre du Cercle
              </h3>
              
              <div className="prose prose-amber max-w-none">
                <p className="text-lg italic font-serif text-amber-800/90 leading-relaxed border-l-4 border-amber-300 pl-6 py-2 bg-amber-50/50 rounded-r-lg">
                  « L'Homme fut originellement conçu comme un Être purement spirituel, émané du Principe divin « à l'image et à la ressemblance du Grand Esprit Créateur ». Lors de sa descente dans la matière, il est mû par une impulsion jumelle: Attirance-Rejet, Désir-Répulsion. Revêtu d'un corps corruptible il est désormais séparé de l'unité du Principe. Sa double nature – matérielle et spirituelle – le soumet à un conflit entre aspirations spirituelles et les chaînes de la matérialité. Depuis lors, il accomplit par orgueil, des actes gouvernés par ces impulsions. Mais l'homme de désir cherche à obtenir sa réintégration dans son état premier et à recouvrer son corps de gloire.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Le but du GOC est d'éclairer l'Initié sur sa nature, son origine et sa destination. Il ou elle reçoit des enseignements essentiellement pratiques et initiatiques, traitant d'ésotérisme, de spiritualité, de métaphysique, des secrets des Yogis, de philosophie et de développement personnel ; lui permettant une véritable purification, l'accès aux états de conscience les plus élevés et l'acquisition des pouvoirs agissants.»
                </p>
              </div>
            </div>

            {/* Fixed grid: 3 columns on desktop, 2 on mobile, no empty spaces */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                to="/devenir-membre"
                className="col-span-2 md:col-span-1 bg-gradient-to-br from-amber-700 to-amber-800 text-white rounded-xl shadow-lg p-6 hover:from-amber-800 hover:to-amber-900 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center group flex flex-col justify-center min-h-[100px]"
              >
                <h4 className="font-serif text-lg group-hover:scale-105 transition-transform">Devenir Membre</h4>
              </Link>

              <Link
                to="/videos"
                className="bg-white border-2 border-amber-200 text-amber-900 rounded-xl shadow-md p-6 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center group flex flex-col justify-center"
              >
                <h4 className="font-serif text-lg group-hover:text-amber-700 transition-colors">Vidéos</h4>
              </Link>

              <Link
                to="/donation"
                className="bg-white border-2 border-amber-200 text-amber-900 rounded-xl shadow-md p-6 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center group flex flex-col justify-center"
              >
                <h4 className="font-serif text-lg group-hover:text-amber-700 transition-colors">Donation</h4>
              </Link>

              <Link
                to="/commanderies-fraternelles"
                className="bg-white border-2 border-amber-200 text-amber-900 rounded-xl shadow-md p-6 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center group flex flex-col justify-center"
              >
                <h4 className="font-serif text-lg group-hover:text-amber-700 transition-colors">Commanderies</h4>
              </Link>

              <Link
                to="/contacts-commanderies"
                className="bg-white border-2 border-amber-200 text-amber-900 rounded-xl shadow-md p-6 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center group flex flex-col justify-center"
              >
                <h4 className="font-serif text-lg group-hover:text-amber-700 transition-colors">Contacts</h4>
              </Link>

              <Link
                to="/contact"
                className="bg-white border-2 border-amber-200 text-amber-900 rounded-xl shadow-md p-6 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center group flex flex-col justify-center"
              >
                <h4 className="font-serif text-lg group-hover:text-amber-700 transition-colors">Contact</h4>
              </Link>
            </div>
          </div>

          <div className="relative sticky top-8">
            <div className="absolute inset-0 bg-amber-200 rounded-2xl transform rotate-3 opacity-20" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={egypt}
                alt="Grand Ordre du Cercle"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl italic opacity-90">La sagesse ancienne pour l'homme moderne</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#7A3A2E] text-amber-50 py-12 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
            <img src={logo} alt="Logo GOC" className="h-12 w-12" />
          </div>
          <p className="text-sm text-amber-100/80 tracking-wider">
            © 2026 Grand Ordre du Cercle - Tous droits réservés
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-amber-200/60">
            <span>•</span>
            <span>Sapientia</span>
            <span>•</span>
            <span>Fraternitas</span>
            <span>•</span>
            <span>Spiritus</span>
            <span>•</span>
          </div>
        </div>
      </footer>
    </div>
  );
}