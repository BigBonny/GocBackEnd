import { Link } from "react-router-dom";
import logo from "@/assets/logoGOC.png";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Sparkles, BookOpen, Users, Heart, GraduationCap } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navIcons: Record<string, React.ReactNode> = {
  GOC: <Sparkles className="w-4 h-4" />,
  Formation: <GraduationCap className="w-4 h-4" />,
  Bibliothèque: <BookOpen className="w-4 h-4" />,
  "Devenir Membre": <Users className="w-4 h-4" />,
  Donation: <Heart className="w-4 h-4" />,
};

export function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(label);
    setActiveItem(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setActiveItem(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setActiveItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigationItems = [
    {
      label: t('nav.goc'),
      key: "GOC",
      items: [
        { label: t('nav.gocOrganisation'), path: "/goc/organisation", desc: t('nav.gocOrganisationDesc') },
        { label: t('nav.gocActions'), path: "/goc/actions", desc: t('nav.gocActionsDesc') },
        { label: t('nav.gocCharity'), path: "/goc/charite", desc: t('nav.gocCharityDesc') },
        { label: t('nav.gocFraternity'), path: "/goc/fraternite", desc: t('nav.gocFraternityDesc') },
      ],
    },
    {
      label: t('nav.formation'),
      key: "Formation",
      items: [
        { label: t('nav.formationEsoterism'), path: "/formation/esoterisme", desc: t('nav.formationEsoterismDesc') },
        { label: t('nav.formationPhilosophy'), path: "/formation/philosophie", desc: t('nav.formationPhilosophyDesc') },
        { label: t('nav.formationPowers'), path: "/formation/pouvoirs", desc: t('nav.formationPowersDesc') },
      ],
    },
    {
      label: t('nav.library'),
      key: "Bibliothèque",
      items: [
        { label: t('nav.libraryAccessories'), path: "/bibliotheque/accessoires", desc: t('nav.libraryAccessoriesDesc') },
        { label: t('nav.libraryBooks'), path: "/bibliotheque/livres", desc: t('nav.libraryBooksDesc') },
        { label: t('nav.libraryJournals'), path: "/bibliotheque/journaux", desc: t('nav.libraryJournalsDesc') },
        { label: t('nav.libraryVideos'), path: "/bibliotheque/videos", desc: t('nav.libraryVideosDesc') },
      ],
    },
    {
      label: t('nav.donation'),
      key: "Donation",
      items: [
        { label: t('nav.donationCharity'), path: "/donation/charite", desc: t('nav.donationCharityDesc') },
        { label: t('nav.donationSupport'), path: "/donation/soutien", desc: t('nav.donationSupportDesc') },
        { label: t('nav.donationSympathy'), path: "/donation/sympathie", desc: t('nav.donationSympathyDesc') },
      ],
    },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-amber-900/5" 
          : "bg-gradient-to-b from-white to-amber-50/30"
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group relative flex-shrink-0">
            <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
              {!imageError ? (
                <img 
                  src={logo} 
                  alt="GOC" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-lg">
                  GOC
                </div>
              )}
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent tracking-tight leading-none">
                GOC
              </span>
              <span className="text-[10px] text-amber-700/60 font-medium tracking-wider uppercase mt-1">
                {t('nav.gocSubtitle')}
              </span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navigationItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`relative px-3 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1.5 group whitespace-nowrap ${
                  activeItem === item.key ? "text-amber-800 bg-amber-100/50" : "text-gray-600 hover:text-amber-700 hover:bg-amber-50"
                }`}>
                  <span className={`transition-transform duration-300 ${activeItem === item.key ? "scale-110" : "group-hover:scale-110"}`}>
                    {navIcons[item.key]}
                  </span>
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">{item.label.split(' ')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.key ? "rotate-180" : ""}`} />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-600 transition-all duration-300 ${
                    activeItem === item.key ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`} />
                </button>
                
                <div className={`absolute left-0 top-full pt-2 w-72 transition-all duration-300 origin-top ${
                  openDropdown === item.key ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                }`}>
                  <div className="bg-white rounded-2xl shadow-2xl shadow-amber-900/10 border border-amber-100 overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-2">
                      <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider px-3 py-2 border-b border-amber-100 mb-1">
                        {item.label}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="group/item flex items-start gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100/50 hover:text-amber-800 transition-all duration-200"
                          onClick={() => { setOpenDropdown(null); setActiveItem(null); }}
                        >
                          <div className="flex-1">
                            <div className="font-medium text-sm">{subItem.label}</div>
                            <div className="text-xs text-gray-400 group-hover/item:text-amber-600/70 transition-colors">{subItem.desc}</div>
                          </div>
                          <ChevronDown className="w-4 h-4 rotate-[-90deg] opacity-0 group-hover/item:opacity-100 transition-all text-amber-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="h-6 w-px bg-amber-200 mx-1" />
            
            <Link to="/espace-membre" className="px-3 py-2 rounded-full font-medium text-sm text-amber-700 hover:text-amber-800 hover:bg-amber-100 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap">
              <Users className="w-4 h-4" />
              <span className="hidden xl:inline">{t('nav.members')}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            <SignedIn>
              <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-amber-200">
                <span className="text-sm text-gray-500 hidden 2xl:block">{t('nav.myAccount')}</span>
                <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-9 h-9 sm:w-10 sm:h-10 ring-2 ring-amber-200 ring-offset-2", userButtonPopoverCard: "shadow-2xl shadow-amber-900/10 border-amber-100" } }} />
              </div>
            </SignedIn>
            
            <SignedOut>
              <div className="hidden md:flex items-center gap-2 pl-2 sm:pl-3 border-l border-amber-200">
                <Link to="/sign-in" className="hidden lg:block">
                  <Button variant="ghost" className="text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-full px-4 lg:px-6 text-sm">{t('nav.login')}</Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white rounded-full px-4 sm:px-6 shadow-lg shadow-amber-900/20 hover:shadow-amber-900/30 transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap">
                    <span className="hidden sm:inline">{t('nav.signup')}</span>
                    <span className="sm:hidden">{t('nav.signupShort') || t('nav.signup')}</span>
                  </Button>
                </Link>
              </div>
            </SignedOut>

            <button className="lg:hidden p-2 rounded-full hover:bg-amber-50 transition-colors flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-800" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 top-[81px] bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`lg:hidden fixed top-[81px] left-0 right-0 bg-white border-t border-amber-100 shadow-2xl transition-all duration-500 max-h-[calc(100vh-81px)] overflow-y-auto ${
        mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}>
        <div className="p-4 space-y-2">
          <div className="sm:hidden pb-4 border-b border-amber-100">
            <LanguageSwitcher />
          </div>
          
          {navigationItems.map((item) => (
            <div key={item.key} className="border-b border-amber-50 last:border-0 pb-2">
              <button onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)} className={`w-full text-left px-4 py-4 rounded-xl font-medium flex items-center justify-between transition-all duration-300 ${
                openDropdown === item.key ? "bg-amber-100 text-amber-800" : "text-gray-700 hover:bg-amber-50"
              }`}>
                <div className="flex items-center gap-3">
                  <span className={openDropdown === item.key ? "text-amber-600" : "text-gray-400"}>{navIcons[item.key]}</span>
                  {item.label}
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openDropdown === item.key ? "rotate-180 text-amber-600" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === item.key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-12 pr-4 py-2 space-y-1">
                  {item.items.map((subItem) => (
                    <Link key={subItem.path} to={subItem.path} className="block py-3 px-4 rounded-lg text-gray-600 hover:text-amber-700 hover:bg-amber-50 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                      <div className="font-medium">{subItem.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{subItem.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/espace-membre" className="flex items-center gap-3 px-4 py-4 rounded-xl text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            <Users className="w-5 h-5" />
            {t('nav.members')}
          </Link>
          
          <SignedOut>
            <div className="pt-4 space-y-3 px-4 md:hidden">
              <Link to="/sign-in" className="block">
                <Button variant="outline" className="w-full rounded-xl border-amber-200 text-amber-700 hover:bg-amber-50">{t('nav.login')}</Button>
              </Link>
              <Link to="/sign-up" className="block">
                <Button className="w-full rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700">{t('nav.signup')}</Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}