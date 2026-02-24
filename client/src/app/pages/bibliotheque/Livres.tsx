// Livres.tsx
import { useTranslation } from 'react-i18next';

export function Livres() {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'alchemy',
      books: [
        { title: "Le Kybalion", subtitle: "Les Sept Principes Hermétiques", access: "open" },
        { title: "La Table d'Émeraude", subtitle: "Hermès Trismégiste - Commentaires", access: "open" },
        { title: "Le Mutus Liber", subtitle: "Livre muet de l'Alchimie", access: "members" },
      ]
    },
    {
      key: 'kabbalah',
      books: [
        { title: "Le Sepher Yetzirah", subtitle: "Livre de la Formation", access: "open" },
        { title: "Le Zohar", subtitle: "Livre de la Splendeur", access: "members" },
        { title: "La Kabbale dévoilée", subtitle: "S.L. MacGregor Mathers", access: "open" },
      ]
    },
    {
      key: 'magic',
      books: [
        { title: "La Clavicule de Salomon", subtitle: "Grimoire traditionnel", access: "initiates" },
        { title: "Le Grand Grimoire", subtitle: "Magie évocatoire", access: "initiates" },
        { title: "La Magie Sacrée d'Abramelin", subtitle: "Système de haute magie", access: "initiates" },
      ]
    },
    {
      key: 'philosophy',
      books: [
        { title: "Les Ennéades", subtitle: "Plotin - Néoplatonisme", access: "open" },
        { title: "Corpus Hermeticum", subtitle: "Dialogues hermétiques", access: "open" },
        { title: "La Doctrine Secrète", subtitle: "H.P. Blavatsky - Théosophie", access: "members" },
      ]
    },
    {
      key: 'tarot',
      books: [
        { title: "Le Tarot des Bohémiens", subtitle: "Papus - Clé universelle", access: "open" },
        { title: "Méditations sur le Tarot", subtitle: "Anonyme - Voie chrétienne", access: "members" },
        { title: "Le Symbolisme du Tarot", subtitle: "P.D. Ouspensky", access: "open" },
      ]
    },
  ] as const;

  const getAccessLabel = (access: string) => {
    switch (access) {
      case 'open': return { text: t('library.books.access.open'), color: 'text-amber-700' };
      case 'members': return { text: t('library.books.access.members'), color: 'text-red-700' };
      case 'initiates': return { text: t('library.books.access.initiates'), color: 'text-red-700' };
      default: return { text: '', color: '' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-12">
        <p className="text-md md:text-xl italic font-serif">
          {t('home.motto')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          {t('library.books.title')}
        </h1>

        {/* BIBLIOTHEQUE Intro - Enhanced as hero section */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 mb-8 border border-amber-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif text-amber-800 mb-4">{t('nav.library')}</h2>
            <p className="text-2xl italic font-serif text-amber-700 mb-6">
              {t('library.intro.quote')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {t('library.intro.description')}
            </p>
            <div className="flex justify-end">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
                {t('library.intro.orderForm')}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <p className="text-gray-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
            {t('library.books.intro')}
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.key}>
                <h2 className="text-2xl font-serif text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                  {t(`library.books.sections.${section.key}`)}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.books.map((book, index) => {
                    const access = getAccessLabel(book.access);
                    return (
                      <div key={index} className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <h3 className="font-semibold text-amber-900 mb-2">{book.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{book.subtitle}</p>
                        <span className={`text-xs ${access.color}`}>
                          {book.access === 'open' ? '📖' : '🔒'} {access.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('library.books.onSite.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('library.books.onSite.description')}
            </p>
            <p className="text-sm text-gray-600">
              📍 {t('library.books.onSite.note')}
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('library.books.digital.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('library.books.digital.description')}
            </p>
            <p className="text-sm text-gray-600">
              💻 {t('library.books.digital.note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}