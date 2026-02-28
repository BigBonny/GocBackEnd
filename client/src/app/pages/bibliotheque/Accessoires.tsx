import { useTranslation } from 'react-i18next';
import Imagebib from '../../../assets/Imagebib.jpg';
import Imagebib1 from '../../../assets/Imagebib1.jpg';
import Imagebib2 from '../../../assets/Imagebib2.jpg';
import Imagebib3 from '../../../assets/Imagebib3.jpg';
import Imagebib4 from '../../../assets/Imagebib4.jpg';
import Imagebibbis from '../../../assets/imagebibbis.jpg';

export function Accessoires() {
  const { t } = useTranslation();

  const accessories = [
    { 
      id: 'candles', 
      image: Imagebib
    },
    { 
      id: 'crystals', 
      image: Imagebib1
    },
    { 
      id: 'incense', 
      image: 
      Imagebib2
    },
    { 
      id: 'sword', 
      image: Imagebib3
    },
    { 
      id: 'chalice', 
      image: Imagebib4
    },
    { 
      id: 'malas', 
      image: Imagebibbis
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Top motto */}
      <div className="bg-[#7A3A2E] text-[#F4EFE8] text-center py-6 md:py-3 px-4">
  <p className="text-lg md:text-2xl lg:text-3xl italic font-body tracking-wider leading-relaxed max-w-5xl mx-auto">
    {t('home.motto')}
  </p>
</div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8 text-center">
          {t('nav.libraryAccessories')}
        </h1>

        {/* BIBLIOTHEQUE Intro */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 mb-12 border border-amber-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl font-serif text-amber-800 mb-4">{t('nav.library')}</h2>
            <p className="text-xl italic font-serif text-amber-700 mb-4">
              {t('library.intro.quote')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('library.intro.description')}
            </p>
            {/* <div className="flex justify-end">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
                {t('library.intro.orderForm')}
              </button>
            </div> */}
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <p className="text-gray-700 mb-12 leading-relaxed text-center max-w-3xl mx-auto text-lg">
            {t('library.accessories.description')}
          </p>

          {/* Image Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-amber-100">
                  <img 
                    src={item.image}
                    alt={t(`library.accessories.items.${item.id}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">
                      {t(`library.accessories.items.${item.id}.title`)}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                      {t(`library.accessories.items.${item.id}.description`)}
                    </p>
                    <span className="inline-block bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                      {t(`library.accessories.items.${item.id}.availability`)}
                    </span>
                  </div>
                </div>

                {/* Title bar (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/90 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {t(`library.accessories.items.${item.id}.title`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-serif mb-4">
            {t('library.accessories.cta.title')}
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            {t('library.accessories.cta.description')}
          </p>
          {/* <button className="bg-white text-amber-700 px-10 py-4 rounded-lg hover:bg-amber-50 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
            {t('library.accessories.cta.button')}
          </button> */}
          {/* <p className="text-sm text-amber-100 mt-4">
            {t('library.accessories.cta.note')}
          </p> */}
        </div>
      </div>
    </div>
  );
}
