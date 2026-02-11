import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Grand Ordre du Cercle</h3>
            <p className="text-sm text-amber-200 mb-4">
              Organisation ésotérique dédiée à la transmission des savoirs spirituels et initiatiques.
            </p>
            <p className="text-xs text-amber-300 italic">
              "Là où se trouve l'arbre de la connaissance, se trouve le bonheur"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/goc/organisation" className="text-amber-200 hover:text-white transition">
                  Organisation
                </Link>
              </li>
              <li>
                <Link to="/formation/esoterisme" className="text-amber-200 hover:text-white transition">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/bibliotheque/livres" className="text-amber-200 hover:text-white transition">
                  Bibliothèque
                </Link>
              </li>
              <li>
                <Link to="/devenir-membre/apprenti" className="text-amber-200 hover:text-white transition">
                  Devenir Membre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/bibliotheque/videos" className="text-amber-200 hover:text-white transition">
                  Vidéothèque
                </Link>
              </li>
              <li>
                <Link to="/bibliotheque/journaux" className="text-amber-200 hover:text-white transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/seminaires" className="text-amber-200 hover:text-white transition">
                  Séminaires
                </Link>
              </li>
              <li>
                <Link to="/espace-membre" className="text-amber-200 hover:text-white transition">
                  Espace Membre
                </Link>
              </li>
              <li>
                <Link to="/commanderies-fraternelles" className="text-amber-200 hover:text-white transition">
                  Commanderies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Suivez-nous</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                <span>contact@goc.org</span>
              </div>
              <p className="text-xs text-amber-300 mt-4">
                Newsletter mensuelle :<br />
                Inscrivez-vous pour recevoir nos actualités
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-300">
            <div>
              © {new Date().getFullYear()} Grand Ordre du Cercle. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="hover:text-white transition">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-white transition">
                Confidentialité
              </Link>
              <Link to="/conditions-utilisation" className="hover:text-white transition">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
