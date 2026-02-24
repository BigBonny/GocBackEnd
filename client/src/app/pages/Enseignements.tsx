import { Sparkles, BookOpen, Flame, Scale, Heart, Star, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PhilosophieItem {
  title: string;
  desc: string;
}

export function Enseignements() {
  const { t, i18n } = useTranslation();
  
  const lang = i18n.language;
  const isRTL = lang === 'ar';
  
  // Helper to get nested translation safely
  const getT = (key: string, options?: Record<string, string>) => t(`enseignements.${key}`, options);

  // Type-safe translation getters
  const getStringArray = (key: string): string[] => {
    const value = t(`enseignements.${key}`, { returnObjects: true });
    if (Array.isArray(value)) {
      return value.filter((item): item is string => typeof item === 'string');
    }
    return [];
  };

  const getPhilosophieItems = (): PhilosophieItem[] => {
    const value = t('enseignements.pillars.philosophie.items', { returnObjects: true });
    if (Array.isArray(value)) {
      return value.filter((item): item is PhilosophieItem => 
        typeof item === 'object' && item !== null && 'title' in item && 'desc' in item
      );
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#7A3A2E] text-[#F4EFE8] py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-amber-200/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-amber-200/20 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-200 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-200 rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 text-amber-200/80 text-sm tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>{getT('hero.subtitle')}</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Footlight MT', 'Footlight MT Light', 'Times New Roman', serif" }}
          >
            {getT('hero.title')}<br />
            <span className="text-amber-200">{getT('hero.titleHighlight')}</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-amber max-w-none">
          <p className="text-xl md:text-2xl text-amber-900/90 leading-relaxed font-serif text-center italic mb-12 border-l-4 border-amber-600 pl-6 py-4 bg-amber-50/50 rounded-r-xl" dir={isRTL ? 'rtl' : 'ltr'}>
            {getT('introduction.quote')}
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100 relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/30 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
              {getT('introduction.paragraph1')}
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl mb-6">
              <p className="text-amber-900 font-medium italic text-lg">
                {getT('introduction.study', { 
                  percentagePersonality: getT('percentages.personality'),
                  percentageKnowledge: getT('percentages.knowledge')
                })}
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              {getT('introduction.conclusion', { goc: 'GOC' })}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">
            {getT('mainContent.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {getT('mainContent.subtitle')}
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Ésotérisme */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-6 text-white relative overflow-hidden">
              <Moon className="w-8 h-8 mb-2 relative z-10" />
              <h3 className="text-2xl font-serif relative z-10">{getT('pillars.esoterisme.title')}</h3>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {getStringArray('pillars.esoterisme.items').map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm group/item hover:text-amber-800 transition-colors">
                    <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Philosophie */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-6 text-white relative overflow-hidden">
              <BookOpen className="w-8 h-8 mb-2 relative z-10" />
              <h3 className="text-2xl font-serif relative z-10">{getT('pillars.philosophie.title')}</h3>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {getPhilosophieItems().map((item, idx) => (
                  <div key={idx} className="border-b border-amber-100 last:border-0 pb-3 last:pb-0">
                    <h4 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" />
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pouvoirs */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-amber-800 to-amber-950 p-6 text-white relative overflow-hidden">
              <Flame className="w-8 h-8 mb-2 relative z-10" />
              <h3 className="text-2xl font-serif relative z-10">{getT('pillars.pouvoirs.title')}</h3>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {getStringArray('pillars.pouvoirs.items').slice(0, 7).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs group/item hover:text-amber-800 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-amber-100">
                <p className="text-xs text-amber-700 font-medium text-center">{getT('pillars.pouvoirs.more')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Pouvoirs Section */}
        <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(251,191,36,0.3)_0%,_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(251,191,36,0.2)_0%,_transparent_50%)]" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sun className="w-6 h-6 text-amber-300" />
              <h3 className="text-2xl md:text-3xl font-serif text-center">{getT('development.title')}</h3>
              <Sun className="w-6 h-6 text-amber-300" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              {getStringArray('pillars.pouvoirs.items').map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group/item">
                  <div className="w-6 h-6 rounded-full bg-amber-200/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-amber-200/40 transition-colors">
                    <Heart className="w-3 h-3 text-amber-300" />
                  </div>
                  <span className="text-amber-50/90 group-hover/item:text-white transition-colors text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-amber-200/80 italic text-lg mb-6 font-serif">
                "{getT('development.quote')}"
              </p>
              <Link 
                to="/devenir-membre" 
                className="inline-flex items-center gap-2 bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                {getT('development.cta')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="relative">
            <div className="text-6xl text-amber-200 font-serif absolute -top-8 left-0">"</div>
            <p className="text-lg text-gray-600 italic font-serif leading-relaxed px-8">
              {getT('footerQuote')}
            </p>
            <div className="text-6xl text-amber-200 font-serif absolute -bottom-12 right-0">"</div>
          </div>
        </div>
      </div>
    </div>
  );
}