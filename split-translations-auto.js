/**
 * Automatic Translation Splitter for GOC
 * This script splits your large translation config into 7 manageable files per language
 * 
 * Usage: node split-translations-auto.js
 */

const fs = require('fs');
const path = require('path');

// Languages to process
const languages = ['fr', 'en', 'ar', 'de', 'zh', 'es', 'it', 'pt', 'ja'];

// Define the split structure
const splitMap = {
  common: ['nav', 'common'],
  home: ['home'],
  membership: ['membership', 'roles', 'memberSpace'],
  formation: ['enseignements', 'formation'],
  library: ['library'],
  goc: ['organisation', 'fraternity', 'charity', 'goc'],
  donation: ['donation', 'contact']
};

function extractSection(data, keys) {
  const result = {};
  keys.forEach(key => {
    if (data[key]) {
      result[key] = data[key];
    }
  });
  return result;
}

function createTypeScriptFile(languageCode, sectionName, content) {
  const capitalizedLang = languageCode.charAt(0).toUpperCase() + languageCode.slice(1);
  const capitalizedSection = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  
  return `export const ${sectionName}${capitalizedLang} = ${JSON.stringify(content, null, 2)};
`;
}

function splitTranslations(inputFile) {
  console.log('\n🚀 Starting automatic translation split...\n');

  // Read the input file
  let fileContent;
  try {
    fileContent = fs.readFileSync(inputFile, 'utf8');
  } catch (error) {
    console.error(`❌ Error reading file: ${inputFile}`);
    console.error('   Make sure the file exists and path is correct.');
    process.exit(1);
  }

  // Extract the resources object (or translations object)
  // Try to find either 'resources' or 'translations'
  let match = fileContent.match(/(?:const\s+)?(?:export\s+)?(?:const\s+)?resources\s*=\s*({[\s\S]*?});?\s*(?:i18n|export|$)/);
  
  if (!match) {
    // Try looking for 'translations' instead
    match = fileContent.match(/(?:const\s+)?(?:export\s+)?(?:const\s+)?translations\s*=\s*({[\s\S]*?});?\s*(?:export|$)/);
  }
  
  if (!match) {
    console.error('❌ Could not find resources or translations object in file.');
    console.error('   Make sure your file has either:');
    console.error('   - const resources = { ... }');
    console.error('   - const translations = { ... }');
    process.exit(1);
  }

  let resourcesObj;
  try {
    // Use eval to parse the object (safe since this is your own code)
    resourcesObj = eval(`(${match[1]})`);
  } catch (error) {
    console.error('❌ Error parsing resources/translations object.');
    console.error('   The file might have syntax errors.');
    console.error(error.message);
    process.exit(1);
  }

  // Convert to translations format if it's resources format
  let translations;
  if (resourcesObj.fr && resourcesObj.fr.translation) {
    // It's in resources format, convert to translations format
    translations = {};
    Object.keys(resourcesObj).forEach(lang => {
      if (resourcesObj[lang] && resourcesObj[lang].translation) {
        translations[lang] = { translation: resourcesObj[lang].translation };
      }
    });
  } else {
    // It's already in translations format
    translations = resourcesObj;
  }

  // Create base directory structure
  const baseDir = path.join(process.cwd(), 'src', 'i18n', 'translations');
  
  languages.forEach(lang => {
    if (!translations[lang] || !translations[lang].translation) {
      console.log(`⚠️  Skipping ${lang} (not found in translations)`);
      return;
    }

    const langDir = path.join(baseDir, lang);
    
    // Create directory for this language
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    const data = translations[lang].translation;
    let totalKeys = 0;

    // Split into sections
    Object.entries(splitMap).forEach(([sectionName, keys]) => {
      const sectionData = extractSection(data, keys);
      
      if (Object.keys(sectionData).length === 0) {
        console.log(`   ⚠️  ${lang}/${sectionName}.ts - No data found`);
        return;
      }

      const fileContent = createTypeScriptFile(lang, sectionName, sectionData);
      const outputFile = path.join(langDir, `${sectionName}.ts`);
      
      fs.writeFileSync(outputFile, fileContent, 'utf8');
      
      const keyCount = Object.keys(sectionData).length;
      totalKeys += keyCount;
      console.log(`   ✅ ${lang}/${sectionName}.ts - ${keyCount} top-level keys`);
    });

    console.log(`✨ ${lang.toUpperCase()} complete: ${totalKeys} keys split into ${Object.keys(splitMap).length} files\n`);
  });

  console.log('✅ All translations split successfully!\n');
  console.log('📝 Next steps:');
  console.log('1. Update your i18n config.ts to import from the new split files');
  console.log('2. Test your application (npm run dev)');
  console.log('3. Once verified, you can delete the old large file\n');
}

function generateNewConfig() {
  console.log('📄 Generating new config.ts template...\n');

  const configTemplate = `import i18n from 'i18next';
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
`;

  const configFile = path.join(process.cwd(), 'src', 'i18n', 'config.NEW.ts');
  fs.writeFileSync(configFile, configTemplate, 'utf8');
  console.log(`✅ New config template saved to: ${configFile}`);
  console.log('   Review it, then rename to config.ts when ready!\n');
}

// Main execution
const args = process.argv.slice(2);
const inputFile = args[0] || path.join(process.cwd(), 'src', 'i18n', 'config.ts');

console.log('╔════════════════════════════════════════════╗');
console.log('║  GOC Translation Splitter v1.0             ║');
console.log('╚════════════════════════════════════════════╝');

if (!fs.existsSync(inputFile)) {
  console.error(`\n❌ Input file not found: ${inputFile}`);
  console.error('\nUsage: node split-translations-auto.js [path-to-config-file]');
  console.error('Example: node split-translations-auto.js src/i18n/config.ts\n');
  process.exit(1);
}

splitTranslations(inputFile);
generateNewConfig();

console.log('🎉 Done! Your translations are now split into manageable files.\n');