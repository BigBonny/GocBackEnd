import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// French imports
import { commonFr } from './translations/fr/common';
import { homeFr } from './translations/fr/home';
import { membershipFr } from './translations/fr/membership';
import { formationFr } from './translations/fr/formation';
import { libraryFr } from './translations/fr/library';
import { gocFr } from './translations/fr/goc';
import { donationFr } from './translations/fr/donation';

// English imports
import { commonEn } from './translations/en/common';
import { homeEn } from './translations/en/home';
import { membershipEn } from './translations/en/membership';
import { formationEn } from './translations/en/formation';
import { libraryEn } from './translations/en/library';
import { gocEn } from './translations/en/goc';
import { donationEn } from './translations/en/donation';

// Arabic imports
import { commonAr } from './translations/ar/common';
import { homeAr } from './translations/ar/home';
import { membershipAr } from './translations/ar/membership';
import { formationAr } from './translations/ar/formation';
import { libraryAr } from './translations/ar/library';
import { gocAr } from './translations/ar/goc';
import { donationAr } from './translations/ar/donation';

// German imports
import { commonDe } from './translations/de/common';
import { homeDe } from './translations/de/home';
import { membershipDe } from './translations/de/membership';
import { formationDe } from './translations/de/formation';
import { libraryDe } from './translations/de/library';
import { gocDe } from './translations/de/goc';
import { donationDe } from './translations/de/donation';

// Chinese imports
import { commonZh } from './translations/zh/common';
import { homeZh } from './translations/zh/home';
import { membershipZh } from './translations/zh/membership';
import { formationZh } from './translations/zh/formation';
import { libraryZh } from './translations/zh/library';
import { gocZh } from './translations/zh/goc';
import { donationZh } from './translations/zh/donation';

// Spanish imports
import { commonEs } from './translations/es/common';
import { homeEs } from './translations/es/home';
import { membershipEs } from './translations/es/membership';
import { formationEs } from './translations/es/formation';
import { libraryEs } from './translations/es/library';
import { gocEs } from './translations/es/goc';
import { donationEs } from './translations/es/donation';

// Italian imports
import { commonIt } from './translations/it/common';
import { homeIt } from './translations/it/home';
import { membershipIt } from './translations/it/membership';
import { formationIt } from './translations/it/formation';
import { libraryIt } from './translations/it/library';
import { gocIt } from './translations/it/goc';
import { donationIt } from './translations/it/donation';

// Portuguese imports
import { commonPt } from './translations/pt/common';
import { homePt } from './translations/pt/home';
import { membershipPt } from './translations/pt/membership';
import { formationPt } from './translations/pt/formation';
import { libraryPt } from './translations/pt/library';
import { gocPt } from './translations/pt/goc';
import { donationPt } from './translations/pt/donation';

// Japanese imports
import { commonJa } from './translations/ja/common';
import { homeJa } from './translations/ja/home';
import { membershipJa } from './translations/ja/membership';
import { formationJa } from './translations/ja/formation';
import { libraryJa } from './translations/ja/library';
import { gocJa } from './translations/ja/goc';
import { donationJa } from './translations/ja/donation';

const resources = {
  fr: {
    translation: {
      ...commonFr,
      ...homeFr,
      ...membershipFr,
      ...formationFr,
      ...libraryFr,
      ...gocFr,
      ...donationFr
    }
  },
  en: {
    translation: {
      ...commonEn,
      ...homeEn,
      ...membershipEn,
      ...formationEn,
      ...libraryEn,
      ...gocEn,
      ...donationEn
    }
  },
  ar: {
    translation: {
      ...commonAr,
      ...homeAr,
      ...membershipAr,
      ...formationAr,
      ...libraryAr,
      ...gocAr,
      ...donationAr
    }
  },
  de: {
    translation: {
      ...commonDe,
      ...homeDe,
      ...membershipDe,
      ...formationDe,
      ...libraryDe,
      ...gocDe,
      ...donationDe
    }
  },
  zh: {
    translation: {
      ...commonZh,
      ...homeZh,
      ...membershipZh,
      ...formationZh,
      ...libraryZh,
      ...gocZh,
      ...donationZh
    }
  },
  es: {
    translation: {
      ...commonEs,
      ...homeEs,
      ...membershipEs,
      ...formationEs,
      ...libraryEs,
      ...gocEs,
      ...donationEs
    }
  },
  it: {
    translation: {
      ...commonIt,
      ...homeIt,
      ...membershipIt,
      ...formationIt,
      ...libraryIt,
      ...gocIt,
      ...donationIt
    }
  },
  pt: {
    translation: {
      ...commonPt,
      ...homePt,
      ...membershipPt,
      ...formationPt,
      ...libraryPt,
      ...gocPt,
      ...donationPt
    }
  },
  ja: {
    translation: {
      ...commonJa,
      ...homeJa,
      ...membershipJa,
      ...formationJa,
      ...libraryJa,
      ...gocJa,
      ...donationJa
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    lng: 'fr',
    debug: true,
    
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  console.log('i18n language changed to:', lng);
  document.documentElement.lang = lng;
  if (lng === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
});

export default i18n;
