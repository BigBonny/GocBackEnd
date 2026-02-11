import { Link } from "react-router-dom";
import logo from "@/assets/logoGOC.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: "GOC",
      items: [
        { label: "Organisation", path: "/goc/organisation" },
        { label: "Actions", path: "/goc/actions" },
        { label: "Charité", path: "/goc/charite" },
        { label: "Fraternité", path: "/goc/fraternite" },
      ],
    },
    {
      label: "Formation",
      items: [
        { label: "Ésotérisme", path: "/formation/esoterisme" },
        { label: "Philosophie", path: "/formation/philosophie" },
        { label: "Pouvoirs", path: "/formation/pouvoirs" },
      ],
    },
    {
      label: "Bibliothèque",
      items: [
        { label: "Accessoires rituels", path: "/bibliotheque/accessoires" },
        { label: "Livres", path: "/bibliotheque/livres" },
        { label: "Journaux", path: "/bibliotheque/journaux" },
        { label: "Vidéos", path: "/bibliotheque/videos" },
      ],
    },
    {
      label: "Devenir Membre",
      items: [
        { label: "Membre apprenti-e", path: "/devenir-membre/apprenti" },
        { label: "Membre frère-sœur", path: "/devenir-membre/frere-soeur" },
        { label: "Apprenant auditeur-trice", path: "/devenir-membre/auditeur" },
      ],
    },
    {
      label: "Donation",
      items: [
        { label: "Charité", path: "/donation/charite" },
        { label: "Soutien", path: "/donation/soutien" },
        { label: "Sympathie", path: "/donation/sympathie" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={logo} alt="Goc" className="h-12 w-12" />
            <span className="font-serif text-xl font-bold text-amber-900">GOC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-700 hover:text-amber-700 transition font-medium px-3 py-2 rounded-md hover:bg-amber-50 flex items-center gap-1">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md border border-amber-100 overflow-hidden transition-all duration-200 ${
                    openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link
              to="/espace-membre"
              className="text-gray-700 hover:text-amber-700 transition font-medium px-3 py-2 rounded-md hover:bg-amber-50"
            >
              Espace Membre
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-amber-100">
            {navigationItems.map((item) => (
              <div key={item.label} className="py-2">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="w-full text-left px-4 py-2 text-gray-700 font-medium flex items-center justify-between"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="bg-amber-50">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-8 py-2 text-gray-600 hover:text-amber-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/espace-membre"
              className="block px-4 py-2 text-gray-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Espace Membre
            </Link>
          </div>
        )}
        <div className="flex items-center gap-4">
          <SignedIn>
            {/* Clerk's pre-built user button with dropdown menu */}
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          </SignedIn>
          
          <SignedOut>
            <Link to="/sign-in">
              <Button variant="outline">Se connecter</Button>
            </Link>
            <Link to="/sign-up">
              <Button className="bg-amber-600 hover:bg-amber-700">
                S'inscrire
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}