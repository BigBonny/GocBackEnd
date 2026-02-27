import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        goc: "GOC",
        gocSubtitle: "Grand Ordre du Cercle Fraternity",
        gocOrganisation: "Organisation",
        gocOrganisationDesc: "Notre structure",
        gocActions: "Actions",
        gocActionsDesc: "Nos initiatives",
        gocCharity: "Charité",
        gocCharityDesc: "Œuvres philanthropiques",
        gocFraternity: "Fraternité",
        gocFraternityDesc: "Liens spirituels",
        formation: "Formation",
        formationEsoterism: "Ésotérisme",
        formationEsoterismDesc: "Mystères anciens",
        formationPhilosophy: "Philosophie",
        formationPhilosophyDesc: "Pensée sacrée",
        formationPowers: "Pouvoirs",
        formationPowersDesc: "Développement intérieur",
        library: "Bibliothèque",
        libraryAccessories: "Accessoires rituels",
        libraryAccessoriesDesc: "Outils sacrés",
        libraryBooks: "Livres",
        libraryBooksDesc: "Savoir ancestral",
        libraryJournals: "Journaux",
        libraryJournalsDesc: "Publications",
        libraryVideos: "Vidéos",
        libraryVideosDesc: "Enseignements",
        becomeMember: "Devenir Membre",
        memberApprentice: "Membre apprenti-e",
        memberApprenticeDesc: "Premiers pas",
        memberBrotherSister: "Membre frère-sœur",
        memberBrotherSisterDesc: "Engagement",
        memberAuditor: "Apprenant auditeur-trice",
        memberAuditorDesc: "Découverte",
        donation: "Donation",
        donationCharity: "Charité",
        donationCharityDesc: "Aider autrui",
        donationSupport: "Soutien",
        donationSupportDesc: "Contribuer",
        donationSympathy: "Sympathie",
        donationSympathyDesc: "Participer",
        members: "Espace Membre",
        login: "Connexion",
        signup: "S'inscrire",
        logout: "Déconnexion",
        myAccount: "Mon compte",
        closeMenu: "Fermer le menu",
        openMenu: "Ouvrir le menu"
      },enseignements: {
        meta: {
          title: "Enseignements initiatiques | GOC",
          description: "Enseignements initiatiques pour changer sa vie - Grand Ordre du Cercle"
        },
        hero: {
          subtitle: "Voie Initiatique",
          title: "Enseignements initiatiques",
          titleHighlight: "pour changer sa vie"
        },
        introduction: {
          quote: "Indépendamment de l'âge, du sexe ou de la culture, chacun aspire à réussir sa vie. Pour y parvenir, il faut exploiter la force de vos énergies positives et de vos qualités pour vous imposer et avoir du succès.",
          paragraph1: "Aussi, le meilleur investissement que vous pouvez faire si vous voulez réussir, est d'exploiter votre éclat intérieur – c'est-à-dire – votre vraie personnalité, vos forces et vos qualités positives.",
          study: "Une étude américaine récente montre que la réussite d'un individu dépend à {{percentagePersonality}} de sa personnalité ; les {{percentageKnowledge}} restant représentent ses connaissances et son expérience.",
          conclusion: "Le {{goc}} vous donne les clés pour y parvenir."
        },
        mainContent: {
          title: "Les Enseignements du GOC",
          subtitle: "Connaissances philosophiques et idéologiques, clés et techniques extrêmement puissants pour l'acquisition des pouvoirs et le développement personnel !"
        },
        pillars: {
          esoterisme: {
            title: "Ésotérisme",
            items: [
              "La notion de Dieu",
              "Connaissance des religions",
              "L'immortalité",
              "Etre soi",
              "La vie enchantée",
              "Le magnétisme",
              "L'humanisme",
              "Les idéologies",
              "La vie, l'existence, la mort",
              "Le Yin et le Yan",
              "Soi et l'Autre"
            ]
          },
          philosophie: {
            title: "Philosophie",
            items: [
              { title: "Pensées", desc: "africaine, chinoise, indienne, grecque" },
              { title: "Croyances", desc: "origine du sacré, histoire des religions" },
              { title: "Mythologies", desc: "héros aux mille visages" },
              { title: "Sagesse", desc: "les cinq piliers" }
            ]
          },
          pouvoirs: {
            title: "Pouvoirs",
            items: [
              "Se connecter aux Forces bénéfiques",
              "Découvrir son Être intérieur",
              "Nettoyer son psychisme",
              "Maîtriser son mental",
              "Eveiller ses aptitudes cachées",
              "Influer sur son milieu sans agir physiquement",
              "Se régénérer physiquement",
              "Acquérir une meilleure santé",
              "Augmenter son espérance de vie",
              "Se fixer des buts et les atteindre",
              "Accéder au bien-être matériel",
              "Améliorer la qualité de sa vie",
              "Accéder à l'Éveil spirituel",
              "Se protéger contre tous les coups du sort quelle qu'en soit l'origine"
            ],
            more: "Et plus encore..."
          }
        },
        development: {
          title: "Développement des Pouvoirs",
          quote: "Tous ceux qui sont en quête d'évolution spirituelle et d'acquisition de pouvoirs recevront un enseignement qui leur permettra d'acquérir une personnalité magnétique et radieuse.",
          cta: "Commencer votre initiation"
        },
        footerQuote: "Une véritable purification, l'accès aux états de conscience les plus élevés et l'acquisition des pouvoirs agissants.",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "Chargement...",
    "noSubscription": {
      "title": "Aucun Abonnement Actif",
      "description": "Vous devez souscrire à un abonnement pour accéder à l'espace membre",
      "button": "Choisir un Abonnement"
    },
    "welcome": "Bienvenue",
    "member": "Membre",
    "active": "Actif",
    "contentSections": {
      "esotericTraining": {
        "title": "Formation Ésotérique",
        "description": "Accédez aux enseignements de base"
      },
      "philosophicalTraining": {
        "title": "Formation Philosophique",
        "description": "Approfondissez votre connaissance"
      },
      "powerDevelopment": {
        "title": "Développement des Pouvoirs",
        "description": "Contenu premium exclusif"
      },
      "library": {
        "title": "Bibliothèque",
        "description": "Accès aux ressources documentaires"
      },
      "videos": {
        "title": "Vidéos",
        "description": "Contenus vidéo exclusifs"
      }
    },
    "locked": {
      "requires": "Nécessite",
      "upgradeButton": "Améliorer l'Abonnement"
    },
    "access": "Accéder",
    "upgradeCTA": {
      "title": "Débloquez Plus de Contenu",
      "description": "Améliorez votre abonnement pour accéder à tout le contenu exclusif",
      "button": "Améliorer"
    },
    "roles": {
      "auditeur": {
        "name": "Auditeur",
        "description": "Accès de base aux formations"
      },
      "apprenti": {
        "name": "Apprenti",
        "description": "Formation philosophique avancée"
      },
      "frere-soeur": {
        "name": "Frère/Sœur",
        "description": "Accès complet à tous les contenus"
      }
    }
  },
      formation: {
  esoterism: {
    title: "Formation en Ésotérisme",
    subtitle: "Les Sciences Occultes",
    intro: "L'ésotérisme désigne l'ensemble des connaissances secrètes et des pratiques spirituelles transmises de maître à disciple depuis la nuit des temps. Notre formation complète vous initie aux mystères cachés de l'univers et aux lois qui régissent le plan subtil.",
    sections: {
      symbolism: {
        title: "Symbolisme Sacré",
        items: [
          "Interprétation des symboles hermétiques",
          "Géométrie sacrée et nombres mystiques",
          "Alphabets magiques et sigils"
        ]
      },
      alchemy: {
        title: "Alchimie Spirituelle",
        items: [
          "Grand Œuvre alchimique",
          "Transmutation intérieure",
          "Pierre philosophale et élixir de vie"
        ]
      },
      kabbalah: {
        title: "Kabbale & Arbre de Vie",
        items: [
          "Étude des 10 sephiroth",
          "Chemins de l'Arbre de Vie",
          "Guématrie et numérologie hébraïque"
        ]
      },
      tarot: {
        title: "Tarot & Divination",
        items: [
          "Arcanes majeurs et mineurs",
          "Arts divinatoires traditionnels",
          "Développement de l'intuition"
        ]
      }
    },
    program: {
      title: "Programme de Formation",
      level1: {
        title: "Niveau 1 - Apprenti (12 mois)",
        description: "Fondamentaux de l'ésotérisme, symbolisme, méditation, premiers rituels"
      },
      level2: {
        title: "Niveau 2 - Compagnon (18 mois)",
        description: "Alchimie, Kabbale, astrologie ésotérique, travail énergétique avancé"
      },
      level3: {
        title: "Niveau 3 - Maître (24 mois)",
        description: "Enseignements secrets, haute magie, initiation aux mystères profonds"
      }
    },
    signup: "S'inscrire à la formation"
  },
  philosophy: {
    title: "Formation Philosophique",
    subtitle: "Philosophie Ésotérique",
    intro: "La philosophie ésotérique explore les questions fondamentales de l'existence : qui sommes-nous, d'où venons-nous, où allons-nous ? Notre enseignement intègre les grandes traditions philosophiques orientales et occidentales dans une synthèse unique.",
    traditions: {
      hermetic: {
        title: "Philosophie Hermétique",
        description: "Étude des Sept Principes Hermétiques : Mentalisme, Correspondance, Vibration, Polarité, Rythme, Cause et Effet, Genre. Application pratique de ces lois universelles."
      },
      neoplatonic: {
        title: "Néoplatonisme & Gnose",
        description: "Enseignements de Platon, Plotin et des gnostiques. La doctrine de l'Un, l'émanation des mondes, la remontée de l'âme vers sa source divine."
      },
      eastern: {
        title: "Sagesse Orientale",
        description: "Vedanta, Bouddhisme, Taoïsme : exploration des philosophies orientales et de leurs pratiques contemplatives. Non-dualité, vacuité, Wu Wei."
      },
      modern: {
        title: "Métaphysique Moderne",
        description: "Synthèse entre science et spiritualité. Physique quantique et conscience, nouveaux paradigmes de la réalité."
      }
    },
    themes: {
      title: "Thèmes Étudiés",
      items: [
        "Nature de la conscience et de l'âme",
        "Cosmogonie et création du monde",
        "Karma, réincarnation et destinée",
        "Libre arbitre et déterminisme",
        "Éthique spirituelle et morale ésotérique"
      ]
    },
    methods: {
      title: "Méthodes Pédagogiques",
      items: [
        "Cours théoriques et séminaires",
        "Dialogues socratiques et débats",
        "Méditations philosophiques guidées",
        "Lectures commentées de textes sacrés",
        "Travaux écrits et dissertations"
      ]
    },
    continuous: {
      title: "Formation Continue",
      description: "La formation philosophique s'étend sur 3 ans avec des cours mensuels, des séminaires trimestriels et un accès à notre bibliothèque ésotérique.",
      button: "Programme détaillé"
    }
  },
  powers: {
    title: "Développement des Pouvoirs",
    subtitle: "Les Facultés Supérieures",
    intro: "Au-delà des capacités ordinaires, l'être humain possède des facultés latentes qu'il peut développer par l'entraînement spirituel. Notre formation vous guide dans l'éveil de ces pouvoirs psychiques et spirituels.",
    warning: {
      title: "⚠️ Avertissement Important",
      description: "Le développement des pouvoirs requiert une préparation morale et spirituelle rigoureuse. Ces enseignements ne sont transmis qu'aux membres initiés ayant fait preuve de maturité et d'éthique irréprochable."
    },
    abilities: {
      clairvoyance: {
        title: "Clairvoyance",
        description: "Développement de la vision subtile permettant de percevoir les plans énergétiques, les auras et les entités spirituelles.",
        items: ["Activation du 3ème œil", "Vision éthérique et astrale", "Lecture des auras"]
      },
      telepathy: {
        title: "Télépathie",
        description: "Communication mentale directe, transmission et réception de pensées, connexion avec les consciences à distance.",
        items: ["Transmission de pensées", "Réception intuitive", "Communication avec les guides"]
      },
      magnetism: {
        title: "Magnétisme",
        description: "Maîtrise de l'énergie vitale pour guérir, harmoniser et transformer. Techniques de magnétisme curatif et d'imposition des mains.",
        items: ["Accumulation d'énergie", "Soins énergétiques", "Harmonisation des chakras"]
      },
      astral: {
        title: "Projection Astrale",
        description: "Sortie hors du corps physique et voyage dans les plans subtils. Exploration consciente des dimensions spirituelles.",
        items: ["Décorporation volontaire", "Voyage astral conscient", "Exploration des plans supérieurs"]
      },
      psychometry: {
        title: "Psychométrie",
        description: "Lecture des énergies imprégnées dans les objets, lieux et personnes. Capacité à percevoir l'histoire énergétique.",
        items: ["Lecture d'objets", "Perception des mémoires", "Psychométrie avancée"]
      },
      meditation: {
        title: "Méditation Profonde",
        description: "États de conscience modifiés, samadhi, union mystique. Accès aux dimensions transcendantes de l'être.",
        items: ["États méditatifs profonds", "Expériences mystiques", "Union avec le divin"]
      }
    },
    program: {
      title: "Programme Progressif",
      subtitle: "L'éveil des pouvoirs suit un processus graduel et sécurisé sur plusieurs années",
      year1: {
        title: "Année 1",
        description: "Préparation & Purification"
      },
      year2: {
        title: "Année 2",
        description: "Activation & Développement"
      },
      year3: {
        title: "Année 3+",
        description: "Maîtrise & Transmission"
      }
    }
  }
},
      home: {
        title: "GRAND ORDRE DU CERCLE FRATERNITY",
        motto: "Là où se trouve l'arbre de la connaissance, se trouve le bonheur",
        subtitle: {
          line1: "Formation ésotérique & philosophique…",
          line2: "Fraternité spirituelle."
        },
        masterDestiny: "Accédez à la maîtrise totale de votre destin…",
        benefits: {
          connectForces: "Se connecter aux Forces bénéfiques",
          innerBeing: "Découvrir son Être intérieur",
          cleansePsyche: "Nettoyer son psychisme",
          masterMind: "Maîtriser son mental",
          awakenPowers: "Eveiller ses aptitudes cachées",
          influence: "Influer sur son milieu sans agir physiquement",
          regenerate: "Se régénérer physiquement",
          longevity: "Augmenter son espérance de vie",
          achieveGoals: "Se fixer des buts et les atteindre",
          materialWellbeing: "Accéder au bien-être matériel",
          qualityOfLife: "Améliorer la qualité de sa vie",
          spiritualAwakening: "Accéder à l'Éveil spirituel",
          protection: "Se protéger contre tous les coups du sort quelle qu'en soit l'origine",
          betterHealth: "Acquérir une meilleure santé"
        },
        carousel: {
          seminar: "Séminaire",
          prieure: "Prieuré",
          group: "Groupe Membres",
          symbols: "Symboles"
        },
        links: {
          formation: "Notre Formation",
          fraternity: "Notre Fraternité",
          seminars: "Nos Séminaires",
          actions: "Nos Actions"
        },
        vision: {
          title: "Notre Vision",
          goc: "Grand Ordre du Cercle",
          secrets: "Connaissances secrètes, Savoirs spirituels et initiatiques,",
          awakening: "Éveil des pouvoirs, Puissance personnelle, Outils de mieux-être…",
          changeLife: "Changer sa vie et accéder à la maîtrise totale de sa vie!",
          description: "Par une formation ésotérique qui vous donne accès aux connaissances sécrètes et aux savoirs spirituels et initiatiques, à l'éveil des pouvoirs, de la puissance personnelle et aux outils du bien-être…",
          quote: "« L'Homme fut originellement conçu comme un Être purement spirituel, émané du Principe divin « à l'image et à la ressemblance du Grand Esprit Créateur ». Lors de sa descente dans la matière, il est mû par une impulsion jumelle: Attirance-Rejet, Désir-Répulsion. Revêtu d'un corps corruptible il est désormais séparé de l'unité du Principe. Sa double nature – matérielle et spirituelle – le soumet à un conflit entre aspirations spirituelles et les chaînes de la matérialité. Depuis lors, il accomplit par orgueil, des actes gouvernés par ces impulsions. Mais l'homme de désir cherche à obtenir sa réintégration dans son état premier et à recouvrer son corps de gloire.",
          mission: "Le but du GOC est d'éclairer l'Initié sur sa nature, son origine et sa destination. Il ou elle reçoit des enseignements essentiellement pratiques et initiatiques, traitant d'ésotérisme, de spiritualité, de métaphysique, des secrets des Yogis, de philosophie et de développement personnel ; lui permettant une véritable purification, l'accès aux états de conscience les plus élevés et l'acquisition des pouvoirs agissants."
        },
        nav: {
          becomeMember: "Devenir Membre",
          videos: "Vidéos",
          donation: "Donation",
          commanderies: "Commanderies",
          contacts: "Contacts",
          contact: "Contact"
        },
        image: {
          alt: "Grand Ordre du Cercle",
          caption: "La sagesse ancienne pour l'homme moderne"
        },
        footer: {
          copyright: "© 2026 Grand Ordre du Cercle - Tous droits réservés",
          sapientia: "Sapientia",
          fraternitas: "Fraternitas",
          spiritus: "Spiritus"
        }
      },
      membership: {
        title: "Rejoignez Notre Ordre",
        subtitle: "Choisissez le niveau d'engagement qui correspond à votre parcours spirituel et philosophique",
        adhesion: "Adhésion",
        formation: "Formation",
        oneTime: "une fois",
        perYear: "par an",
        firstYear: "Première année",
        renewal: "Renouvellement",
        becomeMember: "Devenir Membre",
        renew: "Renouveler",
        currentSubscription: "Abonnement Actuel",
        learnMore: "En Savoir Plus",
        mostPopular: "Le Plus Populaire",
        active: "Actif",
        expired: "Expiré",
        current: "Actuel",
        activeSubscription: "Abonnement Actif",
        adhesionRequired: "Adhésion requise",
        buyTrimester: "Acheter un Trimestre",
        buyCourse: "Acheter 1 Cours",
        processing: "Traitement...",
        signupAndBuy: "S'inscrire et Acheter",
        pricePerTrimester: "Prix par trimestre",
        pricePerCourse: "Prix par cours",
        formationAccessible: "Les formations sont accessibles uniquement aux membres actifs de l'Ordre.",
        cotisation: "Cotisation",
        error: "Une erreur est survenue",
        whyJoin: "Pourquoi Devenir Membre ?",
        whyJoinDesc: "En rejoignant notre ordre, vous accédez à une communauté dédiée à l'éveil spirituel, à la connaissance ésotérique et à l'entraide fraternelle.",
        benefit1: "Accès à des enseignements exclusifs",
        benefit2: "Participation à des événements et séminaires",
        benefit3: "Réseau de fraternité et d'entraide",
        benefit4: "Bibliothèque de ressources spirituelles"
      },
      roles: {
        auditeur: {
          name: "Apprenant Auditeur.trice",
          description: "Accès de base aux enseignements",
          formationTitle: "Formation Apprenant Auditeur.trice",
          formationDesc: "Cours individuels à l'unité",
          feature1: "Flexibilité d'achat à votre rythme",
          feature2: "Accès immédiat au cours acheté",
          feature3: "Contenu riche et détaillé",
          totalCourses: "Total de 40 cours disponibles",
          totalCost: "Coût total complet",
          totalDuration: "Formation complète sur 2 ans"
        },
        apprenti: {
          name: "Membre Apprenti.e",
          description: "Formation complète",
          formationTitle: "Formation Apprenti.e",
          formationDesc: "Formation structurée par trimestre",
          feature1: "Enseignements approfondis chaque trimestre",
          feature2: "Suivi personnalisé de votre progression",
          feature3: "Accès aux ressources exclusives",
          totalCost: "Coût total de la formation",
          totalDuration: "Durée totale: 8 trimestres (2 ans)"
        },
        "frere-soeur": {
          name: "Membre Frère.Sœur",
          description: "Accès premium complet",
          feature1: "Tous les contenus et formations",
          feature2: "Mentorat individuel",
          feature3: "Support prioritaire 24/7",
          feature4: "Événements exclusifs",
          feature5: "Réseau international"
        }
      },
      organisation: {
        motto: "Là où se trouve l'arbre de la connaissance, se trouve le bonheur",
        title: "Organisation du GOC",
        goc: "GOC",
        structure: "Le Grand Ordre du Cercle est structuré autour de :",
        pillars: "Piliers",
        grades: "Grades",
        rule: "Règle",
        pillarsTitle: "Piliers",
        pillar1: {
          title: "I – L'Initiation",
          item1: "Formation",
          item2: "Perfectionnement"
        },
        pillar2: {
          title: "II – Offices",
          item1: "Rites",
          item2: "Cérémonies"
        },
        pillar3: {
          title: "III – La Charité",
          item1: "Œuvres caritatives",
          item2: "Donations"
        },
        pillar4: {
          title: "IV – Mutualité",
          item1: "Solidarité des initiés",
          item2: "Appuis financiers"
        },
        rulesTitle: "Règles du GOC",
        rules: {
          "1": "Croyance au Grand Esprit Divin",
          "2": "Fraternité initiatique et Devoir de solidarité",
          "3": "Idéal d'Amour, de vérité, de justice et de paix",
          "4": "Perfectionnement des membres et de l'humanité",
          "5": "Pratique du Rituel et du Symbolisme",
          "6": "Respect des Opinions et Croyances",
          "7": "Serment sur les Symboles sacrés",
          "8": "Rassemblement et travail dans les commanderies",
          "9": "Honorabilité, Loyauté et discrétion",
          "10": "Amour de la Patrie, respect des lois, respect des Autorités constituées",
          "11": "Comportement sage et digne",
          "12": "Aide et Protection mutuelle"
        },
        structureTitle: "Organisation du GOC",
        level1: {
          title: "Echelon 1 : le Cercle des frères",
          desc: "Le CF réunit une communauté d'un maximum de 770 frères"
        },
        level2: {
          title: "Echelon 2 : le District",
          desc: "Le District réunit l'ensemble des Cercles des Frères au niveau d'un département"
        },
        level3: {
          title: "Echelon 3 : la Commanderie",
          desc: "La Commanderie réunit l'ensemble des Districts au niveau de la région"
        },
        level4: {
          title: "Echelon 4 : le Gouvernorat",
          desc: "Le Gouvernorat réunit l'ensemble des Commanderies au niveau d'un pays"
        },
        level5: {
          title: "Echelon 5 : Le Primat Suprême",
          desc: "Le Primat Suprême est l'Instance suprême du GOC"
        },
        gradesTitle: "Grades",
        grade: {
          "1": "Apprenti",
          "2": "Compagnon",
          "3": "Officier",
          "4": "Honorable",
          "5": "Vénérable",
          "6": "Maître",
          "7": "Grand-maître"
        },
        administration: "Administration",
        admin1: {
          title: "1) Le Cercle",
          item1: "L'Assemblée des frères",
          item2: "Le Vénérable",
          item3: "Le Secrétariat",
          item4: "La Trésorerie",
          item5: "L'intendance",
          item6: "L'Officium"
        },
        admin2: {
          title: "2) Le District",
          item1: "Le Conseil du District",
          item2: "Le Maître",
          item3: "Le Secrétariat",
          item4: "La Trésorerie",
          item5: "L'intendance",
          item6: "L'Officium"
        },
        admin3: {
          title: "3) La Commanderie",
          item1: "Le Conseil de la Commanderie",
          item2: "Le Commandeur",
          item3: "Le Secrétariat",
          item4: "La Trésorerie",
          item5: "L'intendance",
          item6: "L'Officium"
        },
        admin4: {
          title: "4) Le Gouvernorat/Légat",
          item1: "Le Cénacle",
          item2: "Le Grand-Maître",
          item3: "Le Secrétariat",
          item4: "La Trésorerie",
          item5: "L'intendance",
          item6: "L'Officium"
        },
        globalGovernance: "La Gouvernance mondiale du GOC",
        global1: {
          title: "Le Congrès"
        },
        global2: {
          title: "Le Cénacle Suprême",
          desc: "(Conseil d'Administration du GOC)"
        },
        global3: {
          title: "Le Primat du GOC"
        },
        global4: {
          title: "Secrétariat Général",
          desc: "(Instance de gestion du GOC)"
        },
        global5: {
          title: "Trésorerie Centrale"
        },
        join: "Rejoindre l'Ordre"
      },
      fraternity: {
        motto: "Là où se trouve l'arbre de la connaissance, se trouve le bonheur",
        title: "La Fraternité Universelle",
        ourFraternity: "Notre Fraternité",
        description: "La Fraternité du Grand Ordre du Cercle est une communauté de femmes et d'hommes, sans exclusive, de toutes races, de toutes ethnies, de tous pays et de toutes nationalités, qui acceptent volontairement et sans contrainte d'aucune sorte, d'aucune nature, de DEVENIR MEMBRE et s'engagent à RESPECTER scrupuleusement LA RÈGLE en XII Principes qui régit LA VIE de l'Organisation du Grand Ordre du Cercle.",
        transcendentLink: "Un Lien qui Transcende",
        transcendentDesc: "La fraternité au sein du Grand Ordre du Cercle n'est pas une simple camaraderie, mais un lien spirituel profond qui unit les âmes dans leur quête de lumière et de connaissance.",
        features: {
          spiritualHelp: "Entraide Spirituelle",
          spiritualHelpDesc: "Les frères et sœurs s'entraident dans leur cheminement initiatique",
          knowledge: "Partage de Connaissances",
          knowledgeDesc: "Transmission des savoirs ésotériques entre membres initiés",
          mutualSupport: "Soutien Mutuel",
          mutualSupportDesc: "Présence et accompagnement dans les épreuves de la vie",
          rituals: "Rituels Fraternels",
          ritualsDesc: "Cérémonies renforçant les liens entre les membres de l'Ordre",
          network: "Réseau International",
          networkDesc: "Connexions avec des membres dans le monde entier",
          meditation: "Méditations Collectives",
          meditationDesc: "Pratiques spirituelles en groupe pour amplifier l'énergie"
        },
        commanderies: "Les Commanderies Fraternelles",
        commanderiesDesc: "Chaque région dispose de sa commanderie, lieu sacré où se réunissent les membres pour cultiver la fraternité, pratiquer les rituels et partager les enseignements.",
        activities: {
          meditation: "Réunions mensuelles de méditation et d'étude",
          celebrations: "Célébrations des solstices et équinoxes",
          meals: "Repas fraternels et moments de convivialité",
          library: "Bibliothèque partagée d'ouvrages ésotériques"
        },
        joinTitle: "Rejoignez Notre Fraternité",
        joinDesc: "Devenez membre du Grand Ordre du Cercle et découvrez la profondeur d'une fraternité authentique basée sur l'amour, la sagesse et le service.",
        learnMore: "En savoir plus"
      },
      charity: {
        motto: "Là où se trouve l'arbre de la connaissance, se trouve le bonheur",
        title: "Charité & Œuvres Sociales",
        serviceTitle: "Le Service Désintéressé",
        serviceDesc: "Au cœur de notre enseignement ésotérique se trouve le principe du service désintéressé. La vraie sagesse ne s'acquiert pas seulement par l'étude, mais aussi par l'action compassionnée envers nos semblables.",
        works: {
          spiritual: "Assistance Spirituelle",
          spiritualDesc: "Accompagnement spirituel gratuit pour les personnes en détresse morale ou existentielle. Nos membres formés offrent écoute, conseil et soutien énergétique.",
          material: "Aide Matérielle",
          materialDesc: "Distribution d'aide matérielle aux familles dans le besoin : nourriture, vêtements, soutien financier ponctuel pour les situations d'urgence.",
          education: "Éducation Gratuite",
          educationDesc: "Cours gratuits de philosophie, méditation et développement personnel pour les personnes ne pouvant accéder aux enseignements payants.",
          energy: "Soins Énergétiques",
          energyDesc: "Séances de soins énergétiques et de guérison holistique offertes gratuitement aux personnes souffrant de maladies ou de déséquilibres."
        },
        participate: "Participez à nos Œuvres",
        participateDesc: "Chaque membre du GOC consacre du temps et des ressources aux œuvres de charité. Rejoignez-nous dans cette mission de service et de compassion.",
        donate: "Faire un don",
        volunteer: "Devenir bénévole"
      },
      library: {
        
  intro: {
    quote: "La matière se recycle, l'esprit se ressource…",
    description: "Lieu de connaissances, la Bibliothèque du GOC met à la disposition des membres, des auditeurs affiliés et des sympathisants, sa publication « Mâat », les vidéos et fascicules de ses enseignements, des livres de philosophie, de sagesse, de connaissances sécrètes. Ainsi que les tenues des membres et autres accessoires pour les rites.",
    orderForm: "Formulaire de commande"
  },
  accessories: {
    description: "Les accessoires rituels sont des outils sacrés utilisés dans les pratiques ésotériques et les cérémonies initiatiques. Chaque objet est consacré et chargé énergétiquement selon les traditions hermétiques.",
    items: {
      candles: {
        title: "Bougies Rituelles",
        description: "Bougies consacrées de différentes couleurs pour les rituels spécifiques : blanc (purification), or (spiritualité), rouge (amour), vert (prospérité).",
        availability: "Disponible pour membres"
      },
      crystals: {
        title: "Cristaux & Pierres",
        description: "Collection de cristaux purifiés et programmés : quartz, améthyste, citrine, obsidienne. Chaque pierre possède ses propriétés énergétiques spécifiques.",
        availability: "Disponible pour membres"
      },
      incense: {
        title: "Encens Sacrés",
        description: "Encens traditionnels pour la purification et l'élévation vibratoire : oliban, myrrhe, benjoin, santal. Recettes ancestrales des temples.",
        availability: "Disponible pour membres"
      },
      sword: {
        title: "Épée Rituelle",
        description: "Épée symbolique utilisée pour tracer les cercles de protection et diriger l'énergie lors des rituels. Forgée selon les traditions hermétiques.",
        availability: "Réservé aux initiés"
      },
      chalice: {
        title: "Calice Consacré",
        description: "Coupe sacrée représentant l'élément eau et le principe féminin. Utilisée dans les rituels d'offrande et de communion spirituelle.",
        availability: "Réservé aux initiés"
      },
      malas: {
        title: "Chapelets & Malas",
        description: "Chapelets de méditation en bois sacré, pierres semi-précieuses ou graines de rudraksha. 108 perles pour la pratique du japa (répétition de mantras).",
        availability: "Disponible pour membres"
      },
      feathers: {
        title: "Plumes Rituelles",
        description: "Plumes d'oiseaux sacrés utilisées pour disperser la fumée d'encens et purifier l'espace rituel. Tradition amérindienne et chamanique.",
        availability: "Disponible pour membres"
      },
      talismans: {
        title: "Pentacles & Talismans",
        description: "Pentacles gravés selon les traditions de la magie salomoniennes. Talismans personnalisés chargés selon votre thème astrologique.",
        availability: "Sur commande"
      },
      robes: {
        title: "Robes & Vêtements",
        description: "Robes cérémonielles, capes et vêtements rituels aux couleurs de l'Ordre. Confectionnés en tissus naturels selon la tradition.",
        availability: "Réservé aux membres"
      }
    },
    cta: {
      title: "Commander des Accessoires",
      description: "Les accessoires rituels sont disponibles à l'achat pour les membres du GOC. Chaque objet est consacré individuellement avant livraison.",
      button: "Accéder à la boutique",
      note: "* Connexion requise - Réservé aux membres initiés"
    }
  },journals: {
    title: "Journaux & Publications",
    intro: "Le Grand Ordre du Cercle publie régulièrement des journaux, bulletins et revues destinés à la formation continue de ses membres et à la diffusion des savoirs ésotériques.",
    mainJournal: {
      title: "La Lumière du Cercle",
      subtitle: "Journal officiel du GOC - Publication trimestrielle",
      summary: "Au sommaire :",
      format: "Format :",
      items: [
        "Enseignements ésotériques approfondis",
        "Rituels et pratiques saisonnières",
        "Témoignages de membres",
        "Actualités de l'Ordre"
      ],
      formatItems: [
        "40-60 pages illustrées",
        "Version papier et numérique",
        "Archives complètes depuis 1985",
        "Réservé aux membres"
      ]
    },
    publications: {
      bulletin: {
        title: "Bulletin de la Fraternité",
        description: "Bulletin mensuel destiné à maintenir le lien entre les membres. Informations sur les rencontres, séminaires et événements à venir.",
        frequency: "Mensuel",
        pages: "12-16 pages",
        access: "Membres uniquement"
      },
      cahiers: {
        title: "Cahiers d'Études Hermétiques",
        description: "Revue académique approfondie sur des thèmes ésotériques spécifiques : alchimie, Kabbale, astrologie, symbolisme, philosophie mystique.",
        frequency: "Bimestriel",
        pages: "60-80 pages",
        access: "Membres initiés"
      },
      lettres: {
        title: "Lettres du Grand Maître",
        description: "Enseignements directs du Grand Maître de l'Ordre, transmettant des connaissances profondes et des orientations spirituelles pour les membres avancés.",
        frequency: "Trimestriel",
        pages: "8-12 pages",
        access: "Initiés de 2ème degré"
      },
      almanach: {
        title: "Almanach Ésotérique",
        description: "Publication annuelle contenant les dates importantes, phases lunaires, positions planétaires, calendrier des rituels et pratiques recommandées.",
        frequency: "Annuel",
        pages: "120 pages",
        access: "Accessible à tous"
      }
    },
    archives: {
      title: "Archives Historiques",
      description: "Accédez aux archives complètes de nos publications depuis la fondation de l'Ordre. Des décennies de savoir ésotérique à portée de main.",
      stats: {
        journal: "Numéros de La Lumière du Cercle",
        bulletins: "Bulletins mensuels",
        years: "Années d'archives"
      }
    },
    cta: {
      title: "Accéder aux Publications",
      description: "Devenez membre du Grand Ordre du Cercle pour recevoir nos publications et accéder aux archives complètes.",
      becomeMember: "Devenir membre",
      consultArchives: "Consulter les archives"
    }
  },
  books: {
    title: "Bibliothèque Ésotérique",
    intro: "Notre bibliothèque contient une collection exceptionnelle d'ouvrages ésotériques, hermétiques et philosophiques. Certains textes rares sont réservés aux membres initiés.",
    sections: {
      alchemy: "Alchimie & Hermétisme",
      kabbalah: "Kabbale & Mystique Juive",
      magic: "Magie Cérémonielle",
      philosophy: "Philosophie Ésotérique",
      tarot: "Tarot & Symbolisme"
    },
    access: {
      open: "Accessible à tous",
      members: "Réservé membres",
      initiates: "Réservé initiés"
    },
    onSite: {
      title: "Consultation sur Place",
      description: "Les membres peuvent consulter l'intégralité de la bibliothèque dans nos locaux. Ambiance studieuse et propice à la méditation.",
      note: "Accessible sur rendez-vous pour les membres"
    },
    digital: {
      title: "Bibliothèque Numérique",
      description: "Accès à notre bibliothèque numérique avec des centaines d'ouvrages en format PDF, accessible 24/7 depuis votre espace membre.",
      note: "Réservé aux membres actifs"
    }
  },
  videos: {
    title: "Vidéothèque Ésotérique",
    intro: "Notre vidéothèque propose des conférences, rituels filmés, méditations guidées et enseignements du Grand Maître. Contenu exclusif pour les membres du GOC.",
    categories: {
      conferences: {
        title: "Conférences",
        description: "Conférences magistrales sur l'ésotérisme, l'alchimie, la Kabbale et la philosophie hermétique par nos maîtres initiés.",
        count: "45+ vidéos",
        access: "Accès membres"
      },
      meditations: {
        title: "Méditations Guidées",
        description: "Séances de méditation guidée pour le développement spirituel, l'activation des chakras et la connexion au divin.",
        count: "30+ vidéos",
        access: "Accès libre"
      },
      rituals: {
        title: "Rituels Filmés",
        description: "Enregistrements de rituels initiatiques, cérémonies saisonnières et pratiques ésotériques transmises dans l'Ordre.",
        count: "25+ vidéos",
        access: "Initiés uniquement"
      },
      courses: {
        title: "Cours Théoriques",
        description: "Cours complets de formation sur l'ésotérisme, les sciences occultes, la philosophie et le symbolisme sacré.",
        count: "60+ vidéos",
        access: "Accès membres"
      },
      energy: {
        title: "Pratiques Énergétiques",
        description: "Exercices pratiques de développement des facultés psychiques, travail énergétique et magnétisme.",
        count: "35+ vidéos",
        access: "Accès membres"
      },
      secret: {
        title: "Enseignements Secrets",
        description: "Enseignements réservés transmis par le Grand Maître sur les mystères profonds de la tradition hermétique.",
        count: "20+ vidéos",
        access: "Maîtres uniquement"
      }
    },
    recent: {
      title: "Dernières Publications",
      videos: [
        {
          title: "Introduction à la Kabbale pratique",
          description: "Conférence du Grand Maître sur les fondements de la Kabbale et son application dans la vie quotidienne.",
          duration: "1h 25min",
          date: "Janvier 2026",
          access: "Membres"
        },
        {
          title: "Méditation de pleine lune",
          description: "Méditation guidée spéciale pour se connecter aux énergies lunaires et recevoir l'illumination.",
          duration: "45min",
          date: "Janvier 2026",
          access: "Accès libre"
        },
        {
          title: "Rituel du solstice d'hiver 2025",
          description: "Enregistrement complet du rituel cérémoniel célébré lors du solstice d'hiver à la Commanderie centrale.",
          duration: "2h 10min",
          date: "Décembre 2025",
          access: "Initiés"
        }
      ]
    },
    stats: {
      title: "Notre Collection Vidéo",
      total: "Vidéos au total",
      hours: "De contenu exclusif",
      quality: "Qualité HD & 4K",
      access: "Accès illimité"
    },
    cta: {
      title: "Accéder à la Vidéothèque",
      description: "Devenez membre pour accéder à l'intégralité de notre collection de vidéos et bénéficier de nouveaux contenus chaque mois.",
      button: "S'inscrire maintenant"
    }
  } 
},// Under each language (fr, en, ar, de, es, it, pt, zh, ja)

goc: {
  actions: {
    title: "Actions du GOC", // "GOC Actions", "أنشطة GOC", etc.
    subtitle: "Nos Actions dans le Monde",
    items: {
      seminars: {
        title: "Séminaires Initiatiques",
        description: "Organisation de séminaires et retraites spirituelles permettant aux membres d'approfondir leur cheminement ésotérique et de vivre des expériences initiatiques transformatrices."
      },
      conferences: {
        title: "Conférences Publiques",
        description: "Diffusion des savoirs ésotériques et philosophiques à travers des conférences ouvertes au public sur des thèmes spirituels, mystiques et métaphysiques."
      },
      publications: {
        title: "Publications",
        description: "Édition de livres, journaux et documents pédagogiques préservant et transmettant les enseignements traditionnels de l'ésotérisme occidental et oriental."
      },
      rituals: {
        title: "Rituels Collectifs",
        description: "Célébration des rituels saisonniers et initiatiques permettant aux membres de se connecter aux forces cosmiques et de renforcer l'égrégore de l'Ordre."
      }
    },
    program: {
      title: "Programme Annuel",
      seasons: {
        spring: { name: "Printemps", activity: "Rituels d'équinoxe, séminaire de renouveau spirituel" },
        summer: { name: "Été", activity: "Retraite estivale, célébration du solstice, initiations" },
        autumn: { name: "Automne", activity: "Séminaires philosophiques, rituels de moisson spirituelle" },
        winter: { name: "Hiver", activity: "Solstice d'hiver, méditations profondes, enseignements secrets" }
      }
    }
  },
  charity: {
    title: "Charité & Œuvres Sociales",
    serviceTitle: "Le Service Désintéressé",
    serviceDesc: "Au cœur de notre enseignement ésotérique se trouve le principe du service désintéressé. La vraie sagesse ne s'acquiert pas seulement par l'étude, mais aussi par l'action compassionnée envers nos semblables.",
    works: {
      spiritual: {
        title: "Assistance Spirituelle",
        description: "Accompagnement spirituel gratuit pour les personnes en détresse morale ou existentielle. Nos membres formés offrent écoute, conseil et soutien énergétique."
      },
      material: {
        title: "Aide Matérielle",
        description: "Distribution d'aide matérielle aux familles dans le besoin : nourriture, vêtements, soutien financier ponctuel pour les situations d'urgence."
      },
      education: {
        title: "Éducation Gratuite",
        description: "Cours gratuits de philosophie, méditation et développement personnel pour les personnes ne pouvant accéder aux enseignements payants."
      },
      energy: {
        title: "Soins Énergétiques",
        description: "Séances de soins énergétiques et de guérison holistique offertes gratuitement aux personnes souffrant de maladies ou de déséquilibres."
      }
    },
    participate: {
      title: "Participez à nos Œuvres",
      description: "Chaque membre du GOC consacre du temps et des ressources aux œuvres de charité. Rejoignez-nous dans cette mission de service et de compassion.",
      donate: "Faire un don",
      volunteer: "Devenir bénévole"
    }
  },
  fraternity: {
    title: "La Fraternité Universelle",
    ourFraternity: "Notre Fraternité",
    description: "La Fraternité du Grand Ordre du Cercle est une communauté de femmes et d'hommes, sans exclusive, de toutes races, de toutes ethnies, de tous pays et de toutes nationalités, qui acceptent volontairement et sans contrainte d'aucune sorte, d'aucune nature, de DEVENIR MEMBRE et s'engagent à RESPECTER scrupuleusement LA RÈGLE en XII Principes qui régit LA VIE de l'Organisation du Grand Ordre du Cercle.",
    transcendentLink: "Un Lien qui Transcende",
    transcendentDesc: "La fraternité au sein du Grand Ordre du Cercle n'est pas une simple camaraderie, mais un lien spirituel profond qui unit les âmes dans leur quête de lumière et de connaissance.",
    features: {
      spiritualHelp: { title: "Entraide Spirituelle", description: "Les frères et sœurs s'entraident dans leur cheminement initiatique" },
      knowledge: { title: "Partage de Connaissances", description: "Transmission des savoirs ésotériques entre membres initiés" },
      mutualSupport: { title: "Soutien Mutuel", description: "Présence et accompagnement dans les épreuves de la vie" },
      rituals: { title: "Rituels Fraternels", description: "Cérémonies renforçant les liens entre les membres de l'Ordre" },
      network: { title: "Réseau International", description: "Connexions avec des membres dans le monde entier" },
      meditation: { title: "Méditations Collectives", description: "Pratiques spirituelles en groupe pour amplifier l'énergie" }
    },
    commanderies: {
      title: "Les Commanderies Fraternelles",
      description: "Chaque région dispose de sa commanderie, lieu sacré où se réunissent les membres pour cultiver la fraternité, pratiquer les rituels et partager les enseignements.",
      activities: {
        meditation: "Réunions mensuelles de méditation et d'étude",
        celebrations: "Célébrations des solstices et équinoxes",
        meals: "Repas fraternels et moments de convivialité",
        library: "Bibliothèque partagée d'ouvrages ésotériques"
      }
    },
    join: {
      title: "Rejoignez Notre Fraternité",
      description: "Devenez membre du Grand Ordre du Cercle et découvrez la profondeur d'une fraternité authentique basée sur l'amour, la sagesse et le service.",
      button: "En savoir plus"
    }
  }
},
      donation: {
  charite: {
    title: "Don de Charité",
    generosityInAction: "Votre Générosité en Action",
    message: "Le minimum ou plus de votre donation est une générosité qui nous permet de planifier nos actions d'aide et de solidarité envers des personnes qui en ont besoin.",
    minimumLabel: "Don de Charité minimum",
    amount: "100€",
    actTitle: "Un Acte de Grande Générosité",
    actDescription: "Le don de charité représente un engagement significatif envers les valeurs d'entraide et de solidarité du Grand Ordre du Cercle. Par ce geste généreux, vous permettez de soutenir durablement nos actions caritatives et d'aider concrètement ceux qui en ont le plus besoin.",
    impact: {
      title: "Impact de votre don de charité",
      items: [
        "Aide directe aux personnes en grande difficulté",
        "Financement de programmes de solidarité",
        "Soutien aux familles dans le besoin",
        "Actions humanitaires concrètes",
        "Aide d'urgence lors de crises"
      ]
    },
    recognition: {
      title: "Reconnaissance spéciale",
      description: "En tant que donateur charitable, vous bénéficiez d'une reconnaissance particulière :",
      items: [
        "Mention au Cercle des Bienfaiteurs (si souhaité)",
        "Rapport annuel sur l'utilisation des fonds",
        "Invitation aux événements caritatifs de l'Ordre",
        "Certificat de reconnaissance (sur demande)",
        "Reçu fiscal pour déduction d'impôts"
      ]
    },
    examples: {
      title: "Exemples d'Actions Financées",
      food: "Aide alimentaire aux familles",
      medical: "Soutien médical d'urgence",
      education: "Bourses d'études pour enfants"
    },
    form: {
      title: "Faire un Don de Charité",
      subtitle: "Montant minimum : 100€. Votre générosité change des vies.",
      amountLabel: "Montant de votre don charitable (minimum 100€)",
      customPlaceholder: "Ou entrez un montant (min. 100€)",
      typeLabel: "Type de don",
      types: {
        unique: "Don unique",
        monthly: "Don mensuel récurrent",
        quarterly: "Don trimestriel",
        annual: "Don annuel"
      },
      firstName: "Prénom *",
      lastName: "Nom *",
      email: "Email *",
      message: "Message (optionnel)",
      messagePlaceholder: "Partagez vos motivations ou dédiez votre don...",
      receipt: "Je souhaite recevoir un reçu fiscal",
      circle: "J'accepte d'être mentionné au Cercle des Bienfaiteurs",
      submit: "🤲 Faire mon don de charité (min. 100€)",
      secure: "✓ Paiement 100% sécurisé • ✓ Reçu fiscal disponible"
    },
    thankYou: {
      title: "Merci pour Votre Grande Générosité",
      description: "Votre don de charité fait une différence concrète dans la vie de nombreuses personnes. Grâce à votre générosité, nous pouvons continuer nos actions d'aide et de solidarité auprès de ceux qui en ont le plus besoin. Que votre geste soit béni.",
      gratitude: "🙏 Avec notre plus profonde gratitude 🙏"
    }
  },
  soutien: {
    title: "Soutien au Développement de l'Ordre",
    generosityInAction: "Votre Générosité en Action",
    message: "Le minimum ou plus de votre donation est une générosité qui nous permet de planifier nos actions d'aide et de solidarité envers des personnes qui en ont besoin.",
    minimumLabel: "Don de Soutien minimum",
    amount: "50€",
    contributeTitle: "Contribuer à notre Mission",
    contributeDescription: "Vos dons de soutien permettent au Grand Ordre du Cercle de continuer à transmettre les enseignements ésotériques, d'organiser des événements spirituels et de maintenir nos infrastructures. Chaque contribution aide à préserver et diffuser la tradition hermétique.",
    funding: {
      title: "Financement des Formations",
      items: [
        "Création de nouveaux cours en ligne",
        "Rémunération des enseignants qualifiés",
        "Production de contenus vidéo HD",
        "Développement de supports pédagogiques",
        "Organisation de séminaires et retraites"
      ]
    },
    infrastructure: {
      title: "Maintien des Infrastructures",
      items: [
        "Entretien des commanderies régionales",
        "Bibliothèque ésotérique et archives",
        "Plateforme numérique et site web",
        "Acquisition de nouveaux ouvrages rares",
        "Équipements rituels et accessoires"
      ]
    },
    editorial: {
      title: "Projets Éditoriaux",
      items: [
        "Publication du journal trimestriel",
        "Édition de livres ésotériques",
        "Traduction de textes anciens",
        "Cahiers d'études hermétiques",
        "Diffusion gratuite de contenus"
      ]
    },
    international: {
      title: "Rayonnement International",
      items: [
        "Ouverture de nouvelles commanderies",
        "Conférences internationales",
        "Échanges avec d'autres ordres",
        "Traduction des formations",
        "Présence dans les événements spirituels"
      ]
    },
    budget: {
      title: "Budget Annuel 2026",
      training: "Formations",
      infrastructure: "Infrastructures",
      editorial: "Édition",
      outreach: "Rayonnement"
    },
    levels: {
      title: "Niveaux de Soutien Mensuel",
      friend: {
        name: "Ami de l'Ordre",
        price: "10€",
        period: "/mois",
        benefits: [
          "Remerciements sur le site",
          "Newsletter exclusive",
          "Badge \"Ami du GOC\""
        ],
        button: "Soutenir"
      },
      benefactor: {
        name: "Bienfaiteur",
        price: "25€",
        period: "/mois",
        badge: "RECOMMANDÉ",
        benefits: [
          "Tous les avantages précédents",
          "Accès à des contenus exclusifs",
          "Invitation aux événements VIP",
          "Journal trimestriel gratuit"
        ],
        button: "Soutenir"
      },
      patron: {
        name: "Grand Mécène",
        price: "50€",
        period: "/mois",
        benefits: [
          "Tous les avantages précédents",
          "Mention au Panthéon des Mécènes",
          "Consultation spirituelle annuelle",
          "Cadeau spirituel personnalisé"
        ],
        button: "Soutenir"
      }
    },
    form: {
      title: "Don Unique",
      amountLabel: "Montant de votre soutien",
      customPlaceholder: "Autre montant",
      typeLabel: "Type de soutien",
      types: {
        unique: "Don unique",
        monthly: "Soutien mensuel récurrent"
      },
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email *",
      submit: "Soutenir maintenant",
      secure: "✓ Paiement 100% sécurisé • ✓ Annulation possible à tout moment"
    }
  },
  sympathie: {
    title: "Don de Sympathie",
    generosityInAction: "Votre Générosité en Action",
    message: "Le minimum ou plus de votre donation est une générosité qui nous permet de planifier nos actions d'aide et de solidarité envers des personnes qui en ont besoin.",
    minimumLabel: "Don de Sympathie minimum",
    amount: "25€",
    gestureTitle: "Un Geste du Cœur",
    gestureDescription: "Le don de sympathie est un geste libre et spontané qui ne requiert aucune contrepartie. C'est une manifestation de votre soutien et de votre connexion avec les valeurs du Grand Ordre du Cercle, sans attente ni obligation.",
    freedom: {
      title: "Une Liberté Totale",
      description: "Contrairement aux autres formes de donation, le don de sympathie est entièrement libre : montant libre (minimum 25€), fréquence libre, anonymat possible. C'est simplement un moyen d'exprimer votre appréciation pour le travail de l'Ordre et de contribuer, à votre mesure, à la préservation de la tradition ésotérique."
    },
    why: {
      title: "Pourquoi faire un don de sympathie ?",
      items: [
        "Vous appréciez notre mission et nos valeurs",
        "Vous souhaitez soutenir sans vous engager",
        "Vous voulez offrir un geste ponctuel",
        "Vous ne pouvez pas devenir membre mais voulez aider",
        "Vous ressentez une connexion spirituelle avec l'Ordre"
      ]
    },
    usage: {
      title: "Comment est-il utilisé ?",
      description: "Les dons de sympathie contribuent à nos actions d'aide et de solidarité. Ils sont utilisés là où le besoin se fait le plus sentir :",
      items: [
        "Aide aux personnes en difficulté",
        "Actions de solidarité communautaire",
        "Développement de nouveaux contenus gratuits",
        "Projets spéciaux et opportunités",
        "Fonds de réserve pour les imprévus"
      ]
    },
    noReturn: {
      title: "Aucune Contrepartie, Juste de la Gratitude",
      description: "Nous ne vous offrons rien en échange de votre don de sympathie, si ce n'est notre profonde gratitude. Vous ne recevrez pas de newsletter spéciale, pas d'invitation exclusive, pas de reconnaissance publique (sauf si vous le souhaitez). C'est un acte pur de générosité et de bienveillance."
    },
    testimonials: {
      title: "Pourquoi ils ont fait un don de sympathie",
      items: [
        {
          quote: "Je ne suis pas membre du GOC mais je lis vos publications gratuites depuis 2 ans. Elles m'ont beaucoup apporté et je voulais simplement dire merci.",
          author: "Marie L., sympathisante"
        },
        {
          quote: "Votre travail de préservation des traditions ésotériques est précieux. Je ne peux pas m'engager pleinement mais je voulais contribuer à ma façon.",
          author: "Jean-Marc D., ami de l'Ordre"
        },
        {
          quote: "J'étais membre il y a quelques années et j'ai dû arrêter pour raisons personnelles. Ce petit don est ma façon de rester connectée à la fraternité.",
          author: "Sophie R., ancienne membre"
        }
      ]
    },
    form: {
      title: "Faire un Don de Sympathie",
      subtitle: "Montant minimum : 25€. Chaque geste compte et est apprécié.",
      amountLabel: "Montant de votre don (minimum 25€)",
      customPlaceholder: "Ou entrez un montant (min. 25€)",
      optionalInfo: "Les informations ci-dessous sont optionnelles",
      firstName: "Prénom (optionnel)",
      lastName: "Nom (optionnel)",
      email: "Email (optionnel)",
      emailNote: "Uniquement pour un reçu de confirmation",
      message: "Un message pour nous ? (optionnel)",
      messagePlaceholder: "Laissez-nous un petit mot si vous le souhaitez...",
      anonymous: "Je préfère rester totalement anonyme",
      mention: "Vous pouvez mentionner mon prénom dans vos remerciements publics",
      submit: "💛 Envoyer mon don de sympathie (min. 25€)",
      secure: "✓ Paiement 100% sécurisé"
    },
    thankYou: {
      title: "Du fond du cœur, merci",
      description: "Chaque don de sympathie, quel que soit son montant, est reçu avec une profonde gratitude. Ces gestes spontanés de générosité nous rappellent que notre mission touche les cœurs et contribue réellement au bien-être spirituel de nombreuses personnes. Merci d'être là.",
      gratitude: "🙏 Avec toute notre reconnaissance 🙏"
    }
  },
  common: {
    contact: {
      title: "Contact",
      headquarters: "Siège",
      france: "France",
      address: "B.P. 13241",
      city: "Yaoundé - Cameroun",
      contactPerson: "Richard Mbouma Kohomm",
      street: "11 av. Joseph Rollo",
      zipCity: "78320 La Verrière – France",
      email: "mkohomm@gmail.com"
    }
  }
},
      contact: {
        title: "Contact",
        headquarters: "Siège",
        france: "France"
      },
      common: {
        securePayment: "Paiement 100% sécurisé",
        cancel: "Annuler",
        confirm: "Confirmer",
        save: "Enregistrer",
        close: "Fermer",
        loading: "Chargement...",
        error: "Erreur",
        success: "Succès"
      }
    }
  },
  
  // ENGLISH (COMPLETE)
  en: {
    translation: {
      nav: {
        home: "Home",
        goc: "GOC",
        gocSubtitle: "Grand Order of the Circle Fraternity",
        gocOrganisation: "Organization",
        gocOrganisationDesc: "Our structure",
        gocActions: "Actions",
        gocActionsDesc: "Our initiatives",
        gocCharity: "Charity",
        gocCharityDesc: "Philanthropic works",
        gocFraternity: "Fraternity",
        gocFraternityDesc: "Spiritual bonds",
        formation: "Training",
        formationEsoterism: "Esotericism",
        formationEsoterismDesc: "Ancient mysteries",
        formationPhilosophy: "Philosophy",
        formationPhilosophyDesc: "Sacred thought",
        formationPowers: "Powers",
        formationPowersDesc: "Inner development",
        library: "Library",
        libraryAccessories: "Ritual accessories",
        libraryAccessoriesDesc: "Sacred tools",
        libraryBooks: "Books",
        libraryBooksDesc: "Ancestral knowledge",
        libraryJournals: "Journals",
        libraryJournalsDesc: "Publications",
        libraryVideos: "Videos",
        libraryVideosDesc: "Teachings",
        becomeMember: "Become a Member",
        memberApprentice: "Apprentice Member",
        memberApprenticeDesc: "First steps",
        memberBrotherSister: "Brother/Sister Member",
        memberBrotherSisterDesc: "Commitment",
        memberAuditor: "Learner Auditor",
        memberAuditorDesc: "Discovery",
        donation: "Donation",
        donationCharity: "Charity",
        donationCharityDesc: "Help others",
        donationSupport: "Support",
        donationSupportDesc: "Contribute",
        donationSympathy: "Sympathy",
        donationSympathyDesc: "Participate",
        members: "Member Area",
        login: "Login",
        signup: "Sign Up",
        logout: "Logout",
        myAccount: "My Account",
        closeMenu: "Close Menu",
        openMenu: "Open Menu"
      },enseignements: {
        meta: {
          title: "Initiatic Teachings | GOC",
          description: "Initiatic teachings to change your life - Grand Order of the Circle"
        },
        hero: {
          subtitle: "Initiatic Path",
          title: "Initiatic Teachings",
          titleHighlight: "to change your life"
        },
        introduction: {
          quote: "Regardless of age, gender, or culture, everyone aspires to succeed in life. To achieve this, you must harness the power of your positive energies and qualities to assert yourself and achieve success.",
          paragraph1: "Therefore, the best investment you can make if you want to succeed is to exploit your inner radiance—that is, your true personality, your strengths, and your positive qualities.",
          study: "A recent American study shows that an individual's success depends {{percentagePersonality}} on their personality; the remaining {{percentageKnowledge}} represents their knowledge and experience.",
          conclusion: "{{goc}} gives you the keys to achieve this."
        },
        mainContent: {
          title: "The Teachings of GOC",
          subtitle: "Philosophical and ideological knowledge, extremely powerful keys and techniques for acquiring powers and personal development!"
        },
        pillars: {
          esoterisme: {
            title: "Esotericism",
            items: [
              "The concept of God",
              "Knowledge of religions",
              "Immortality",
              "Being oneself",
              "The enchanted life",
              "Magnetism",
              "Humanism",
              "Ideologies",
              "Life, existence, death",
              "Yin and Yang",
              "Self and Other"
            ]
          },
          philosophie: {
            title: "Philosophy",
            items: [
              { title: "Thoughts", desc: "African, Chinese, Indian, Greek" },
              { title: "Beliefs", desc: "origin of the sacred, history of religions" },
              { title: "Mythologies", desc: "hero with a thousand faces" },
              { title: "Wisdom", desc: "the five pillars" }
            ]
          },
          pouvoirs: {
            title: "Powers",
            items: [
              "Connect to beneficial Forces",
              "Discover your inner Being",
              "Cleanse your psyche",
              "Master your mind",
              "Awaken your hidden abilities",
              "Influence your environment without physical action",
              "Regenerate physically",
              "Acquire better health",
              "Increase your life expectancy",
              "Set goals and achieve them",
              "Access material well-being",
              "Improve your quality of life",
              "Access Spiritual Awakening",
              "Protect yourself against all misfortunes regardless of their origin"
            ],
            more: "And more..."
          }
        },
        development: {
          title: "Development of Powers",
          quote: "All those seeking spiritual evolution and the acquisition of powers will receive teachings that will enable them to acquire a magnetic and radiant personality.",
          cta: "Begin your initiation"
        },
        footerQuote: "True purification, access to the highest states of consciousness, and the acquisition of acting powers.",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "Loading...",
    "noSubscription": {
      "title": "No Active Subscription",
      "description": "You must subscribe to a membership plan to access the member area",
      "button": "Choose a Subscription"
    },
    "welcome": "Welcome",
    "member": "Member",
    "active": "Active",
    "contentSections": {
      "esotericTraining": {
        "title": "Esoteric Training",
        "description": "Access basic teachings"
      },
      "philosophicalTraining": {
        "title": "Philosophical Training",
        "description": "Deepen your knowledge"
      },
      "powerDevelopment": {
        "title": "Power Development",
        "description": "Exclusive premium content"
      },
      "library": {
        "title": "Library",
        "description": "Access documentary resources"
      },
      "videos": {
        "title": "Videos",
        "description": "Exclusive video content"
      }
    },
    "locked": {
      "requires": "Requires",
      "upgradeButton": "Upgrade Subscription"
    },
    "access": "Access",
    "upgradeCTA": {
      "title": "Unlock More Content",
      "description": "Upgrade your subscription to access all exclusive content",
      "button": "Upgrade"
    },
    "roles": {
      "auditeur": {
        "name": "Listener",
        "description": "Basic access to training"
      },
      "apprenti": {
        "name": "Apprentice",
        "description": "Advanced philosophical training"
      },
      "frere-soeur": {
        "name": "Brother/Sister",
        "description": "Full access to all content"
      }
    }
  },
  formation: {
  esoterism: {
    title: "Esotericism Training",
    subtitle: "Occult Sciences",
    intro: "Esotericism refers to the body of secret knowledge and spiritual practices passed down from master to disciple since time immemorial. Our comprehensive training introduces you to the hidden mysteries of the universe and the laws governing the subtle plane.",
    sections: {
      symbolism: {
        title: "Sacred Symbolism",
        items: [
          "Interpretation of hermetic symbols",
          "Sacred geometry and mystical numbers",
          "Magical alphabets and sigils"
        ]
      },
      alchemy: {
        title: "Spiritual Alchemy",
        items: [
          "Great Work of alchemy",
          "Inner transmutation",
          "Philosopher's stone and elixir of life"
        ]
      },
      kabbalah: {
        title: "Kabbalah & Tree of Life",
        items: [
          "Study of the 10 sephiroth",
          "Paths of the Tree of Life",
          "Gematria and Hebrew numerology"
        ]
      },
      tarot: {
        title: "Tarot & Divination",
        items: [
          "Major and minor arcana",
          "Traditional divinatory arts",
          "Development of intuition"
        ]
      }
    },
    program: {
      title: "Training Program",
      level1: {
        title: "Level 1 - Apprentice (12 months)",
        description: "Fundamentals of esotericism, symbolism, meditation, first rituals"
      },
      level2: {
        title: "Level 2 - Companion (18 months)",
        description: "Alchemy, Kabbalah, esoteric astrology, advanced energy work"
      },
      level3: {
        title: "Level 3 - Master (24 months)",
        description: "Secret teachings, high magic, initiation into deep mysteries"
      }
    },
    signup: "Sign up for training"
  },
  philosophy: {
    title: "Philosophical Training",
    subtitle: "Esoteric Philosophy",
    intro: "Esoteric philosophy explores the fundamental questions of existence: who are we, where do we come from, where are we going? Our teaching integrates the great Eastern and Western philosophical traditions into a unique synthesis.",
    traditions: {
      hermetic: {
        title: "Hermetic Philosophy",
        description: "Study of the Seven Hermetic Principles: Mentalism, Correspondence, Vibration, Polarity, Rhythm, Cause and Effect, Gender. Practical application of these universal laws."
      },
      neoplatonic: {
        title: "Neoplatonism & Gnosis",
        description: "Teachings of Plato, Plotinus and the gnostics. The doctrine of the One, the emanation of worlds, the soul's ascent to its divine source."
      },
      eastern: {
        title: "Eastern Wisdom",
        description: "Vedanta, Buddhism, Taoism: exploration of Eastern philosophies and their contemplative practices. Non-duality, emptiness, Wu Wei."
      },
      modern: {
        title: "Modern Metaphysics",
        description: "Synthesis between science and spirituality. Quantum physics and consciousness, new paradigms of reality."
      }
    },
    themes: {
      title: "Themes Studied",
      items: [
        "Nature of consciousness and soul",
        "Cosmogony and creation of the world",
        "Karma, reincarnation and destiny",
        "Free will and determinism",
        "Spiritual ethics and esoteric morality"
      ]
    },
    methods: {
      title: "Pedagogical Methods",
      items: [
        "Theoretical courses and seminars",
        "Socratic dialogues and debates",
        "Guided philosophical meditations",
        "Commented readings of sacred texts",
        "Written works and dissertations"
      ]
    },
    continuous: {
      title: "Continuous Training",
      description: "The philosophical training extends over 3 years with monthly courses, quarterly seminars and access to our esoteric library.",
      button: "Detailed program"
    }
  },
  powers: {
    title: "Development of Powers",
    subtitle: "Higher Faculties",
    intro: "Beyond ordinary capacities, human beings possess latent faculties that they can develop through spiritual training. Our training guides you in awakening these psychic and spiritual powers.",
    warning: {
      title: "⚠️ Important Warning",
      description: "The development of powers requires rigorous moral and spiritual preparation. These teachings are only transmitted to initiated members who have demonstrated maturity and impeccable ethics."
    },
    abilities: {
      clairvoyance: {
        title: "Clairvoyance",
        description: "Development of subtle vision allowing perception of energy planes, auras and spiritual entities.",
        items: ["Activation of the 3rd eye", "Etheric and astral vision", "Aura reading"]
      },
      telepathy: {
        title: "Telepathy",
        description: "Direct mental communication, transmission and reception of thoughts, connection with distant consciousnesses.",
        items: ["Thought transmission", "Intuitive reception", "Communication with guides"]
      },
      magnetism: {
        title: "Magnetism",
        description: "Mastery of vital energy to heal, harmonize and transform. Techniques of curative magnetism and laying on of hands.",
        items: ["Energy accumulation", "Energy healing", "Chakra harmonization"]
      },
      astral: {
        title: "Astral Projection",
        description: "Exit from the physical body and travel in subtle planes. Conscious exploration of spiritual dimensions.",
        items: ["Voluntary decorporation", "Conscious astral travel", "Exploration of higher planes"]
      },
      psychometry: {
        title: "Psychometry",
        description: "Reading of energies impregnated in objects, places and people. Ability to perceive energetic history.",
        items: ["Object reading", "Memory perception", "Advanced psychometry"]
      },
      meditation: {
        title: "Deep Meditation",
        description: "Altered states of consciousness, samadhi, mystical union. Access to the transcendent dimensions of being.",
        items: ["Deep meditative states", "Mystical experiences", "Union with the divine"]
      }
    },
    program: {
      title: "Progressive Program",
      subtitle: "The awakening of powers follows a gradual and secure process over several years",
      year1: {
        title: "Year 1",
        description: "Preparation & Purification"
      },
      year2: {
        title: "Year 2",
        description: "Activation & Development"
      },
      year3: {
        title: "Year 3+",
        description: "Mastery & Transmission"
      }
    }
  }
},
      
      library: {
  intro: {
    quote: "Matter recycles, the spirit resources itself…",
    description: "A place of knowledge, the GOC Library makes available to members, affiliated auditors and sympathizers, its publication \"Mâat\", videos and booklets of its teachings, books of philosophy, wisdom, secret knowledge. As well as member outfits and other accessories for rites.",
    orderForm: "Order Form"
  },
  accessories: {
    description: "Ritual accessories are sacred tools used in esoteric practices and initiatory ceremonies. Each object is consecrated and energetically charged according to hermetic traditions.",
    items: {
      candles: { title: "Ritual Candles", description: "Consecrated candles of different colors for specific rituals: white (purification), gold (spirituality), red (love), green (prosperity).", availability: "Available for members" },
      crystals: { title: "Crystals & Stones", description: "Collection of purified and programmed crystals: quartz, amethyst, citrine, obsidian. Each stone has its specific energetic properties.", availability: "Available for members" },
      incense: { title: "Sacred Incense", description: "Traditional incense for purification and vibratory elevation: frankincense, myrrh, benzoin, sandalwood. Ancient temple recipes.", availability: "Available for members" },
      sword: { title: "Ritual Sword", description: "Symbolic sword used to trace protection circles and direct energy during rituals. Forged according to hermetic traditions.", availability: "Reserved for initiates" },
      chalice: { title: "Consecrated Chalice", description: "Sacred cup representing the water element and the feminine principle. Used in offering and spiritual communion rituals.", availability: "Reserved for initiates" },
      malas: { title: "Rosaries & Malas", description: "Meditation rosaries in sacred wood, semi-precious stones or rudraksha seeds. 108 beads for japa practice (mantra repetition).", availability: "Available for members" },
      feathers: { title: "Ritual Feathers", description: "Feathers from sacred birds used to disperse incense smoke and purify ritual space. Native American and shamanic tradition.", availability: "Available for members" },
      talismans: { title: "Pentacles & Talismans", description: "Pentacles engraved according to Solomonic magic traditions. Personalized talismans charged according to your astrological chart.", availability: "On order" },
      robes: { title: "Robes & Clothing", description: "Ceremonial robes, capes and ritual clothing in the Order's colors. Made from natural fabrics according to tradition.", availability: "Reserved for members" }
    },
    cta: { title: "Order Accessories", description: "Ritual accessories are available for purchase to GOC members. Each object is individually consecrated before delivery.", button: "Access the shop", note: "* Login required - Reserved for initiated members" }
  },journals: {
    title: "Journals & Publications",
    intro: "The Grand Order of the Circle regularly publishes journals, bulletins and reviews for the continuing education of its members and the dissemination of esoteric knowledge.",
    mainJournal: {
      title: "The Light of the Circle",
      subtitle: "Official journal of the GOC - Quarterly publication",
      summary: "Contents:",
      format: "Format:",
      items: [
        "In-depth esoteric teachings",
        "Seasonal rituals and practices",
        "Member testimonials",
        "Order news"
      ],
      formatItems: [
        "40-60 illustrated pages",
        "Paper and digital version",
        "Complete archives since 1985",
        "Reserved for members"
      ]
    },
    publications: {
      bulletin: {
        title: "Fraternity Bulletin",
        description: "Monthly bulletin to maintain the bond between members. Information on upcoming meetings, seminars and events.",
        frequency: "Monthly",
        pages: "12-16 pages",
        access: "Members only"
      },
      cahiers: {
        title: "Hermetic Studies Notebooks",
        description: "In-depth academic review on specific esoteric themes: alchemy, Kabbalah, astrology, symbolism, mystical philosophy.",
        frequency: "Bimonthly",
        pages: "60-80 pages",
        access: "Initiated members"
      },
      lettres: {
        title: "Letters of the Grand Master",
        description: "Direct teachings from the Grand Master of the Order, transmitting deep knowledge and spiritual guidance for advanced members.",
        frequency: "Quarterly",
        pages: "8-12 pages",
        access: "2nd degree initiates"
      },
      almanach: {
        title: "Esoteric Almanac",
        description: "Annual publication containing important dates, moon phases, planetary positions, ritual calendar and recommended practices.",
        frequency: "Annual",
        pages: "120 pages",
        access: "Open to all"
      }
    },
    archives: {
      title: "Historical Archives",
      description: "Access the complete archives of our publications since the founding of the Order. Decades of esoteric knowledge at your fingertips.",
      stats: {
        journal: "Issues of The Light of the Circle",
        bulletins: "Monthly bulletins",
        years: "Years of archives"
      }
    },
    cta: {
      title: "Access Publications",
      description: "Become a member of the Grand Order of the Circle to receive our publications and access complete archives.",
      becomeMember: "Become a member",
      consultArchives: "Consult archives"
    }
  },
  books: {
    title: "Esoteric Library",
    intro: "Our library contains an exceptional collection of esoteric, hermetic and philosophical works. Some rare texts are reserved for initiated members.",
    sections: {
      alchemy: "Alchemy & Hermeticism",
      kabbalah: "Kabbalah & Jewish Mysticism",
      magic: "Ceremonial Magic",
      philosophy: "Esoteric Philosophy",
      tarot: "Tarot & Symbolism"
    },
    access: {
      open: "Open to all",
      members: "Reserved for members",
      initiates: "Reserved for initiates"
    },
    onSite: {
      title: "On-site Consultation",
      description: "Members can consult the entire library in our premises. Studious atmosphere conducive to meditation.",
      note: "Available by appointment for members"
    },
    digital: {
      title: "Digital Library",
      description: "Access to our digital library with hundreds of books in PDF format, available 24/7 from your member area.",
      note: "Reserved for active members"
    }
  },
  videos: {
    title: "Esoteric Video Library",
    intro: "Our video library offers conferences, filmed rituals, guided meditations and teachings from the Grand Master. Exclusive content for GOC members.",
    categories: {
      conferences: {
        title: "Conferences",
        description: "Masterful conferences on esotericism, alchemy, Kabbalah and hermetic philosophy by our initiated masters.",
        count: "45+ videos",
        access: "Member access"
      },
      meditations: {
        title: "Guided Meditations",
        description: "Guided meditation sessions for spiritual development, chakra activation and connection to the divine.",
        count: "30+ videos",
        access: "Open access"
      },
      rituals: {
        title: "Filmed Rituals",
        description: "Recordings of initiatory rituals, seasonal ceremonies and esoteric practices transmitted in the Order.",
        count: "25+ videos",
        access: "Initiates only"
      },
      courses: {
        title: "Theoretical Courses",
        description: "Complete training courses on esotericism, occult sciences, philosophy and sacred symbolism.",
        count: "60+ videos",
        access: "Member access"
      },
      energy: {
        title: "Energy Practices",
        description: "Practical exercises for developing psychic faculties, energy work and magnetism.",
        count: "35+ videos",
        access: "Member access"
      },
      secret: {
        title: "Secret Teachings",
        description: "Reserved teachings transmitted by the Grand Master on the deep mysteries of the hermetic tradition.",
        count: "20+ videos",
        access: "Masters only"
      }
    },
    recent: {
      title: "Latest Publications",
      videos: [
        {
          title: "Introduction to Practical Kabbalah",
          description: "Grand Master's conference on the foundations of Kabbalah and its application in daily life.",
          duration: "1h 25min",
          date: "January 2026",
          access: "Members"
        },
        {
          title: "Full Moon Meditation",
          description: "Special guided meditation to connect with lunar energies and receive illumination.",
          duration: "45min",
          date: "January 2026",
          access: "Open access"
        },
        {
          title: "Winter Solstice Ritual 2025",
          description: "Complete recording of the ceremonial ritual celebrated during the winter solstice at the central Commandery.",
          duration: "2h 10min",
          date: "December 2025",
          access: "Initiates"
        }
      ]
    },
    stats: {
      title: "Our Video Collection",
      total: "Total videos",
      hours: "Exclusive content",
      quality: "HD & 4K Quality",
      access: "Unlimited access"
    },
    cta: {
      title: "Access the Video Library",
      description: "Become a member to access our entire video collection and benefit from new content every month.",
      button: "Sign up now"
    }
  }
},goc: {
  actions: {
    title: "GOC Actions",
    subtitle: "Our Actions in the World",
    items: {
      seminars: { title: "Initiatory Seminars", description: "Organization of seminars and spiritual retreats allowing members to deepen their esoteric journey and experience transformative initiatory experiences." },
      conferences: { title: "Public Conferences", description: "Dissemination of esoteric and philosophical knowledge through conferences open to the public on spiritual, mystical, and metaphysical themes." },
      publications: { title: "Publications", description: "Publication of books, journals, and educational documents preserving and transmitting the traditional teachings of Western and Eastern esotericism." },
      rituals: { title: "Collective Rituals", description: "Celebration of seasonal and initiatory rituals allowing members to connect with cosmic forces and strengthen the egregore of the Order." }
    },
    program: {
      title: "Annual Program",
      seasons: {
        spring: { name: "Spring", activity: "Equinox rituals, spiritual renewal seminar" },
        summer: { name: "Summer", activity: "Summer retreat, solstice celebration, initiations" },
        autumn: { name: "Autumn", activity: "Philosophical seminars, spiritual harvest rituals" },
        winter: { name: "Winter", activity: "Winter solstice, deep meditations, secret teachings" }
      }
    }
  },
  charity: {
    title: "Charity & Social Works",
    serviceTitle: "Selfless Service",
    serviceDesc: "At the heart of our esoteric teaching is the principle of selfless service. True wisdom is acquired not only through study, but also through compassionate action toward our fellow beings.",
    works: {
      spiritual: { title: "Spiritual Assistance", description: "Free spiritual support for people in moral or existential distress. Our trained members offer listening, advice, and energetic support." },
      material: { title: "Material Aid", description: "Distribution of material aid to families in need: food, clothing, occasional financial support for emergency situations." },
      education: { title: "Free Education", description: "Free courses in philosophy, meditation, and personal development for people unable to access paid teachings." },
      energy: { title: "Energy Healing", description: "Sessions of energy care and holistic healing offered free of charge to people suffering from illness or imbalances." }
    },
    participate: { title: "Participate in our Works", description: "Each member of the GOC dedicates time and resources to charitable works. Join us in this mission of service and compassion.", donate: "Make a donation", volunteer: "Become a volunteer" }
  },
  fraternity: {
    title: "Universal Fraternity",
    ourFraternity: "Our Fraternity",
    description: "The Fraternity of the Grand Order of the Circle is a community of women and men, without exclusion, of all races, all ethnicities, all countries and all nationalities, who voluntarily and without any constraint of any kind, of any nature, agree to BECOME A MEMBER and commit to scrupulously RESPECT THE RULE in XII Principles that governs THE LIFE of the Grand Order of the Circle Organization.",
    transcendentLink: "A Bond that Transcends",
    transcendentDesc: "Fraternity within the Grand Order of the Circle is not mere camaraderie, but a deep spiritual bond that unites souls in their quest for light and knowledge.",
    features: {
      spiritualHelp: { title: "Spiritual Mutual Aid", description: "Brothers and sisters help each other in their initiatory journey" },
      knowledge: { title: "Sharing of Knowledge", description: "Transmission of esoteric knowledge between initiated members" },
      mutualSupport: { title: "Mutual Support", description: "Presence and accompaniment in life's trials" },
      rituals: { title: "Fraternal Rituals", description: "Ceremonies strengthening bonds between Order members" },
      network: { title: "International Network", description: "Connections with members around the world" },
      meditation: { title: "Collective Meditations", description: "Group spiritual practices to amplify energy" }
    },
    commanderies: {
      title: "Fraternal Commanderies",
      description: "Each region has its commandery, a sacred place where members gather to cultivate fraternity, practice rituals, and share teachings.",
      activities: { meditation: "Monthly meditation and study meetings", celebrations: "Solstice and equinox celebrations", meals: "Fraternal meals and moments of conviviality", library: "Shared library of esoteric works" }
    },
    join: { title: "Join Our Fraternity", description: "Become a member of the Grand Order of the Circle and discover the depth of authentic fraternity based on love, wisdom, and service.", button: "Learn more" }
  }
},
      
      home: {
        title: "GRAND ORDER OF THE CIRCLE FRATERNITY",
        motto: "Where the tree of knowledge stands, there lies happiness",
        subtitle: {
          line1: "Esoteric & philosophical training…",
          line2: "Spiritual fraternity."
        },
        masterDestiny: "Access total mastery of your destiny…",
        benefits: {
          connectForces: "Connect with beneficial Forces",
          innerBeing: "Discover your inner Being",
          cleansePsyche: "Cleanse your psyche",
          masterMind: "Master your mind",
          awakenPowers: "Awaken hidden abilities",
          influence: "Influence your environment without physical action",
          regenerate: "Regenerate physically",
          longevity: "Increase life expectancy",
          achieveGoals: "Set goals and achieve them",
          materialWellbeing: "Access material well-being",
          qualityOfLife: "Improve quality of life",
          spiritualAwakening: "Access Spiritual Awakening",
          protection: "Protect against all misfortune regardless of origin",
          betterHealth: "Acquire better health"
        },
        carousel: {
          seminar: "Seminar",
          prieure: "Priory",
          group: "Member Group",
          symbols: "Symbols"
        },
        links: {
          formation: "Our Training",
          fraternity: "Our Fraternity",
          seminars: "Our Seminars",
          actions: "Our Actions"
        },
        vision: {
          title: "Our Vision",
          goc: "Grand Order of the Circle",
          secrets: "Secret knowledge, Spiritual and initiatory wisdom,",
          awakening: "Awakening of powers, Personal power, Well-being tools…",
          changeLife: "Change your life and access total mastery of your life!",
          description: "Through esoteric training that gives you access to secret knowledge and spiritual and initiatory wisdom, to the awakening of powers, personal power and well-being tools…",
          quote: "« Man was originally conceived as a purely spiritual Being, emanating from the Divine Principle 'in the image and likeness of the Great Creator Spirit'. During his descent into matter, he is moved by a twin impulse: Attraction-Rejection, Desire-Repulsion. Clothed in a corruptible body, he is now separated from the unity of the Principle. His dual nature – material and spiritual – subjects him to a conflict between spiritual aspirations and the chains of materiality. Since then, he has accomplished acts governed by these impulses out of pride. But the man of desire seeks to obtain his reintegration into his original state and to recover his body of glory.",
          mission: "The purpose of the GOC is to enlighten the Initiate about his nature, origin and destination. He or she receives essentially practical and initiatory teachings, dealing with esotericism, spirituality, metaphysics, the secrets of the Yogis, philosophy and personal development; allowing a true purification, access to the highest states of consciousness and the acquisition of acting powers."
        },
        nav: {
          becomeMember: "Become a Member",
          videos: "Videos",
          donation: "Donation",
          commanderies: "Commanderies",
          contacts: "Contacts",
          contact: "Contact"
        },
        image: {
          alt: "Grand Order of the Circle",
          caption: "Ancient wisdom for modern man"
        },
        footer: {
          copyright: "© 2026 Grand Order of the Circle - All rights reserved",
          sapientia: "Wisdom",
          fraternitas: "Fraternity",
          spiritus: "Spirit"
        }
      },
      membership: {
        title: "Join Our Order",
        subtitle: "Choose the level of commitment that matches your spiritual and philosophical journey",
        adhesion: "Membership",
        formation: "Training",
        oneTime: "one time",
        perYear: "per year",
        firstYear: "First year",
        renewal: "Renewal",
        becomeMember: "Become a Member",
        renew: "Renew",
        currentSubscription: "Current Subscription",
        learnMore: "Learn More",
        mostPopular: "Most Popular",
        active: "Active",
        expired: "Expired",
        current: "Current",
        activeSubscription: "Active Subscription",
        adhesionRequired: "Membership required",
        buyTrimester: "Buy 1 Quarter",
        buyCourse: "Buy 1 Course",
        processing: "Processing...",
        signupAndBuy: "Sign Up and Buy",
        pricePerTrimester: "Price per quarter",
        pricePerCourse: "Price per course",
        formationAccessible: "Training is only accessible to active members of the Order.",
        cotisation: "Contribution",
        error: "An error occurred",
        whyJoin: "Why Become a Member?",
        whyJoinDesc: "By joining our order, you access a community dedicated to spiritual awakening, esoteric knowledge and fraternal mutual aid.",
        benefit1: "Access to exclusive teachings",
        benefit2: "Participation in events and seminars",
        benefit3: "Fraternity and mutual aid network",
        benefit4: "Library of spiritual resources"
      },
      roles: {
        auditeur: {
          name: "Learner Auditor",
          description: "Basic access to teachings",
          formationTitle: "Learner Auditor Training",
          formationDesc: "Individual courses à la carte",
          feature1: "Flexibility to purchase at your own pace",
          feature2: "Immediate access to purchased course",
          feature3: "Rich and detailed content",
          totalCourses: "Total of 40 courses available",
          totalCost: "Total complete cost",
          totalDuration: "Complete training over 2 years"
        },
        apprenti: {
          name: "Apprentice Member",
          description: "Complete training",
          formationTitle: "Apprentice Training",
          formationDesc: "Structured quarterly training",
          feature1: "In-depth teachings each quarter",
          feature2: "Personalized follow-up of your progress",
          feature3: "Access to exclusive resources",
          totalCost: "Total training cost",
          totalDuration: "Total duration: 8 quarters (2 years)"
        },
        "frere-soeur": {
          name: "Brother/Sister Member",
          description: "Full premium access",
          feature1: "All content and training",
          feature2: "Individual mentoring",
          feature3: "24/7 priority support",
          feature4: "Exclusive events",
          feature5: "International network"
        }
      },
      organisation: {
        motto: "Where the tree of knowledge stands, there lies happiness",
        title: "Organization of the GOC",
        goc: "GOC",
        structure: "The Grand Order of the Circle is structured around:",
        pillars: "Pillars",
        grades: "Grades",
        rule: "Rule",
        pillarsTitle: "Pillars",
        pillar1: {
          title: "I – Initiation",
          item1: "Training",
          item2: "Improvement"
        },
        pillar2: {
          title: "II – Offices",
          item1: "Rites",
          item2: "Ceremonies"
        },
        pillar3: {
          title: "III – Charity",
          item1: "Charitable works",
          item2: "Donations"
        },
        pillar4: {
          title: "IV – Mutuality",
          item1: "Solidarity of initiates",
          item2: "Financial support"
        },
        rulesTitle: "Rules of the GOC",
        rules: {
          "1": "Belief in the Great Divine Spirit",
          "2": "Initiatory fraternity and Duty of solidarity",
          "3": "Ideal of Love, truth, justice and peace",
          "4": "Improvement of members and humanity",
          "5": "Practice of Ritual and Symbolism",
          "6": "Respect for Opinions and Beliefs",
          "7": "Oath on Sacred Symbols",
          "8": "Gathering and work in commanderies",
          "9": "Honorability, Loyalty and discretion",
          "10": "Love of Country, respect for laws, respect for constituted Authorities",
          "11": "Wise and dignified behavior",
          "12": "Mutual Aid and Protection"
        },
        structureTitle: "Organization of the GOC",
        level1: {
          title: "Level 1: the Circle of Brothers",
          desc: "The CF brings together a community of up to 770 brothers"
        },
        level2: {
          title: "Level 2: the District",
          desc: "The District brings together all the Circles of Brothers at the department level"
        },
        level3: {
          title: "Level 3: the Commandery",
          desc: "The Commandery brings together all the Districts at the regional level"
        },
        level4: {
          title: "Level 4: the Governorate",
          desc: "The Governorate brings together all the Commanderies at the country level"
        },
        level5: {
          title: "Level 5: The Supreme Primate",
          desc: "The Supreme Primate is the supreme Instance of the GOC"
        },
        gradesTitle: "Grades",
        grade: {
          "1": "Apprentice",
          "2": "Companion",
          "3": "Officer",
          "4": "Honorable",
          "5": "Venerable",
          "6": "Master",
          "7": "Grand Master"
        },
        administration: "Administration",
        admin1: {
          title: "1) The Circle",
          item1: "The Assembly of Brothers",
          item2: "The Venerable",
          item3: "The Secretariat",
          item4: "The Treasury",
          item5: "The Stewardship",
          item6: "The Officium"
        },
        admin2: {
          title: "2) The District",
          item1: "The District Council",
          item2: "The Master",
          item3: "The Secretariat",
          item4: "The Treasury",
          item5: "The Stewardship",
          item6: "The Officium"
        },
        admin3: {
          title: "3) The Commandery",
          item1: "The Commandery Council",
          item2: "The Commander",
          item3: "The Secretariat",
          item4: "The Treasury",
          item5: "The Stewardship",
          item6: "The Officium"
        },
        admin4: {
          title: "4) The Governorate/Legate",
          item1: "The Cenacle",
          item2: "The Grand Master",
          item3: "The Secretariat",
          item4: "The Treasury",
          item5: "The Stewardship",
          item6: "The Officium"
        },
        globalGovernance: "Global Governance of the GOC",
        global1: {
          title: "The Congress"
        },
        global2: {
          title: "The Supreme Cenacle",
          desc: "(GOC Administration Council)"
        },
        global3: {
          title: "The Primate of the GOC"
        },
        global4: {
          title: "General Secretariat",
          desc: "(GOC management body)"
        },
        global5: {
          title: "Central Treasury"
        },
        join: "Join the Order"
      },
      fraternity: {
        motto: "Where the tree of knowledge stands, there lies happiness",
        title: "Universal Fraternity",
        ourFraternity: "Our Fraternity",
        description: "The Fraternity of the Grand Order of the Circle is a community of women and men, without exclusion, of all races, all ethnicities, all countries and all nationalities, who voluntarily and without any constraint of any kind, of any nature, agree to BECOME A MEMBER and commit to scrupulously RESPECT THE RULE in XII Principles that governs THE LIFE of the Grand Order of the Circle Organization.",
        transcendentLink: "A Bond that Transcends",
        transcendentDesc: "Fraternity within the Grand Order of the Circle is not mere camaraderie, but a deep spiritual bond that unites souls in their quest for light and knowledge.",
        features: {
          spiritualHelp: "Spiritual Mutual Aid",
          spiritualHelpDesc: "Brothers and sisters help each other in their initiatory journey",
          knowledge: "Sharing of Knowledge",
          knowledgeDesc: "Transmission of esoteric knowledge between initiated members",
          mutualSupport: "Mutual Support",
          mutualSupportDesc: "Presence and accompaniment in life's trials",
          rituals: "Fraternal Rituals",
          ritualsDesc: "Ceremonies strengthening bonds between Order members",
          network: "International Network",
          networkDesc: "Connections with members around the world",
          meditation: "Collective Meditations",
          meditationDesc: "Group spiritual practices to amplify energy"
        },
        commanderies: "Fraternal Commanderies",
        commanderiesDesc: "Each region has its commandery, a sacred place where members gather to cultivate fraternity, practice rituals and share teachings.",
        activities: {
          meditation: "Monthly meditation and study meetings",
          celebrations: "Solstice and equinox celebrations",
          meals: "Fraternal meals and moments of conviviality",
          library: "Shared library of esoteric works"
        },
        joinTitle: "Join Our Fraternity",
        joinDesc: "Become a member of the Grand Order of the Circle and discover the depth of authentic fraternity based on love, wisdom and service.",
        learnMore: "Learn more"
      },
      charity: {
        motto: "Where the tree of knowledge stands, there lies happiness",
        title: "Charity & Social Works",
        serviceTitle: "Selfless Service",
        serviceDesc: "At the heart of our esoteric teaching is the principle of selfless service. True wisdom is acquired not only through study, but also through compassionate action towards our fellow beings.",
        works: {
          spiritual: "Spiritual Assistance",
          spiritualDesc: "Free spiritual support for people in moral or existential distress. Our trained members offer listening, advice and energetic support.",
          material: "Material Aid",
          materialDesc: "Distribution of material aid to families in need: food, clothing, occasional financial support for emergency situations.",
          education: "Free Education",
          educationDesc: "Free courses in philosophy, meditation and personal development for people unable to access paid teachings.",
          energy: "Energy Healing",
          energyDesc: "Sessions of energy care and holistic healing offered free of charge to people suffering from illness or imbalances."
        },
        participate: "Participate in our Works",
        participateDesc: "Each member of the GOC dedicates time and resources to charitable works. Join us in this mission of service and compassion.",
        donate: "Make a donation",
        volunteer: "Become a volunteer"
      },
      donation: {
  charite: {
    title: "Charity Donation",
    generosityInAction: "Your Generosity in Action",
    message: "The minimum or more of your donation is generosity that allows us to plan our aid and solidarity actions for people in need.",
    minimumLabel: "Minimum Charity Donation",
    amount: "€100",
    actTitle: "An Act of Great Generosity",
    actDescription: "The charity donation represents a significant commitment to the values of mutual aid and solidarity of the Grand Order of the Circle. Through this generous gesture, you enable us to sustainably support our charitable actions and concretely help those who need it most.",
    impact: {
      title: "Impact of Your Charity Donation",
      items: [
        "Direct aid to people in great difficulty",
        "Funding of solidarity programs",
        "Support for families in need",
        "Concrete humanitarian actions",
        "Emergency aid during crises"
      ]
    },
    recognition: {
      title: "Special Recognition",
      description: "As a charitable donor, you receive special recognition:",
      items: [
        "Mention in the Circle of Benefactors (if desired)",
        "Annual report on fund usage",
        "Invitation to Order charity events",
        "Certificate of recognition (upon request)",
        "Tax receipt for deduction"
      ]
    },
    examples: {
      title: "Examples of Funded Actions",
      food: "Food aid for families",
      medical: "Emergency medical support",
      education: "Scholarships for children"
    },
    form: {
      title: "Make a Charity Donation",
      subtitle: "Minimum amount: €100. Your generosity changes lives.",
      amountLabel: "Amount of your charity donation (minimum €100)",
      customPlaceholder: "Or enter an amount (min. €100)",
      typeLabel: "Type of donation",
      types: {
        unique: "One-time donation",
        monthly: "Recurring monthly donation",
        quarterly: "Quarterly donation",
        annual: "Annual donation"
      },
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email *",
      message: "Message (optional)",
      messagePlaceholder: "Share your motivations or dedicate your donation...",
      receipt: "I wish to receive a tax receipt",
      circle: "I agree to be mentioned in the Circle of Benefactors",
      submit: "🤲 Make my charity donation (min. €100)",
      secure: "✓ 100% secure payment • ✓ Tax receipt available"
    },
    thankYou: {
      title: "Thank You for Your Great Generosity",
      description: "Your charity donation makes a concrete difference in the lives of many people. Thanks to your generosity, we can continue our aid and solidarity actions with those who need it most. May your gesture be blessed.",
      gratitude: "🙏 With our deepest gratitude 🙏"
    }
  },
  soutien: {
    title: "Support for Order Development",
    generosityInAction: "Your Generosity in Action",
    message: "The minimum or more of your donation is generosity that allows us to plan our aid and solidarity actions for people in need.",
    minimumLabel: "Minimum Support Donation",
    amount: "€50",
    contributeTitle: "Contribute to Our Mission",
    contributeDescription: "Your support donations enable the Grand Order of the Circle to continue transmitting esoteric teachings, organize spiritual events, and maintain our infrastructure. Each contribution helps preserve and spread the hermetic tradition.",
    funding: {
      title: "Training Funding",
      items: [
        "Creation of new online courses",
        "Compensation for qualified teachers",
        "HD video content production",
        "Development of educational materials",
        "Organization of seminars and retreats"
      ]
    },
    infrastructure: {
      title: "Infrastructure Maintenance",
      items: [
        "Maintenance of regional commanderies",
        "Esoteric library and archives",
        "Digital platform and website",
        "Acquisition of new rare works",
        "Ritual equipment and accessories"
      ]
    },
    editorial: {
      title: "Editorial Projects",
      items: [
        "Publication of quarterly journal",
        "Editing of esoteric books",
        "Translation of ancient texts",
        "Hermetic studies notebooks",
        "Free content distribution"
      ]
    },
    international: {
      title: "International Outreach",
      items: [
        "Opening of new commanderies",
        "International conferences",
        "Exchanges with other orders",
        "Translation of trainings",
        "Presence at spiritual events"
      ]
    },
    budget: {
      title: "Annual Budget 2026",
      training: "Trainings",
      infrastructure: "Infrastructure",
      editorial: "Publishing",
      outreach: "Outreach"
    },
    levels: {
      title: "Monthly Support Levels",
      friend: {
        name: "Friend of the Order",
        price: "€10",
        period: "/month",
        benefits: [
          "Thanks on the website",
          "Exclusive newsletter",
          "Friend of GOC badge"
        ],
        button: "Support"
      },
      benefactor: {
        name: "Benefactor",
        price: "€25",
        period: "/month",
        badge: "RECOMMENDED",
        benefits: [
          "All previous benefits",
          "Access to exclusive content",
          "Invitation to VIP events",
          "Free quarterly journal"
        ],
        button: "Support"
      },
      patron: {
        name: "Grand Patron",
        price: "€50",
        period: "/month",
        benefits: [
          "All previous benefits",
          "Mention in the Patrons' Pantheon",
          "Annual spiritual consultation",
          "Personalized spiritual gift"
        ],
        button: "Support"
      }
    },
    form: {
      title: "One-time Donation",
      amountLabel: "Amount of your support",
      customPlaceholder: "Other amount",
      typeLabel: "Type of support",
      types: {
        unique: "One-time donation",
        monthly: "Recurring monthly support"
      },
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email *",
      submit: "Support now",
      secure: "✓ 100% secure payment • ✓ Cancellation possible at any time"
    }
  },
  sympathie: {
    title: "Sympathy Donation",
    generosityInAction: "Your Generosity in Action",
    message: "The minimum or more of your donation is generosity that allows us to plan our aid and solidarity actions for people in need.",
    minimumLabel: "Minimum Sympathy Donation",
    amount: "€25",
    gestureTitle: "A Gesture from the Heart",
    gestureDescription: "The sympathy donation is a free and spontaneous gesture that requires nothing in return. It is a manifestation of your support and connection with the values of the Grand Order of the Circle, without expectation or obligation.",
    freedom: {
      title: "Total Freedom",
      description: "Unlike other forms of donation, the sympathy donation is entirely free: free amount (minimum €25), free frequency, possible anonymity. It is simply a way to express your appreciation for the Order's work and to contribute, at your own level, to the preservation of the esoteric tradition."
    },
    why: {
      title: "Why make a sympathy donation?",
      items: [
        "You appreciate our mission and values",
        "You wish to support without committing",
        "You want to offer a one-time gesture",
        "You cannot become a member but want to help",
        "You feel a spiritual connection with the Order"
      ]
    },
    usage: {
      title: "How is it used?",
      description: "Sympathy donations contribute to our aid and solidarity actions. They are used where the need is greatest:",
      items: [
        "Aid to people in difficulty",
        "Community solidarity actions",
        "Development of new free content",
        "Special projects and opportunities",
        "Reserve fund for contingencies"
      ]
    },
    noReturn: {
      title: "No Return, Just Gratitude",
      description: "We offer you nothing in exchange for your sympathy donation, except our deep gratitude. You will not receive a special newsletter, no exclusive invitation, no public recognition (unless you wish). It is a pure act of generosity and kindness."
    },
    testimonials: {
      title: "Why they made a sympathy donation",
      items: [
        {
          quote: "I am not a member of GOC but I have been reading your free publications for 2 years. They have brought me a lot and I simply wanted to say thank you.",
          author: "Marie L., sympathizer"
        },
        {
          quote: "Your work of preserving esoteric traditions is precious. I cannot commit fully but I wanted to contribute in my own way.",
          author: "Jean-Marc D., friend of the Order"
        },
        {
          quote: "I was a member a few years ago and had to stop for personal reasons. This small donation is my way of staying connected to the fraternity.",
          author: "Sophie R., former member"
        }
      ]
    },
    form: {
      title: "Make a Sympathy Donation",
      subtitle: "Minimum amount: €25. Every gesture counts and is appreciated.",
      amountLabel: "Amount of your donation (minimum €25)",
      customPlaceholder: "Or enter an amount (min. €25)",
      optionalInfo: "The information below is optional",
      firstName: "First Name (optional)",
      lastName: "Last Name (optional)",
      email: "Email (optional)",
      emailNote: "Only for a confirmation receipt",
      message: "A message for us? (optional)",
      messagePlaceholder: "Leave us a note if you wish...",
      anonymous: "I prefer to remain completely anonymous",
      mention: "You may mention my first name in your public thanks",
      submit: "💛 Send my sympathy donation (min. €25)",
      secure: "✓ 100% secure payment"
    },
    thankYou: {
      title: "From the bottom of our hearts, thank you",
      description: "Every sympathy donation, whatever the amount, is received with deep gratitude. These spontaneous gestures of generosity remind us that our mission touches hearts and truly contributes to the spiritual well-being of many people. Thank you for being here.",
      gratitude: "🙏 With all our appreciation 🙏"
    }
  },
  common: {
    contact: {
      title: "Contact",
      headquarters: "Headquarters",
      france: "France",
      address: "B.P. 13241",
      city: "Yaoundé - Cameroon",
      contactPerson: "Richard Mbouma Kohomm",
      street: "11 av. Joseph Rollo",
      zipCity: "78320 La Verrière – France",
      email: "mkohomm@gmail.com"
    }
  }
},
      contact: {
        title: "Contact",
        headquarters: "Headquarters",
        france: "France"
      },
      common: {
        securePayment: "100% secure payment",
        cancel: "Cancel",
        confirm: "Confirm",
        save: "Save",
        close: "Close",
        loading: "Loading...",
        error: "Error",
        success: "Success"
      }
    }
  },

  // ARABIC (COMPLETE)
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        goc: "GOC",
        gocSubtitle: "الأخوية الكبرى للدائرة",
        gocOrganisation: "التنظيم",
        gocOrganisationDesc: "هيكلنا التنظيمي",
        gocActions: "الأنشطة",
        gocActionsDesc: "مبادراتنا",
        gocCharity: "الأعمال الخيرية",
        gocCharityDesc: "الأعمال الإنسانية",
        gocFraternity: "الأخوة",
        gocFraternityDesc: "الروابط الروحية",
        formation: "التدريب",
        formationEsoterism: "الغموض",
        formationEsoterismDesc: "أسرار قديمة",
        formationPhilosophy: "الفلسفة",
        formationPhilosophyDesc: "الفكر المقدس",
        formationPowers: "القوى",
        formationPowersDesc: "التنمية الداخلية",
        library: "المكتبة",
        libraryAccessories: "إكسسوارات الطقوس",
        libraryAccessoriesDesc: "أدوات مقدسة",
        libraryBooks: "الكتب",
        libraryBooksDesc: "المعرفة الأ ancestral",
        libraryJournals: "المجلات",
        libraryJournalsDesc: "المنشورات",
        libraryVideos: "الفيديوهات",
        libraryVideosDesc: "التعاليم",
        becomeMember: "كن عضواً",
        memberApprentice: "عضو متدرب",
        memberApprenticeDesc: "الخطوات الأولى",
        memberBrotherSister: "عضو أخ/أخت",
        memberBrotherSisterDesc: "الالتزام",
        memberAuditor: "متعلم مستمع",
        memberAuditorDesc: "الاكتشاف",
        donation: "التبرع",
        donationCharity: "الأعمال الخيرية",
        donationCharityDesc: "مساعدة الآخرين",
        donationSupport: "الدعم",
        donationSupportDesc: "المساهمة",
        donationSympathy: "التعاطف",
        donationSympathyDesc: "المشاركة",
        members: "منطقة الأعضاء",
        login: "تسجيل الدخول",
        signup: "التسجيل",
        logout: "تسجيل الخروج",
        myAccount: "حسابي",
        closeMenu: "إغلاق القائمة",
        openMenu: "فتح القائمة"
      },enseignements: {
        meta: {
          title: "التعاليم الباطنية | GOC",
          description: "التعاليم الباطنية لتغيير حياتك - النظام الكبير للدائرة"
        },
        hero: {
          subtitle: "المسار الباطني",
          title: "التعاليم الباطنية",
          titleHighlight: "لتغيير حياتك"
        },
        introduction: {
          quote: "بغض النظر عن العمر أو الجنس أو الثقافة، يطمح الجميع إلى النجاح في الحياة. لتحقيق ذلك، يجب عليك تسخير قوى طاقاتك الإيجابية وصفاتك لتأكيد ذاتك وتحقيق النجاح.",
          paragraph1: "لذلك، أفضل استثمار يمكنك القيام به إذا كنت تريد النجاح هو استغلال إشعاعك الداخلي - أي شخصيتك الحقيقية، ونقاط قوتك، وصفاتك الإيجابية.",
          study: "تُظهر دراسة أمريكية حديثة أن نجاح الفرد يعتمد بنسبة {{percentagePersonality}} على شخصيته؛ وتمثل النسبة المتبقية {{percentageKnowledge}} معرفته وخبرته.",
          conclusion: "يمنحك {{goc}} المفاتيح لتحقيق ذلك."
        },
        mainContent: {
          title: "تعاليم GOC",
          subtitle: "المعرفة الفلسفية والأيديولوجية، مفاتيح وتقنيات قوية للغاية لاكتساب القوى والتنمية الشخصية!"
        },
        pillars: {
          esoterisme: {
            title: "الباطنية",
            items: [
              "مفهوم الله",
              "معرفة الأديان",
              "الخلود",
              "كونك ذاتك",
              "الحياة الساحرة",
              "المغناطيسية",
              "الإنسانية",
              "الأيديولوجيات",
              "الحياة، الوجود، الموت",
              "الين واليانغ",
              "الذات والآخر"
            ]
          },
          philosophie: {
            title: "الفلسفة",
            items: [
              { title: "الأفكار", desc: "الأفريقية، الصينية، الهندية، اليونانية" },
              { title: "المعتقدات", desc: "أصل المقدس، تاريخ الأديان" },
              { title: "الأساطير", desc: "البطل ذو الألف وجه" },
              { title: "الحكمة", desc: "الأعمدة الخمسة" }
            ]
          },
          pouvoirs: {
            title: "القوى",
            items: [
              "الاتصال بالقوى المفيدة",
              "اكتشاف كيانك الداخلي",
              "تطهير نفسك",
              "إتقان عقلك",
              "إيقاظ قدراتك المخفية",
              "التأثير على بيئتك دون عمل جسدي",
              "التجدد جسدياً",
              "اكتساب صحة أفضل",
              "زيادة متوقع عمرك",
              "تحديد الأهداف وتحقيقها",
              "الوصول إلى الرفاه المادي",
              "تحسين نوعية حياتك",
              "الوصول إلى التنوير الروحي",
              "حماية نفسك من جميع المصائب بغض النظر عن مصدرها"
            ],
            more: "والمزيد..."
          }
        },
        development: {
          title: "تطوير القوى",
          quote: "سيحصل جميع الباحثين عن التطور الروحي واكتساب القوى على تعاليم تمكنهم من اكتساب شخصية مغناطيسية ومشعة.",
          cta: "ابدأ مبادرتك"
        },
        footerQuote: "التطهير الحقيقي، والوصول إلى أعلى حالات الوعي، واكتساب القوى الفاعلة.",
        percentages: {
          personality: "٨٥٪",
          knowledge: "١٥٪"
        }
      },
      "memberSpace": {
    "loading": "جار التحميل...",
    "noSubscription": {
      "title": "لا يوجد اشتراك نشط",
      "description": "يجب عليك الاشتراك في خطة عضوية للوصول إلى منطقة الأعضاء",
      "button": "اختر اشتراكًا"
    },
    "welcome": "مرحبًا",
    "member": "عضو",
    "active": "نشط",
    "contentSections": {
      "esotericTraining": {
        "title": "التدريب الباطني",
        "description": "الوصول إلى التعاليم الأساسية"
      },
      "philosophicalTraining": {
        "title": "التدريب الفلسفي",
        "description": "تعميق معرفتك"
      },
      "powerDevelopment": {
        "title": "تطوير القدرات",
        "description": "محتوى متميز حصري"
      },
      "library": {
        "title": "المكتبة",
        "description": "الوصول إلى الموارد الوثائقية"
      },
      "videos": {
        "title": "فيديوهات",
        "description": "محتوى فيديو حصري"
      }
    },
    "locked": {
      "requires": "يتطلب",
      "upgradeButton": "ترقية الاشتراك"
    },
    "access": "الوصول",
    "upgradeCTA": {
      "title": "فتح المزيد من المحتوى",
      "description": "قم بترقية اشتراكك للوصول إلى جميع المحتويات الحصرية",
      "button": "ترقية"
    },
    "roles": {
      "auditeur": {
        "name": "مستمع",
        "description": "وصول أساسي إلى التدريب"
      },
      "apprenti": {
        "name": "متدرب",
        "description": "تدريب فلسفي متقدم"
      },
      "frere-soeur": {
        "name": "أخ/أخت",
        "description": "وصول كامل لجميع المحتويات"
      }
    }
  },
  goc: {
  actions: {
    title: "أنشطة GOC",
    subtitle: "أنشطتنا في العالم",
    items: {
      seminars: { title: "الندوات الابتدائية", description: "تنظيم الندوات والاعتكافات الروحية التي تتيح للأعضاء تعميق رحلتهم الغامضة وتجربة تجارب ابتدائية تحويلية." },
      conferences: { title: "المؤتمرات العامة", description: "نشر المعرفة الغامضة والفلسفية من خلال المؤتمرات المفتوحة للجمهور حول المواضيع الروحية والصوفية والميتافيزيقية." },
      publications: { title: "المنشورات", description: "نشر الكتب والمجلات والوثائق التعليمية التي تحفظ وتنقل التعاليم التقليدية للغموض الغربي والشرقي." },
      rituals: { title: "الطقوس الجماعية", description: "الاحتفال بالطقوس الموسمية والابتدائية التي تتيح للأعضاء التواصل مع القوى الكونية وتعزيز الإيغريغور للأخوية." }
    },
    program: {
      title: "البرنامج السنوي",
      seasons: {
        spring: { name: "الربيع", activity: "طقوس الاعتدال، ندوة التجديد الروحي" },
        summer: { name: "الصيف", activity: "الاعتكاف الصيفي، احتفال الانقلاب، الابتداءات" },
        autumn: { name: "الخريف", activity: "الندوات الفلسفية، طقوس الحصاد الروحي" },
        winter: { name: "الشتاء", activity: "انقلاب الشتاء، تأملات عميقة، تعاليم سرية" }
      }
    }
  },
  charity: {
    title: "الأعمال الخيرية والاجتماعية",
    serviceTitle: "الخدمة الذاتية",
    serviceDesc: "في قلب تعليمنا الغامض يكمن مبدأ الخدمة الذاتية. لا تكتسب الحكمة الحقيقية بالدراسة فقط، بل أيضاً من خلال العمل الرحيم تجاه زملائنا.",
    works: {
      spiritual: { title: "المساعدة الروحية", description: "دعم روحي مجاني للأشخاص في ضائقة أخلاقية أو وجودية. أعضاؤنا المدربون يقدمون الاستماع والنصيحة والدعم الطاقي." },
      material: { title: "المساعدة المادية", description: "توزيع المساعدة المادية للعائلات المحتاجة: طعام، ملابس، دعم مالي عرضي لحالات الطوارئ." },
      education: { title: "التعليم المجاني", description: "دورات مجانية في الفلسفة والتأمل والتنمية الشخصية للأشخاص غير القادرين على الوصول إلى التعاليم المدفوعة." },
      energy: { title: "الشفاء الطاقي", description: "جلسات العناية الطاقية والشفاء الشامل المقدمة مجاناً للأشخاص الذين يعانون من الأمراض أو الاختلالات." }
    },
    participate: { title: "شارك في أعمالنا", description: "كل عضو في الأخوية الكبرى للدائرة يكرس وقته وموارده للأعمال الخيرية. انضم إلينا في هذه المهمة من الخدمة والرحمة.", donate: "تبرع", volunteer: "كن متطوعاً" }
  },
  fraternity: {
    title: "الأخوة العالمية",
    ourFraternity: "أخوتنا",
    description: "أخوية الأخوية الكبرى للدائرة هي مجتمع من النساء والرجال، بدون استثناء، من جميع الأعراق، وجميع الأعراق، وجميع البلدان وجميع الجنسيات، الذين يوافقون طوعاً ودون أي قيد من أي نوع، من أي طبيعة، على أن يصبحوا أعضاء ويلتزمون باحترام القاعدة في XII مبدأً التي تحكم حياة منظمة الأخوية الكبرى للدائرة.",
    transcendentLink: "رابط يتجاوز",
    transcendentDesc: "الأخوة داخل الأخوية الكبرى للدائرة ليست مجرد صداقة، بل هي رابط روحي عميق يوحد الأرواح في سعيها للنور والمعرفة.",
    features: {
      spiritualHelp: { title: "المساعدة الروحية المتبادلة", description: "الإخوة والأخوات يساعدون بعضهم البعض في رحلتهم الابتدائية" },
      knowledge: { title: "مشاركة المعرفة", description: "نقل المعرفة الغامضة بين الأعضاء المبتدئين" },
      mutualSupport: { title: "الدعم المتبادل", description: "ال presence والمرافقة في محن الحياة" },
      rituals: { title: "الطقوس الأخوية", description: "الاحتفالات التي تقوي الروابط بين أعضاء الأخوية" },
      network: { title: "الشبكة الدولية", description: "الاتصالات مع الأعضاء حول العالم" },
      meditation: { title: "التأملات الجماعية", description: "الممارسات الروحية الجماعية لتضخيم الطاقة" }
    },
    commanderies: {
      title: "القيادات الأخوية",
      description: "كل منطقة لديها قيادتها، مكان مقدس حيث يجتمع الأعضاء لتنمية الأخوة، ممارسة الطقوس ومشاركة التعاليم.",
      activities: { meditation: "اجتماعات التأمل والدراسة الشهرية", celebrations: "احتفالات الانقلابات والاعتدالات", meals: "الوجبات الأخوية ولحظات الأنس", library: "المكتبة المشتركة للأعمال الغامضة" }
    },
    join: { title: "انضم إلى أخوتنا", description: "كن عضواً في الأخوية الكبرى للدائرة واكتشف عمق الأخوة الأصيلة القائمة على الحب، الحكمة والخدمة.", button: "اعرف المزيد" }
  }
},
formation: {
  esoterism: {
    title: "التدريب على الغموض",
    subtitle: "العلوم الخفية",
    intro: "يشير الغموض إلى مجموعة المعرفة السرية والممارسات الروحية التي تنتقل من معلم إلى تلميذ منذ الأزل. يقدم تدريبنا الشامل مقدمة لأسرار الكون الخفية والقوانين التي تحكم المستوى الدقيق.",
    sections: {
      symbolism: {
        title: "الرمزية المقدسة",
        items: [
          "تفسير الرموز الهرمسية",
          "الهندسة المقدسة والأرقام الصوفية",
          "الأبجديات السحرية والرموز"
        ]
      },
      alchemy: {
        title: "الخيمياء الروحية",
        items: [
          "العمل العظيم للخيمياء",
          "التحول الداخلي",
          "حجر الفلاسفة وإكسير الحياة"
        ]
      },
      kabbalah: {
        title: "القبالة وشجرة الحياة",
        items: [
          "دراسة السفيروت العشرة",
          "مسارات شجرة الحياة",
          "الجيماتريا والعدد العبري"
        ]
      },
      tarot: {
        title: "التاروت والتكهن",
        items: [
          "الأركان الكبرى والصغرى",
          "فنون التكهن التقليدية",
          "تطوير الحدس"
        ]
      }
    },
    program: {
      title: "برنامج التدريب",
      level1: {
        title: "المستوى 1 - متدرب (12 شهراً)",
        description: "أساسيات الغموض، الرمزية، التأمل، الطقوس الأولى"
      },
      level2: {
        title: "المستوى 2 - رفيق (18 شهراً)",
        description: "الخيمياء، القبالة، التنجيم الغامض، العمل الطاقي المتقدم"
      },
      level3: {
        title: "المستوى 3 - معلم (24 شهراً)",
        description: "التعاليم السرية، السحر العالي، الابتداء في الأسرار العميقة"
      }
    },
    signup: "التسجيل في التدريب"
  },
  philosophy: {
    title: "التدريب الفلسفي",
    subtitle: "الفلسفة الغامضة",
    intro: "تستكشف الفلسفة الغامضة الأسئلة الأساسية للوجود: من نحن، من أين أتينا، إلى أين نذهب؟ يدمج تعليمنا التقاليد الفلسفية الشرقية والغربية العظيمة في توليفة فريدة.",
    traditions: {
      hermetic: {
        title: "الفلسفة الهرمسية",
        description: "دراسة المبادئ الهرمسية السبعة: الذهنية، المراسلة، الاهتزاز، القطبية، الإيقاع، السبب والنتيجة، الجنس. التطبيق العملي لهذه القوانين الكونية."
      },
      neoplatonic: {
        title: "الأفلاطونية الجديدة والمعرفة",
        description: "تعاليم أفلاطون وبروتينوس والغنوصيين. عقيدة الواحد، انبثاق العوالم، صعود الروح إلى مصدرها الإلهي."
      },
      eastern: {
        title: "الحكمة الشرقية",
        description: "الفيدانتا، البوذية، الطاوية: استكشاف الفلسفات الشرقية وممارساتها التأملية. عدم الثنائية، الفراغ، وو وي."
      },
      modern: {
        title: "الميتافيزيقا الحديثة",
        description: "التوليف بين العلم والروحانية. الفيزياء الكمية والوعي، النماذج الجديدة للواقع."
      }
    },
    themes: {
      title: "المواضيع المدروسة",
      items: [
        "طبيعة الوعي والروح",
        "علم نشأة الكون وخلق العالم",
        "الكرمة، التناسخ والمصير",
        "الإرادة الحرة والحتمية",
        "الأخلاق الروحية والأخلاق الغامضة"
      ]
    },
    methods: {
      title: "الأساليب التربوية",
      items: [
        "الدورات النظرية والندوات",
        "الحوارات السقراطية والمناقشات",
        "التأملات الفلسفية الموجهة",
        "القراءات المشروحة للنصوص المقدسة",
        "الأعمال الكتابية والأطروحات"
      ]
    },
    continuous: {
      title: "التدريب المستمر",
      description: "يمتد التدريب الفلسفي على 3 سنوات مع دورات شهرية وندوات ربع سنوية والوصول إلى مكتبتنا الغامضة.",
      button: "البرنامج التفصيلي"
    }
  },
  powers: {
    title: "تطوير القوى",
    subtitle: "القدرات العليا",
    intro: "بما يتجاوز القدرات العادية، يمتلك الإنسان قدرات كامنة يمكنه تطويرها من خلال التدريب الروحي. يرشدك تدريبنا في إيقاظ هذه القوى النفسية والروحية.",
    warning: {
      title: "⚠️ تحذير مهم",
      description: "يتطلب تطوير القوى إعداداً أخلاقياً وروحياً صارماً. لا تُنقل هذه التعاليم إلا للأعضاء المبتدئين الذين أظهروا النضج والأخلاق الراسخة."
    },
    abilities: {
      clairvoyance: {
        title: "الإبصار",
        description: "تطوير الرؤية الدقيقة للإدراك المستويات الطاقية، الهالات والكيانات الروحية.",
        items: ["تفعيل العين الثالثة", "الرؤية الإثيرية والأسترالية", "قراءة الهالات"]
      },
      telepathy: {
        title: "التخاطر",
        description: "التواصل العقلي المباشر، إرسال واستقبال الأفكار، الاتصال بالوعي البعيد.",
        items: ["نقل الأفكار", "الاستقبال الحدسي", "التواصل مع الأدلة"]
      },
      magnetism: {
        title: "المغناطيسية",
        description: "إتقان الطاقة الحيوية للشفاء والتوازن والتحول. تقنيات المغناطيسية العلاجية ووضع اليد.",
        items: ["تراكم الطاقة", "الشفاء الطاقي", "توازن الشاكرات"]
      },
      astral: {
        title: "الإسقاط الأسترالي",
        description: "الخروج من الجسد الفيزيائي والسفر في المستويات الدقيقة. الاستكشاف الواعي للأبعاد الروحية.",
        items: ["التجرد الطوعي", "السفر الأسترالي الواعي", "استكشاف المستويات العليا"]
      },
      psychometry: {
        title: "القياس النفسي",
        description: "قراءة الطاقات المتغلغلة في الأشياء والأماكن والأشخاص. القدرة على إدراك التاريخ الطاقي.",
        items: ["قراءة الأشياء", "إدراك الذكريات", "القياس النفسي المتقدم"]
      },
      meditation: {
        title: "التأمل العميق",
        description: "حالات الوعي المعدلة، السامادهي، الاتحاد الصوفي. الوصول إلى الأبعاد المتعالية للوجود.",
        items: ["حالات التأمل العميقة", "التجارب الصوفية", "الاتحاد مع الإلهي"]
      }
    },
    program: {
      title: "البرنامج التدريجي",
      subtitle: "يتبع إيقاظ القوى عملية تدريجية وآمنة على مدى عدة سنوات",
      year1: {
        title: "السنة 1",
        description: "التحضير والتطهير"
      },
      year2: {
        title: "السنة 2",
        description: "التفعيل والتطوير"
      },
      year3: {
        title: "السنة 3+",
        description: "الإتقان والنقل"
      }
    }
  }
},
      library: {
  intro: {
    quote: "المادة تتجدد، والروح تتغذى…",
    description: "مكان للمعرفة، تتيح مكتبة GOC للأعضاء والمستمعين المنتسبين والمتعاطفين، نشرتها «ماعت»، ومقاطع الفيديو وكتيبات تعاليمها، وكتب الفلسفة والحكمة والمعارف السرية. وكذلك أزياء الأعضاء وإكسسوارات أخرى للطقوس.",
    orderForm: "نموذج الطلب"
  },
  accessories: {
    description: "إكسسوارات الطقوس هي أدوات مقدسة تستخدم في الممارسات الغامضة والاحتفالات الابتدائية. يتم تكريس كل كائن وشحنه طاقياً وفقاً للتقاليد الهرمسية.",
    items: {
      candles: { title: "الشموع الطقسية", description: "شموع مكرسة بألوان مختلفة للطقوس المحددة: أبيض (التطهير)، ذهبي (الروحانية)، أحمر (الحب)، أخضر (الازدهار).", availability: "متاح للأعضاء" },
      crystals: { title: "البلورات والأحجار", description: "مجموعة من البلورات المنقاة والمبرمجة: كوارتز، جمشت، سيترين، أوبسيديان. كل حجر له خصائصه الطاقية المحددة.", availability: "متاح للأعضاء" },
      incense: { title: "البخور المقدس", description: "بخور تقليدي للتطهير والارتقاء الاهتزازي: لبان، مر، بنزوين، صندل. وصفات المعابد القديمة.", availability: "متاح للأعضاء" },
      sword: { title: "السيف الطقسي", description: "سيف رمزي يستخدم لرسم دوائر الحماية وتوجيه الطاقة أثناء الطقوس. مزور وفقاً للتقاليد الهرمسية.", availability: "محفوظ للمبتدئين" },
      chalice: { title: "الكأس المكرس", description: "كأس مقدسة تمثل عنصر الماء والمبدأ الأنثوي. تستخدم في طقوس التقديم والشركة الروحية.", availability: "محفوظ للمبتدئين" },
      malas: { title: "المسبحات والمالا", description: "مسبحات تأمل من الخشب المقدس أو الأحجار الكريمة أو بذور الردراكشا. 108 خرزات لممارسة الجابا (تكرار المانترا).", availability: "متاح للأعضاء" },
      feathers: { title: "الريش الطقسي", description: "ريش من طيور مقدسة تستخدم لنشر دخان البخور وتطهير الفضاء الطقسي. تقاليد الأمريكيين الأصليين والشامانية.", availability: "متاح للأعضاء" },
      talismans: { title: "الختمات والتمائم", description: "ختمات محفورة وفقاً لتقاليد السحر السليماني. تمائم مخصصة مشحونة وفقاً لخرائطك الفلكية.", availability: "حسب الطلب" },
      robes: { title: "الأردية والملابس", description: "أردية طقسية، وعباءات وملابس طقسية بألوان النظام. مصنوعة من الأقمشة الطبيعية وفقاً للتقليد.", availability: "محفوظ للأعضاء" }
    },
    cta: { title: "طلب إكسسوارات", description: "إكسسوارات الطقوس متاحة للشراء لأعضاء GOC. يتم تكريس كل كائن بشكل فردي قبل التسليم.", button: "الوصول إلى المتجر", note: "* تسجيل الدخول مطلوب - محفوظ للأعضاء المبتدئين" }
  },journals: {
    title: "المجلات والمنشورات",
    intro: "الأخوية الكبرى للدائرة تنشر بانتظام مجلات ونشرات ودوريات مخصصة للتعليم المستمر لأعضائها ولنشر المعرفة الغامضة.",
    mainJournal: {
      title: "نور الدائرة",
      subtitle: "المجلة الرسمية للأخوية الكبرى للدائرة - نشرة فصلية",
      summary: "في هذا العدد:",
      format: "الصيغة:",
      items: [
        "تعاليم غامضة عميقة",
        "الطقوس والممارسات الموسمية",
        "شهادات الأعضاء",
        "أخبار الأخوية"
      ],
      formatItems: [
        "40-60 صفحة مصورة",
        "نسخة ورقية ورقمية",
        "أرشيف كامل منذ 1985",
        "محفوظ للأعضاء"
      ]
    },
    publications: {
      bulletin: {
        title: "نشرة الأخوية",
        description: "نشرة شهرية للحفاظ على الروابط بين الأعضاء. معلومات عن اللقاءات والندوات والأحداث القادمة.",
        frequency: "شهرياً",
        pages: "12-16 صفحة",
        access: "للأعضاء فقط"
      },
      cahiers: {
        title: "دفاتر الدراسات الهرمسية",
        description: "دورية أكاديمية عميقة حول مواضيع غامضة محددة: الخيمياء، القبالة، التنجيم، الرمزية، الفلسفة الصوفية.",
        frequency: "كل شهرين",
        pages: "60-80 صفحة",
        access: "للأعضاء المبتدئين"
      },
      lettres: {
        title: "رسائل الرئيس الأعلى",
        description: "تعاليم مباشرة من الرئيس الأعلى للأخوية، تنقل معارف عميقة وتوجيهات روحية للأعضاء المتقدمين.",
        frequency: "ربع سنوي",
        pages: "8-12 صفحة",
        access: "مبتدئي الدرجة الثانية"
      },
      almanach: {
        title: "التقويم الغامض",
        description: "نشرة سنوية تحتوي على التواريخ المهمة، أطوار القمر، مواقع الكواكب، تقويم الطقوس والممارسات الموصى بها.",
        frequency: "سنوي",
        pages: "120 صفحة",
        access: "متاح للجميع"
      }
    },
    archives: {
      title: "الأرشيف التاريخي",
      description: "الوصول إلى الأرشيف الكامل لمنشوراتنا منذ تأسيس الأخوية. عقود من المعرفة الغامضة في متناول يدك.",
      stats: {
        journal: "أعداد نور الدائرة",
        bulletins: "النشرات الشهرية",
        years: "سنوات الأرشيف"
      }
    },
    cta: {
      title: "الوصول إلى المنشورات",
      description: "كن عضواً في الأخوية الكبرى للدائرة لتتلقى منشوراتنا والوصول إلى الأرشيف الكامل.",
      becomeMember: "كن عضواً",
      consultArchives: "استشر الأرشيف"
    }
  },
  books: {
    title: "المكتبة الغامضة",
    intro: "تحتوي مكتبتنا على مجموعة استثنائية من الأعمال الغامضة والهرمسية والفلسفية. بعض النصوص النادرة محفوظة للأعضاء المبتدئين.",
    sections: {
      alchemy: "الخيمياء والهرمسية",
      kabbalah: "القبالة والتصوف اليهودي",
      magic: "السحر الطقسي",
      philosophy: "الفلسفة الغامضة",
      tarot: "التاروت والرمزية"
    },
    access: {
      open: "متاح للجميع",
      members: "محفوظ للأعضاء",
      initiates: "محفوظ للمبتدئين"
    },
    onSite: {
      title: "الاستشارة في الموقع",
      description: "يمكن للأعضاء استشارة المكتبة بأكملها في مقرنا. جو أكاديمي مواتٍ للتأمل.",
      note: "متاح حسب الموعد للأعضاء"
    },
    digital: {
      title: "المكتبة الرقمية",
      description: "الوصول إلى مكتبتنا الرقمية مع مئات الكتب بصيغة PDF، متاح 24/7 من مساحة العضو الخاصة بك.",
      note: "محفوظ للأعضاء النشطين"
    }
  },
  videos: {
    title: "مكتبة الفيديو الغامضة",
    intro: "تقدم مكتبة الفيديو لدينا مؤتمرات وطقوس مصورة وتأملات موجهة وتعاليم الرئيس الأعلى. محتوى حصري لأعضاء الأخوية الكبرى للدائرة.",
    categories: {
      conferences: {
        title: "المؤتمرات",
        description: "مؤتمرات رائعة حول الغموض والخيمياء والقبالة والفلسفة الهرمسية من قبل أساتذتنا المبتدئين.",
        count: "+45 فيديو",
        access: "وصول الأعضاء"
      },
      meditations: {
        title: "التأملات الموجهة",
        description: "جلسات تأمل موجهة للتنمية الروحية وتفعيل الشاكرات والتواصل مع الإلهي.",
        count: "+30 فيديو",
        access: "وصول حر"
      },
      rituals: {
        title: "الطقوس المصورة",
        description: "تسجيلات للطقوس الابتدائية والاحتفالات الموسمية والممارسات الغامضة المنقولة في الأخوية.",
        count: "+25 فيديو",
        access: "للمبتدئين فقط"
      },
      courses: {
        title: "الدورات النظرية",
        description: "دورات تدريبية كاملة حول الغموض والعلوم الخفية والفلسفة والرمزية المقدسة.",
        count: "+60 فيديو",
        access: "وصول الأعضاء"
      },
      energy: {
        title: "الممارسات الطاقية",
        description: "تمارين عملية لتطوير القدرات النفسية والعمل الطاقي والمغناطيسية.",
        count: "+35 فيديو",
        access: "وصول الأعضاء"
      },
      secret: {
        title: "التعاليم السرية",
        description: "تعاليم محفوظة ينقلها الرئيس الأعلى حول أسرار التقليد الهرمسي العميقة.",
        count: "+20 فيديو",
        access: "للأساتذة فقط"
      }
    },
    recent: {
      title: "أحدث المنشورات",
      videos: [
        {
          title: "مقدمة في القبالة العملية",
          description: "مؤتمر الرئيس الأعلى حول أسس القبالة وتطبيقها في الحياة اليومية.",
          duration: "1س 25د",
          date: "يناير 2026",
          access: "الأعضاء"
        },
        {
          title: "تأمل البدر",
          description: "تأمل موجه خاص للتواصل مع الطاقات القمرية واستقبال الإشراق.",
          duration: "45د",
          date: "يناير 2026",
          access: "وصول حر"
        },
        {
          title: "طقوس الانقلاب الشتوي 2025",
          description: "تسجيل كامل للطقوس الطقسي المحتفل به أثناء الانقلاب الشتوي في القيادة المركزية.",
          duration: "2س 10د",
          date: "ديسمبر 2025",
          access: "المبتدئين"
        }
      ]
    },
    stats: {
      title: "مجموعة الفيديو لدينا",
      total: "إجمالي الفيديوهات",
      hours: "محتوى حصري",
      quality: "جودة HD و4K",
      access: "وصول غير محدود"
    },
    cta: {
      title: "الوصول إلى مكتبة الفيديو",
      description: "كن عضواً للوصول إلى مجموعة الفيديو الكاملة لدينا والاستفادة من محتوى جديد كل شهر.",
      button: "سجل الآن"
    }
  }
},
      home: {
        title: "الأخوية الكبرى للدائرة",
        motto: "حيث تقف شجرة المعرفة، يوجد السعادة",
        subtitle: {
          line1: "التدريب الغامض والفلسفي…",
          line2: "الأخوة الروحية."
        },
        masterDestiny: "احصل على السيطرة الكاملة على مصيرك…",
        benefits: {
          connectForces: "التواصل مع القوى المفيدة",
          innerBeing: "اكتشاف كينونتك الداخلية",
          cleansePsyche: "تطهير الروح",
          masterMind: "إتقان العقل",
          awakenPowers: "إيقاظ القدرات الخفية",
          influence: "التأثير على البيئة دون عمل مادي",
          regenerate: "التجدد جسدياً",
          longevity: "زيادة متوسط العمر المتوقع",
          achieveGoals: "تحديد الأهداف وتحقيقها",
          materialWellbeing: "الوصول إلى الرفاه المادي",
          qualityOfLife: "تحسين جودة الحياة",
          spiritualAwakening: "الوصول إلى اليقظة الروحية",
          protection: "الحماية من كل سوء الحظ بغض النظر عن مصدره",
          betterHealth: "اكتساب صحة أفضل"
        },
        carousel: {
          seminar: "الندوة",
          prieure: "الدير",
          group: "مجموعة الأعضاء",
          symbols: "الرموز"
        },
        links: {
          formation: "تدريبنا",
          fraternity: "أخوتنا",
          seminars: "ندواتنا",
          actions: "أنشطتنا"
        },
        vision: {
          title: "رؤيتنا",
          goc: "الأخوية الكبرى للدائرة",
          secrets: "المعرفة السرية، الحكمة الروحية والابتدائية،",
          awakening: "إيقاظ القوى، القوة الشخصية، أدوات الرفاه…",
          changeLife: "غير حياتك واحصل على السيطرة الكاملة عليها!",
          description: "من خلال تدريب غامض يمنحك الوصول إلى المعرفة السرية والحكمة الروحية والابتدائية، إلى إيقاظ القوى، القوة الشخصية وأدوات الرفاه…",
          quote: "« خلق الإنسان في الأصل ككائن روحي بحت، منبثق من المبدأ الإلهي 'على صورة ومثال الروح الخالق العظيم'. خلال نزوله إلى المادة، يتحرك بدافع مزدوج: الجذب-الرفض، الرغبة-النفور. مرتدياً جسداً فاسداً، أصبح الآن منفصلاً عن وحدة المبدأ. طبيعته المزدوجة – المادية والروحية – تجعله يعاني من صراع بين التطلعات الروحية وسلاسل المادية. منذ ذلك الحين، قام بأفعال محكومة بهذه الدوافع من الكبرياء. لكن إنسان الرغبة يسعى لاستعادة اندماجه في حالته الأولى واستعادة جسد المجد.",
          mission: "هدف الأخوية الكبرى للدائرة هو إنارة المبتدئ حول طبيعته، أصله ووجهته. يتلقى أو تتلقى تعاليم عملية وابتدائية أساسية، تتعامل مع الغموض، الروحانية، الميتافيزيقا، أسرار اليوغيين، الفلسفة والتنمية الشخصية؛ مما يسمح بالتطهير الحقيقي، الوصول إلى أعلى حالات الوعي واكتساب القدرات الفاعلة."
        },
        nav: {
          becomeMember: "كن عضواً",
          videos: "الفيديوهات",
          donation: "التبرع",
          commanderies: "القيادات",
          contacts: "جهات الاتصال",
          contact: "اتصل بنا"
        },
        image: {
          alt: "الأخوية الكبرى للدائرة",
          caption: "الحكمة القديمة للإنسان الحديث"
        },
        footer: {
          copyright: "© 2026 الأخوية الكبرى للدائرة - جميع الحقوق محفوظة",
          sapientia: "الحكمة",
          fraternitas: "الأخوة",
          spiritus: "الروح"
        }
      },
      membership: {
        title: "انضم إلى نرتنا",
        subtitle: "اختر مستوى الالتزام الذي يتناسب مع رحلتك الروحية والفلسفية",
        adhesion: "العضوية",
        formation: "التدريب",
        oneTime: "مرة واحدة",
        perYear: "سنوياً",
        firstYear: "السنة الأولى",
        renewal: "التجديد",
        becomeMember: "كن عضواً",
        renew: "جدد",
        currentSubscription: "الاشتراك الحالي",
        learnMore: "اعرف المزيد",
        mostPopular: "الأكثر شعبية",
        active: "نشط",
        expired: "منتهي",
        current: "الحالي",
        activeSubscription: "اشتراك نشط",
        adhesionRequired: "العضوية مطلوبة",
        buyTrimester: "اشترِ فصلاً دراسياً",
        buyCourse: "اشترِ دورةً",
        processing: "جاري المعالجة...",
        signupAndBuy: "سجل واشترِ",
        pricePerTrimester: "السعر لكل فصل دراسي",
        pricePerCourse: "السعر لكل دورة",
        formationAccessible: "التدريب متاح فقط للأعضاء النشطين في الأخوية.",
        cotisation: "الاشتراك السنوي",
        error: "حدث خطأ",
        whyJoin: "لماذا تصبح عضواً؟",
        whyJoinDesc: "من خلال الانضمام إلى نرتنا، تحصل على مجتمع مكرس لليقظة الروحية، المعرفة الغامضة والمساعدة الأخوية المتبادلة.",
        benefit1: "الوصول إلى تعاليم حصرية",
        benefit2: "المشاركة في الأحداث والندوات",
        benefit3: "شبكة الأخوية والمساعدة المتبادلة",
        benefit4: "مكتبة الموارد الروحية"
      },
      roles: {
        auditeur: {
          name: "متعلم مستمع",
          description: "وصول أساسي إلى التعاليم",
          formationTitle: "تدريب المتعلم المستمع",
          formationDesc: "دورات فردية حسب الطلب",
          feature1: "مرونة الشراء حسب سرعتك",
          feature2: "وصول فوري إلى الدورة المشتراة",
          feature3: "محتوى غني ومفصل",
          totalCourses: "إجمالي 40 دورة متاحة",
          totalCost: "التكلفة الإجمالية الكاملة",
          totalDuration: "تدريب كامل على مدى سنتين"
        },
        apprenti: {
          name: "عضو متدرب",
          description: "تدريب كامل",
          formationTitle: "تدريب المتدرب",
          formationDesc: "تدريب ربع سنوي منظم",
          feature1: "تعاليم عميقة كل فصل دراسي",
          feature2: "متابعة شخصية لتقدمك",
          feature3: "الوصول إلى الموارد الحصرية",
          totalCost: "التكلفة الإجمالية للتدريب",
          totalDuration: "المدة الإجمالية: 8 فصول دراسية (سنتان)"
        },
        "frere-soeur": {
          name: "عضو أخ/أخت",
          description: "وصول متميز كامل",
          feature1: "جميع المحتويات والتدريبات",
          feature2: "إرشاد فردي",
          feature3: "دعم أولوية 24/7",
          feature4: "أحداث حصرية",
          feature5: "شبكة دولية"
        }
      },
      organisation: {
        motto: "حيث تقف شجرة المعرفة، يوجد السعادة",
        title: "تنظيم الأخوية الكبرى للدائرة",
        goc: "GOC",
        structure: "الأخوية الكبرى للدائرة منظمة حول:",
        pillars: "الركائز",
        grades: "الدرجات",
        rule: "القاعدة",
        pillarsTitle: "الركائز",
        pillar1: {
          title: "I – الابتداء",
          item1: "التدريب",
          item2: "التحسين"
        },
        pillar2: {
          title: "II – المكاتب",
          item1: "الطقوس",
          item2: "الاحتفالات"
        },
        pillar3: {
          title: "III – الخيرية",
          item1: "الأعمال الخيرية",
          item2: "التبرعات"
        },
        pillar4: {
          title: "IV – التضامن",
          item1: "تضامن المبتدئين",
          item2: "الدعم المالي"
        },
        rulesTitle: "قواعد الأخوية الكبرى للدائرة",
        rules: {
          "1": "الإيمان بالروح الإلهية العظمى",
          "2": "الأخوة الابتدائية وواجب التضامن",
          "3": "المثال المثالي للحب، الحقيقة، العدالة والسلام",
          "4": "تحسين الأعضاء والإنسانية",
          "5": "ممارسة الطقوس والرمزية",
          "6": "احترام الآراء والمعتقدات",
          "7": "القسم على الرموز المقدسة",
          "8": "التجمع والعمل في القيادات",
          "9": "النزاهة، الولاء والتكتم",
          "10": "حب الوطن، احترام القوانين، احترام السلطات المشكلة",
          "11": "السلوك الحكيم والكريم",
          "12": "المساعدة المتبادلة والحماية"
        },
        structureTitle: "تنظيم الأخوية الكبرى للدائرة",
        level1: {
          title: "المستوى 1: دائرة الإخوة",
          desc: "تجمع الدائرة مجتمعاً يصل إلى 770 أخاً"
        },
        level2: {
          title: "المستوى 2: المنطقة",
          desc: "تجمع المنطقة جميع دوائر الإخوة على مستوى القسم"
        },
        level3: {
          title: "المستوى 3: القيادة",
          desc: "تجمع القيادة جميع المناطق على مستوى المنطقة"
        },
        level4: {
          title: "المستوى 4: الولاية",
          desc: "تجمع الولاية جميع القيادات على مستوى البلد"
        },
        level5: {
          title: "المستوى 5: الرئيس الأعلى",
          desc: "الرئيس الأعلى هو الهيئة العليا للأخوية الكبرى للدائرة"
        },
        gradesTitle: "الدرجات",
        grade: {
          "1": "متدرب",
          "2": "رفيق",
          "3": "ضابط",
          "4": "محترم",
          "5": "مبجل",
          "6": "معلم",
          "7": "المعلم الأكبر"
        },
        administration: "الإدارة",
        admin1: {
          title: "1) الدائرة",
          item1: "جمعية الإخوة",
          item2: "المبجل",
          item3: "الأمانة",
          item4: "الخزانة",
          item5: "الإدارة",
          item6: "المكتب"
        },
        admin2: {
          title: "2) المنطقة",
          item1: "مجلس المنطقة",
          item2: "المعلم",
          item3: "الأمانة",
          item4: "الخزانة",
          item5: "الإدارة",
          item6: "المكتب"
        },
        admin3: {
          title: "3) القيادة",
          item1: "مجلس القيادة",
          item2: "القائد",
          item3: "الأمانة",
          item4: "الخزانة",
          item5: "الإدارة",
          item6: "المكتب"
        },
        admin4: {
          title: "4) الولاية/الوفد",
          item1: "المجلس",
          item2: "المعلم الأكبر",
          item3: "الأمانة",
          item4: "الخزانة",
          item5: "الإدارة",
          item6: "المكتب"
        },
        globalGovernance: "الحوكمة العالمية للأخوية الكبرى للدائرة",
        global1: {
          title: "المؤتمر"
        },
        global2: {
          title: "المجلس الأعلى",
          desc: "(مجلس إدارة الأخوية الكبرى للدائرة)"
        },
        global3: {
          title: "رئيس الأخوية الكبرى للدائرة"
        },
        global4: {
          title: "الأمانة العامة",
          desc: "(هيئة إدارة الأخوية الكبرى للدائرة)"
        },
        global5: {
          title: "الخزانة المركزية"
        },
        join: "انضم إلى الأخوية"
      },
      fraternity: {
        motto: "حيث تقف شجرة المعرفة، يوجد السعادة",
        title: "الأخوة العالمية",
        ourFraternity: "أخوتنا",
        description: "أخوية الأخوية الكبرى للدائرة هي مجتمع من النساء والرجال، بدون استثناء، من جميع الأعراق، وجميع الأعراق، وجميع البلدان وجميع الجنسيات، الذين يوافقون طوعاً ودون أي قيد من أي نوع، من أي طبيعة، على أن يصبحوا أعضاء ويلتزمون باحترام القاعدة في XII مبدأً التي تحكم حياة منظمة الأخوية الكبرى للدائرة.",
        transcendentLink: "رابط يتجاوز",
        transcendentDesc: "الأخوة داخل الأخوية الكبرى للدائرة ليست مجرد صداقة، بل هي رابط روحي عميق يوحد الأرواح في سعيها للنور والمعرفة.",
        features: {
          spiritualHelp: "المساعدة الروحية المتبادلة",
          spiritualHelpDesc: "الإخوة والأخوات يساعدون بعضهم البعض في رحلتهم الابتدائية",
          knowledge: "مشاركة المعرفة",
          knowledgeDesc: "نقل المعرفة الغامضة بين الأعضاء المبتدئين",
          mutualSupport: "الدعم المتبادل",
          mutualSupportDesc: "ال presence والمرافقة في محن الحياة",
          rituals: "الطقوس الأخوية",
          ritualsDesc: "الاحتفالات التي تقوي الروابط بين أعضاء الأخوية",
          network: "الشبكة الدولية",
          networkDesc: "الاتصالات مع الأعضاء حول العالم",
          meditation: "التأملات الجماعية",
          meditationDesc: "الممارسات الروحية الجماعية لتضخيم الطاقة"
        },
        commanderies: "القيادات الأخوية",
        commanderiesDesc: "كل منطقة لديها قيادتها، مكان مقدس حيث يجتمع الأعضاء لتنمية الأخوة، ممارسة الطقوس ومشاركة التعاليم.",
        activities: {
          meditation: "اجتماعات التأمل والدراسة الشهرية",
          celebrations: "احتفالات الانقلابات والاعتدالات",
          meals: "الوجبات الأخوية ولحظات الأنس",
          library: "المكتبة المشتركة للأعمال الغامضة"
        },
        joinTitle: "انضم إلى أخوتنا",
        joinDesc: "كن عضواً في الأخوية الكبرى للدائرة واكتشف عمق الأخوة الأصيلة القائمة على الحب، الحكمة والخدمة.",
        learnMore: "اعرف المزيد"
      },
      charity: {
        motto: "حيث تقف شجرة المعرفة، يوجد السعادة",
        title: "الأعمال الخيرية والاجتماعية",
        serviceTitle: "الخدمة الذاتية",
        serviceDesc: "في قلب تعليمنا الغامض يكمن مبدأ الخدمة الذاتية. الحكمة الحقيقية لا تكتسب بالدراسة فقط، بل أيضاً من خلال العمل الرحيم تجاه زملائنا.",
        works: {
          spiritual: "المساعدة الروحية",
          spiritualDesc: "دعم روحي مجاني للأشخاص في ضائقة أخلاقية أو وجودية. أعضاؤنا المدربون يقدمون الاستماع، النصيحة والدعم الطاقي.",
          material: "المساعدة المادية",
          materialDesc: "توزيع المساعدة المادية للعائلات المحتاجة: طعام، ملابس، دعم مالي عرضي لحالات الطوارئ.",
          education: "التعليم المجاني",
          educationDesc: "دورات مجانية في الفلسفة، التأمل والتنمية الشخصية للأشخاص غير القادرين على الوصول إلى التعاليم المدفوعة.",
          energy: "الشفاء الطاقي",
          energyDesc: "جلسات العناية الطاقية والشفاء الشامل المقدمة مجاناً للأشخاص الذين يعانون من الأمراض أو الاختلالات."
        },
        participate: "شارك في أعمالنا",
        participateDesc: "كل عضو في الأخوية الكبرى للدائرة يكرس وقته وموارده للأعمال الخيرية. انضم إلينا في هذه المهمة من الخدمة والرحمة.",
        donate: "تبرع",
        volunteer: "كن متطوعاً"
      },
      donation: {
  charite: {
    title: "تبرع خيري",
    generosityInAction: "كرمك في العمل",
    message: "الحد الأدنى أو أكثر من تبرعك هو كرم يسمح لنا بتخطيط أعمال المساعدة والتضامن للأشخاص المحتاجين.",
    minimumLabel: "الحد الأدنى للتبرع الخيري",
    amount: "100€",
    actTitle: "فعل كرم كبير",
    actDescription: "يمثل التبرع الخيري التزاماً كبيراً بقيم التعاون والتضامن للأخوية الكبرى للدائرة. من خلال هذا العمل الكريم، يمكنكم دعم أعمالنا الخيرية بشكل مستدام ومساعدة أولئك الذين يحتاجون إليها بشدة.",
    impact: {
      title: "تأثير تبرعك الخيري",
      items: [
        "المساعدة المباشرة للأشخاص في صعوبة كبيرة",
        "تمويل برامج التضامن",
        "دعم الأسر المحتاجة",
        "الأعمال الإنسانية الملموسة",
        "المساعدة الطارئة في الأزمات"
      ]
    },
    recognition: {
      title: "تقدير خاص",
      description: "كمتبرع خيري، تحصل على تقدير خاص:",
      items: [
        "الذكر في دائرة المحسنين (إذا رغبت)",
        "تقرير سنوي عن استخدام الأموال",
        "دعوة لفعاليات الأخوية الخيرية",
        "شهادة تقدير (عند الطلب)",
        "إيصال ضريبي للخصم"
      ]
    },
    examples: {
      title: "أمثلة على الأعمال الممولة",
      food: "المساعدة الغذائية للأسر",
      medical: "الدعم الطبي الطارئ",
      education: "منح دراسية للأطفال"
    },
    form: {
      title: "قدم تبرعاً خيرياً",
      subtitle: "الحد الأدنى: 100€. كرمك يغير حياة.",
      amountLabel: "مبلغ تبرعك الخيري (الحد الأدنى 100€)",
      customPlaceholder: "أو أدخل مبلغاً (حد أدنى 100€)",
      typeLabel: "نوع التبرع",
      types: {
        unique: "تبرع لمرة واحدة",
        monthly: "تبرع شهري متكرر",
        quarterly: "تبرع ربع سنوي",
        annual: "تبرع سنوي"
      },
      firstName: "الاسم الأول *",
      lastName: "اسم العائلة *",
      email: "البريد الإلكتروني *",
      message: "رسالة (اختياري)",
      messagePlaceholder: "شارك دوافعك أو خصص تبرعك...",
      receipt: "أرغب في الحصول على إيصال ضريبي",
      circle: "أوافق على ذكري في دائرة المحسنين",
      submit: "🤲 قدم تبرعي الخيري (حد أدنى 100€)",
      secure: "✓ دفع 100% آمن • ✓ إيصال ضريبي متاح"
    },
    thankYou: {
      title: "شكراً لكرمك الكبير",
      description: "يحدث تبرعك الخيري فرقاً ملموساً في حياة العديد من الأشخاص. بفضل كرمك، يمكننا مواصلة أعمال المساعدة والتضامن مع أولئك الذين يحتاجون إليها بشدة. بارك الله في عملك.",
      gratitude: "🙏 بأعمق امتناننا 🙏"
    }
  },
  soutien: {
    title: "دعم تطوير الأخوية",
    generosityInAction: "كرمك في العمل",
    message: "الحد الأدنى أو أكثر من تبرعك هو كرم يسمح لنا بتخطيط أعمال المساعدة والتضامن للأشخاص المحتاجين.",
    minimumLabel: "الحد الأدنى للتبرع الداعم",
    amount: "50€",
    contributeTitle: "ساهم في مهمتنا",
    contributeDescription: "تتيح لنا تبرعات الدعم مواصلة نقل التعاليم الغامضة، وتنظيم الفعاليات الروحية، والحفاظ على بنيتنا التحتية. كل مساهمة تساعد في الحفاظ على التقليد الهرمسي ونشره.",
    funding: {
      title: "تمويل التدريبات",
      items: [
        "إنشاء دورات جديدة عبر الإنترنت",
        "تعويض المعلمين المؤهلين",
        "إنتاج محتوى فيديو عالي الدقة",
        "تطوير المواد التعليمية",
        "تنظيم الندوات والاعتكافات"
      ]
    },
    infrastructure: {
      title: "صيانة البنية التحتية",
      items: [
        "صيانة القيادات الإقليمية",
        "المكتبة الغامضة والأرشيف",
        "المنصة الرقمية والموقع الإلكتروني",
        "اقتناء أعمال نادرة جديدة",
        "معدات وإكسسوارات الطقوس"
      ]
    },
    editorial: {
      title: "المشاريع التحريرية",
      items: [
        "نشر المجلة الفصلية",
        "تحرير كتب غامضة",
        "ترجمة النصوص القديمة",
        "دفاتر الدراسات الهرمسية",
        "توزيع محتوى مجاني"
      ]
    },
    international: {
      title: "الانتشار الدولي",
      items: [
        "افتتاح قيادات جديدة",
        "مؤتمرات دولية",
        "تبادلات مع أخويات أخرى",
        "ترجمة التدريبات",
        "الحضور في الفعاليات الروحية"
      ]
    },
    budget: {
      title: "الميزانية السنوية 2026",
      training: "التدريبات",
      infrastructure: "البنية التحتية",
      editorial: "النشر",
      outreach: "الانتشار"
    },
    levels: {
      title: "مستويات الدعم الشهرية",
      friend: {
        name: "صديق الأخوية",
        price: "10€",
        period: "/شهر",
        benefits: [
          "شكر على الموقع",
          "نشرة إخبارية حصرية",
          "شارة صديق الأخوية"
        ],
        button: "ادعم"
      },
      benefactor: {
        name: "محسن",
        price: "25€",
        period: "/شهر",
        badge: "موصى به",
        benefits: [
          "جميع المزايا السابقة",
          "الوصول إلى محتوى حصري",
          "دعوة للفعاليات الحصرية",
          "مجلة فصلية مجانية"
        ],
        button: "ادعم"
      },
      patron: {
        name: "راعٍ كبير",
        price: "50€",
        period: "/شهر",
        benefits: [
          "جميع المزايا السابقة",
          "الذكر في معبد الرعاة",
          "استشارة روحية سنوية",
          "هدية روحية مخصصة"
        ],
        button: "ادعم"
      }
    },
    form: {
      title: "تبرع لمرة واحدة",
      amountLabel: "مبلغ دعمك",
      customPlaceholder: "مبلغ آخر",
      typeLabel: "نوع الدعم",
      types: {
        unique: "تبرع لمرة واحدة",
        monthly: "دعم شهري متكرر"
      },
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني *",
      submit: "ادعم الآن",
      secure: "✓ دفع 100% آمن • ✓ إمكانية الإلغاء في أي وقت"
    }
  },
  sympathie: {
    title: "تبرع تعاطف",
    generosityInAction: "كرمك في العمل",
    message: "الحد الأدنى أو أكثر من تبرعك هو كرم يسمح لنا بتخطيط أعمال المساعدة والتضامن للأشخاص المحتاجين.",
    minimumLabel: "الحد الأدنى للتبرع التعاطفي",
    amount: "25€",
    gestureTitle: "إيماءة من القلب",
    gestureDescription: "التبرع التعاطفي هو إيماءة حرة وعفوية لا تتطلب أي مقابل. إنه تجسيد لدعمك وارتباطك بقيم الأخوية الكبرى للدائرة، دون توقع أو التزام.",
    freedom: {
      title: "حرية كاملة",
      description: "على عكس أشكال التبرع الأخرى، التبرع التعاطفي حر تماماً: مبلغ حر (حد أدنى 25€)، تكرار حر، إمكانية التخفي. إنه ببساطة وسيلة للتعبير عن تقديرك لعمل الأخوية والمساهمة، بقدر استطاعتك، في الحفاظ على التقليد الغامض."
    },
    why: {
      title: "لماذا تقدم تبرعاً تعاطفياً؟",
      items: [
        "تقدر مهمتنا وقيمنا",
        "ترغب في الدعم دون الالتزام",
        "تريد تقديم إيماءة لمرة واحدة",
        "لا يمكنك أن تصبح عضواً لكنك تريد المساعدة",
        "تشعر بارتباط روحي بالأخوية"
      ]
    },
    usage: {
      title: "كيف يُستخدم؟",
      description: "تساهم تبرعات التعاطف في أعمال المساعدة والتضامن. تُستخدم حيثما تكون الحاجة أكبر:",
      items: [
        "المساعدة للأشخاص في صعوبة",
        "أعمال التضامن المجتمعية",
        "تطوير محتوى مجاني جديد",
        "مشاريع خاصة وفرص",
        "صندوق احتياطي للطوارئ"
      ]
    },
    noReturn: {
      title: "لا مقابل، فقط امتنان",
      description: "لا نقدم لك شيئاً مقابل تبرعك التعاطفي، سوى امتناننا العميق. لن تتلقى نشرة إخبارية خاصة، لا دعوة حصرية، لا اعتراف عام (إلا إذا رغبت). إنه عمل خالص من الكرم واللطف."
    },
    testimonials: {
      title: "لماذا قدموا تبرعاً تعاطفياً",
      items: [
        {
          quote: "لست عضواً في الأخوية لكنني أقرأ منشوراتكم المجانية منذ عامين. أضافت لي الكثير وأردت فقط أن أقول شكراً.",
          author: "ماري ل.، متعاطفة"
        },
        {
          quote: "عملكم في الحفاظ على التقاليد الغامضة ثمين. لا أستطيع الالتزام الكامل لكنني أردت المساهمة بطريقتي.",
          author: "جان-مارك د.، صديق الأخوية"
        },
        {
          quote: "كنت عضوة قبل بضع سنوات واضطررت للتوقف لأسباب شخصية. هذا التبرع الصغير هو طريقتي للبقاء متصلة بالأخوية.",
          author: "صوفي ر.، عضوة سابقة"
        }
      ]
    },
    form: {
      title: "قدم تبرعاً تعاطفياً",
      subtitle: "الحد الأدنى: 25€. كل إيماءة مهمة ومحل تقدير.",
      amountLabel: "مبلغ تبرعك (الحد الأدنى 25€)",
      customPlaceholder: "أو أدخل مبلغاً (حد أدنى 25€)",
      optionalInfo: "المعلومات أدناه اختيارية",
      firstName: "الاسم الأول (اختياري)",
      lastName: "اسم العائلة (اختياري)",
      email: "البريد الإلكتروني (اختياري)",
      emailNote: "فقط لإيصال تأكيد",
      message: "رسالة لنا؟ (اختياري)",
      messagePlaceholder: "اترك لنا ملاحظة إذا رغبت...",
      anonymous: "أفضل البقاء مجهولاً تماماً",
      mention: "يمكنك ذكر اسمي الأول في شكركم العام",
      submit: "💛 أرسل تبرعي التعاطفي (حد أدنى 25€)",
      secure: "✓ دفع 100% آمن"
    },
    thankYou: {
      title: "من أعماق قلوبنا، شكراً",
      description: "كل تبرع تعاطفي، مهما كان المبلغ، يُستقبل بامتنان عميق. هذه الإيماءات العفوية للكرم تذكرنا أن مهمتنا تلامس القلوب وتساهم حقاً في الرفاه الروحي للعديد من الأشخاص. شكراً لوجودك.",
      gratitude: "🙏 بكل تقديرنا 🙏"
    }
  },
  common: {
    contact: {
      title: "اتصل بنا",
      headquarters: "المقر",
      france: "فرنسا",
      address: "ص.ب. 13241",
      city: "ياوندي - الكاميرون",
      contactPerson: "ريشار مبوما كوهوم",
      street: "11 شارع جوزيف رولو",
      zipCity: "78320 لا فيريير – فرنسا",
      email: "mkohomm@gmail.com"
    }
  }
},
      contact: {
        title: "اتصل بنا",
        headquarters: "المقر",
        france: "فرنسا"
      },
      common: {
        securePayment: "دفع آمن 100%",
        cancel: "إلغاء",
        confirm: "تأكيد",
        save: "حفظ",
        close: "إغلاق",
        loading: "جاري التحميل...",
        error: "خطأ",
        success: "نجاح"
      }
    }
  },

  // GERMAN (COMPLETE)
  de: {
    translation: {
      nav: {
        home: "Startseite",
        goc: "GOC",
        gocSubtitle: "Großer Orden des Kreises Bruderschaft",
        gocOrganisation: "Organisation",
        gocOrganisationDesc: "Unsere Struktur",
        gocActions: "Aktionen",
        gocActionsDesc: "Unsere Initiativen",
        gocCharity: "Wohltätigkeit",
        gocCharityDesc: "Philanthropische Werke",
        gocFraternity: "Bruderschaft",
        gocFraternityDesc: "Spirituelle Bindungen",
        formation: "Ausbildung",
        formationEsoterism: "Esoterik",
        formationEsoterismDesc: "Uralte Mysterien",
        formationPhilosophy: "Philosophie",
        formationPhilosophyDesc: "Heiliger Gedanke",
        formationPowers: "Kräfte",
        formationPowersDesc: "Innere Entwicklung",
        library: "Bibliothek",
        libraryAccessories: "Ritualzubehör",
        libraryAccessoriesDesc: "Heilige Werkzeuge",
        libraryBooks: "Bücher",
        libraryBooksDesc: "Ahnenwissen",
        libraryJournals: "Zeitschriften",
        libraryJournalsDesc: "Publikationen",
        libraryVideos: "Videos",
        libraryVideosDesc: "Lehren",
        becomeMember: "Mitglied werden",
        memberApprentice: "Lehrling-Mitglied",
        memberApprenticeDesc: "Erste Schritte",
        memberBrotherSister: "Bruder/Schwester-Mitglied",
        memberBrotherSisterDesc: "Engagement",
        memberAuditor: "Lernender Zuhörer",
        memberAuditorDesc: "Entdeckung",
        donation: "Spende",
        donationCharity: "Wohltätigkeit",
        donationCharityDesc: "Anderen helfen",
        donationSupport: "Unterstützung",
        donationSupportDesc: "Beitragen",
        donationSympathy: "Sympathie",
        donationSympathyDesc: "Teilnehmen",
        members: "Mitgliederbereich",
        login: "Anmelden",
        signup: "Registrieren",
        logout: "Abmelden",
        myAccount: "Mein Konto",
        closeMenu: "Menü schließen",
        openMenu: "Menü öffnen"
      }, enseignements: {
        meta: {
          title: "Initiatische Lehren | GOC",
          description: "Initiatische Lehren zum Verändern Ihres Lebens - Großer Orden des Kreises"
        },
        hero: {
          subtitle: "Initiatischer Pfad",
          title: "Initiatische Lehren",
          titleHighlight: "um Ihr Leben zu verändern"
        },
        introduction: {
          quote: "Unabhängig von Alter, Geschlecht oder Kultur strebt jeder danach, im Leben erfolgreich zu sein. Um dies zu erreichen, müssen Sie die Kraft Ihrer positiven Energien und Qualitäten nutzen, um sich durchzusetzen und Erfolg zu haben.",
          paragraph1: "Daher ist die beste Investition, die Sie tätigen können, wenn Sie erfolgreich sein wollen, die Nutzung Ihrer inneren Ausstrahlung - das heißt Ihrer wahren Persönlichkeit, Ihrer Stärken und Ihrer positiven Qualitäten.",
          study: "Eine kürzliche amerikanische Studie zeigt, dass der Erfolg eines Individuums zu {{percentagePersonality}} von seiner Persönlichkeit abhängt; die verbleibenden {{percentageKnowledge}} repräsentieren sein Wissen und seine Erfahrung.",
          conclusion: "{{goc}} gibt Ihnen die Schlüssel, um dies zu erreichen."
        },
        mainContent: {
          title: "Die Lehren des GOC",
          subtitle: "Philosophisches und ideologisches Wissen, äußerst mächtige Schlüssel und Techniken für den Erwerb von Kräften und die persönliche Entwicklung!"
        },
        pillars: {
          esoterisme: {
            title: "Esoterik",
            items: [
              "Der Begriff Gott",
              "Kenntnis der Religionen",
              "Unsterblichkeit",
              "Man selbst sein",
              "Das verzauberte Leben",
              "Magnetismus",
              "Humanismus",
              "Ideologien",
              "Leben, Existenz, Tod",
              "Yin und Yang",
              "Selbst und Anderes"
            ]
          },
          philosophie: {
            title: "Philosophie",
            items: [
              { title: "Gedanken", desc: "afrikanisch, chinesisch, indisch, griechisch" },
              { title: "Glaubensvorstellungen", desc: "Ursprung des Heiligen, Geschichte der Religionen" },
              { title: "Mythologien", desc: "Held mit tausend Gesichtern" },
              { title: "Weisheit", desc: "die fünf Säulen" }
            ]
          },
          pouvoirs: {
            title: "Kräfte",
            items: [
              "Sich mit nützlichen Kräften verbinden",
              "Sein inneres Wesen entdecken",
              "Seine Psyche reinigen",
              "Seinen Geist beherrschen",
              "Seine verborgenen Fähigkeiten erwecken",
              "Seine Umgebung ohne physisches Handeln beeinflussen",
              "Sich physisch regenerieren",
              "Sich eine bessere Gesundheit erwerben",
              "Seine Lebenserwartung erhöhen",
              "Sich Ziele setzen und sie erreichen",
              "Materielles Wohlbefinden erreichen",
              "Die Lebensqualität verbessern",
              "Zum spirituellen Erwachen gelangen",
              "Sich vor allen Unglücksfällen unabhängig von deren Ursprung schützen"
            ],
            more: "Und mehr..."
          }
        },
        development: {
          title: "Entwicklung der Kräfte",
          quote: "Alle diejenigen, die nach spiritueller Evolution und dem Erwerb von Kräften streben, werden Lehren erhalten, die es ihnen ermöglichen, eine magnetische und strahlende Persönlichkeit zu erwerben.",
          cta: "Beginnen Sie Ihre Initiation"
        },
        footerQuote: "Wahre Reinigung, Zugang zu den höchsten Bewusstseinszuständen und der Erwerb handelnder Kräfte.",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "Wird geladen...",
    "noSubscription": {
      "title": "Kein aktives Abonnement",
      "description": "Sie müssen ein Mitgliedschaftsplan abonnieren, um auf den Mitgliederbereich zuzugreifen",
      "button": "Abonnement wählen"
    },
    "welcome": "Willkommen",
    "member": "Mitglied",
    "active": "Aktiv",
    "contentSections": {
      "esotericTraining": {
        "title": "Esoterische Ausbildung",
        "description": "Zugang zu grundlegenden Lehren"
      },
      "philosophicalTraining": {
        "title": "Philosophische Ausbildung",
        "description": "Vertiefen Sie Ihr Wissen"
      },
      "powerDevelopment": {
        "title": "Kraftentwicklung",
        "description": "Exklusive Premium-Inhalte"
      },
      "library": {
        "title": "Bibliothek",
        "description": "Zugang zu Dokumentenressourcen"
      },
      "videos": {
        "title": "Videos",
        "description": "Exklusive Videoinhalte"
      }
    },
    "locked": {
      "requires": "Erfordert",
      "upgradeButton": "Abonnement upgraden"
    },
    "access": "Zugreifen",
    "upgradeCTA": {
      "title": "Mehr Inhalte freischalten",
      "description": "Upgraden Sie Ihr Abonnement, um auf alle exklusiven Inhalte zuzugreifen",
      "button": "Upgraden"
    },
    "roles": {
      "auditeur": {
        "name": "Zuhörer",
        "description": "Basiszugang zur Ausbildung"
      },
      "apprenti": {
        "name": "Lehrling",
        "description": "Fortgeschrittene philosophische Ausbildung"
      },
      "frere-soeur": {
        "name": "Bruder/Schwester",
        "description": "Vollständiger Zugang zu allen Inhalten"
      }
    }
  },goc: {
  actions: {
    title: "GOC-Aktionen",
    subtitle: "Unsere Aktionen in der Welt",
    items: {
      seminars: { title: "Initiatorische Seminare", description: "Organisation von Seminaren und spirituellen Retreats, die es den Mitgliedern ermöglichen, ihre esoterische Reise zu vertiefen und transformative initiatorische Erfahrungen zu machen." },
      conferences: { title: "Öffentliche Konferenzen", description: "Verbreitung esoterischen und philosophischen Wissens durch für die Öffentlichkeit zugängliche Konferenzen zu spirituellen, mystischen und metaphysischen Themen." },
      publications: { title: "Publikationen", description: "Herausgabe von Büchern, Zeitschriften und pädagogischen Dokumenten, die die traditionellen Lehren des westlichen und östlichen Esoterismus bewahren und weitergeben." },
      rituals: { title: "Kollektive Rituale", description: "Feier von saisonalen und initiatorischen Ritualen, die es den Mitgliedern ermöglichen, sich mit kosmischen Kräften zu verbinden und das Egregor des Ordens zu stärken." }
    },
    program: {
      title: "Jahresprogramm",
      seasons: {
        spring: { name: "Frühling", activity: "Äquinoktium-Rituale, Seminar für spirituelle Erneuerung" },
        summer: { name: "Sommer", activity: "Sommerretreat, Sonnenwendfeier, Initiationen" },
        autumn: { name: "Herbst", activity: "Philosophische Seminare, spirituelle Ernterituale" },
        winter: { name: "Winter", activity: "Wintersonnenwende, tiefe Meditationen, geheime Lehren" }
      }
    }
  },
  charity: {
    title: "Wohltätigkeit & Soziale Werke",
    serviceTitle: "Selbstloser Dienst",
    serviceDesc: "Im Herzen unserer esoterischen Lehre liegt das Prinzip des selbstlosen Dienstes. Wahre Weisheit wird nicht nur durch Studium erworben, sondern auch durch mitfühlendes Handeln gegenüber unseren Mitmenschen.",
    works: {
      spiritual: { title: "Spirituelle Unterstützung", description: "Kostenlose spirituelle Unterstützung für Menschen in moralischer oder existenzieller Not. Unsere ausgebildeten Mitglieder bieten Zuhören, Rat und energetische Unterstützung." },
      material: { title: "Materielle Hilfe", description: "Verteilung materieller Hilfe an bedürftige Familien: Nahrung, Kleidung, gelegentliche finanzielle Unterstützung für Notsituationen." },
      education: { title: "Kostenlose Bildung", description: "Kostenlose Kurse in Philosophie, Meditation und persönlicher Entwicklung für Menschen, die keinen Zugang zu bezahlten Lehren haben." },
      energy: { title: "Energieheilung", description: "Sitzungen für Energiepflege und ganzheitliche Heilung, kostenlos angeboten an Menschen, die an Krankheiten oder Ungleichgewichten leiden." }
    },
    participate: { title: "Beteiligen Sie sich an unseren Werken", description: "Jedes Mitglied des GOC widmet Zeit und Ressourcen wohltätigen Werken. Schließen Sie sich uns in dieser Mission von Dienst und Mitgefühl an.", donate: "Spenden", volunteer: "Freiwilliger werden" }
  },
  fraternity: {
    title: "Universelle Bruderschaft",
    ourFraternity: "Unsere Bruderschaft",
    description: "Die Bruderschaft des Großen Ordens des Kreises ist eine Gemeinschaft von Frauen und Männern, ohne Ausnahme, aller Rassen, aller Ethnien, aller Länder und aller Nationalitäten, die freiwillig und ohne jegliche Einschränkung jeglicher Art, jeglicher Natur, zustimmen, MITGLIED ZU WERDEN und sich verpflichten, die REGEL in XII Prinzipien, die das LEBEN der Organisation des Großen Ordens des Kreises regiert, streng zu RESPEKTIEREN.",
    transcendentLink: "Eine Bindung, die transzendiert",
    transcendentDesc: "Die Bruderschaft innerhalb des Großen Ordens des Kreises ist nicht bloße Kameradschaft, sondern eine tiefe spirituelle Bindung, die Seelen in ihrem Streben nach Licht und Wissen vereint.",
    features: {
      spiritualHelp: { title: "Spirituelle gegenseitige Hilfe", description: "Brüder und Schwestern helfen sich gegenseitig auf ihrer Einweihungsreise" },
      knowledge: { title: "Wissensteilung", description: "Übertragung esoterischen Wissens zwischen eingeweihten Mitgliedern" },
      mutualSupport: { title: "Gegenseitige Unterstützung", description: "Präsenz und Begleitung in den Prüfungen des Lebens" },
      rituals: { title: "Brüderliche Rituale", description: "Zeremonien, die die Bindungen zwischen den Mitgliedern des Ordens stärken" },
      network: { title: "Internationales Netzwerk", description: "Verbindungen mit Mitgliedern auf der ganzen Welt" },
      meditation: { title: "Kollektive Meditationen", description: "Gruppen-spirituelle Praktiken zur Verstärkung der Energie" }
    },
    commanderies: {
      title: "Brüderliche Kommandanturen",
      description: "Jede Region hat ihre Kommandantur, einen heiligen Ort, an dem sich die Mitglieder versammeln, um Bruderschaft zu pflegen, Rituale zu praktizieren und Lehren zu teilen.",
      activities: { meditation: "Monatliche Meditation- und Studientreffen", celebrations: "Sonnenwenden- und Tagundnachtgleichen-Feiern", meals: "Brüderliche Mahlzeiten und Momente der Geselligkeit", library: "Gemeinsame Bibliothek esoterischer Werke" }
    },
    join: { title: "Treten Sie unserer Bruderschaft bei", description: "Werden Sie Mitglied des Großen Ordens des Kreises und entdecken Sie die Tiefe authentischer Bruderschaft, die auf Liebe, Weisheit und Dienst basiert.", button: "Mehr erfahren" }
  }
},
formation: {
  esoterism: {
    title: "Esoterik-Ausbildung",
    subtitle: "Okkulte Wissenschaften",
    intro: "Esoterik bezeichnet den Körper geheimen Wissens und spiritueller Praktiken, die seit Urzeiten von Meister zu Schüler weitergegeben werden. Unsere umfassende Ausbildung führt Sie in die verborgenen Mysterien des Universums und die Gesetze ein, die die feinstoffliche Ebene regieren.",
    sections: {
      symbolism: {
        title: "Heilige Symbolik",
        items: [
          "Interpretation hermetischer Symbole",
          "Heilige Geometrie und mystische Zahlen",
          "Magische Alphabete und Sigillen"
        ]
      },
      alchemy: {
        title: "Spirituelle Alchemie",
        items: [
          "Großes Werk der Alchemie",
          "Innere Transmutation",
          "Stein der Weisen und Lebenselixier"
        ]
      },
      kabbalah: {
        title: "Kabbalah & Baum des Lebens",
        items: [
          "Studium der 10 Sephiroth",
          "Pfade des Baumes des Lebens",
          "Gematria und hebräische Numerologie"
        ]
      },
      tarot: {
        title: "Tarot & Weissagung",
        items: [
          "Große und kleine Arkana",
          "Traditionelle Weissagungskünste",
          "Entwicklung der Intuition"
        ]
      }
    },
    program: {
      title: "Ausbildungsprogramm",
      level1: {
        title: "Stufe 1 - Lehrling (12 Monate)",
        description: "Grundlagen der Esoterik, Symbolik, Meditation, erste Rituale"
      },
      level2: {
        title: "Stufe 2 - Gefährte (18 Monate)",
        description: "Alchemie, Kabbalah, esoterische Astrologie, fortgeschrittene Energiearbeit"
      },
      level3: {
        title: "Stufe 3 - Meister (24 Monate)",
        description: "Geheime Lehren, hohe Magie, Einweihung in tiefe Mysterien"
      }
    },
    signup: "Für Ausbildung anmelden"
  },
  philosophy: {
    title: "Philosophische Ausbildung",
    subtitle: "Esoterische Philosophie",
    intro: "Esoterische Philosophie erforscht die grundlegenden Fragen der Existenz: Wer sind wir, woher kommen wir, wohin gehen wir? Unser Unterricht integriert die großen östlichen und westlichen philosophischen Traditionen in eine einzigartige Synthese.",
    traditions: {
      hermetic: {
        title: "Hermetische Philosophie",
        description: "Studium der Sieben Hermetischen Prinzipien: Mentalismus, Korrespondenz, Vibration, Polarität, Rhythmus, Ursache und Wirkung, Geschlecht. Praktische Anwendung dieser universellen Gesetze."
      },
      neoplatonic: {
        title: "Neuplatonismus & Gnosis",
        description: "Lehren von Platon, Plotin und den Gnostikern. Die Doktrin des Einen, die Emanation der Welten, der Aufstieg der Seele zu ihrer göttlichen Quelle."
      },
      eastern: {
        title: "Östliche Weisheit",
        description: "Vedanta, Buddhismus, Taoismus: Erforschung östlicher Philosophien und ihrer kontemplativen Praktiken. Nicht-Dualität, Leerheit, Wu Wei."
      },
      modern: {
        title: "Moderne Metaphysik",
        description: "Synthese zwischen Wissenschaft und Spiritualität. Quantenphysik und Bewusstsein, neue Paradigmen der Realität."
      }
    },
    themes: {
      title: "Studierte Themen",
      items: [
        "Natur von Bewusstsein und Seele",
        "Kosmogonie und Schöpfung der Welt",
        "Karma, Reinkarnation und Schicksal",
        "Freier Wille und Determinismus",
        "Spirituelle Ethik und esoterische Moral"
      ]
    },
    methods: {
      title: "Pädagogische Methoden",
      items: [
        "Theoretische Kurse und Seminare",
        "Sokratische Dialoge und Debatten",
        "Geführte philosophische Meditationen",
        "Kommentierte Lesungen heiliger Texte",
        "Schriftliche Arbeiten und Dissertationen"
      ]
    },
    continuous: {
      title: "Kontinuierliche Ausbildung",
      description: "Die philosophische Ausbildung erstreckt sich über 3 Jahre mit monatlichen Kursen, vierteljährlichen Seminaren und Zugang zu unserer esoterischen Bibliothek.",
      button: "Detailliertes Programm"
    }
  },
  powers: {
    title: "Entwicklung der Kräfte",
    subtitle: "Höhere Fähigkeiten",
    intro: "Jenseits gewöhnlicher Fähigkeiten besitzen Menschen latente Fähigkeiten, die sie durch spirituelles Training entwickeln können. Unsere Ausbildung führt Sie in das Erwachen dieser psychischen und spirituellen Kräfte.",
    warning: {
      title: "⚠️ Wichtige Warnung",
      description: "Die Entwicklung von Kräften erfordert strenge moralische und spirituelle Vorbereitung. Diese Lehren werden nur an eingeweihte Mitglieder weitergegeben, die Reife und tadellosen Charakter gezeigt haben.",
      ethics: {
        title: "⚠️ Wichtige Warnung",
        description: "Die Entwicklung von Kräften erfordert strenge moralische und spirituelle Vorbereitung. Diese Lehren werden nur an eingeweihte Mitglieder weitergegeben, die Reife und tadelllose Ethik bewiesen haben."
      },
      abilities: {
        clairvoyance: {
          title: "Hellsehen",
          description: "Entwicklung des subtilen Sehvermögens zur Wahrnehmung energetischer Ebenen, Auren und spiritueller Entitäten.",
          items: ["Aktivierung des dritten Auges", "Ätherische und astrale Vision", "Aura-Lesen"]
        },
        telepathy: {
          title: "Telepathie",
          description: "Direkte mentale Kommunikation, Übertragung und Empfang von Gedanken, Verbindung mit entfernten Bewusstseinen.",
          items: ["Gedankenübertragung", "Intuitive Empfang", "Kommunikation mit Führern"]
        },
        magnetism: {
          title: "Magnetismus",
          description: "Beherrschung der Lebensenergie zum Heilen, Harmonisieren und Transformieren. Techniken des Heilmagnetismus und der Handauflegung.",
          items: ["Energieakkumulation", "Energetische Heilung", "Chakra-Harmonisierung"]
        },
        astral: {
          title: "Astrale Projektion",
          description: "Ausstieg aus dem physischen Körper und Reisen in feinstofflichen Ebenen. Bewusste Erkundung spiritueller Dimensionen.",
          items: ["Freiwillige Entkörperung", "Bewusste Astralreise", "Erkundung höherer Ebenen"]
        },
        psychometry: {
          title: "Psychometrie",
          description: "Lesen von in Objekten, Orten und Personen eingedrungenen Energien. Fähigkeit, energetische Geschichte zu erfassen.",
          items: ["Objektlesung", "Erinnerungswahrnehmung", "Fortgeschrittene Psychometrie"]
        },
        meditation: {
          title: "Tiefe Meditation",
          description: "Veränderte Bewusstseinszustände, Samadhi, mystische Vereinigung. Zugang zu den transzendenten Dimensionen des Seins.",
          items: ["Tiefe meditative Zustände", "Mystische Erfahrungen", "Vereinigung mit dem Göttlichen"]
        }
      },
      program: {
        title: "Progressives Programm",
        subtitle: "Das Erwachen der Kräfte folgt einem graduellen und sicheren Prozess über mehrere Jahre",
        year1: {
          title: "Jahr 1",
          description: "Vorbereitung & Reinigung"
        },
        year2: {
          title: "Jahr 2",
          description: "Aktivierung & Entwicklung"
        },
        year3: {
          title: "Jahr 3+",
          description: "Meisterschaft & Übertragung"
        }
      }
    }
  }
},
      library: {
  intro: {
    quote: "Materie recycelt sich, der Geist schöpft neue Kraft…",
    description: "Ein Ort des Wissens, die GOC-Bibliothek stellt Mitgliedern, verbundenen Zuhörern und Sympathisanten ihre Publikation \"Mâat\", Videos und Broschüren ihrer Lehren, Bücher über Philosophie, Weisheit und geheimes Wissen zur Verfügung. Sowie Mitgliedsoutfits und andere Accessoires für Rituale.",
    orderForm: "Bestellformular"
  },
  accessories: {
    description: "Ritualzubehör sind heilige Werkzeuge, die in esoterischen Praktiken und Einweihungszeremonien verwendet werden. Jedes Objekt wird nach hermetischen Traditionen geweiht und energetisch aufgeladen.",
    items: {
      candles: { title: "Ritualkerzen", description: "Geweihte Kerzen in verschiedenen Farben für spezifische Rituale: weiß (Reinigung), gold (Spiritualität), rot (Liebe), grün (Wohlstand).", availability: "Verfügbar für Mitglieder" },
      crystals: { title: "Kristalle & Steine", description: "Sammlung gereinigter und programmierter Kristalle: Quarz, Amethyst, Citrin, Obsidian. Jeder Stein hat seine spezifischen energetischen Eigenschaften.", availability: "Verfügbar für Mitglieder" },
      incense: { title: "Heiliger Weihrauch", description: "Traditioneller Weihrauch zur Reinigung und Schwingungserhöhung: Olibanum, Myrrhe, Benzoe, Sandelholz. Alte Tempelrezepte.", availability: "Verfügbar für Mitglieder" },
      sword: { title: "Ritual-Schwert", description: "Symbolisches Schwert zum Zeichnen von Schutzkreisen und Lenken von Energie während Rituale. Geschmiedet nach hermetischen Traditionen.", availability: "Reserviert für Eingeweihte" },
      chalice: { title: "Geweihter Kelch", description: "Heiliger Kelch, der das Wasserelement und das weibliche Prinzip repräsentiert. Verwendet in Opfer- und spirituellen Gemeinschaftsritualen.", availability: "Reserviert für Eingeweihte" },
      malas: { title: "Rosenkränze & Malas", description: "Meditationsrosenkränze aus heiligem Holz, Halbedelsteinen oder Rudraksha-Samen. 108 Perlen für Japa-Praxis (Mantra-Wiederholung).", availability: "Verfügbar für Mitglieder" },
      feathers: { title: "Ritual-Federn", description: "Federn von heiligen Vögeln zur Verteilung von Weihrauch und Reinigung des Ritualraums. Indianische und schamanische Tradition.", availability: "Verfügbar für Mitglieder" },
      talismans: { title: "Pentakel & Talismane", description: "Pentakel nach solomonischen Magietraditionen graviert. Personalisierte Talismane entsprechend Ihrem astrologischen Diagramm geladen.", availability: "Auf Bestellung" },
      robes: { title: "Gewänder & Kleidung", description: "Zeremonielle Gewänder, Umhänge und Ritualkleidung in den Farben des Ordens. Aus Naturstoffen nach Tradition gefertigt.", availability: "Reserviert für Mitglieder" }
    },
    cta: { title: "Zubehör bestellen", description: "Ritualzubehör ist für GOC-Mitglieder zum Kauf verfügbar. Jedes Objekt wird vor der Lieferung individuell geweiht.", button: "Zum Shop", note: "* Anmeldung erforderlich - Reserviert für eingeweihte Mitglieder" }
  },journals: {
    title: "Zeitschriften & Publikationen",
    intro: "Der Große Orden des Kreises veröffentlicht regelmäßig Zeitschriften, Bulletins und Revuen für die Weiterbildung seiner Mitglieder und die Verbreitung esoterischen Wissens.",
    mainJournal: {
      title: "Das Licht des Kreises",
      subtitle: "Offizielle Zeitschrift des GOC - Vierteljährliche Veröffentlichung",
      summary: "Inhalt:",
      format: "Format:",
      items: [
        "Vertiefte esoterische Lehren",
        "Saisonale Rituale und Praktiken",
        "Zeugnisse von Mitgliedern",
        "Nachrichten des Ordens"
      ],
      formatItems: [
        "40-60 illustrierte Seiten",
        "Papier- und digitale Version",
        "Vollständige Archive seit 1985",
        "Reserviert für Mitglieder"
      ]
    },
    publications: {
      bulletin: {
        title: "Bulletin der Bruderschaft",
        description: "Monatliches Bulletin zur Aufrechterhaltung der Bindung zwischen den Mitgliedern. Informationen über bevorstehende Treffen, Seminare und Veranstaltungen.",
        frequency: "Monatlich",
        pages: "12-16 Seiten",
        access: "Nur Mitglieder"
      },
      cahiers: {
        title: "Hefte für Hermetische Studien",
        description: "Vertiefte akademische Revue über spezifische esoterische Themen: Alchemie, Kabbalah, Astrologie, Symbolismus, mystische Philosophie.",
        frequency: "Zweimonatlich",
        pages: "60-80 Seiten",
        access: "Eingeweihte Mitglieder"
      },
      lettres: {
        title: "Briefe des Großmeisters",
        description: "Direkte Lehren des Großmeisters des Ordens, die tiefes Wissen und spirituelle Orientierung für fortgeschrittene Mitglieder übermitteln.",
        frequency: "Vierteljährlich",
        pages: "8-12 Seiten",
        access: "Eingeweihte 2. Grades"
      },
      almanach: {
        title: "Esoterischer Almanach",
        description: "Jährliche Veröffentlichung mit wichtigen Daten, Mondphasen, Planetenstellungen, Ritualkalender und empfohlenen Praktiken.",
        frequency: "Jährlich",
        pages: "120 Seiten",
        access: "Offen für alle"
      }
    },
    archives: {
      title: "Historische Archive",
      description: "Greifen Sie auf die vollständigen Archive unserer Veröffentlichungen seit der Gründung des Ordens zu. Jahrzehnte esoterischen Wissens zum Greifen nah.",
      stats: {
        journal: "Ausgaben von Das Licht des Kreises",
        bulletins: "Monatliche Bulletins",
        years: "Jahre Archive"
      }
    },
    cta: {
      title: "Zugriff auf Publikationen",
      description: "Werden Sie Mitglied des Großen Ordens des Kreises, um unsere Publikationen zu erhalten und auf vollständige Archive zuzugreifen.",
      becomeMember: "Mitglied werden",
      consultArchives: "Archive konsultieren"
    }
  },
  books: {
    title: "Esoterische Bibliothek",
    intro: "Unsere Bibliothek enthält eine außergewöhnliche Sammlung esoterischer, hermetischer und philosophischer Werke. Einige seltene Texte sind für eingeweihte Mitglieder reserviert.",
    sections: {
      alchemy: "Alchemie & Hermetismus",
      kabbalah: "Kabbalah & Jüdische Mystik",
      magic: "Zeremonielle Magie",
      philosophy: "Esoterische Philosophie",
      tarot: "Tarot & Symbolismus"
    },
    access: {
      open: "Offen für alle",
      members: "Reserviert für Mitglieder",
      initiates: "Reserviert für Eingeweihte"
    },
    onSite: {
      title: "Vor-Ort-Beratung",
      description: "Mitglieder können die gesamte Bibliothek in unseren Räumlichkeiten konsultieren. Studienatmosphäre, die zur Meditation einlädt.",
      note: "Nach Vereinbarung für Mitglieder verfügbar"
    },
    digital: {
      title: "Digitale Bibliothek",
      description: "Zugriff auf unsere digitale Bibliothek mit Hunderten von Büchern im PDF-Format, rund um die Uhr verfügbar über Ihren Mitgliederbereich.",
      note: "Reserviert für aktive Mitglieder"
    }
  },
  videos: {
    title: "Esoterische Videothek",
    intro: "Unsere Videothek bietet Konferenzen, gefilmte Rituale, geführte Meditationen und Lehren des Großmeisters. Exklusiver Inhalt für GOC-Mitglieder.",
    categories: {
      conferences: {
        title: "Konferenzen",
        description: "Meisterhafte Konferenzen über Esoterik, Alchemie, Kabbalah und hermetische Philosophie von unseren eingeweihten Meistern.",
        count: "45+ Videos",
        access: "Mitgliederzugang"
      },
      meditations: {
        title: "Geführte Meditationen",
        description: "Geführte Meditationssitzungen für spirituelle Entwicklung, Chakra-Aktivierung und Verbindung mit dem Göttlichen.",
        count: "30+ Videos",
        access: "Offener Zugang"
      },
      rituals: {
        title: "Gefilmte Rituale",
        description: "Aufnahmen von Einweihungsritualen, saisonalen Zeremonien und esoterischen Praktiken, die im Orden übermittelt werden.",
        count: "25+ Videos",
        access: "Nur Eingeweihte"
      },
      courses: {
        title: "Theoretische Kurse",
        description: "Vollständige Ausbildungskurse über Esoterik, Okkultwissenschaften, Philosophie und heilige Symbolik.",
        count: "60+ Videos",
        access: "Mitgliederzugang"
      },
      energy: {
        title: "Energiepraktiken",
        description: "Praktische Übungen zur Entwicklung psychischer Fähigkeiten, Energiearbeit und Magnetismus.",
        count: "35+ Videos",
        access: "Mitgliederzugang"
      },
      secret: {
        title: "Geheime Lehren",
        description: "Reservierte Lehren, die vom Großmeister über die tiefen Mysterien der hermetischen Tradition übermittelt werden.",
        count: "20+ Videos",
        access: "Nur Meister"
      }
    },
    recent: {
      title: "Neueste Veröffentlichungen",
      videos: [
        {
          title: "Einführung in die praktische Kabbalah",
          description: "Konferenz des Großmeisters über die Grundlagen der Kabbalah und ihre Anwendung im täglichen Leben.",
          duration: "1h 25min",
          date: "Januar 2026",
          access: "Mitglieder"
        },
        {
          title: "Vollmond-Meditation",
          description: "Spezielle geführte Meditation, um sich mit lunaren Energien zu verbinden und Erleuchtung zu empfangen.",
          duration: "45min",
          date: "Januar 2026",
          access: "Offener Zugang"
        },
        {
          title: "Wintersonnenwende-Ritual 2025",
          description: "Vollständige Aufnahme des zeremoniellen Rituals, das während der Wintersonnenwende in der zentralen Kommandantur gefeiert wurde.",
          duration: "2h 10min",
          date: "Dezember 2025",
          access: "Eingeweihte"
        }
      ]
    },
    stats: {
      title: "Unsere Videosammlung",
      total: "Videos insgesamt",
      hours: "Exklusiver Inhalt",
      quality: "HD & 4K Qualität",
      access: "Unbegrenzter Zugang"
    },
    cta: {
      title: "Zugang zur Videothek",
      description: "Werden Sie Mitglied, um auf unsere gesamte Videosammlung zuzugreifen und jeden Monat von neuem Inhalt zu profitieren.",
      button: "Jetzt anmelden"
    }
  }
},
      home: {
        title: "GROSSER ORDEN DES KREISES BRUDERSCHAFT",
        motto: "Wo der Baum des Wissens steht, liegt das Glück",
        subtitle: {
          line1: "Esoterische & philosophische Ausbildung…",
          line2: "Spirituelle Bruderschaft."
        },
        masterDestiny: "Erreichen Sie die totale Meisterschaft über Ihr Schicksal…",
        benefits: {
          connectForces: "Verbindung mit nützlichen Kräften",
          innerBeing: "Entdecken Sie Ihr inneres Wesen",
          cleansePsyche: "Reinigen Sie Ihre Psyche",
          masterMind: "Beherrschen Sie Ihren Geist",
          awakenPowers: "Erwecken Sie verborgene Fähigkeiten",
          influence: "Beeinflussen Sie Ihre Umgebung ohne physisches Handeln",
          regenerate: "Regenerieren Sie sich physisch",
          longevity: "Erhöhen Sie die Lebenserwartung",
          achieveGoals: "Setzen Sie Ziele und erreichen Sie sie",
          materialWellbeing: "Zugang zum materiellen Wohlbefinden",
          qualityOfLife: "Verbessern Sie die Lebensqualität",
          spiritualAwakening: "Zugang zum spirituellen Erwachen",
          protection: "Schutz vor allem Unglück unabhängig von der Ursache",
          betterHealth: "Erwerben Sie bessere Gesundheit"
        },
        carousel: {
          seminar: "Seminar",
          prieure: "Priorat",
          group: "Mitgliedergruppe",
          symbols: "Symbole"
        },
        links: {
          formation: "Unsere Ausbildung",
          fraternity: "Unsere Bruderschaft",
          seminars: "Unsere Seminare",
          actions: "Unsere Aktionen"
        },
        vision: {
          title: "Unsere Vision",
          goc: "Großer Orden des Kreises",
          secrets: "Geheimes Wissen, Spirituelle und einweihungsweisheit,",
          awakening: "Erwachen der Kräfte, Persönliche Kraft, Wohlbefinden-Werkzeuge…",
          changeLife: "Ändern Sie Ihr Leben und erreichen Sie totale Meisterschaft darüber!",
          description: "Durch esoterische Ausbildung, die Ihnen Zugang zu geheimem Wissen und spiritueller und einweihungsweisheit gibt, zum Erwachen der Kräfte, persönlicher Kraft und Wohlbefinden-Werkzeugen…",
          quote: "« Der Mensch wurde ursprünglich als rein spirituelles Wesen konzipiert, ausgehend vom Göttlichen Prinzip 'im Bild und Gleichnis des Großen Schöpfergeistes'. Während seines Abstiegs in die Materie wird er von einem Zwillingsimpuls bewegt: Anziehung-Abstoßung, Verlangen-Ablehnung. Bekleidet mit einem vergänglichen Körper ist er nun getrennt von der Einheit des Prinzips. Seine duale Natur – materiell und spirituell – unterwirft ihn einem Konflikt zwischen spirituellen Bestrebungen und den Ketten der Materialität. Seitdem vollbringt er aus Stolz Taten, die von diesen Impulsen beherrscht werden. Aber der Mensch des Verlangens sucht seine Wiederintegration in seinen ursprünglichen Zustand und die Wiedererlangung seines Leibes der Herrlichkeit.",
          mission: "Der Zweck des GOC ist es, den Eingeweihten über seine Natur, seinen Ursprung und sein Ziel aufzuklären. Er oder sie erhält im Wesentlichen praktische und einweihungslehren, die sich mit Esoterik, Spiritualität, Metaphysik, den Geheimnissen der Yogis, Philosophie und persönlicher Entwicklung befassen; was eine wahre Reinigung ermöglicht, den Zugang zu den höchsten Bewusstseinszuständen und den Erwerb handelnder Kräfte."
        },
        nav: {
          becomeMember: "Mitglied werden",
          videos: "Videos",
          donation: "Spende",
          commanderies: "Kommandanturen",
          contacts: "Kontakte",
          contact: "Kontakt"
        },
        image: {
          alt: "Großer Orden des Kreises",
          caption: "Uralte Weisheit für den modernen Menschen"
        },
        footer: {
          copyright: "© 2026 Großer Orden des Kreises - Alle Rechte vorbehalten",
          sapientia: "Weisheit",
          fraternitas: "Bruderschaft",
          spiritus: "Geist"
        }
      },
      membership: {
        title: "Treten Sie unserem Orden bei",
        subtitle: "Wählen Sie das Engagement, das zu Ihrer spirituellen und philosophischen Reise passt",
        adhesion: "Mitgliedschaft",
        formation: "Ausbildung",
        oneTime: "einmalig",
        perYear: "pro Jahr",
        firstYear: "Erstes Jahr",
        renewal: "Erneuerung",
        becomeMember: "Mitglied werden",
        renew: "Erneuern",
        currentSubscription: "Aktuelles Abonnement",
        learnMore: "Mehr erfahren",
        mostPopular: "Am beliebtesten",
        active: "Aktiv",
        expired: "Abgelaufen",
        current: "Aktuell",
        activeSubscription: "Aktives Abonnement",
        adhesionRequired: "Mitgliedschaft erforderlich",
        buyTrimester: "1 Quartal kaufen",
        buyCourse: "1 Kurs kaufen",
        processing: "Verarbeitung...",
        signupAndBuy: "Registrieren und kaufen",
        pricePerTrimester: "Preis pro Quartal",
        pricePerCourse: "Preis pro Kurs",
        formationAccessible: "Ausbildung ist nur für aktive Mitglieder des Ordens zugänglich.",
        cotisation: "Jahresbeitrag",
        error: "Ein Fehler ist aufgetreten",
        whyJoin: "Warum Mitglied werden?",
        whyJoinDesc: "Durch den Beitritt zu unserem Orden erhalten Sie Zugang zu einer Gemeinschaft, die sich spirituellem Erwachen, esoterischem Wissen und brüderlicher gegenseitiger Hilfe widmet.",
        benefit1: "Zugang zu exklusiven Lehren",
        benefit2: "Teilnahme an Veranstaltungen und Seminaren",
        benefit3: "Netzwerk der Bruderschaft und gegenseitigen Hilfe",
        benefit4: "Bibliothek spiritueller Ressourcen"
      },
      roles: {
        auditeur: {
          name: "Lernender Zuhörer",
          description: "Grundlegender Zugang zu Lehren",
          formationTitle: "Ausbildung für Lernende Zuhörer",
          formationDesc: "Individuelle Kurse à la carte",
          feature1: "Flexibilität beim Kauf in Ihrem eigenen Tempo",
          feature2: "Sofortiger Zugang zum gekauften Kurs",
          feature3: "Reicher und detaillierter Inhalt",
          totalCourses: "Insgesamt 40 Kurse verfügbar",
          totalCost: "Gesamtkosten",
          totalDuration: "Vollständige Ausbildung über 2 Jahre"
        },
        apprenti: {
          name: "Lehrling-Mitglied",
          description: "Vollständige Ausbildung",
          formationTitle: "Lehrling-Ausbildung",
          formationDesc: "Strukturierte vierteljährliche Ausbildung",
          feature1: "Vertiefte Lehren jedes Quartal",
          feature2: "Persönliche Betreuung Ihres Fortschritts",
          feature3: "Zugang zu exklusiven Ressourcen",
          totalCost: "Gesamtkosten der Ausbildung",
          totalDuration: "Gesamtdauer: 8 Quartale (2 Jahre)"
        },
        "frere-soeur": {
          name: "Bruder/Schwester-Mitglied",
          description: "Vollständiger Premium-Zugang",
          feature1: "Alle Inhalte und Ausbildungen",
          feature2: "Individuelle Mentoring",
          feature3: "24/7-Prioritätsunterstützung",
          feature4: "Exklusive Veranstaltungen",
          feature5: "Internationales Netzwerk"
        }
      },
      organisation: {
        motto: "Wo der Baum des Wissens steht, liegt das Glück",
        title: "Organisation des GOC",
        goc: "GOC",
        structure: "Der Große Orden des Kreises ist strukturiert um:",
        pillars: "Säulen",
        grades: "Grade",
        rule: "Regel",
        pillarsTitle: "Säulen",
        pillar1: {
          title: "I – Einweihung",
          item1: "Ausbildung",
          item2: "Verbesserung"
        },
        pillar2: {
          title: "II – Ämter",
          item1: "Riten",
          item2: "Zeremonien"
        },
        pillar3: {
          title: "III – Wohltätigkeit",
          item1: "Wohltätige Werke",
          item2: "Spenden"
        },
        pillar4: {
          title: "IV – Gegenseitigkeit",
          item1: "Solidarität der Eingeweihten",
          item2: "Finanzielle Unterstützung"
        },
        rulesTitle: "Regeln des GOC",
        rules: {
          "1": "Glaube an den Großen Göttlichen Geist",
          "2": "Einweihungsbruderschaft und Solidaritätspflicht",
          "3": "Ideal von Liebe, Wahrheit, Gerechtigkeit und Frieden",
          "4": "Verbesserung der Mitglieder und der Menschheit",
          "5": "Praxis von Ritual und Symbolik",
          "6": "Respekt für Meinungen und Überzeugungen",
          "7": "Eid auf Heilige Symbole",
          "8": "Versammlung und Arbeit in Kommandanturen",
          "9": "Ehrbarkeit, Loyalität und Diskretion",
          "10": "Liebe zum Vaterland, Respekt vor Gesetzen, Respekt vor den Verfassungsorganen",
          "11": "Weises und würdevolles Verhalten",
          "12": "Gegenseitige Hilfe und Schutz"
        },
        structureTitle: "Organisation des GOC",
        level1: {
          title: "Ebene 1: Der Kreis der Brüder",
          desc: "Der KC bringt eine Gemeinschaft von bis zu 770 Brüdern zusammen"
        },
        level2: {
          title: "Ebene 2: Der Bezirk",
          desc: "Der Bezirk vereint alle Kreise der Brüder auf Departementsebene"
        },
        level3: {
          title: "Ebene 3: Die Kommandantur",
          desc: "Die Kommandantur vereint alle Bezirke auf Regionalebene"
        },
        level4: {
          title: "Ebene 4: Das Gouvernement",
          desc: "Das Gouvernement vereint alle Kommandanturen auf Länderebene"
        },
        level5: {
          title: "Ebene 5: Der Oberste Primat",
          desc: "Der Oberste Primat ist die höchste Instanz des GOC"
        },
        gradesTitle: "Grade",
        grade: {
          "1": "Lehrling",
          "2": "Gefährte",
          "3": "Offizier",
          "4": "Ehrwürdiger",
          "5": "Verehrungswürdiger",
          "6": "Meister",
          "7": "Großmeister"
        },
        administration: "Verwaltung",
        admin1: {
          title: "1) Der Kreis",
          item1: "Die Versammlung der Brüder",
          item2: "Der Verehrungswürdige",
          item3: "Das Sekretariat",
          item4: "Die Schatzkammer",
          item5: "Die Verwaltung",
          item6: "Das Officium"
        },
        admin2: {
          title: "2) Der Bezirk",
          item1: "Der Bezirksrat",
          item2: "Der Meister",
          item3: "Das Sekretariat",
          item4: "Die Schatzkammer",
          item5: "Die Verwaltung",
          item6: "Das Officium"
        },
        admin3: {
          title: "3) Die Kommandantur",
          item1: "Der Kommandanturrat",
          item2: "Der Kommandant",
          item3: "Das Sekretariat",
          item4: "Die Schatzkammer",
          item5: "Die Verwaltung",
          item6: "Das Officium"
        },
        admin4: {
          title: "4) Das Gouvernement/Legat",
          item1: "Der Rat",
          item2: "Der Großmeister",
          item3: "Das Sekretariat",
          item4: "Die Schatzkammer",
          item5: "Die Verwaltung",
          item6: "Das Officium"
        },
        globalGovernance: "Globale Governance des GOC",
        global1: {
          title: "Der Kongress"
        },
        global2: {
          title: "Der Oberste Rat",
          desc: "(Verwaltungsrat des GOC)"
        },
        global3: {
          title: "Der Primat des GOC"
        },
        global4: {
          title: "Generalsekretariat",
          desc: "(Verwaltungsorgan des GOC)"
        },
        global5: {
          title: "Zentralschatzkammer"
        },
        join: "Dem Orden beitreten"
      },
      fraternity: {
        motto: "Wo der Baum des Wissens steht, liegt das Glück",
        title: "Universelle Bruderschaft",
        ourFraternity: "Unsere Bruderschaft",
        description: "Die Bruderschaft des Großen Ordens des Kreises ist eine Gemeinschaft von Frauen und Männern, ohne Ausnahme, aller Rassen, aller Ethnien, aller Länder und aller Nationalitäten, die freiwillig und ohne jegliche Einschränkung jeglicher Art, jeglicher Natur, zustimmen, MITGLIED ZU WERDEN und sich verpflichten, die REGEL in XII Prinzipien, die das LEBEN der Organisation des Großen Ordens des Kreises regiert, streng zu RESPEKTIEREN.",
        transcendentLink: "Eine Bindung, die transzendiert",
        transcendentDesc: "Die Bruderschaft innerhalb des Großen Ordens des Kreises ist nicht bloße Kameradschaft, sondern eine tiefe spirituelle Bindung, die Seelen in ihrem Streben nach Licht und Wissen vereint.",
        features: {
          spiritualHelp: "Spirituelle gegenseitige Hilfe",
          spiritualHelpDesc: "Brüder und Schwestern helfen sich gegenseitig auf ihrer Einweihungsreise",
          knowledge: "Wissensteilung",
          knowledgeDesc: "Übertragung esoterischen Wissens zwischen eingeweihten Mitgliedern",
          mutualSupport: "Gegenseitige Unterstützung",
          mutualSupportDesc: "Präsenz und Begleitung in den Prüfungen des Lebens",
          rituals: "Brüderliche Rituale",
          ritualsDesc: "Zeremonien, die die Bindungen zwischen den Mitgliedern des Ordens stärken",
          network: "Internationales Netzwerk",
          networkDesc: "Verbindungen mit Mitgliedern auf der ganzen Welt",
          meditation: "Kollektive Meditationen",
          meditationDesc: "Gruppen-spirituelle Praktiken zur Verstärkung der Energie"
        },
        commanderies: "Brüderliche Kommandanturen",
        commanderiesDesc: "Jede Region hat ihre Kommandantur, einen heiligen Ort, an dem sich die Mitglieder versammeln, um Bruderschaft zu pflegen, Rituale zu praktizieren und Lehren zu teilen.",
        activities: {
          meditation: "Monatliche Meditation- und Studientreffen",
          celebrations: "Sonnenwenden- und Tagundnachtgleichen-Feiern",
          meals: "Brüderliche Mahlzeiten und Momente der Geselligkeit",
          library: "Gemeinsame Bibliothek esoterischer Werke"
        },
        joinTitle: "Treten Sie unserer Bruderschaft bei",
        joinDesc: "Werden Sie Mitglied des Großen Ordens des Kreises und entdecken Sie die Tiefe authentischer Bruderschaft, die auf Liebe, Weisheit und Dienst basiert.",
        learnMore: "Mehr erfahren"
      },
      charity: {
        motto: "Wo der Baum des Wissens steht, liegt das Glück",
        title: "Wohltätigkeit & Soziale Werke",
        serviceTitle: "Selbstlose Dienst",
        serviceDesc: "Im Herzen unserer esoterischen Lehre liegt das Prinzip des selbstlosen Dienstes. Wahre Weisheit wird nicht nur durch Studium erworben, sondern auch durch mitfühlendes Handeln gegenüber unseren Mitmenschen.",
        works: {
          spiritual: "Spirituelle Unterstützung",
          spiritualDesc: "Kostenlose spirituelle Unterstützung für Menschen in moralischer oder existenzieller Not. Unsere ausgebildeten Mitglieder bieten Zuhören, Rat und energetische Unterstützung.",
          material: "Materielle Hilfe",
          materialDesc: "Verteilung materieller Hilfe an bedürftige Familien: Nahrung, Kleidung, gelegentliche finanzielle Unterstützung für Notsituationen.",
          education: "Kostenlose Bildung",
          educationDesc: "Kostenlose Kurse in Philosophie, Meditation und persönlicher Entwicklung für Menschen, die keinen Zugang zu bezahlten Lehren haben.",
          energy: "Energieheilung",
          energyDesc: "Sitzungen für Energiepflege und ganzheitliche Heilung, kostenlos angeboten an Menschen, die an Krankheiten oder Ungleichgewichten leiden."
        },
        participate: "Beteiligen Sie sich an unseren Werken",
        participateDesc: "Jedes Mitglied des GOC widmet Zeit und Ressourcen wohltätigen Werken. Schließen Sie sich uns in dieser Mission von Dienst und Mitgefühl an.",
        donate: "Spenden",
        volunteer: "Freiwilliger werden"
      },
      donation: {
  charite: {
    title: "Wohltätigkeitsspende",
    generosityInAction: "Ihre Großzügigkeit in Aktion",
    message: "Das Minimum oder mehr Ihrer Spende ist Großzügigkeit, die es uns ermöglicht, unsere Hilfs- und Solidaritätsaktionen für Menschen in Not zu planen.",
    minimumLabel: "Mindestspende für Wohltätigkeit",
    amount: "100€",
    actTitle: "Ein Akt großer Großzügigkeit",
    actDescription: "Die Wohltätigkeitsspende stellt ein bedeutendes Engagement für die Werte der gegenseitigen Hilfe und Solidarität des Großen Ordens des Kreises dar. Durch diese großzügige Geste ermöglichen Sie uns, unsere wohltätigen Aktionen nachhaltig zu unterstützen und konkret denen zu helfen, die es am meisten brauchen.",
    impact: {
      title: "Wirkung Ihrer Wohltätigkeitsspende",
      items: [
        "Direkte Hilfe für Menschen in großer Not",
        "Finanzierung von Solidaritätsprogrammen",
        "Unterstützung für bedürftige Familien",
        "Konkrete humanitäre Aktionen",
        "Nothilfe in Krisenzeiten"
      ]
    },
    recognition: {
      title: "Besondere Anerkennung",
      description: "Als wohltätiger Spender erhalten Sie eine besondere Anerkennung:",
      items: [
        "Erwähnung im Kreis der Wohltäter (falls gewünscht)",
        "Jahresbericht über die Mittelverwendung",
        "Einladung zu Wohltätigkeitsveranstaltungen des Ordens",
        "Anerkennungsurkunde (auf Anfrage)",
        "Spendenbescheinigung zur Steuerabzug"
      ]
    },
    examples: {
      title: "Beispiele für finanzierte Aktionen",
      food: "Lebensmittelhilfe für Familien",
      medical: "Medizinische Nothilfe",
      education: "Stipendien für Kinder"
    },
    form: {
      title: "Wohltätigkeitsspende machen",
      subtitle: "Mindestbetrag: 100€. Ihre Großzügigkeit verändert Leben.",
      amountLabel: "Betrag Ihrer Wohltätigkeitsspende (Minimum 100€)",
      customPlaceholder: "Oder geben Sie einen Betrag ein (Min. 100€)",
      typeLabel: "Art der Spende",
      types: {
        unique: "Einmalige Spende",
        monthly: "Wiederkehrende monatliche Spende",
        quarterly: "Vierteljährliche Spende",
        annual: "Jährliche Spende"
      },
      firstName: "Vorname *",
      lastName: "Nachname *",
      email: "E-Mail *",
      message: "Nachricht (optional)",
      messagePlaceholder: "Teilen Sie Ihre Motivationen oder widmen Sie Ihre Spende...",
      receipt: "Ich möchte eine Spendenbescheinigung erhalten",
      circle: "Ich bin damit einverstanden, im Kreis der Wohltäter erwähnt zu werden",
      submit: "🤲 Meine Wohltätigkeitsspende machen (Min. 100€)",
      secure: "✓ 100% sichere Zahlung • ✓ Spendenbescheinigung verfügbar"
    },
    thankYou: {
      title: "Vielen Dank für Ihre große Großzügigkeit",
      description: "Ihre Wohltätigkeitsspende macht einen konkreten Unterschied im Leben vieler Menschen. Dank Ihrer Großzügigkeit können wir unsere Hilfs- und Solidaritätsaktionen mit denen fortsetzen, die es am meisten brauchen. Möge Ihre Geste gesegnet sein.",
      gratitude: "🙏 Mit unserer tiefsten Dankbarkeit 🙏"
    }
  },
  soutien: {
    title: "Unterstützung für die Ordensentwicklung",
    generosityInAction: "Ihre Großzügigkeit in Aktion",
    message: "Das Minimum oder mehr Ihrer Spende ist Großzügigkeit, die es uns ermöglicht, unsere Hilfs- und Solidaritätsaktionen für Menschen in Not zu planen.",
    minimumLabel: "Mindestspende für Unterstützung",
    amount: "50€",
    contributeTitle: "Zu unserer Mission beitragen",
    contributeDescription: "Ihre Unterstützungsspenden ermöglichen es dem Großen Orden des Kreises, weiterhin esoterische Lehren zu vermitteln, spirituelle Veranstaltungen zu organisieren und unsere Infrastruktur zu erhalten. Jeder Beitrag hilft, die hermetische Tradition zu bewahren und zu verbreiten.",
    funding: {
      title: "Finanzierung der Ausbildungen",
      items: [
        "Erstellung neuer Online-Kurse",
        "Vergütung qualifizierter Lehrer",
        "HD-Videoinhaltsproduktion",
        "Entwicklung von Lehrmaterialien",
        "Organisation von Seminaren und Retreats"
      ]
    },
    infrastructure: {
      title: "Instandhaltung der Infrastruktur",
      items: [
        "Wartung regionaler Kommandanturen",
        "Esoterische Bibliothek und Archive",
        "Digitale Plattform und Website",
        "Erwerb neuer seltener Werke",
        "Ritualgeräte und Zubehör"
      ]
    },
    editorial: {
      title: "Redaktionelle Projekte",
      items: [
        "Veröffentlichung des Vierteljahresjournals",
        "Herausgabe esoterischer Bücher",
        "Übersetzung alter Texte",
        "Hermetische Studienhefte",
        "Kostenlose Inhaltsverbreitung"
      ]
    },
    international: {
      title: "Internationale Ausstrahlung",
      items: [
        "Eröffnung neuer Kommandanturen",
        "Internationale Konferenzen",
        "Austausche mit anderen Orden",
        "Übersetzung von Ausbildungen",
        "Präsenz bei spirituellen Veranstaltungen"
      ]
    },
    budget: {
      title: "Jahreshaushalt 2026",
      training: "Ausbildungen",
      infrastructure: "Infrastruktur",
      editorial: "Veröffentlichung",
      outreach: "Ausstrahlung"
    },
    levels: {
      title: "Monatliche Unterstützungsstufen",
      friend: {
        name: "Freund des Ordens",
        price: "10€",
        period: "/Monat",
        benefits: [
          "Dank auf der Website",
          "Exklusiver Newsletter",
          "Abzeichen Freund des GOC"
        ],
        button: "Unterstützen"
      },
      benefactor: {
        name: "Wohltäter",
        price: "25€",
        period: "/Monat",
        badge: "EMPFOHLEN",
        benefits: [
          "Alle vorherigen Vorteile",
          "Zugang zu exklusiven Inhalten",
          "Einladung zu VIP-Veranstaltungen",
          "Kostenloses Vierteljahresjournal"
        ],
        button: "Unterstützen"
      },
      patron: {
        name: "Großer Mäzen",
        price: "50€",
        period: "/Monat",
        benefits: [
          "Alle vorherigen Vorteile",
          "Erwähnung im Mäzenen-Pantheon",
          "Jährliche spirituelle Beratung",
          "Personalisiertes spirituelles Geschenk"
        ],
        button: "Unterstützen"
      }
    },
    form: {
      title: "Einmalige Spende",
      amountLabel: "Betrag Ihrer Unterstützung",
      customPlaceholder: "Anderer Betrag",
      typeLabel: "Art der Unterstützung",
      types: {
        unique: "Einmalige Spende",
        monthly: "Wiederkehrende monatliche Unterstützung"
      },
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail *",
      submit: "Jetzt unterstützen",
      secure: "✓ 100% sichere Zahlung • ✓ Jederzeit kündbar"
    }
  },
  sympathie: {
    title: "Sympathiespende",
    generosityInAction: "Ihre Großzügigkeit in Aktion",
    message: "Das Minimum oder mehr Ihrer Spende ist Großzügigkeit, die es uns ermöglicht, unsere Hilfs- und Solidaritätsaktionen für Menschen in Not zu planen.",
    minimumLabel: "Mindestspende für Sympathie",
    amount: "25€",
    gestureTitle: "Eine Geste aus dem Herzen",
    gestureDescription: "Die Sympathiespende ist eine freie und spontane Geste, die keine Gegenleistung erfordert. Es ist ein Ausdruck Ihrer Unterstützung und Verbundenheit mit den Werten des Großen Ordens des Kreises, ohne Erwartung oder Verpflichtung.",
    freedom: {
      title: "Totale Freiheit",
      description: "Im Gegensatz zu anderen Spendenformen ist die Sympathiespende völlig frei: freier Betrag (Minimum 25€), freie Häufigkeit, mögliche Anonymität. Es ist einfach ein Weg, Ihre Wertschätzung für die Arbeit des Ordens auszudrücken und in Ihrem Maßstab zur Erhaltung der esoterischen Tradition beizutragen."
    },
    why: {
      title: "Warum eine Sympathiespende machen?",
      items: [
        "Sie schätzen unsere Mission und Werte",
        "Sie möchten unterstützen, ohne sich zu verpflichten",
        "Sie möchten eine einmalige Geste anbieten",
        "Sie können kein Mitglied werden, möchten aber helfen",
        "Sie fühlen eine spirituelle Verbindung mit dem Orden"
      ]
    },
    usage: {
      title: "Wie wird es verwendet?",
      description: "Sympathiespenden tragen zu unseren Hilfs- und Solidaritätsaktionen bei. Sie werden dort eingesetzt, wo der Bedarf am größten ist:",
      items: [
        "Hilfe für Menschen in Not",
        "Gemeinschaftliche Solidaritätsaktionen",
        "Entwicklung neuer kostenloser Inhalte",
        "Sonderprojekte und Gelegenheiten",
        "Rücklagen für Unvorhergesehenes"
      ]
    },
    noReturn: {
      title: "Keine Gegenleistung, nur Dankbarkeit",
      description: "Wir bieten Ihnen nichts als unsere tiefe Dankbarkeit für Ihre Sympathiespende. Sie erhalten keinen speziellen Newsletter, keine exklusive Einladung, keine öffentliche Anerkennung (es sei denn, Sie wünschen es). Es ist ein reiner Akt der Großzügigkeit und Güte."
    },
    testimonials: {
      title: "Warum sie eine Sympathiespende gemacht haben",
      items: [
        {
          quote: "Ich bin kein Mitglied des GOC, aber ich lese seit 2 Jahren Ihre kostenlosen Veröffentlichungen. Sie haben mir viel gebracht und ich wollte einfach Danke sagen.",
          author: "Marie L., Sympathisantin"
        },
        {
          quote: "Ihre Arbeit der Bewahrung esoterischer Traditionen ist kostbar. Ich kann mich nicht voll engagieren, aber ich wollte auf meine Weise beitragen.",
          author: "Jean-Marc D., Freund des Ordens"
        },
        {
          quote: "Ich war vor einigen Jahren Mitglied und musste aus persönlichen Gründen aufhören. Diese kleine Spende ist meine Art, mit der Bruderschaft verbunden zu bleiben.",
          author: "Sophie R., ehemaliges Mitglied"
        }
      ]
    },
    form: {
      title: "Sympathiespende machen",
      subtitle: "Mindestbetrag: 25€. Jede Geste zählt und wird geschätzt.",
      amountLabel: "Betrag Ihrer Spende (Minimum 25€)",
      customPlaceholder: "Oder geben Sie einen Betrag ein (Min. 25€)",
      optionalInfo: "Die folgenden Informationen sind optional",
      firstName: "Vorname (optional)",
      lastName: "Nachname (optional)",
      email: "E-Mail (optional)",
      emailNote: "Nur für eine Bestätigungsquittung",
      message: "Eine Nachricht für uns? (optional)",
      messagePlaceholder: "Hinterlassen Sie uns eine Nachricht, wenn Sie möchten...",
      anonymous: "Ich möchte völlig anonym bleiben",
      mention: "Sie können meinen Vornamen in Ihrem öffentlichen Dank erwähnen",
      submit: "💛 Meine Sympathiespende senden (Min. 25€)",
      secure: "✓ 100% sichere Zahlung"
    },
    thankYou: {
      title: "Von ganzem Herzen, Danke",
      description: "Jede Sympathiespende, unabhängig vom Betrag, wird mit tiefer Dankbarkeit empfangen. Diese spontanen Gesten der Großzügigkeit erinnern uns daran, dass unsere Mission Herzen berührt und wirklich zum spirituellen Wohlbefinden vieler Menschen beiträgt. Danke, dass Sie da sind.",
      gratitude: "🙏 Mit all unserer Wertschätzung 🙏"
    }
  },
  common: {
    contact: {
      title: "Kontakt",
      headquarters: "Hauptsitz",
      france: "Frankreich",
      address: "P.B. 13241",
      city: "Yaoundé - Kamerun",
      contactPerson: "Richard Mbouma Kohomm",
      street: "11 av. Joseph Rollo",
      zipCity: "78320 La Verrière – Frankreich",
      email: "mkohomm@gmail.com"
    }
  }
},
      contact: {
        title: "Kontakt",
        headquarters: "Hauptsitz",
        france: "Frankreich"
      },
      common: {
        securePayment: "100% sichere Zahlung",
        cancel: "Abbrechen",
        confirm: "Bestätigen",
        save: "Speichern",
        close: "Schließen",
        loading: "Laden...",
        error: "Fehler",
        success: "Erfolg"
      }
    }
  },

  // SPANISH (COMPLETE)
  es: {
    translation: {
      nav: {
        home: "Inicio",
        goc: "GOC",
        gocSubtitle: "Gran Orden del Círculo Fraternidad",
        gocOrganisation: "Organización",
        gocOrganisationDesc: "Nuestra estructura",
        gocActions: "Acciones",
        gocActionsDesc: "Nuestras iniciativas",
        gocCharity: "Caridad",
        gocCharityDesc: "Obras filantrópicas",
        gocFraternity: "Fraternidad",
        gocFraternityDesc: "Lazos espirituales",
        formation: "Formación",
        formationEsoterism: "Esoterismo",
        formationEsoterismDesc: "Misterios antiguos",
        formationPhilosophy: "Filosofía",
        formationPhilosophyDesc: "Pensamiento sagrado",
        formationPowers: "Poderes",
        formationPowersDesc: "Desarrollo interior",
        library: "Biblioteca",
        libraryAccessories: "Accesorios rituales",
        libraryAccessoriesDesc: "Herramientas sagradas",
        libraryBooks: "Libros",
        libraryBooksDesc: "Conocimiento ancestral",
        libraryJournals: "Revistas",
        libraryJournalsDesc: "Publicaciones",
        libraryVideos: "Videos",
        libraryVideosDesc: "Enseñanzas",
        becomeMember: "Hacerse Miembro",
        memberApprentice: "Miembro Aprendiz",
        memberApprenticeDesc: "Primeros pasos",
        memberBrotherSister: "Miembro Hermano/Hermana",
        memberBrotherSisterDesc: "Compromiso",
        memberAuditor: "Aprendiz Oyente",
        memberAuditorDesc: "Descubrimiento",
        donation: "Donación",
        donationCharity: "Caridad",
        donationCharityDesc: "Ayudar a otros",
        donationSupport: "Apoyo",
        donationSupportDesc: "Contribuir",
        donationSympathy: "Simpatía",
        donationSympathyDesc: "Participar",
        members: "Área de Miembros",
        login: "Iniciar sesión",
        signup: "Registrarse",
        logout: "Cerrar sesión",
        myAccount: "Mi cuenta",
        closeMenu: "Cerrar menú",
        openMenu: "Abrir menú"
      },enseignements: {
        meta: {
          title: "Enseñanzas Iniciáticas | GOC",
          description: "Enseñanzas iniciáticas para cambiar tu vida - Gran Orden del Círculo"
        },
        hero: {
          subtitle: "Camino Iniciático",
          title: "Enseñanzas Iniciáticas",
          titleHighlight: "para cambiar tu vida"
        },
        introduction: {
          quote: "Independientemente de la edad, el sexo o la cultura, todos aspiran a tener éxito en la vida. Para lograrlo, debes aprovechar la fuerza de tus energías positivas y cualidades para imponerte y tener éxito.",
          paragraph1: "Por lo tanto, la mejor inversión que puedes hacer si quieres tener éxito es explotar tu resplandor interior, es decir, tu verdadera personalidad, tus fortalezas y tus cualidades positivas.",
          study: "Un estudio estadounidense reciente muestra que el éxito de un individuo depende en un {{percentagePersonality}} de su personalidad; el {{percentageKnowledge}} restante representa su conocimiento y experiencia.",
          conclusion: "{{goc}} te da las llaves para lograrlo."
        },
        mainContent: {
          title: "Las Enseñanzas del GOC",
          subtitle: "Conocimiento filosófico e ideológico, claves y técnicas extremadamente poderosas para la adquisición de poderes y el desarrollo personal!"
        },
        pillars: {
          esoterisme: {
            title: "Esoterismo",
            items: [
              "El concepto de Dios",
              "Conocimiento de las religiones",
              "La inmortalidad",
              "Ser uno mismo",
              "La vida encantada",
              "El magnetismo",
              "El humanismo",
              "Las ideologías",
              "La vida, la existencia, la muerte",
              "El Yin y el Yang",
              "El Yo y el Otro"
            ]
          },
          philosophie: {
            title: "Filosofía",
            items: [
              { title: "Pensamientos", desc: "africana, china, india, griega" },
              { title: "Creencias", desc: "origen de lo sagrado, historia de las religiones" },
              { title: "Mitologías", desc: "héroe de mil rostros" },
              { title: "Sabiduría", desc: "los cinco pilares" }
            ]
          },
          pouvoirs: {
            title: "Poderes",
            items: [
              "Conectarse con las Fuerzas benéficas",
              "Descubrir su Ser interior",
              "Limpiar su psiquis",
              "Dominar su mente",
              "Despertar sus aptitudes ocultas",
              "Influir en su entorno sin actuar físicamente",
              "Regenerarse físicamente",
              "Adquirir una mejor salud",
              "Aumentar su esperanza de vida",
              "Fijarse metas y alcanzarlas",
              "Acceder al bienestar material",
              "Mejorar la calidad de su vida",
              "Acceder al Despertar Espiritual",
              "Protegerse contra todos los golpes de la suerte cualquiera sea su origen"
            ],
            more: "Y más..."
          }
        },
        development: {
          title: "Desarrollo de los Poderes",
          quote: "Todos aquellos que buscan la evolución espiritual y la adquisición de poderes recibirán enseñanzas que les permitirán adquirir una personalidad magnética y radiante.",
          cta: "Comienza tu iniciación"
        },
        footerQuote: "Una verdadera purificación, el acceso a los estados de conciencia más elevados y la adquisición de poderes actuantes.",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "Cargando...",
    "noSubscription": {
      "title": "Sin Suscripción Activa",
      "description": "Debes suscribirte a un plan de membresía para acceder al área de miembros",
      "button": "Elegir una Suscripción"
    },
    "welcome": "Bienvenido",
    "member": "Miembro",
    "active": "Activo",
    "contentSections": {
      "esotericTraining": {
        "title": "Formación Esotérica",
        "description": "Accede a las enseñanzas básicas"
      },
      "philosophicalTraining": {
        "title": "Formación Filosófica",
        "description": "Profundiza tu conocimiento"
      },
      "powerDevelopment": {
        "title": "Desarrollo de Poderes",
        "description": "Contenido premium exclusivo"
      },
      "library": {
        "title": "Biblioteca",
        "description": "Acceso a recursos documentales"
      },
      "videos": {
        "title": "Videos",
        "description": "Contenido de video exclusivo"
      }
    },
    "locked": {
      "requires": "Requiere",
      "upgradeButton": "Mejorar Suscripción"
    },
    "access": "Acceder",
    "upgradeCTA": {
      "title": "Desbloquea Más Contenido",
      "description": "Mejora tu suscripción para acceder a todo el contenido exclusivo",
      "button": "Mejorar"
    },
    "roles": {
      "auditeur": {
        "name": "Oyente",
        "description": "Acceso básico a la formación"
      },
      "apprenti": {
        "name": "Aprendiz",
        "description": "Formación filosófica avanzada"
      },
      "frere-soeur": {
        "name": "Hermano/Hermana",
        "description": "Acceso completo a todo el contenido"
      }
    }
  },
      goc: {
  actions: {
    title: "Acciones del GOC",
    subtitle: "Nuestras Acciones en el Mundo",
    items: {
      seminars: { title: "Seminarios Iniciáticos", description: "Organización de seminarios y retiros espirituales que permiten a los miembros profundizar en su camino esotérico y vivir experiencias iniciáticas transformadoras." },
      conferences: { title: "Conferencias Públicas", description: "Difusión de saberes esotéricos y filosóficos a través de conferencias abiertas al público sobre temas espirituales, místicos y metafísicos." },
      publications: { title: "Publicaciones", description: "Edición de libros, revistas y documentos pedagógicos que preservan y transmiten las enseñanzas tradicionales del esoterismo occidental y oriental." },
      rituals: { title: "Rituales Colectivos", description: "Celebración de rituales estacionales e iniciáticos que permiten a los miembros conectarse con las fuerzas cósmicas y fortalecer el egrégoro de la Orden." }
    },
    program: {
      title: "Programa Anual",
      seasons: {
        spring: { name: "Primavera", activity: "Rituales de equinoccio, seminario de renovación espiritual" },
        summer: { name: "Verano", activity: "Retiro estival, celebración del solsticio, iniciaciones" },
        autumn: { name: "Otoño", activity: "Seminarios filosóficos, rituales de cosecha espiritual" },
        winter: { name: "Invierno", activity: "Solsticio de invierno, meditaciones profundas, enseñanzas secretas" }
      }
    }
  },
  charity: {
    title: "Caridad & Obras Sociales",
    serviceTitle: "Servicio Desinteresado",
    serviceDesc: "En el corazón de nuestra enseñanza esotérica se encuentra el principio del servicio desinteresado. La verdadera sabiduría se adquiere no solo mediante el estudio, sino también a través de la acción compasiva hacia nuestros semejantes.",
    works: {
      spiritual: { title: "Asistencia Espiritual", description: "Apoyo espiritual gratuito para personas en angustia moral o existencial. Nuestros miembros capacitados ofrecen escucha, consejo y apoyo energético." },
      material: { title: "Ayuda Material", description: "Distribución de ayuda material a familias necesitadas: alimentos, ropa, apoyo financiero ocasional para situaciones de emergencia." },
      education: { title: "Educación Gratuita", description: "Cursos gratuitos de filosofía, meditación y desarrollo personal para personas que no pueden acceder a enseñanzas pagadas." },
      energy: { title: "Sanación Energética", description: "Sesiones de cuidado energético y sanación holística ofrecidas gratuitamente a personas que sufren enfermedades o desequilibrios." }
    },
    participate: { title: "Participe en nuestras Obras", description: "Cada miembro del GOC dedica tiempo y recursos a obras de caridad. Únase a nosotros en esta misión de servicio y compasión.", donate: "Hacer una donación", volunteer: "Hacerse voluntario" }
  },
  fraternity: {
    title: "Fraternidad Universal",
    ourFraternity: "Nuestra Fraternidad",
    description: "La Fraternidad de la Gran Orden del Círculo es una comunidad de mujeres y hombres, sin exclusión, de todas las razas, todas las etnias, todos los países y todas las nacionalidades, que aceptan voluntariamente y sin ninguna restricción de ningún tipo, de ninguna naturaleza, HACERSE MIEMBRO y se comprometen a respetar escrupulosamente la REGLA en XII Principios que rige la VIDA de la Organización de la Gran Orden del Círculo.",
    transcendentLink: "Un Lazo que Trasciende",
    transcendentDesc: "La fraternidad dentro de la Gran Orden del Círculo no es mera camaradería, sino un profundo vínculo espiritual que une almas en su búsqueda de luz y conocimiento.",
    features: {
      spiritualHelp: { title: "Ayuda Espiritual Mutua", description: "Los hermanos y hermanas se ayudan mutuamente en su viaje iniciático" },
      knowledge: { title: "Compartir Conocimiento", description: "Transmisión de conocimiento esotérico entre miembros iniciados" },
      mutualSupport: { title: "Apoyo Mutuo", description: "Presencia y acompañamiento en las pruebas de la vida" },
      rituals: { title: "Rituales Fraternos", description: "Ceremonias que fortalecen los lazos entre los miembros de la Orden" },
      network: { title: "Red Internacional", description: "Conexiones con miembros alrededor del mundo" },
      meditation: { title: "Meditaciones Colectivas", description: "Prácticas espirituales grupales para amplificar la energía" }
    },
    commanderies: {
      title: "Comandancias Fraternales",
      description: "Cada región tiene su comandancia, un lugar sagrado donde los miembros se reúnen para cultivar la fraternidad, practicar rituales y compartir enseñanzas.",
      activities: { meditation: "Reuniones mensuales de meditación y estudio", celebrations: "Celebraciones de solsticios y equinoccios", meals: "Comidas fraternales y momentos de convivencia", library: "Biblioteca compartida de obras esotéricas" }
    },
    join: { title: "Únase a Nuestra Fraternidad", description: "Hágase miembro de la Gran Orden del Círculo y descubra la profundidad de la fraternidad auténtica basada en el amor, la sabiduría y el servicio.", button: "Saber más" }
  }
},
formation: {
  esoterism: {
    title: "Formación en Esoterismo",
    subtitle: "Ciencias Ocultas",
    intro: "El esoterismo designa el conjunto de conocimientos secretos y prácticas espirituales transmitidos de maestro a discípulo desde tiempos inmemoriales. Nuestra formación completa le inicia en los misterios ocultos del universo y las leyes que rigen el plano sutil.",
    sections: {
      symbolism: {
        title: "Simbolismo Sagrado",
        items: [
          "Interpretación de símbolos herméticos",
          "Geometría sagrada y números místicos",
          "Alfabetos mágicos y sigilos"
        ]
      },
      alchemy: {
        title: "Alquimia Espiritual",
        items: [
          "Gran Obra alquímica",
          "Transmutación interior",
          "Piedra filosofal y elixir de vida"
        ]
      },
      kabbalah: {
        title: "Cábala & Árbol de la Vida",
        items: [
          "Estudio de las 10 sefirot",
          "Caminos del Árbol de la Vida",
          "Gematría y numerología hebrea"
        ]
      },
      tarot: {
        title: "Tarot & Adivinación",
        items: [
          "Arcanos mayores y menores",
          "Artes adivinatorias tradicionales",
          "Desarrollo de la intuición"
        ]
      }
    },
    program: {
      title: "Programa de Formación",
      level1: {
        title: "Nivel 1 - Aprendiz (12 meses)",
        description: "Fundamentos del esoterismo, simbolismo, meditación, primeros rituales"
      },
      level2: {
        title: "Nivel 2 - Compañero (18 meses)",
        description: "Alquimia, Cábala, astrología esotérica, trabajo energético avanzado"
      },
      level3: {
        title: "Nivel 3 - Maestro (24 meses)",
        description: "Enseñanzas secretas, alta magia, iniciación en misterios profundos"
      }
    },
    signup: "Inscribirse en la formación"
  },
  philosophy: {
    title: "Formación Filosófica",
    subtitle: "Filosofía Esotérica",
    intro: "La filosofía esotérica explora las preguntas fundamentales de la existencia: ¿quiénes somos, de dónde venimos, a dónde vamos? Nuestra enseñanza integra las grandes tradiciones filosóficas orientales y occidentales en una síntesis única.",
    traditions: {
      hermetic: {
        title: "Filosofía Hermética",
        description: "Estudio de los Siete Principios Herméticos: Mentalismo, Correspondencia, Vibración, Polaridad, Ritmo, Causa y Efecto, Género. Aplicación práctica de estas leyes universales."
      },
      neoplatonic: {
        title: "Neoplatonismo & Gnosis",
        description: "Enseñanzas de Platón, Plotino y los gnósticos. La doctrina del Uno, la emanación de los mundos, el ascenso del alma hacia su fuente divina."
      },
      eastern: {
        title: "Sabiduría Oriental",
        description: "Vedanta, Budismo, Taoísmo: exploración de las filosofías orientales y sus prácticas contemplativas. No-dualidad, vacuidad, Wu Wei."
      },
      modern: {
        title: "Metafísica Moderna",
        description: "Síntesis entre ciencia y espiritualidad. Física cuántica y conciencia, nuevos paradigmas de la realidad."
      }
    },
    themes: {
      title: "Temas Estudiados",
      items: [
        "Naturaleza de la conciencia y el alma",
        "Cosmogonía y creación del mundo",
        "Karma, reencarnación y destino",
        "Libre albedrío y determinismo",
        "Ética espiritual y moral esotérica"
      ]
    },
    methods: {
      title: "Métodos Pedagógicos",
      items: [
        "Cursos teóricos y seminarios",
        "Diálogos socráticos y debates",
        "Meditaciones filosóficas guiadas",
        "Lecturas comentadas de textos sagrados",
        "Trabajos escritos y disertaciones"
      ]
    },
    continuous: {
      title: "Formación Continua",
      description: "La formación filosófica se extiende durante 3 años con cursos mensuales, seminarios trimestrales y acceso a nuestra biblioteca esotérica.",
      button: "Programa detallado"
    }
  },
  powers: {
    title: "Desarrollo de los Poderes",
    subtitle: "Facultades Superiores",
    intro: "Más allá de las capacidades ordinarias, el ser humano posee facultades latentes que puede desarrollar mediante el entrenamiento espiritual. Nuestra formación le guía en el despertar de estos poderes psíquicos y espirituales.",
    warning: {
      title: "⚠️ Advertencia Importante",
      description: "El desarrollo de los poderes requiere una preparación moral y espiritual rigurosa. Estas enseñanzas solo se transmiten a miembros iniciados que hayan demostrado madurez y ética intachable."
    },
    abilities: {
      clairvoyance: {
        title: "Clarividencia",
        description: "Desarrollo de la visión sutil permitiendo percibir los planos energéticos, las auras y las entidades espirituales.",
        items: ["Activación del 3er ojo", "Visión etérica y astral", "Lectura de auras"]
      },
      telepathy: {
        title: "Telepatía",
        description: "Comunicación mental directa, transmisión y recepción de pensamientos, conexión con las conciencias a distancia.",
        items: ["Transmisión de pensamientos", "Recepción intuitiva", "Comunicación con guías"]
      },
      magnetism: {
        title: "Magnetismo",
        description: "Dominio de la energía vital para sanar, armonizar y transformar. Técnicas de magnetismo curativo e imposición de manos.",
        items: ["Acumulación de energía", "Sanación energética", "Armonización de chakras"]
      },
      astral: {
        title: "Proyección Astral",
        description: "Salida del cuerpo físico y viaje en los planos sutiles. Exploración consciente de las dimensiones espirituales.",
        items: ["Descorporación voluntaria", "Viaje astral consciente", "Exploración de planos superiores"]
      },
      psychometry: {
        title: "Psicometría",
        description: "Lectura de las energías impregnadas en objetos, lugares y personas. Capacidad de percibir la historia energética.",
        items: ["Lectura de objetos", "Percepción de memorias", "Psicometría avanzada"]
      },
      meditation: {
        title: "Meditación Profunda",
        description: "Estados de conciencia modificados, samadhi, unión mística. Acceso a las dimensiones trascendentes del ser.",
        items: ["Estados meditativos profundos", "Experiencias místicas", "Unión con lo divino"]
      }
    },
    program: {
      title: "Programa Progresivo",
      subtitle: "El despertar de los poderes sigue un proceso gradual y seguro durante varios años",
      year1: {
        title: "Año 1",
        description: "Preparación & Purificación"
      },
      year2: {
        title: "Año 2",
        description: "Activación & Desarrollo"
      },
      year3: {
        title: "Año 3+",
        description: "Maestría & Transmisión"
      }
    }
  }
},
      library: {
  intro: {
    quote: "La materia se recicla, el espíritu se recarga…",
    description: "Lugar de conocimientos, la Biblioteca del GOC pone a disposición de los miembros, auditores afiliados y simpatizantes, su publicación «Mâat», los videos y fascículos de sus enseñanzas, libros de filosofía, sabiduría, conocimientos secretos. Así como los vestidos de los miembros y otros accesorios para los ritos.",
    orderForm: "Formulario de pedido"
  },
  accessories: {
    description: "Los accesorios rituales son herramientas sagradas utilizadas en las prácticas esotéricas y las ceremonias iniciáticas. Cada objeto es consagrado y cargado energéticamente según las tradiciones herméticas.",
    items: {
      candles: { title: "Velas Rituales", description: "Velas consagradas de diferentes colores para rituales específicos: blanco (purificación), oro (espiritualidad), rojo (amor), verde (prosperidad).", availability: "Disponible para miembros" },
      crystals: { title: "Cristales & Piedras", description: "Colección de cristales purificados y programados: cuarzo, amatista, citrino, obsidiana. Cada piedra posee sus propiedades energéticas específicas.", availability: "Disponible para miembros" },
      incense: { title: "Inciensos Sagrados", description: "Inciensos tradicionales para la purificación y la elevación vibratoria: olíbano, mirra, benjuí, sándalo. Recetas ancestrales de los templos.", availability: "Disponible para miembros" },
      sword: { title: "Espada Ritual", description: "Espada simbólica utilizada para trazar los círculos de protección y dirigir la energía durante los rituales. Forjada según las tradiciones herméticas.", availability: "Reservado a iniciados" },
      chalice: { title: "Cáliz Consagrado", description: "Copa sagrada representando el elemento agua y el principio femenino. Utilizada en los rituales de ofrenda y comunión espiritual.", availability: "Reservado a iniciados" },
      malas: { title: "Rosarios & Malas", description: "Rosarios de meditación en madera sagrada, piedras semipreciosas o semillas de rudraksha. 108 cuentas para la práctica del japa (repetición de mantras).", availability: "Disponible para miembros" },
      feathers: { title: "Plumas Rituales", description: "Plumas de aves sagradas utilizadas para dispersar el humo del incienso y purificar el espacio ritual. Tradición amerindia y chamánica.", availability: "Disponible para miembros" },
      talismans: { title: "Pentáculos & Talismanes", description: "Pentáculos grabados según las tradiciones de la magia salomónica. Talismanes personalizados cargados según su tema astrológico.", availability: "Bajo pedido" },
      robes: { title: "Túnicas & Vestimentas", description: "Túnicas ceremoniales, capas y vestimentas rituales en los colores de la Orden. Confeccionadas en telas naturales según la tradición.", availability: "Reservado a miembros" }
    },
    cta: { title: "Pedir Accesorios", description: "Los accesorios rituales están disponibles para la compra para los miembros del GOC. Cada objeto es consagrado individualmente antes de la entrega.", button: "Acceder a la tienda", note: "* Conexión requerida - Reservado a miembros iniciados" }
  },journals: {
    title: "Revistas & Publicaciones",
    intro: "La Gran Orden del Círculo publica regularmente revistas, boletines y revistas destinadas a la formación continua de sus miembros y a la difusión de los saberes esotéricos.",
    mainJournal: {
      title: "La Luz del Círculo",
      subtitle: "Revista oficial del GOC - Publicación trimestral",
      summary: "Contenido:",
      format: "Formato:",
      items: [
        "Enseñanzas esotéricas profundizadas",
        "Rituales y prácticas estacionales",
        "Testimonios de miembros",
        "Noticias de la Orden"
      ],
      formatItems: [
        "40-60 páginas ilustradas",
        "Versión papel y digital",
        "Archivos completos desde 1985",
        "Reservado a miembros"
      ]
    },
    publications: {
      bulletin: {
        title: "Boletín de la Fraternidad",
        description: "Boletín mensual destinado a mantener el vínculo entre los miembros. Información sobre encuentros, seminarios y eventos próximos.",
        frequency: "Mensual",
        pages: "12-16 páginas",
        access: "Solo miembros"
      },
      cahiers: {
        title: "Cuadernos de Estudios Herméticos",
        description: "Revista académica profundizada sobre temas esotéricos específicos: alquimia, Cábala, astrología, simbolismo, filosofía mística.",
        frequency: "Bimensual",
        pages: "60-80 páginas",
        access: "Miembros iniciados"
      },
      lettres: {
        title: "Cartas del Gran Maestro",
        description: "Enseñanzas directas del Gran Maestro de la Orden, transmitiendo conocimientos profundos y orientaciones espirituales para miembros avanzados.",
        frequency: "Trimestral",
        pages: "8-12 páginas",
        access: "Iniciados de 2º grado"
      },
      almanach: {
        title: "Almanaque Esotérico",
        description: "Publicación anual que contiene fechas importantes, fases lunares, posiciones planetarias, calendario de rituales y prácticas recomendadas.",
        frequency: "Anual",
        pages: "120 páginas",
        access: "Accesible a todos"
      }
    },
    archives: {
      title: "Archivos Históricos",
      description: "Acceda a los archivos completos de nuestras publicaciones desde la fundación de la Orden. Décadas de saber esotérico al alcance de su mano.",
      stats: {
        journal: "Números de La Luz del Círculo",
        bulletins: "Boletines mensuales",
        years: "Años de archivos"
      }
    },
    cta: {
      title: "Acceder a las Publicaciones",
      description: "Hágase miembro de la Gran Orden del Círculo para recibir nuestras publicaciones y acceder a los archivos completos.",
      becomeMember: "Hacerse miembro",
      consultArchives: "Consultar archivos"
    }
  },
  books: {
    title: "Biblioteca Esotérica",
    intro: "Nuestra biblioteca contiene una colección excepcional de obras esotéricas, herméticas y filosóficas. Algunos textos raros están reservados a miembros iniciados.",
    sections: {
      alchemy: "Alquimia & Hermetismo",
      kabbalah: "Cábala & Mística Judía",
      magic: "Magia Ceremonial",
      philosophy: "Filosofía Esotérica",
      tarot: "Tarot & Simbolismo"
    },
    access: {
      open: "Accesible a todos",
      members: "Reservado a miembros",
      initiates: "Reservado a iniciados"
    },
    onSite: {
      title: "Consulta en el Lugar",
      description: "Los miembros pueden consultar la totalidad de la biblioteca en nuestras instalaciones. Ambiente estudioso propicio para la meditación.",
      note: "Disponible con cita previa para miembros"
    },
    digital: {
      title: "Biblioteca Digital",
      description: "Acceso a nuestra biblioteca digital con cientos de libros en formato PDF, accesible 24/7 desde su espacio de miembro.",
      note: "Reservado a miembros activos"
    }
  },
  videos: {
    title: "Videoteca Esotérica",
    intro: "Nuestra videoteca ofrece conferencias, rituales filmados, meditaciones guiadas y enseñanzas del Gran Maestro. Contenido exclusivo para miembros del GOC.",
    categories: {
      conferences: {
        title: "Conferencias",
        description: "Conferencias magistrales sobre esoterismo, alquimia, Cábala y filosofía hermética por nuestros maestros iniciados.",
        count: "45+ videos",
        access: "Acceso miembros"
      },
      meditations: {
        title: "Meditaciones Guiadas",
        description: "Sesiones de meditación guiada para el desarrollo espiritual, la activación de chakras y la conexión con lo divino.",
        count: "30+ videos",
        access: "Acceso libre"
      },
      rituals: {
        title: "Rituales Filmados",
        description: "Grabaciones de rituales iniciáticos, ceremonias estacionales y prácticas esotéricas transmitidas en la Orden.",
        count: "25+ videos",
        access: "Solo iniciados"
      },
      courses: {
        title: "Cursos Teóricos",
        description: "Cursos completos de formación sobre esoterismo, ciencias ocultas, filosofía y simbolismo sagrado.",
        count: "60+ videos",
        access: "Acceso miembros"
      },
      energy: {
        title: "Prácticas Energéticas",
        description: "Ejercicios prácticos para el desarrollo de facultades psíquicas, trabajo energético y magnetismo.",
        count: "35+ videos",
        access: "Acceso miembros"
      },
      secret: {
        title: "Enseñanzas Secretas",
        description: "Enseñanzas reservadas transmitidas por el Gran Maestro sobre los misterios profundos de la tradición hermética.",
        count: "20+ videos",
        access: "Solo maestros"
      }
    },
    recent: {
      title: "Últimas Publicaciones",
      videos: [
        {
          title: "Introducción a la Cábala práctica",
          description: "Conferencia del Gran Maestro sobre los fundamentos de la Cábala y su aplicación en la vida cotidiana.",
          duration: "1h 25min",
          date: "Enero 2026",
          access: "Miembros"
        },
        {
          title: "Meditación de luna llena",
          description: "Meditación guiada especial para conectarse con las energías lunares y recibir la iluminación.",
          duration: "45min",
          date: "Enero 2026",
          access: "Acceso libre"
        },
        {
          title: "Ritual del solsticio de invierno 2025",
          description: "Grabación completa del ritual ceremonial celebrado durante el solsticio de invierno en la Comandancia central.",
          duration: "2h 10min",
          date: "Diciembre 2025",
          access: "Iniciados"
        }
      ]
    },
    stats: {
      title: "Nuestra Colección de Videos",
      total: "Videos en total",
      hours: "Contenido exclusivo",
      quality: "Calidad HD & 4K",
      access: "Acceso ilimitado"
    },
    cta: {
      title: "Acceder a la Videoteca",
      description: "Hágase miembro para acceder a toda nuestra colección de videos y beneficiarse de nuevo contenido cada mes.",
      button: "Inscribirse ahora"
    }
  }
},
      home: {
        title: "GRAN ORDEN DEL CÍRCULO FRATERNIDAD",
        motto: "Donde se encuentra el árbol del conocimiento, se encuentra la felicidad",
        subtitle: {
          line1: "Formación esotérica y filosófica…",
          line2: "Fraternidad espiritual."
        },
        masterDestiny: "Acceda al dominio total de su destino…",
        benefits: {
          connectForces: "Conectarse con Fuerzas beneficiosas",
          innerBeing: "Descubrir su Ser interior",
          cleansePsyche: "Limpiar su psique",
          masterMind: "Dominar su mente",
          awakenPowers: "Despertar habilidades ocultas",
          influence: "Influir en su entorno sin acción física",
          regenerate: "Regenerarse físicamente",
          longevity: "Aumentar la esperanza de vida",
          achieveGoals: "Fijarse metas y alcanzarlas",
          materialWellbeing: "Acceder al bienestar material",
          qualityOfLife: "Mejorar la calidad de vida",
          spiritualAwakening: "Acceder al Despertar Espiritual",
          protection: "Protegerse contra toda desgracia sin importar su origen",
          betterHealth: "Adquirir mejor salud"
        },
        carousel: {
          seminar: "Seminario",
          prieure: "Priorato",
          group: "Grupo de Miembros",
          symbols: "Símbolos"
        },
        links: {
          formation: "Nuestra Formación",
          fraternity: "Nuestra Fraternidad",
          seminars: "Nuestros Seminarios",
          actions: "Nuestras Acciones"
        },
        vision: {
          title: "Nuestra Visión",
          goc: "Gran Orden del Círculo",
          secrets: "Conocimientos secretos, Sabiduría espiritual e iniciática,",
          awakening: "Despertar de poderes, Poder personal, Herramientas de bienestar…",
          changeLife: "¡Cambie su vida y acceda al dominio total de ella!",
          description: "A través de una formación esotérica que le da acceso a conocimientos secretos y sabiduría espiritual e iniciática, al despertar de poderes, poder personal y herramientas de bienestar…",
          quote: "« El Hombre fue concebido originalmente como un Ser puramente espiritual, emanado del Principio Divino 'a imagen y semejanza del Gran Espíritu Creador'. Durante su descenso a la materia, es movido por un impulso gemelo: Atracción-Rechazo, Deseo-Repulsión. Revestido de un cuerpo corruptible, ahora está separado de la unidad del Principio. Su naturaleza dual – material y espiritual – lo somete a un conflicto entre aspiraciones espirituales y las cadenas de la materialidad. Desde entonces, ha realizado actos gobernados por estos impulsos por orgullo. Pero el hombre del deseo busca obtener su reintegración en su estado original y recuperar su cuerpo de gloria.",
          mission: "El propósito del GOC es iluminar al Iniciado sobre su naturaleza, origen y destino. Él o ella recibe enseñanzas esencialmente prácticas e iniciáticas, que tratan sobre esoterismo, espiritualidad, metafísica, los secretos de los Yoguis, filosofía y desarrollo personal; permitiendo una verdadera purificación, acceso a los estados más elevados de conciencia y la adquisición de poderes actuantes."
        },
        nav: {
          becomeMember: "Hacerse Miembro",
          videos: "Videos",
          donation: "Donación",
          commanderies: "Comandancias",
          contacts: "Contactos",
          contact: "Contacto"
        },
        image: {
          alt: "Gran Orden del Círculo",
          caption: "Sabiduría antigua para el hombre moderno"
        },
        footer: {
          copyright: "© 2026 Gran Orden del Círculo - Todos los derechos reservados",
          sapientia: "Sabiduría",
          fraternitas: "Fraternidad",
          spiritus: "Espíritu"
        }
      },
      membership: {
        title: "Únase a nuestra Orden",
        subtitle: "Elija el nivel de compromiso que coincida con su viaje espiritual y filosófico",
        adhesion: "Membresía",
        formation: "Formación",
        oneTime: "una vez",
        perYear: "por año",
        firstYear: "Primer año",
        renewal: "Renovación",
        becomeMember: "Hacerse Miembro",
        renew: "Renovar",
        currentSubscription: "Suscripción Actual",
        learnMore: "Saber más",
        mostPopular: "Más Popular",
        active: "Activo",
        expired: "Expirado",
        current: "Actual",
        activeSubscription: "Suscripción Activa",
        adhesionRequired: "Membresía requerida",
        buyTrimester: "Comprar 1 Trimestre",
        buyCourse: "Comprar 1 Curso",
        processing: "Procesando...",
        signupAndBuy: "Registrarse y comprar",
        pricePerTrimester: "Precio por trimestre",
        pricePerCourse: "Precio por curso",
        formationAccessible: "La formación solo es accesible para miembros activos de la Orden.",
        cotisation: "Cuota anual",
        error: "Ocurrió un error",
        whyJoin: "¿Por qué hacerse miembro?",
        whyJoinDesc: "Al unirse a nuestra orden, accede a una comunidad dedicada al despertar espiritual, conocimiento esotérico y ayuda mutua fraternal.",
        benefit1: "Acceso a enseñanzas exclusivas",
        benefit2: "Participación en eventos y seminarios",
        benefit3: "Red de fraternidad y ayuda mutua",
        benefit4: "Biblioteca de recursos espirituales"
      },
      roles: {
        auditeur: {
          name: "Aprendiz Oyente",
          description: "Acceso básico a enseñanzas",
          formationTitle: "Formación de Aprendiz Oyente",
          formationDesc: "Cursos individuales a la carta",
          feature1: "Flexibilidad para comprar a su propio ritmo",
          feature2: "Acceso inmediato al curso comprado",
          feature3: "Contenido rico y detallado",
          totalCourses: "Total de 40 cursos disponibles",
          totalCost: "Costo total completo",
          totalDuration: "Formación completa durante 2 años"
        },
        apprenti: {
          name: "Miembro Aprendiz",
          description: "Formación completa",
          formationTitle: "Formación de Aprendiz",
          formationDesc: "Formación trimestral estructurada",
          feature1: "Enseñanzas profundas cada trimestre",
          feature2: "Seguimiento personalizado de su progreso",
          feature3: "Acceso a recursos exclusivos",
          totalCost: "Costo total de la formación",
          totalDuration: "Duración total: 8 trimestres (2 años)"
        },
        "frere-soeur": {
          name: "Miembro Hermano/Hermana",
          description: "Acceso premium completo",
          feature1: "Todos los contenidos y formaciones",
          feature2: "Mentoría individual",
          feature3: "Soporte prioritario 24/7",
          feature4: "Eventos exclusivos",
          feature5: "Red internacional"
        }
      },
      organisation: {
        motto: "Donde se encuentra el árbol del conocimiento, se encuentra la felicidad",
        title: "Organización del GOC",
        goc: "GOC",
        structure: "La Gran Orden del Círculo está estructurada alrededor de:",
        pillars: "Pilares",
        grades: "Grados",
        rule: "Regla",
        pillarsTitle: "Pilares",
        pillar1: {
          title: "I – Iniciación",
          item1: "Formación",
          item2: "Perfeccionamiento"
        },
        pillar2: {
          title: "II – Oficios",
          item1: "Ritos",
          item2: "Ceremonias"
        },
        pillar3: {
          title: "III – Caridad",
          item1: "Obras caritativas",
          item2: "Donaciones"
        },
        pillar4: {
          title: "IV – Mutualidad",
          item1: "Solidaridad de iniciados",
          item2: "Apoyo financiero"
        },
        rulesTitle: "Reglas del GOC",
        rules: {
          "1": "Creencia en el Gran Espíritu Divino",
          "2": "Fraternidad iniciática y Deber de solidaridad",
          "3": "Ideal de Amor, verdad, justicia y paz",
          "4": "Perfeccionamiento de miembros y humanidad",
          "5": "Práctica del Ritual y el Simbolismo",
          "6": "Respeto por Opiniones y Creencias",
          "7": "Juramento sobre Símbolos sagrados",
          "8": "Reunión y trabajo en comandancias",
          "9": "Honorabilidad, Lealtad y discreción",
          "10": "Amor a la Patria, respeto por leyes, respeto por Autoridades constituidas",
          "11": "Comportamiento sabio y digno",
          "12": "Ayuda y Protección mutua"
        },
        structureTitle: "Organización del GOC",
        level1: {
          title: "Nivel 1: el Círculo de Hermanos",
          desc: "El CC reúne una comunidad de hasta 770 hermanos"
        },
        level2: {
          title: "Nivel 2: el Distrito",
          desc: "El Distrito reúne todos los Círculos de Hermanos a nivel departamental"
        },
        level3: {
          title: "Nivel 3: la Comandancia",
          desc: "La Comandancia reúne todos los Distritos a nivel regional"
        },
        level4: {
          title: "Nivel 4: el Gobernación",
          desc: "El Gobernación reúne todas las Comandancias a nivel país"
        },
        level5: {
          title: "Nivel 5: El Primado Supremo",
          desc: "El Primado Supremo es la Instancia suprema del GOC"
        },
        gradesTitle: "Grados",
        grade: {
          "1": "Aprendiz",
          "2": "Compañero",
          "3": "Oficial",
          "4": "Honorable",
          "5": "Venerable",
          "6": "Maestro",
          "7": "Gran Maestro"
        },
        administration: "Administración",
        admin1: {
          title: "1) El Círculo",
          item1: "La Asamblea de Hermanos",
          item2: "El Venerable",
          item3: "La Secretaría",
          item4: "La Tesorería",
          item5: "La Intendencia",
          item6: "El Officium"
        },
        admin2: {
          title: "2) El Distrito",
          item1: "El Consejo del Distrito",
          item2: "El Maestro",
          item3: "La Secretaría",
          item4: "La Tesorería",
          item5: "La Intendencia",
          item6: "El Officium"
        },
        admin3: {
          title: "3) La Comandancia",
          item1: "El Consejo de la Comandancia",
          item2: "El Comandante",
          item3: "La Secretaría",
          item4: "La Tesorería",
          item5: "La Intendencia",
          item6: "El Officium"
        },
        admin4: {
          title: "4) El Gobernación/Legado",
          item1: "El Cénaculo",
          item2: "El Gran Maestro",
          item3: "La Secretaría",
          item4: "La Tesorería",
          item5: "La Intendencia",
          item6: "El Officium"
        },
        globalGovernance: "Gobernanza global del GOC",
        global1: {
          title: "El Congreso"
        },
        global2: {
          title: "El Cénaculo Supremo",
          desc: "(Consejo de Administración del GOC)"
        },
        global3: {
          title: "El Primado del GOC"
        },
        global4: {
          title: "Secretaría General",
          desc: "(Órgano de gestión del GOC)"
        },
        global5: {
          title: "Tesorería Central"
        },
        join: "Unirse a la Orden"
      },
      fraternity: {
        motto: "Donde se encuentra el árbol del conocimiento, se encuentra la felicidad",
        title: "Fraternidad Universal",
        ourFraternity: "Nuestra Fraternidad",
        description: "La Fraternidad de la Gran Orden del Círculo es una comunidad de mujeres y hombres, sin exclusión, de todas las razas, todas las etnias, todos los países y todas las nacionalidades, que aceptan voluntariamente y sin ninguna restricción de ningún tipo, de ninguna naturaleza, HACERSE MIEMBRO y se comprometen a respetar escrupulosamente la REGLA en XII Principios que rige la VIDA de la Organización de la Gran Orden del Círculo.",
        transcendentLink: "Un Lazo que Trasciende",
        transcendentDesc: "La fraternidad dentro de la Gran Orden del Círculo no es mera camaradería, sino un profundo vínculo espiritual que une almas en su búsqueda de luz y conocimiento.",
        features: {
          spiritualHelp: "Ayuda Espiritual Mutua",
          spiritualHelpDesc: "Los hermanos y hermanas se ayudan mutuamente en su viaje iniciático",
          knowledge: "Compartir Conocimiento",
          knowledgeDesc: "Transmisión de conocimiento esotérico entre miembros iniciados",
          mutualSupport: "Apoyo Mutuo",
          mutualSupportDesc: "Presencia y acompañamiento en las pruebas de la vida",
          rituals: "Rituales Fraternos",
          ritualsDesc: "Ceremonias que fortalecen los lazos entre los miembros de la Orden",
          network: "Red Internacional",
          networkDesc: "Conexiones con miembros alrededor del mundo",
          meditation: "Meditaciones Colectivas",
          meditationDesc: "Prácticas espirituales grupales para amplificar la energía"
        },
        commanderies: "Comandancias Fraternales",
        commanderiesDesc: "Cada región tiene su comandancia, un lugar sagrado donde los miembros se reúnen para cultivar la fraternidad, practicar rituales y compartir enseñanzas.",
        activities: {
          meditation: "Reuniones mensuales de meditación y estudio",
          celebrations: "Celebraciones de solsticios y equinoccios",
          meals: "Comidas fraternales y momentos de convivencia",
          library: "Biblioteca compartida de obras esotéricas"
        },
        joinTitle: "Únase a Nuestra Fraternidad",
        joinDesc: "Hágase miembro de la Gran Orden del Círculo y descubra la profundidad de la fraternidad auténtica basada en el amor, la sabiduría y el servicio.",
        learnMore: "Saber más"
      },
      charity: {
        motto: "Donde se encuentra el árbol del conocimiento, se encuentra la felicidad",
        title: "Caridad & Obras Sociales",
        serviceTitle: "Servicio Desinteresado",
        serviceDesc: "En el corazón de nuestra enseñanza esotérica se encuentra el principio del servicio desinteresado. La verdadera sabiduría se adquiere no solo mediante el estudio, sino también a través de la acción compasiva hacia nuestros semejantes.",
        works: {
          spiritual: "Asistencia Espiritual",
          spiritualDesc: "Apoyo espiritual gratuito para personas en angustia moral o existencial. Nuestros miembros capacitados ofrecen escucha, consejo y apoyo energético.",
          material: "Ayuda Material",
          materialDesc: "Distribución de ayuda material a familias necesitadas: alimentos, ropa, apoyo financiero ocasional para situaciones de emergencia.",
          education: "Educación Gratuita",
          educationDesc: "Cursos gratuitos de filosofía, meditación y desarrollo personal para personas que no pueden acceder a enseñanzas pagadas.",
          energy: "Sanación Energética",
          energyDesc: "Sesiones de cuidado energético y sanación holística ofrecidas gratuitamente a personas que sufren enfermedades o desequilibrios."
        },
        participate: "Participe en nuestras Obras",
        participateDesc: "Cada miembro del GOC dedica tiempo y recursos a obras de caridad. Únase a nosotros en esta misión de servicio y compasión.",
        donate: "Hacer una donación",
        volunteer: "Hacerse voluntario"
      },
      donation: {
  charite: {
    title: "Donación de Caridad",
    generosityInAction: "Tu Generosidad en Acción",
    message: "El mínimo o más de tu donación es generosidad que nos permite planificar nuestras acciones de ayuda y solidaridad para personas necesitadas.",
    minimumLabel: "Donación Mínima de Caridad",
    amount: "100€",
    actTitle: "Un Acto de Gran Generosidad",
    actDescription: "La donación de caridad representa un compromiso significativo con los valores de ayuda mutua y solidaridad de la Gran Orden del Círculo. Con este gesto generoso, permites apoyar sosteniblemente nuestras acciones caritativas y ayudar concretamente a quienes más lo necesitan.",
    impact: {
      title: "Impacto de tu Donación de Caridad",
      items: [
        "Ayuda directa a personas en gran dificultad",
        "Financiación de programas de solidaridad",
        "Apoyo a familias necesitadas",
        "Acciones humanitarias concretas",
        "Ayuda de emergencia en crisis"
      ]
    },
    recognition: {
      title: "Reconocimiento Especial",
      description: "Como donante caritativo, recibes un reconocimiento especial:",
      items: [
        "Mención en el Círculo de Bienhechores (si se desea)",
        "Informe anual sobre el uso de fondos",
        "Invitación a eventos caritativos de la Orden",
        "Certificado de reconocimiento (bajo petición)",
        "Recibo fiscal para deducción"
      ]
    },
    examples: {
      title: "Ejemplos de Acciones Financiadas",
      food: "Ayuda alimentaria a familias",
      medical: "Apoyo médico de emergencia",
      education: "Becas de estudio para niños"
    },
    form: {
      title: "Hacer una Donación de Caridad",
      subtitle: "Cantidad mínima: 100€. Tu generosidad cambia vidas.",
      amountLabel: "Cantidad de tu donación caritativa (mínimo 100€)",
      customPlaceholder: "O introduce una cantidad (mín. 100€)",
      typeLabel: "Tipo de donación",
      types: {
        unique: "Donación única",
        monthly: "Donación mensual recurrente",
        quarterly: "Donación trimestral",
        annual: "Donación anual"
      },
      firstName: "Nombre *",
      lastName: "Apellido *",
      email: "Correo electrónico *",
      message: "Mensaje (opcional)",
      messagePlaceholder: "Comparte tus motivaciones o dedica tu donación...",
      receipt: "Deseo recibir un recibo fiscal",
      circle: "Acepto ser mencionado en el Círculo de Bienhechores",
      submit: "🤲 Hacer mi donación de caridad (mín. 100€)",
      secure: "✓ Pago 100% seguro • ✓ Recibo fiscal disponible"
    },
    thankYou: {
      title: "Gracias por tu Gran Generosidad",
      description: "Tu donación de caridad hace una diferencia concreta en la vida de muchas personas. Gracias a tu generosidad, podemos continuar nuestras acciones de ayuda y solidaridad con quienes más lo necesitan. Que tu gesto sea bendecido.",
      gratitude: "🙏 Con nuestra más profunda gratitud 🙏"
    }
  },
  soutien: {
    title: "Apoyo al Desarrollo de la Orden",
    generosityInAction: "Tu Generosidad en Acción",
    message: "El mínimo o más de tu donación es generosidad que nos permite planificar nuestras acciones de ayuda y solidaridad para personas necesitadas.",
    minimumLabel: "Donación Mínima de Apoyo",
    amount: "50€",
    contributeTitle: "Contribuir a nuestra Misión",
    contributeDescription: "Tus donaciones de apoyo permiten a la Gran Orden del Círculo continuar transmitiendo enseñanzas esotéricas, organizar eventos espirituales y mantener nuestra infraestructura. Cada contribución ayuda a preservar y difundir la tradición hermética.",
    funding: {
      title: "Financiación de Formaciones",
      items: [
        "Creación de nuevos cursos online",
        "Remuneración de profesores cualificados",
        "Producción de contenido video HD",
        "Desarrollo de materiales pedagógicos",
        "Organización de seminarios y retiros"
      ]
    },
    infrastructure: {
      title: "Mantenimiento de Infraestructuras",
      items: [
        "Mantenimiento de comandancias regionales",
        "Biblioteca esotérica y archivos",
        "Plataforma digital y sitio web",
        "Adquisición de nuevas obras raras",
        "Equipos rituales y accesorios"
      ]
    },
    editorial: {
      title: "Proyectos Editoriales",
      items: [
        "Publicación de la revista trimestral",
        "Edición de libros esotéricos",
        "Traducción de textos antiguos",
        "Cuadernos de estudios herméticos",
        "Difusión gratuita de contenidos"
      ]
    },
    international: {
      title: "Proyección Internacional",
      items: [
        "Apertura de nuevas comandancias",
        "Conferencias internacionales",
        "Intercambios con otras órdenes",
        "Traducción de formaciones",
        "Presencia en eventos espirituales"
      ]
    },
    budget: {
      title: "Presupuesto Anual 2026",
      training: "Formaciones",
      infrastructure: "Infraestructuras",
      editorial: "Edición",
      outreach: "Proyección"
    },
    levels: {
      title: "Niveles de Apoyo Mensual",
      friend: {
        name: "Amigo de la Orden",
        price: "10€",
        period: "/mes",
        benefits: [
          "Agradecimiento en el sitio",
          "Boletín exclusivo",
          "Insignia Amigo del GOC"
        ],
        button: "Apoyar"
      },
      benefactor: {
        name: "Benefactor",
        price: "25€",
        period: "/mes",
        badge: "RECOMENDADO",
        benefits: [
          "Todas las ventajas anteriores",
          "Acceso a contenidos exclusivos",
          "Invitación a eventos VIP",
          "Revista trimestral gratuita"
        ],
        button: "Apoyar"
      },
      patron: {
        name: "Gran Mecenas",
        price: "50€",
        period: "/mes",
        benefits: [
          "Todas las ventajas anteriores",
          "Mención en el Panteón de Mecenas",
          "Consulta espiritual anual",
          "Regalo espiritual personalizado"
        ],
        button: "Apoyar"
      }
    },
    form: {
      title: "Donación Única",
      amountLabel: "Cantidad de tu apoyo",
      customPlaceholder: "Otra cantidad",
      typeLabel: "Tipo de apoyo",
      types: {
        unique: "Donación única",
        monthly: "Apoyo mensual recurrente"
      },
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico *",
      submit: "Apoyar ahora",
      secure: "✓ Pago 100% seguro • ✓ Cancelación posible en cualquier momento"
    }
  },
  sympathie: {
    title: "Donación de Simpatía",
    generosityInAction: "Tu Generosidad en Acción",
    message: "El mínimo o más de tu donación es generosidad que nos permite planificar nuestras acciones de ayuda y solidaridad para personas necesitadas.",
    minimumLabel: "Donación Mínima de Simpatía",
    amount: "25€",
    gestureTitle: "Un Gesto del Corazón",
    gestureDescription: "La donación de simpatía es un gesto libre y espontáneo que no requiere contraprestación. Es una manifestación de tu apoyo y conexión con los valores de la Gran Orden del Círculo, sin expectativa ni obligación.",
    freedom: {
      title: "Una Libertad Total",
      description: "A diferencia de otras formas de donación, la donación de simpatía es totalmente libre: cantidad libre (mínimo 25€), frecuencia libre, anonimato posible. Es simplemente una forma de expresar tu aprecio por el trabajo de la Orden y contribuir, a tu medida, a la preservación de la tradición esotérica."
    },
    why: {
      title: "¿Por qué hacer una donación de simpatía?",
      items: [
        "Aprecias nuestra misión y valores",
        "Deseas apoyar sin comprometerte",
        "Quieres ofrecer un gesto puntual",
        "No puedes hacerte miembro pero quieres ayudar",
        "Sientes una conexión espiritual con la Orden"
      ]
    },
    usage: {
      title: "¿Cómo se utiliza?",
      description: "Las donaciones de simpatía contribuyen a nuestras acciones de ayuda y solidaridad. Se utilizan donde la necesidad es mayor:",
      items: [
        "Ayuda a personas en dificultad",
        "Acciones de solidaridad comunitaria",
        "Desarrollo de nuevos contenidos gratuitos",
        "Proyectos especiales y oportunidades",
        "Fondo de reserva para imprevistos"
      ]
    },
    noReturn: {
      title: "Ninguna Contraprestación, Solo Gratitud",
      description: "No te ofrecemos nada a cambio de tu donación de simpatía, excepto nuestra profunda gratitud. No recibirás boletín especial, invitación exclusiva, reconocimiento público (a menos que lo desees). Es un acto puro de generosidad y bondad."
    },
    testimonials: {
      title: "Por qué hicieron una donación de simpatía",
      items: [
        {
          quote: "No soy miembro del GOC pero leo vuestras publicaciones gratuitas desde hace 2 años. Me han aportado mucho y quería simplemente dar las gracias.",
          author: "Marie L., simpatizante"
        },
        {
          quote: "Vuestro trabajo de preservación de las tradiciones esotéricas es precioso. No puedo comprometerme plenamente pero quería contribuir a mi manera.",
          author: "Jean-Marc D., amigo de la Orden"
        },
        {
          quote: "Fui miembro hace unos años y tuve que dejarlo por razones personales. Esta pequeña donación es mi forma de mantenerme conectada con la fraternidad.",
          author: "Sophie R., antigua miembro"
        }
      ]
    },
    form: {
      title: "Hacer una Donación de Simpatía",
      subtitle: "Cantidad mínima: 25€. Cada gesto cuenta y se aprecia.",
      amountLabel: "Cantidad de tu donación (mínimo 25€)",
      customPlaceholder: "O introduce una cantidad (mín. 25€)",
      optionalInfo: "La información siguiente es opcional",
      firstName: "Nombre (opcional)",
      lastName: "Apellido (opcional)",
      email: "Correo electrónico (opcional)",
      emailNote: "Solo para recibo de confirmación",
      message: "¿Un mensaje para nosotros? (opcional)",
      messagePlaceholder: "Déjanos una nota si lo deseas...",
      anonymous: "Prefiero permanecer totalmente anónimo",
      mention: "Podéis mencionar mi nombre en vuestros agradecimientos públicos",
      submit: "💛 Enviar mi donación de simpatía (mín. 25€)",
      secure: "✓ Pago 100% seguro"
    },
    thankYou: {
      title: "Desde el fondo del corazón, gracias",
      description: "Cada donación de simpatía, sea cual sea su cantidad, se recibe con profunda gratitud. Estos gestos espontáneos de generosidad nos recuerdan que nuestra misión toca corazones y contribuye realmente al bienestar espiritual de muchas personas. Gracias por estar aquí.",
      gratitude: "🙏 Con todo nuestro reconocimiento 🙏"
    }
  },
  common: {
    contact: {
      title: "Contacto",
      headquarters: "Sede",
      france: "Francia",
      address: "A.P. 13241",
      city: "Yaundé - Camerún",
      contactPerson: "Richard Mbouma Kohomm",
      street: "11 av. Joseph Rollo",
      zipCity: "78320 La Verrière – Francia",
      email: "mkohomm@gmail.com"
    }
  }
},
      contact: {
        title: "Contacto",
        headquarters: "Sede",
        france: "Francia"
      },
      common: {
        securePayment: "Pago 100% seguro",
        cancel: "Cancelar",
        confirm: "Confirmar",
        save: "Guardar",
        close: "Cerrar",
        loading: "Cargando...",
        error: "Error",
        success: "Éxito"
      }
    }
  },

  // ITALIAN (COMPLETE)
  it: {
    translation: {
      nav: {
        home: "Home",
        goc: "GOC",
        gocSubtitle: "Gran Ordine del Cerchio Fraternità",
        gocOrganisation: "Organizzazione",
        gocOrganisationDesc: "La nostra struttura",
        gocActions: "Azioni",
        gocActionsDesc: "Le nostre iniziative",
        gocCharity: "Carità",
        gocCharityDesc: "Opere filantropiche",
        gocFraternity: "Fratellanza",
        gocFraternityDesc: "Legami spirituali",
        formation: "Formazione",
        formationEsoterism: "Esoterismo",
        formationEsoterismDesc: "Antichi misteri",
        formationPhilosophy: "Filosofia",
        formationPhilosophyDesc: "Pensiero sacro",
        formationPowers: "Poteri",
        formationPowersDesc: "Sviluppo interiore",
        library: "Biblioteca",
        libraryAccessories: "Accessori rituali",
        libraryAccessoriesDesc: "Strumenti sacri",
        libraryBooks: "Libri",
        libraryBooksDesc: "Conoscenza ancestrale",
        libraryJournals: "Riviste",
        libraryJournalsDesc: "Pubblicazioni",
        libraryVideos: "Video",
        libraryVideosDesc: "Insegnamenti",
        becomeMember: "Diventa Membro",
        memberApprentice: "Membro Apprendista",
        memberApprenticeDesc: "Primi passi",
        memberBrotherSister: "Membro Fratello/Sorella",
        memberBrotherSisterDesc: "Impegno",
        memberAuditor: "Apprendista Ascoltatore",
        memberAuditorDesc: "Scoperta",
        donation: "Donazione",
        donationCharity: "Carità",
        donationCharityDesc: "Aiutare gli altri",
        donationSupport: "Supporto",
        donationSupportDesc: "Contribuire",
        donationSympathy: "Simpatia",
        donationSympathyDesc: "Partecipare",
        members: "Area Membri",
        login: "Accedi",
        signup: "Registrati",
        logout: "Disconnetti",
        myAccount: "Il mio account",
        closeMenu: "Chiudi menu",
        openMenu: "Apri menu"
      },enseignements: {
        meta: {
          title: "Insegnamenti Iniziatici | GOC",
          description: "Insegnamenti iniziatici per cambiare la tua vita - Grande Ordine del Cerchio"
        },
        hero: {
          subtitle: "Via Iniziatica",
          title: "Insegnamenti Iniziatici",
          titleHighlight: "per cambiare la tua vita"
        },
        introduction: {
          quote: "Indipendentemente dall'età, dal sesso o dalla cultura, tutti aspirano al successo nella vita. Per raggiungerlo, devi sfruttare la forza delle tue energie positive e delle tue qualità per imporre te stesso e avere successo.",
          paragraph1: "Pertanto, il miglior investimento che puoi fare se vuoi avere successo è sfruttare il tuo bagliore interiore, cioè la tua vera personalità, i tuoi punti di forza e le tue qualità positive.",
          study: "Un recente studio americano mostra che il successo di un individuo dipende per il {{percentagePersonality}} dalla sua personalità; il restante {{percentageKnowledge}} rappresenta la sua conoscenza e esperienza.",
          conclusion: "{{goc}} ti dà le chiavi per raggiungere questo obiettivo."
        },
        mainContent: {
          title: "Gli Insegnamenti del GOC",
          subtitle: "Conoscenza filosofica e ideologica, chiavi e tecniche estremamente potenti per l'acquisizione dei poteri e lo sviluppo personale!"
        },
        pillars: {
          esoterisme: {
            title: "Esoterismo",
            items: [
              "Il concetto di Dio",
              "Conoscenza delle religioni",
              "L'immortalità",
              "Essere se stessi",
              "La vita incantata",
              "Il magnetismo",
              "L'umanesimo",
              "Le ideologie",
              "La vita, l'esistenza, la morte",
              "Lo Yin e lo Yang",
              "Il Sé e l'Altro"
            ]
          },
          philosophie: {
            title: "Filosofia",
            items: [
              { title: "Pensieri", desc: "africana, cinese, indiana, greca" },
              { title: "Credenze", desc: "origine del sacro, storia delle religioni" },
              { title: "Mitologie", desc: "eroe dai mille volti" },
              { title: "Saggezza", desc: "i cinque pilastri" }
            ]
          },
          pouvoirs: {
            title: "Poteri",
            items: [
              "Connettersi alle Forze benefiche",
              "Scoprire il proprio Essere interiore",
              "Purificare la propria psiche",
              "Dominare la propria mente",
              "Risvegliare le proprie capacità nascoste",
              "Influenzare il proprio ambiente senza agire fisicamente",
              "Rigenerarsi fisicamente",
              "Acquisire una migliore salute",
              "Aumentare la propria aspettativa di vita",
              "Fissarsi obiettivi e raggiungerli",
              "Accedere al benessere materiale",
              "Migliorare la qualità della propria vita",
              "Accedere al Risveglio Spirituale",
              "Proteggersi da tutti i colpi di sfortuna qualunque ne sia l'origine"
            ],
            more: "E altro ancora..."
          }
        },
        development: {
          title: "Sviluppo dei Poteri",
          quote: "Tutti coloro che cercano l'evoluzione spirituale e l'acquisizione dei poteri riceveranno insegnamenti che gli permetteranno di acquisire una personalità magnetica e radiosa.",
          cta: "Inizia la tua iniziazione"
        },
        footerQuote: "Una vera purificazione, l'accesso agli stati di coscienza più elevati e l'acquisizione di poteri agenti.",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "Caricamento...",
    "noSubscription": {
      "title": "Nessun Abbonamento Attivo",
      "description": "Devi sottoscrivere un piano di abbonamento per accedere all'area membri",
      "button": "Scegli un Abbonamento"
    },
    "welcome": "Benvenuto",
    "member": "Membro",
    "active": "Attivo",
    "contentSections": {
      "esotericTraining": {
        "title": "Formazione Esoterica",
        "description": "Accedi agli insegnamenti di base"
      },
      "philosophicalTraining": {
        "title": "Formazione Filosofica",
        "description": "Approfondisci la tua conoscenza"
      },
      "powerDevelopment": {
        "title": "Sviluppo dei Poteri",
        "description": "Contenuto premium esclusivo"
      },
      "library": {
        "title": "Biblioteca",
        "description": "Accesso alle risorse documentarie"
      },
      "videos": {
        "title": "Video",
        "description": "Contenuti video esclusivi"
      }
    },
    "locked": {
      "requires": "Richiede",
      "upgradeButton": "Migliora l'Abbonamento"
    },
    "access": "Accedi",
    "upgradeCTA": {
      "title": "Sblocca Più Contenuti",
      "description": "Migliora il tuo abbonamento per accedere a tutti i contenuti esclusivi",
      "button": "Migliora"
    },
    "roles": {
      "auditeur": {
        "name": "Ascoltatore",
        "description": "Accesso base alla formazione"
      },
      "apprenti": {
        "name": "Apprendista",
        "description": "Formazione filosofica avanzata"
      },
      "frere-soeur": {
        "name": "Fratello/Sorella",
        "description": "Accesso completo a tutti i contenuti"
      }
    }
  },
  goc: {
  actions: {
    title: "Azioni del GOC",
    subtitle: "Le Nostre Azioni nel Mondo",
    items: {
      seminars: { title: "Seminari Iniziatici", description: "Organizzazione di seminari e ritiri spirituali che permettono ai membri di approfondire il loro cammino esoterico e vivere esperienze iniziatiche trasformative." },
      conferences: { title: "Conferenze Pubbliche", description: "Diffusione di saperi esoterici e filosofici attraverso conferenze aperte al pubblico su temi spirituali, mistici e metafisici." },
      publications: { title: "Pubblicazioni", description: "Edizione di libri, riviste e documenti pedagogici che preservano e trasmettono gli insegnamenti tradizionali dell'esoterismo occidentale e orientale." },
      rituals: { title: "Rituali Collettivi", description: "Celebrazione di rituali stagionali e iniziatici che permettono ai membri di connettersi con le forze cosmiche e rafforzare l'egregore dell'Ordine." }
    },
    program: {
      title: "Programma Annuale",
      seasons: {
        spring: { name: "Primavera", activity: "Rituali di equinozio, seminario di rinnovamento spirituale" },
        summer: { name: "Estate", activity: "Ritiro estivo, celebrazione del solstizio, iniziazioni" },
        autumn: { name: "Autunno", activity: "Seminari filosofici, rituali di raccolto spirituale" },
        winter: { name: "Inverno", activity: "Solstizio d'inverno, meditazioni profonde, insegnamenti segreti" }
      }
    }
  },
  charity: {
    title: "Carità & Opere Sociali",
    serviceTitle: "Servizio Disinteressato",
    serviceDesc: "Nel cuore del nostro insegnamento esoterico si trova il principio del servizio disinteressato. La vera saggezza si acquisisce non solo attraverso lo studio, ma anche attraverso l'azione compassionevole verso i nostri simili.",
    works: {
      spiritual: { title: "Assistenza Spirituale", description: "Supporto spirituale gratuito per persone in angoscia morale o esistenziale. I nostri membri formati offrono ascolto, consiglio e supporto energetico." },
      material: { title: "Aiuto Materiale", description: "Distribuzione di aiuto materiale a famiglie bisognose: cibo, vestiti, supporto finanziario occasionale per situazioni di emergenza." },
      education: { title: "Educazione Gratuita", description: "Corsi gratuiti di filosofia, meditazione e sviluppo personale per persone che non possono accedere agli insegnamenti a pagamento." },
      energy: { title: "Guarigione Energetica", description: "Sessioni di cura energetica e guarigione olistica offerte gratuitamente a persone che soffrono di malattie o squilibri." }
    },
    participate: { title: "Partecipa alle nostre Opere", description: "Ogni membro del GOC dedica tempo e risorse alle opere di carità. Unisciti a noi in questa missione di servizio e compassione.", donate: "Fai una donazione", volunteer: "Diventa volontario" }
  },
  fraternity: {
    title: "Fratellanza Universale",
    ourFraternity: "La nostra Fratellanza",
    description: "La Fratellanza del Gran Ordine del Cerchio è una comunità di donne e uomini, senza esclusione, di tutte le razze, tutte le etnie, tutti i paesi e tutte le nazionalità, che accettano volontariamente e senza alcuna restrizione di alcun tipo, di alcuna natura, di DIVENTARE MEMBRO e si impegnano a rispettare scrupolosamente la REGOLA in XII Principi che governa la VITA dell'Organizzazione del Gran Ordine del Cerchio.",
    transcendentLink: "Un Legame che Trascende",
    transcendentDesc: "La fratellanza all'interno del Gran Ordine del Cerchio non è mera cameratismo, ma un profondo legame spirituale che unisce anime nella loro ricerca di luce e conoscenza.",
    features: {
      spiritualHelp: { title: "Aiuto Spirituale Reciproco", description: "Fratelli e sorelle si aiutano a vicenda nel loro viaggio iniziatico" },
      knowledge: { title: "Condivisione della Conoscenza", description: "Trasmissione della conoscenza esoterica tra membri iniziati" },
      mutualSupport: { title: "Supporto Reciproco", description: "Presenza e accompagnamento nelle prove della vita" },
      rituals: { title: "Rituali Fraterni", description: "Cerimonie che rafforzano i legami tra i membri dell'Ordine" },
      network: { title: "Rete Internazionale", description: "Connessioni con membri in tutto il mondo" },
      meditation: { title: "Meditazioni Collettive", description: "Pratiche spirituali di gruppo per amplificare l'energia" }
    },
    commanderies: {
      title: "Comanderie Fraterne",
      description: "Ogni regione ha la sua comanderia, un luogo sacro dove i membri si riuniscono per coltivare la fratellanza, praticare rituali e condividere insegnamenti.",
      activities: { meditation: "Riunioni mensili di meditazione e studio", celebrations: "Celebrazioni di solstizi ed equinozi", meals: "Pasti fraterni e momenti di convivialità", library: "Biblioteca condivisa di opere esoteriche" }
    },
    join: { title: "Unisciti alla nostra Fratellanza", description: "Diventa membro del Gran Ordine del Cerchio e scopri la profondità della fratellanza autentica basata sull'amore, la saggezza e il servizio.", button: "Scopri di più" }
  }
},
formation: {
  esoterism: {
    title: "Formazione in Esoterismo",
    subtitle: "Scienze Occulte",
    intro: "L'esoterismo designa l'insieme delle conoscenze segrete e delle pratiche spirituali trasmesse da maestro a discepolo dalla notte dei tempi. La nostra formazione completa vi inizia ai misteri nascosti dell'universo e alle leggi che regolano il piano sottile.",
    sections: {
      symbolism: {
        title: "Simbolismo Sacro",
        items: [
          "Interpretazione dei simboli ermetici",
          "Geometria sacra e numeri mistici",
          "Alfabeti magici e sigilli"
        ]
      },
      alchemy: {
        title: "Alchimia Spirituale",
        items: [
          "Grande Opera alchemica",
          "Trasmutazione interiore",
          "Pietra filosofale e elisir di vita"
        ]
      },
      kabbalah: {
        title: "Cabala & Albero della Vita",
        items: [
          "Studio dei 10 sefirot",
          "Sentieri dell'Albero della Vita",
          "Gematria e numerologia ebraica"
        ]
      },
      tarot: {
        title: "Tarocchi & Divinazione",
        items: [
          "Arcani maggiori e minori",
          "Arti divinatorie tradizionali",
          "Sviluppo dell'intuizione"
        ]
      }
    },
    program: {
      title: "Programma di Formazione",
      level1: {
        title: "Livello 1 - Apprendista (12 mesi)",
        description: "Fondamenti dell'esoterismo, simbolismo, meditazione, primi rituali"
      },
      level2: {
        title: "Livello 2 - Compagno (18 mesi)",
        description: "Alchimia, Cabala, astrologia esoterica, lavoro energetico avanzato"
      },
      level3: {
        title: "Livello 3 - Maestro (24 mesi)",
        description: "Insegnamenti segreti, alta magia, iniziazione ai misteri profondi"
      }
    },
    signup: "Iscriviti alla formazione"
  },
  philosophy: {
    title: "Formazione Filosofica",
    subtitle: "Filosofia Esoterica",
    intro: "La filosofia esoterica esplora le domande fondamentali dell'esistenza: chi siamo, da dove veniamo, dove andiamo? Il nostro insegnamento integra le grandi tradizioni filosofiche orientali e occidentali in una sintesi unica.",
    traditions: {
      hermetic: {
        title: "Filosofia Ermetica",
        description: "Studio dei Sette Principi Ermetici: Mentalismo, Corrispondenza, Vibrazione, Polarità, Ritmo, Causa ed Effetto, Genere. Applicazione pratica di queste leggi universali."
      },
      neoplatonic: {
        title: "Neoplatonismo & Gnosi",
        description: "Insegnamenti di Platone, Plotino e degli gnostici. La dottrina dell'Uno, l'emanazione dei mondi, la risalita dell'anima verso la sua fonte divina."
      },
      eastern: {
        title: "Sapienza Orientale",
        description: "Vedanta, Buddhismo, Taoismo: esplorazione delle filosofie orientali e delle loro pratiche contemplative. Non-dualità, vacuità, Wu Wei."
      },
      modern: {
        title: "Metafisica Moderna",
        description: "Sintesi tra scienza e spiritualità. Fisica quantistica e coscienza, nuovi paradigmi della realtà."
      }
    },
    themes: {
      title: "Temi Studiati",
      items: [
        "Natura della coscienza e dell'anima",
        "Cosmogonia e creazione del mondo",
        "Karma, reincarnazione e destino",
        "Libero arbitrio e determinismo",
        "Etica spirituale e morale esoterica"
      ]
    },
    methods: {
      title: "Metodi Pedagogici",
      items: [
        "Corsi teorici e seminari",
        "Dialoghi socratici e dibattiti",
        "Meditazioni filosofiche guidate",
        "Letture commentate di testi sacri",
        "Lavori scritti e dissertazioni"
      ]
    },
    continuous: {
      title: "Formazione Continua",
      description: "La formazione filosofica si estende su 3 anni con corsi mensili, seminari trimestrali e accesso alla nostra biblioteca esoterica.",
      button: "Programma dettagliato"
    }
  },
  powers: {
    title: "Sviluppo dei Poteri",
    subtitle: "Facoltà Superiori",
    intro: "Al di là delle capacità ordinarie, l'essere umano possiede facoltà latenti che può sviluppare attraverso l'allenamento spirituale. La nostra formazione vi guida nel risveglio di questi poteri psichici e spirituali.",
    warning: {
      title: "⚠️ Avvertimento Importante",
      description: "Lo sviluppo dei poteri richiede una preparazione morale e spirituale rigorosa. Questi insegnamenti sono trasmessi solo ai membri iniziati che abbiano dimostrato maturità ed etica irreprensibile."
    },
    abilities: {
      clairvoyance: {
        title: "Chiaroveggenza",
        description: "Sviluppo della visione sottile che permette di percepire i piani energetici, le aure e le entità spirituali.",
        items: ["Attivazione del 3° occhio", "Visione eterea e astrale", "Lettura delle aure"]
      },
      telepathy: {
        title: "Telepatia",
        description: "Comunicazione mentale diretta, trasmissione e ricezione di pensieri, connessione con le coscienze a distanza.",
        items: ["Trasmissione del pensiero", "Ricezione intuitiva", "Comunicazione con le guide"]
      },
      magnetism: {
        title: "Magnetismo",
        description: "Padronanza dell'energia vitale per guarire, armonizzare e trasformare. Tecniche di magnetismo curativo e imposizione delle mani.",
        items: ["Accumulo di energia", "Guarigione energetica", "Armonizzazione dei chakra"]
      },
      astral: {
        title: "Proiezione Astrale",
        description: "Uscita dal corpo fisico e viaggio nei piani sottili. Esplorazione consapevole delle dimensioni spirituali.",
        items: ["Decorporazione volontaria", "Viaggio astrale consapevole", "Esplorazione dei piani superiori"]
      },
      psychometry: {
        title: "Psicometria",
        description: "Lettura delle energie impregnate negli oggetti, luoghi e persone. Capacità di percepire la storia energetica.",
        items: ["Lettura di oggetti", "Percezione delle memorie", "Psicometria avanzata"]
      },
      meditation: {
        title: "Meditazione Profonda",
        description: "Stati di coscienza modificati, samadhi, unione mistica. Accesso alle dimensioni trascendenti dell'essere.",
        items: ["Stati meditativi profondi", "Esperienze mistiche", "Unione con il divino"]
      }
    },
    program: {
      title: "Programma Progressivo",
      subtitle: "Il risveglio dei poteri segue un processo graduale e sicuro nel corso di diversi anni",
      year1: {
        title: "Anno 1",
        description: "Preparazione & Purificazione"
      },
      year2: {
        title: "Anno 2",
        description: "Attivazione & Sviluppo"
      },
      year3: {
        title: "Anno 3+",
        description: "Padronanza & Trasmissione"
      }
    }
  }
},
      library: {
  intro: {
    quote: "La materia si ricicla, lo spirito si risorse…",
    description: "Luogo di conoscenze, la Biblioteca del GOC mette a disposizione dei membri, degli uditori affiliati e dei simpatizzanti, la sua pubblicazione «Mâat», i video e i fascicoli dei suoi insegnamenti, libri di filosofia, saggezza, conoscenze segrete. Così come le tenute dei membri e altri accessori per i riti.",
    orderForm: "Modulo d'ordine"
  },
  accessories: {
    description: "Gli accessori rituali sono strumenti sacri utilizzati nelle pratiche esoteriche e nelle cerimonie iniziatiche. Ogni oggetto è consacrato e caricato energeticamente secondo le tradizioni ermetiche.",
    items: {
      candles: { title: "Candele Rituali", description: "Candele consacrate di diversi colori per rituali specifici: bianco (purificazione), oro (spiritualità), rosso (amore), verde (prosperità).", availability: "Disponibile per i membri" },
      crystals: { title: "Cristalli & Pietre", description: "Collezione di cristalli purificati e programmati: quarzo, ametista, citrino, ossidiana. Ogni pietra possiede le sue proprietà energetiche specifiche.", availability: "Disponibile per i membri" },
      incense: { title: "Incensi Sacri", description: "Incensi tradizionali per la purificazione e l'elevazione vibrazionale: incenso, mirra, benzoino, sandalo. Ricette ancestrali dei templi.", availability: "Disponibile per i membri" },
      sword: { title: "Spada Rituale", description: "Spada simbolica utilizzata per tracciare i cerchi di protezione e dirigere l'energia durante i rituali. Forgiata secondo le tradizioni ermetiche.", availability: "Riservato agli iniziati" },
      chalice: { title: "Calice Consacrato", description: "Coppa sacra rappresentante l'elemento acqua e il principio femminile. Utilizzata nei rituali di offerta e comunione spirituale.", availability: "Riservato agli iniziati" },
      malas: { title: "Corone & Malas", description: "Corone di meditazione in legno sacro, pietre semipreziose o semi di rudraksha. 108 perle per la pratica del japa (ripetizione di mantra).", availability: "Disponibile per i membri" },
      feathers: { title: "Piume Rituali", description: "Piume di uccelli sacri utilizzate per disperdere il fumo dell'incenso e purificare lo spazio rituale. Tradizione amerindia e sciamanica.", availability: "Disponibile per i membri" },
      talismans: { title: "Pentacoli & Talismani", description: "Pentacoli incisi secondo le tradizioni della magia salomonica. Talismani personalizzati caricati secondo il tuo tema astrologico.", availability: "Su ordinazione" },
      robes: { title: "Vesti & Abiti", description: "Vesti cerimoniali, mantelli e abiti rituali nei colori dell'Ordine. Confezionati in tessuti naturali secondo la tradizione.", availability: "Riservato ai membri" }
    },
    cta: { title: "Ordinare Accessori", description: "Gli accessori rituali sono disponibili all'acquisto per i membri del GOC. Ogni oggetto è consacrato individualmente prima della consegna.", button: "Accedere al negozio", note: "* Accesso richiesto - Riservato ai membri iniziati" }
  },journals: {
    title: "Riviste & Pubblicazioni",
    intro: "Il Gran Ordine del Cerchio pubblica regolarmente riviste, bollettini e riviste dedicate alla formazione continua dei suoi membri e alla diffusione dei saperi esoterici.",
    mainJournal: {
      title: "La Luce del Cerchio",
      subtitle: "Rivista ufficiale del GOC - Pubblicazione trimestrale",
      summary: "Sommario:",
      format: "Formato:",
      items: [
        "Insegnamenti esoterici approfonditi",
        "Rituali e pratiche stagionali",
        "Testimonianze dei membri",
        "Notizie dell'Ordine"
      ],
      formatItems: [
        "40-60 pagine illustrate",
        "Versione cartacea e digitale",
        "Archivi completi dal 1985",
        "Riservato ai membri"
      ]
    },
    publications: {
      bulletin: {
        title: "Bollettino della Fratellanza",
        description: "Bollettino mensile per mantenere il legame tra i membri. Informazioni su incontri, seminari ed eventi in arrivo.",
        frequency: "Mensile",
        pages: "12-16 pagine",
        access: "Solo membri"
      },
      cahiers: {
        title: "Quaderni di Studi Ermetici",
        description: "Rivista accademica approfondita su temi esoterici specifici: alchimia, Kabbalah, astrologia, simbolismo, filosofia mistica.",
        frequency: "Bimestrale",
        pages: "60-80 pagine",
        access: "Membri iniziati"
      },
      lettres: {
        title: "Lettere del Gran Maestro",
        description: "Insegnamenti diretti del Gran Maestro dell'Ordine, che trasmettono conoscenze profonde e orientamenti spirituali per membri avanzati.",
        frequency: "Trimestrale",
        pages: "8-12 pagine",
        access: "Iniziati di 2° grado"
      },
      almanach: {
        title: "Almanacco Esoterico",
        description: "Pubblicazione annuale contenente date importanti, fasi lunari, posizioni planetarie, calendario dei rituali e pratiche consigliate.",
        frequency: "Annuale",
        pages: "120 pagine",
        access: "Accessibile a tutti"
      }
    },
    archives: {
      title: "Archivi Storici",
      description: "Accedi agli archivi completi delle nostre pubblicazioni dalla fondazione dell'Ordine. Decenni di sapere esoterico a portata di mano.",
      stats: {
        journal: "Numeri de La Luce del Cerchio",
        bulletins: "Bollettini mensili",
        years: "Anni di archivi"
      }
    },
    cta: {
      title: "Accedere alle Pubblicazioni",
      description: "Diventa membro del Gran Ordine del Cerchio per ricevere le nostre pubblicazioni e accedere agli archivi completi.",
      becomeMember: "Diventa membro",
      consultArchives: "Consulta archivi"
    }
  },
  books: {
    title: "Biblioteca Esoterica",
    intro: "La nostra biblioteca contiene una collezione eccezionale di opere esoteriche, ermetiche e filosofiche. Alcuni testi rari sono riservati ai membri iniziati.",
    sections: {
      alchemy: "Alchimia & Ermetismo",
      kabbalah: "Kabbalah & Mistica Ebraica",
      magic: "Magia Cerimoniale",
      philosophy: "Filosofia Esoterica",
      tarot: "Tarot & Simbolismo"
    },
    access: {
      open: "Accessibile a tutti",
      members: "Riservato ai membri",
      initiates: "Riservato agli iniziati"
    },
    onSite: {
      title: "Consultazione in Loco",
      description: "I membri possono consultare l'intera biblioteca nelle nostre sedi. Atmosfera studiata favorevole alla meditazione.",
      note: "Disponibile su appuntamento per i membri"
    },
    digital: {
      title: "Biblioteca Digitale",
      description: "Accesso alla nostra biblioteca digitale con centinaia di libri in formato PDF, accessibile 24/7 dal tuo spazio membro.",
      note: "Riservato ai membri attivi"
    }
  },
  videos: {
    title: "Videoteca Esoterica",
    intro: "La nostra videoteca propone conferenze, rituali filmati, meditazioni guidate e insegnamenti del Gran Maestro. Contenuto esclusivo per i membri del GOC.",
    categories: {
      conferences: {
        title: "Conferenze",
        description: "Conferenze magistrali sull'esoterismo, l'alchimia, la Kabbalah e la filosofia ermetica dai nostri maestri iniziati.",
        count: "45+ video",
        access: "Accesso membri"
      },
      meditations: {
        title: "Meditazioni Guidate",
        description: "Sessioni di meditazione guidata per lo sviluppo spirituale, l'attivazione dei chakra e la connessione con il divino.",
        count: "30+ video",
        access: "Accesso libero"
      },
      rituals: {
        title: "Rituali Filmati",
        description: "Registrazioni di rituali iniziatici, cerimonie stagionali e pratiche esoteriche trasmesse nell'Ordine.",
        count: "25+ video",
        access: "Solo iniziati"
      },
      courses: {
        title: "Corsi Teorici",
        description: "Corsi completi di formazione sull'esoterismo, le scienze occulte, la filosofia e il simbolismo sacro.",
        count: "60+ video",
        access: "Accesso membri"
      },
      energy: {
        title: "Pratiche Energetiche",
        description: "Esercizi pratici per lo sviluppo delle facoltà psichiche, lavoro energetico e magnetismo.",
        count: "35+ video",
        access: "Accesso membri"
      },
      secret: {
        title: "Insegnamenti Segreti",
        description: "Insegnamenti riservati trasmessi dal Gran Maestro sui misteri profondi della tradizione ermetica.",
        count: "20+ video",
        access: "Solo maestri"
      }
    },
    recent: {
      title: "Ultime Pubblicazioni",
      videos: [
        {
          title: "Introduzione alla Kabbalah pratica",
          description: "Conferenza del Gran Maestro sui fondamenti della Kabbalah e la sua applicazione nella vita quotidiana.",
          duration: "1h 25min",
          date: "Gennaio 2026",
          access: "Membri"
        },
        {
          title: "Meditazione di luna piena",
          description: "Meditazione guidata speciale per connettersi con le energie lunari e ricevere l'illuminazione.",
          duration: "45min",
          date: "Gennaio 2026",
          access: "Accesso libero"
        },
        {
          title: "Rituale del solstizio d'inverno 2025",
          description: "Registrazione completa del rituale cerimoniale celebrato durante il solstizio d'inverno alla Comanderia centrale.",
          duration: "2h 10min",
          date: "Dicembre 2025",
          access: "Iniziati"
        }
      ]
    },
    stats: {
      title: "La Nostra Collezione Video",
      total: "Video in totale",
      hours: "Contenuto esclusivo",
      quality: "Qualità HD & 4K",
      access: "Accesso illimitato"
    },
    cta: {
      title: "Accedere alla Videoteca",
      description: "Diventa membro per accedere all'intera nostra collezione video e beneficiare di nuovi contenuti ogni mese.",
      button: "Iscriviti ora"
    }
  }
},
      home: {
        title: "GRAN ORDINE DEL CERCHIO FRATERNITÀ",
        motto: "Dove si trova l'albero della conoscenza, si trova la felicità",
        subtitle: {
          line1: "Formazione esoterica e filosofica…",
          line2: "Fratellanza spirituale."
        },
        masterDestiny: "Accedi al dominio totale del tuo destino…",
        benefits: {
          connectForces: "Connettersi con Forze benefiche",
          innerBeing: "Scoprire il tuo Essere interiore",
          cleansePsyche: "Purificare la tua psiche",
          masterMind: "Dominare la tua mente",
          awakenPowers: "Risvegliare abilità nascoste",
          influence: "Influenzare l'ambiente senza azione fisica",
          regenerate: "Rigenerarsi fisicamente",
          longevity: "Aumentare l'aspettativa di vita",
          achieveGoals: "Fissare obiettivi e raggiungerli",
          materialWellbeing: "Accedere al benessere materiale",
          qualityOfLife: "Migliorare la qualità della vita",
          spiritualAwakening: "Accedere al Risveglio Spirituale",
          protection: "Proteggersi da ogni sfortuna indipendentemente dall'origine",
          betterHealth: "Acquisire migliore salute"
        },
        carousel: {
          seminar: "Seminario",
          prieure: "Priorato",
          group: "Gruppo Membri",
          symbols: "Simboli"
        },
        links: {
          formation: "La nostra Formazione",
          fraternity: "La nostra Fratellanza",
          seminars: "I nostri Seminari",
          actions: "Le nostre Azioni"
        },
        vision: {
          title: "La nostra Visione",
          goc: "Gran Ordine del Cerchio",
          secrets: "Conoscenza segreta, Sapienza spirituale e iniziatica,",
          awakening: "Risveglio dei poteri, Potere personale, Strumenti di benessere…",
          changeLife: "Cambia la tua vita e accedi al dominio totale di essa!",
          description: "Attraverso una formazione esoterica che ti dà accesso alla conoscenza segreta e alla sapienza spirituale e iniziatica, al risveglio dei poteri, potere personale e strumenti di benessere…",
          quote: "« L'Uomo fu concepito originariamente come un Essere puramente spirituale, emanato dal Principio Divino 'a immagine e somiglianza del Grande Spirito Creatore'. Durante la sua discesa nella materia, è mosso da un impulso gemello: Attrazione-Rifiuto, Desiderio-Repulsione. Rivestito di un corpo corruttibile, ora è separato dall'unità del Principio. La sua natura duale – materiale e spirituale – lo sottopone a un conflitto tra aspirazioni spirituali e le catene della materialità. Da allora, ha compiuto atti governati da questi impulsi per orgoglio. Ma l'uomo del desiderio cerca di ottenere la sua reintegrazione nel suo stato originale e di recuperare il suo corpo di gloria.",
          mission: "Lo scopo del GOC è illuminare l'Iniziato sulla sua natura, origine e destinazione. Egli o ella riceve insegnamenti essenzialmente pratici e iniziatici, che trattano di esoterismo, spiritualità, metafisica, i segreti degli Yoghi, filosofia e sviluppo personale; permettendo una vera purificazione, accesso agli stati più elevati di coscienza e l'acquisizione di poteri agenti."
        },
        nav: {
          becomeMember: "Diventa Membro",
          videos: "Video",
          donation: "Donazione",
          commanderies: "Comanderie",
          contacts: "Contatti",
          contact: "Contatto"
        },
        image: {
          alt: "Gran Ordine del Cerchio",
          caption: "Saggezza antica per l'uomo moderno"
        },
        footer: {
          copyright: "© 2026 Gran Ordine del Cerchio - Tutti i diritti riservati",
          sapientia: "Sapienza",
          fraternitas: "Fratellanza",
          spiritus: "Spirito"
        }
      },
      membership: {
        title: "Unisciti al nostro Ordine",
        subtitle: "Scegli il livello di impegno che corrisponde al tuo viaggio spirituale e filosofico",
        adhesion: "Appartenenza",
        formation: "Formazione",
        oneTime: "una volta",
        perYear: "all'anno",
        firstYear: "Primo anno",
        renewal: "Rinnovo",
        becomeMember: "Diventa Membro",
        renew: "Rinnova",
        currentSubscription: "Abbonamento Attuale",
        learnMore: "Scopri di più",
        mostPopular: "Più Popolare",
        active: "Attivo",
        expired: "Scaduto",
        current: "Attuale",
        activeSubscription: "Abbonamento Attivo",
        adhesionRequired: "Appartenenza richiesta",
        buyTrimester: "Acquista 1 Trimestre",
        buyCourse: "Acquista 1 Corso",
        processing: "Elaborazione...",
        signupAndBuy: "Registrati e acquista",
        pricePerTrimester: "Prezzo per trimestre",
        pricePerCourse: "Prezzo per corso",
        formationAccessible: "La formazione è accessibile solo ai membri attivi dell'Ordine.",
        cotisation: "Quota annuale",
        error: "Si è verificato un errore",
        whyJoin: "Perché diventare membro?",
        whyJoinDesc: "Unendoti al nostro ordine, accedi a una comunità dedicata al risveglio spirituale, alla conoscenza esoterica e all'aiuto reciproco fraterno.",
        benefit1: "Accesso a insegnamenti esclusivi",
        benefit2: "Partecipazione a eventi e seminari",
        benefit3: "Rete di fratellanza e aiuto reciproco",
        benefit4: "Biblioteca di risorse spirituali"
      },
      roles: {
        auditeur: {
          name: "Apprendista Ascoltatore",
          description: "Accesso base agli insegnamenti",
          formationTitle: "Formazione Apprendista Ascoltatore",
          formationDesc: "Corsi individuali à la carte",
          feature1: "Flessibilità nell'acquisto al tuo ritmo",
          feature2: "Accesso immediato al corso acquistato",
          feature3: "Contenuto ricco e dettagliato",
          totalCourses: "Totale di 40 corsi disponibili",
          totalCost: "Costo totale completo",
          totalDuration: "Formazione completa in 2 anni"
        },
        apprenti: {
          name: "Membro Apprendista",
          description: "Formazione completa",
          formationTitle: "Formazione Apprendista",
          formationDesc: "Formazione trimestrale strutturata",
          feature1: "Insegnamenti approfonditi ogni trimestre",
          feature2: "Monitoraggio personalizzato dei tuoi progressi",
          feature3: "Accesso a risorse esclusive",
          totalCost: "Costo totale della formazione",
          totalDuration: "Durata totale: 8 trimestri (2 anni)"
        },
        "frere-soeur": {
          name: "Membro Fratello/Sorella",
          description: "Accesso premium completo",
          feature1: "Tutti i contenuti e le formazioni",
          feature2: "Mentoraggio individuale",
          feature3: "Supporto prioritario 24/7",
          feature4: "Eventi esclusivi",
          feature5: "Rete internazionale"
        }
      },
      organisation: {
        motto: "Dove si trova l'albero della conoscenza, si trova la felicità",
        title: "Organizzazione del GOC",
        goc: "GOC",
        structure: "Il Gran Ordine del Cerchio è strutturato attorno a:",
        pillars: "Pilastri",
        grades: "Gradi",
        rule: "Regola",
        pillarsTitle: "Pilastri",
        pillar1: {
          title: "I – Iniziazione",
          item1: "Formazione",
          item2: "Perfezionamento"
        },
        pillar2: {
          title: "II – Uffici",
          item1: "Riti",
          item2: "Cerimonie"
        },
        pillar3: {
          title: "III – Carità",
          item1: "Opere caritatevoli",
          item2: "Donazioni"
        },
        pillar4: {
          title: "IV – Mutualità",
          item1: "Solidarietà degli iniziati",
          item2: "Supporto finanziario"
        },
        rulesTitle: "Regole del GOC",
        rules: {
          "1": "Fede nel Grande Spirito Divino",
          "2": "Fratellanza iniziatica e Dovere di solidarietà",
          "3": "Ideale di Amore, verità, giustizia e pace",
          "4": "Perfezionamento dei membri e dell'umanità",
          "5": "Pratica del Rituale e del Simbolismo",
          "6": "Rispetto per Opinioni e Credenze",
          "7": "Giuramento sui Simboli sacri",
          "8": "Riunione e lavoro nelle comanderie",
          "9": "Onorabilità, Lealtà e discrezione",
          "10": "Amore per la Patria, rispetto per le leggi, rispetto per le Autorità costituite",
          "11": "Comportamento saggio e dignitoso",
          "12": "Aiuto e Protezione reciproca"
        },
        structureTitle: "Organizzazione del GOC",
        level1: {
          title: "Livello 1: il Cerchio dei Fratelli",
          desc: "Il CC riunisce una comunità di fino a 770 fratelli"
        },
        level2: {
          title: "Livello 2: il Distretto",
          desc: "Il Distretto riunisce tutti i Cerchi dei Fratelli a livello dipartimentale"
        },
        level3: {
          title: "Livello 3: la Comanderia",
          desc: "La Comanderia riunisce tutti i Distretti a livello regionale"
        },
        level4: {
          title: "Livello 4: il Governatorato",
          desc: "Il Governatorato riunisce tutte le Comanderie a livello nazionale"
        },
        level5: {
          title: "Livello 5: Il Primato Supremo",
          desc: "Il Primato Supremo è l'Istanza suprema del GOC"
        },
        gradesTitle: "Gradi",
        grade: {
          "1": "Apprendista",
          "2": "Compagno",
          "3": "Ufficiale",
          "4": "Onorevole",
          "5": "Venerabile",
          "6": "Maestro",
          "7": "Gran Maestro"
        },
        administration: "Amministrazione",
        admin1: {
          title: "1) Il Cerchio",
          item1: "L'Assemblea dei Fratelli",
          item2: "Il Venerabile",
          item3: "La Segreteria",
          item4: "La Tesoreria",
          item5: "L'Intendenza",
          item6: "L'Officium"
        },
        admin2: {
          title: "2) Il Distretto",
          item1: "Il Consiglio del Distretto",
          item2: "Il Maestro",
          item3: "La Segreteria",
          item4: "La Tesoreria",
          item5: "L'Intendenza",
          item6: "L'Officium"
        },
        admin3: {
          title: "3) La Comanderia",
          item1: "Il Consiglio della Comanderia",
          item2: "Il Comandante",
          item3: "La Segreteria",
          item4: "La Tesoreria",
          item5: "L'Intendenza",
          item6: "L'Officium"
        },
        admin4: {
          title: "4) Il Governatorato/Legato",
          item1: "Il Cenacolo",
          item2: "Il Gran Maestro",
          item3: "La Segreteria",
          item4: "La Tesoreria",
          item5: "L'Intendenza",
          item6: "L'Officium"
        },
        globalGovernance: "Governance globale del GOC",
        global1: {
          title: "Il Congresso"
        },
        global2: {
          title: "Il Cenacolo Supremo",
          desc: "(Consiglio di Amministrazione del GOC)"
        },
        global3: {
          title: "Il Primato del GOC"
        },
        global4: {
          title: "Segreteria Generale",
          desc: "(Organo di gestione del GOC)"
        },
        global5: {
          title: "Tesoreria Centrale"
        },
        join: "Unisciti all'Ordine"
      },
      fraternity: {
        motto: "Dove si trova l'albero della conoscenza, si trova la felicità",
        title: "Fratellanza Universale",
        ourFraternity: "La nostra Fratellanza",
        description: "La Fratellanza del Gran Ordine del Cerchio è una comunità di donne e uomini, senza esclusione, di tutte le razze, tutte le etnie, tutti i paesi e tutte le nazionalità, che accettano volontariamente e senza alcuna restrizione di alcun tipo, di alcuna natura, di DIVENTARE MEMBRO e si impegnano a rispettare scrupolosamente la REGOLA in XII Principi che governa la VITA dell'Organizzazione del Gran Ordine del Cerchio.",
        transcendentLink: "Un Legame che Trascende",
        transcendentDesc: "La fratellanza all'interno del Gran Ordine del Cerchio non è mera cameratismo, ma un profondo legame spirituale che unisce anime nella loro ricerca di luce e conoscenza.",
        features: {
          spiritualHelp: "Aiuto Spirituale Reciproco",
          spiritualHelpDesc: "Fratelli e sorelle si aiutano a vicenda nel loro viaggio iniziatico",
          knowledge: "Condivisione della Conoscenza",
          knowledgeDesc: "Trasmissione della conoscenza esoterica tra membri iniziati",
          mutualSupport: "Supporto Reciproco",
          mutualSupportDesc: "Presenza e accompagnamento nelle prove della vita",
          rituals: "Rituali Fraterni",
          ritualsDesc: "Cerimonie che rafforzano i legami tra i membri dell'Ordine",
          network: "Rete Internazionale",
          networkDesc: "Connessioni con membri in tutto il mondo",
          meditation: "Meditazioni Collettive",
          meditationDesc: "Pratiche spirituali di gruppo per amplificare l'energia"
        },
        commanderies: "Comanderie Fraterne",
        commanderiesDesc: "Ogni regione ha la sua comanderia, un luogo sacro dove i membri si riuniscono per coltivare la fratellanza, praticare rituali e condividere insegnamenti.",
        activities: {
          meditation: "Riunioni mensili di meditazione e studio",
          celebrations: "Celebrazioni di solstizi ed equinozi",
          meals: "Pasti fraterni e momenti di convivialità",
          library: "Biblioteca condivisa di opere esoteriche"
        },
        joinTitle: "Unisciti alla nostra Fratellanza",
        joinDesc: "Diventa membro del Gran Ordine del Cerchio e scopri la profondità della fratellanza autentica basata sull'amore, la saggezza e il servizio.",
        learnMore: "Scopri di più"
      },
      charity: {
        motto: "Dove si trova l'albero della conoscenza, si trova la felicità",
        title: "Carità & Opere Sociali",
        serviceTitle: "Servizio Disinteressato",
        serviceDesc: "Nel cuore del nostro insegnamento esoterico si trova il principio del servizio disinteressato. La vera saggezza si acquisisce non solo attraverso lo studio, ma anche attraverso l'azione compassionevole verso i nostri simili.",
        works: {
          spiritual: "Assistenza Spirituale",
          spiritualDesc: "Supporto spirituale gratuito per persone in angoscia morale o esistenziale. I nostri membri formati offrono ascolto, consiglio e supporto energetico.",
          material: "Aiuto Materiale",
          materialDesc: "Distribuzione di aiuto materiale a famiglie bisognose: cibo, vestiti, supporto finanziario occasionale per situazioni di emergenza.",
          education: "Educazione Gratuita",
          educationDesc: "Corsi gratuiti di filosofia, meditazione e sviluppo personale per persone che non possono accedere agli insegnamenti a pagamento.",
          energy: "Guarigione Energetica",
          energyDesc: "Sessioni di cura energetica e guarigione olistica offerte gratuitamente a persone che soffrono di malattie o squilibri."
        },
        participate: "Partecipa alle nostre Opere",
        participateDesc: "Ogni membro del GOC dedica tempo e risorse alle opere di carità. Unisciti a noi in questa missione di servizio e compassione.",
        donate: "Fai una donazione",
        volunteer: "Diventa volontario"
      },
      "donation": {
    "charite": {
      "title": "Donazione di Carità",
      "generosityInAction": "La Tua Generosità in Azione",
      "message": "Il minimo o più della tua donazione è generosità che ci permette di pianificare le nostre azioni di aiuto e solidarietà per le persone bisognose.",
      "minimumLabel": "Donazione Minima di Carità",
      "amount": "€100",
      "actTitle": "Un Atto di Grande Generosità",
      "actDescription": "La donazione di carità rappresenta un impegno significativo nei valori di mutuo soccorso e solidarietà del Grande Ordine del Cerchio. Attraverso questo gesto generoso, ci permetti di sostenere sostenibilmente le nostre azioni caritatevoli e aiutare concretamente chi ne ha più bisogno.",
      "impact": {
        "title": "Impatto della Tua Donazione di Carità",
        "items": [
          "Aiuto diretto a persone in grande difficoltà",
          "Finanziamento di programmi di solidarietà",
          "Sostegno alle famiglie bisognose",
          "Azioni umanitarie concrete",
          "Aiuto d'emergenza durante le crisi"
        ]
      },
      "recognition": {
        "title": "Riconoscimento Speciale",
        "description": "Come donatore caritatevole, ricevi un riconoscimento speciale:",
        "items": [
          "Menzione nel Cerchio dei Benefattori (se desiderato)",
          "Rapporto annuale sull'uso dei fondi",
          "Invito agli eventi caritatevoli dell'Ordine",
          "Certificato di riconoscimento (su richiesta)",
          "Ricevuta fiscale per detrazione"
        ]
      },
      "examples": {
        "title": "Esempi di Azioni Finanziate",
        "food": "Aiuto alimentare per famiglie",
        "medical": "Supporto medico d'emergenza",
        "education": "Borse di studio per bambini"
      },
      "form": {
        "title": "Fai una Donazione di Carità",
        "subtitle": "Importo minimo: €100. La tua generosità cambia vite.",
        "amountLabel": "Importo della tua donazione di carità (minimo €100)",
        "customPlaceholder": "Oppure inserisci un importo (min. €100)",
        "typeLabel": "Tipo di donazione",
        "types": {
          "unique": "Donazione una tantum",
          "monthly": "Donazione mensile ricorrente",
          "quarterly": "Donazione trimestrale",
          "annual": "Donazione annuale"
        },
        "firstName": "Nome *",
        "lastName": "Cognome *",
        "email": "Email *",
        "message": "Messaggio (opzionale)",
        "messagePlaceholder": "Condividi le tue motivazioni o dedica la tua donazione...",
        "receipt": "Desidero ricevere una ricevuta fiscale",
        "circle": "Accetto di essere menzionato nel Cerchio dei Benefattori",
        "submit": "🤲 Fai la mia donazione di carità (min. €100)",
        "secure": "✓ Pagamento 100% sicuro • ✓ Ricevuta fiscale disponibile"
      },
      "thankYou": {
        "title": "Grazie per la Tua Grande Generosità",
        "description": "La tua donazione di carità fa una differenza concreta nella vita di molte persone. Grazie alla tua generosità, possiamo continuare le nostre azioni di aiuto e solidarietà con chi ne ha più bisogno. Che il tuo gesto sia benedetto.",
        "gratitude": "🙏 Con la nostra più profonda gratitudine 🙏"
      }
    },
    "soutien": {
      "title": "Sostegno allo Sviluppo dell'Ordine",
      "generosityInAction": "La Tua Generosità in Azione",
      "message": "Il minimo o più della tua donazione è generosità che ci permette di pianificare le nostre azioni di aiuto e solidarietà per le persone bisognose.",
      "minimumLabel": "Donazione Minima di Sostegno",
      "amount": "€50",
      "contributeTitle": "Contribuisci alla Nostra Missione",
      "contributeDescription": "Le tue donazioni di sostegno permettono al Grande Ordine del Cerchio di continuare a trasmettere gli insegnamenti esoterici, organizzare eventi spirituali e mantenere le nostre infrastrutture. Ogni contributo aiuta a preservare e diffondere la tradizione ermetica.",
      "funding": {
        "title": "Finanziamento della Formazione",
        "items": [
          "Creazione di nuovi corsi online",
          "Compensazione per insegnanti qualificati",
          "Produzione di contenuti video HD",
          "Sviluppo di materiali didattici",
          "Organizzazione di seminari e ritiri"
        ]
      },
      "infrastructure": {
        "title": "Manutenzione delle Infrastrutture",
        "items": [
          "Manutenzione delle comanderies regionali",
          "Biblioteca esoterica e archivi",
          "Piattaforma digitale e sito web",
          "Acquisizione di nuove opere rare",
          "Equipaggiamento rituale e accessori"
        ]
      },
      "editorial": {
        "title": "Progetti Editoriali",
        "items": [
          "Pubblicazione della rivista trimestrale",
          "Editing di libri esoterici",
          "Traduzione di testi antichi",
          "Quaderni di studi ermetici",
          "Distribuzione di contenuti gratuiti"
        ]
      },
      "international": {
        "title": "Proiezione Internazionale",
        "items": [
          "Apertura di nuove comanderies",
          "Conferenze internazionali",
          "Scambi con altri ordini",
          "Traduzione delle formazioni",
          "Presenza ad eventi spirituali"
        ]
      },
      "budget": {
        "title": "Budget Annuale 2026",
        "training": "Formazioni",
        "infrastructure": "Infrastrutture",
        "editorial": "Editoria",
        "outreach": "Proiezione"
      },
      "levels": {
        "title": "Livelli di Sostegno Mensile",
        "friend": {
          "name": "Amico dell'Ordine",
          "price": "€10",
          "period": "/mese",
          "benefits": [
            "Ringraziamento sul sito web",
            "Newsletter esclusiva",
            "Badge Amico del GOC"
          ],
          "button": "Sostieni"
        },
        "benefactor": {
          "name": "Benefattore",
          "price": "€25",
          "period": "/mese",
          "badge": "CONSIGLIATO",
          "benefits": [
            "Tutti i benefici precedenti",
            "Accesso a contenuti esclusivi",
            "Invito ad eventi VIP",
            "Rivista trimestrale gratuita"
          ],
          "button": "Sostieni"
        },
        "patron": {
          "name": "Grande Patrono",
          "price": "€50",
          "period": "/mese",
          "benefits": [
            "Tutti i benefici precedenti",
            "Menzione nel Pantheon dei Patroni",
            "Consultazione spirituale annuale",
            "Regalo spirituale personalizzato"
          ],
          "button": "Sostieni"
        }
      },
      "form": {
        "title": "Donazione una tantum",
        "amountLabel": "Importo del tuo sostegno",
        "customPlaceholder": "Altro importo",
        "typeLabel": "Tipo di sostegno",
        "types": {
          "unique": "Donazione una tantum",
          "monthly": "Sostegno mensile ricorrente"
        },
        "firstName": "Nome",
        "lastName": "Cognome",
        "email": "Email *",
        "submit": "Sostieni ora",
        "secure": "✓ Pagamento 100% sicuro • ✓ Cancellazione possibile in qualsiasi momento"
      }
    },
    "sympathie": {
      "title": "Donazione di Simpatia",
      "generosityInAction": "La Tua Generosità in Azione",
      "message": "Il minimo o più della tua donazione è generosità che ci permette di pianificare le nostre azioni di aiuto e solidarietà per le persone bisognose.",
      "minimumLabel": "Donazione Minima di Simpatia",
      "amount": "€25",
      "gestureTitle": "Un Gesto dal Cuore",
      "gestureDescription": "La donazione di simpatia è un gesto libero e spontaneo che non richiede nulla in cambio. È una manifestazione del tuo sostegno e connessione con i valori del Grande Ordine del Cerchio, senza aspettative o obblighi.",
      "freedom": {
        "title": "Totale Libertà",
        "description": "A differenza di altre forme di donazione, la donazione di simpatia è interamente libera: importo libero (minimo €25), frequenza libera, anonimato possibile. È semplicemente un modo per esprimere la tua apprezzamento per il lavoro dell'Ordine e per contribuire, al tuo livello, alla preservazione della tradizione esoterica."
      },
      "why": {
        "title": "Perché fare una donazione di simpatia?",
        "items": [
          "Apprezzi la nostra missione e i valori",
          "Desideri sostenere senza impegnarti",
          "Vuoi offrire un gesto una tantum",
          "Non puoi diventare membro ma vuoi aiutare",
          "Senti una connessione spirituale con l'Ordine"
        ]
      },
      "usage": {
        "title": "Come viene utilizzata?",
        "description": "Le donazioni di simpatia contribuiscono alle nostre azioni di aiuto e solidarietà. Vengono utilizzate dove il bisogno è maggiore:",
        "items": [
          "Aiuto a persone in difficoltà",
          "Azioni di solidarietà comunitaria",
          "Sviluppo di nuovi contenuti gratuiti",
          "Progetti speciali e opportunità",
          "Fondo di riserva per imprevisti"
        ]
      },
      "noReturn": {
        "title": "Nessun Ritorno, Solo Gratitudine",
        "description": "Non ti offriamo nulla in cambio della tua donazione di simpatia, tranne la nostra profonda gratitudine. Non riceverai una newsletter speciale, nessun invito esclusivo, nessun riconoscimento pubblico (a meno che tu non lo desideri). È un puro atto di generosità e gentilezza."
      },
      "testimonials": {
        "title": "Perché hanno fatto una donazione di simpatia",
        "items": [
          {
            "quote": "Non sono membro del GOC ma leggo le vostre pubblicazioni gratuite da 2 anni. Mi hanno portato molto e ho semplicemente voluto dire grazie.",
            "author": "Marie L., simpatizzante"
          },
          {
            "quote": "Il vostro lavoro di preservazione delle tradizioni esoteriche è prezioso. Non posso impegnarmi pienamente ma ho voluto contribuire a modo mio.",
            "author": "Jean-Marc D., amico dell'Ordine"
          },
          {
            "quote": "Ero membro alcuni anni fa e ho dovuto smettere per motivi personali. Questa piccola donazione è il mio modo di rimanere connesso alla fratellanza.",
            "author": "Sophie R., ex membro"
          }
        ]
      },
      "form": {
        "title": "Fai una Donazione di Simpatia",
        "subtitle": "Importo minimo: €25. Ogni gesto conta ed è apprezzato.",
        "amountLabel": "Importo della tua donazione (minimo €25)",
        "customPlaceholder": "Oppure inserisci un importo (min. €25)",
        "optionalInfo": "Le informazioni sottostanti sono opzionali",
        "firstName": "Nome (opzionale)",
        "lastName": "Cognome (opzionale)",
        "email": "Email (opzionale)",
        "emailNote": "Solo per una ricevuta di conferma",
        "message": "Un messaggio per noi? (opzionale)",
        "messagePlaceholder": "Lasciaci una nota se lo desideri...",
        "anonymous": "Preferisco rimanere completamente anonimo",
        "mention": "Potete menzionare il mio nome nei vostri ringraziamenti pubblici",
        "submit": "💛 Invia la mia donazione di simpatia (min. €25)",
        "secure": "✓ Pagamento 100% sicuro"
      },
      "thankYou": {
        "title": "Dal profondo del nostro cuore, grazie",
        "description": "Ogni donazione di simpatia, qualunque sia l'importo, è ricevuta con profonda gratitudine. Questi gesti spontanei di generosità ci ricordano che la nostra missione tocca i cuori e contribuisce veramente al benessere spirituale di molte persone. Grazie per essere qui.",
        "gratitude": "🙏 Con tutta la nostra stima 🙏"
      }
    },
    "common": {
      "contact": {
        "title": "Contatto",
        "headquarters": "Sede",
        "france": "Francia",
        "address": "B.P. 13241",
        "city": "Yaoundé - Camerun",
        "contactPerson": "Richard Mbouma Kohomm",
        "street": "11 av. Joseph Rollo",
        "zipCity": "78320 La Verrière – Francia",
        "email": "mkohomm@gmail.com"
      }
    }
  },
      contact: {
        title: "Contatto",
        headquarters: "Sede",
        france: "Francia"
      },
      common: {
        securePayment: "Pagamento 100% sicuro",
        cancel: "Annulla",
        confirm: "Conferma",
        save: "Salva",
        close: "Chiudi",
        loading: "Caricamento...",
        error: "Errore",
        success: "Successo"
      }
    }
  },

  // PORTUGUESE (COMPLETE)
  pt: {
    translation: {
      nav: {
        home: "Início",
        goc: "GOC",
        gocSubtitle: "Grande Ordem do Círculo Fraternidade",
        gocOrganisation: "Organização",
        gocOrganisationDesc: "Nossa estrutura",
        gocActions: "Ações",
        gocActionsDesc: "Nossas iniciativas",
        gocCharity: "Caridade",
        gocCharityDesc: "Obras filantrópicas",
        gocFraternity: "Fraternidade",
        gocFraternityDesc: "Laços espirituais",
        formation: "Formação",
        formationEsoterism: "Esoterismo",
        formationEsoterismDesc: "Mistérios antigos",
        formationPhilosophy: "Filosofia",
        formationPhilosophyDesc: "Pensamento sagrado",
        formationPowers: "Poderes",
        formationPowersDesc: "Desenvolvimento interior",
        library: "Biblioteca",
        libraryAccessories: "Acessórios rituais",
        libraryAccessoriesDesc: "Ferramentas sagradas",
        libraryBooks: "Livros",
        libraryBooksDesc: "Conhecimento ancestral",
        libraryJournals: "Revistas",
        libraryJournalsDesc: "Publicações",
        libraryVideos: "Vídeos",
        libraryVideosDesc: "Ensinamentos",
        becomeMember: "Tornar-se Membro",
        memberApprentice: "Membro Aprendiz",
        memberApprenticeDesc: "Primeiros passos",
        memberBrotherSister: "Membro Irmão/Irmã",
        memberBrotherSisterDesc: "Compromisso",
        memberAuditor: "Aprendiz Ouvinte",
        memberAuditorDesc: "Descoberta",
        donation: "Doação",
        donationCharity: "Caridade",
        donationCharityDesc: "Ajudar outros",
        donationSupport: "Apoio",
        donationSupportDesc: "Contribuir",
        donationSympathy: "Simpatia",
        donationSympathyDesc: "Participar",
        members: "Área de Membros",
        login: "Entrar",
        signup: "Cadastrar-se",
        logout: "Sair",
        myAccount: "Minha conta",
        closeMenu: "Fechar menu",
        openMenu: "Abrir menu"
      },enseignements: {
        meta: {
          title: "Ensinamentos Iniciáticos | GOC",
          description: "Ensinamentos iniciáticos para mudar sua vida - Grande Ordem do Círculo"
        },
        hero: {
          subtitle: "Caminho Iniciático",
          title: "Ensinamentos Iniciáticos",
          titleHighlight: "para mudar sua vida"
        },
        introduction: {
          quote: "Independentemente da idade, sexo ou cultura, todos aspiram ao sucesso na vida. Para alcançá-lo, você deve aproveitar a força de suas energias positivas e qualidades para se impor e ter sucesso.",
          paragraph1: "Portanto, o melhor investimento que você pode fazer se quiser ter sucesso é explorar seu brilho interior - ou seja, sua verdadeira personalidade, suas forças e suas qualidades positivas.",
          study: "Um estudo americano recente mostra que o sucesso de um indivíduo depende em {{percentagePersonality}} de sua personalidade; os {{percentageKnowledge}} restantes representam seu conhecimento e experiência.",
          conclusion: "{{goc}} lhe dá as chaves para alcançar isso."
        },
        mainContent: {
          title: "Os Ensinamentos do GOC",
          subtitle: "Conhecimento filosófico e ideológico, chaves e técnicas extremamente poderosas para a aquisição de poderes e desenvolvimento pessoal!"
        },
        pillars: {
          esoterisme: {
            title: "Esoterismo",
            items: [
              "O conceito de Deus",
              "Conhecimento das religiões",
              "A imortalidade",
              "Ser si mesmo",
              "A vida encantada",
              "O magnetismo",
              "O humanismo",
              "As ideologias",
              "A vida, a existência, a morte",
              "O Yin e o Yang",
              "O Eu e o Outro"
            ]
          },
          philosophie: {
            title: "Filosofia",
            items: [
              { title: "Pensamentos", desc: "africana, chinesa, indiana, grega" },
              { title: "Crenças", desc: "origem do sagrado, história das religiões" },
              { title: "Mitologias", desc: "herói com mil faces" },
              { title: "Sabedoria", desc: "os cinco pilares" }
            ]
          },
          pouvoirs: {
            title: "Poderes",
            items: [
              "Conectar-se às Forças benéficas",
              "Descobrir seu Ser interior",
              "Limpar sua psique",
              "Dominar sua mente",
              "Despertar suas aptidões ocultas",
              "Influenciar seu meio sem agir fisicamente",
              "Regenerar-se fisicamente",
              "Adquirir uma melhor saúde",
              "Aumentar sua expectativa de vida",
              "Fixar metas e alcançá-las",
              "Acessar o bem-estar material",
              "Melhorar a qualidade de sua vida",
              "Acessar o Despertar Espiritual",
              "Proteger-se contra todos os golpes do destino qualquer que seja sua origem"
            ],
            more: "E mais..."
          }
        },
        development: {
          title: "Desenvolvimento dos Poderes",
          quote: "Todos aqueles que buscam a evolução espiritual e a aquisição de poderes receberão ensinamentos que lhes permitirão adquirir uma personalidade magnética e radiante.",
          cta: "Comece sua iniciação"
        },
        footerQuote: "Uma verdadeira purificação, o acesso aos estados de consciência mais elevados e a aquisição de poderes atuantes.",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "Carregando...",
    "noSubscription": {
      "title": "Nenhuma Assinatura Ativa",
      "description": "Você deve assinar um plano de associação para acessar a área de membros",
      "button": "Escolher uma Assinatura"
    },
    "welcome": "Bem-vindo",
    "member": "Membro",
    "active": "Ativo",
    "contentSections": {
      "esotericTraining": {
        "title": "Formação Esotérica",
        "description": "Acesse os ensinamentos básicos"
      },
      "philosophicalTraining": {
        "title": "Formação Filosófica",
        "description": "Aprofunde seu conhecimento"
      },
      "powerDevelopment": {
        "title": "Desenvolvimento de Poderes",
        "description": "Conteúdo premium exclusivo"
      },
      "library": {
        "title": "Biblioteca",
        "description": "Acesso a recursos documentais"
      },
      "videos": {
        "title": "Vídeos",
        "description": "Conteúdo de vídeo exclusivo"
      }
    },
    "locked": {
      "requires": "Requer",
      "upgradeButton": "Melhorar Assinatura"
    },
    "access": "Acessar",
    "upgradeCTA": {
      "title": "Desbloqueie Mais Conteúdo",
      "description": "Melhore sua assinatura para acessar todo o conteúdo exclusivo",
      "button": "Melhorar"
    },
    "roles": {
      "auditeur": {
        "name": "Ouvinte",
        "description": "Acesso básico à formação"
      },
      "apprenti": {
        "name": "Aprendiz",
        "description": "Formação filosófica avançada"
      },
      "frere-soeur": {
        "name": "Irmão/Irmã",
        "description": "Acesso completo a todo o conteúdo"
      }
    }
  },
  goc: {
  actions: {
    title: "Ações do GOC",
    subtitle: "Nossas Ações no Mundo",
    items: {
      seminars: { title: "Seminários Iniciáticos", description: "Organização de seminários e retiros espirituais permitindo que os membros aprofundem sua jornada esotérica e vivenciem experiências iniciáticas transformadoras." },
      conferences: { title: "Conferências Públicas", description: "Difusão de conhecimentos esotéricos e filosóficos através de conferências abertas ao público sobre temas espirituais, místicos e metafísicos." },
      publications: { title: "Publicações", description: "Edição de livros, revistas e documentos pedagógicos preservando e transmitindo os ensinamentos tradicionais do esoterismo ocidental e oriental." },
      rituals: { title: "Rituais Coletivos", description: "Celebração de rituais sazonais e iniciáticos permitindo que os membros se conectem com as forças cósmicas e fortaleçam o egrégoro da Ordem." }
    },
    program: {
      title: "Programa Anual",
      seasons: {
        spring: { name: "Primavera", activity: "Rituais de equinócio, seminário de renovação espiritual" },
        summer: { name: "Verão", activity: "Retiro de verão, celebração do solstício, iniciações" },
        autumn: { name: "Outono", activity: "Seminários filosóficos, rituais de colheita espiritual" },
        winter: { name: "Inverno", activity: "Solstício de inverno, meditações profundas, ensinamentos secretos" }
      }
    }
  },
  charity: {
    title: "Caridade & Obras Sociais",
    serviceTitle: "Serviço Desinteressado",
    serviceDesc: "No coração do nosso ensinamento esotérico encontra-se o princípio do serviço desinteressado. A verdadeira sabedoria é adquirida não apenas através do estudo, mas também através da ação compassiva para com nossos semelhantes.",
    works: {
      spiritual: { title: "Assistência Espiritual", description: "Apoio espiritual gratuito para pessoas em angústia moral ou existencial. Nossos membros treinados oferecem escuta, conselho e apoio energético." },
      material: { title: "Ajuda Material", description: "Distribuição de ajuda material a famílias necessitadas: alimentos, roupas, apoio financeiro ocasional para situações de emergência." },
      education: { title: "Educação Gratuita", description: "Cursos gratuitos de filosofia, meditação e desenvolvimento pessoal para pessoas que não podem acessar ensinamentos pagos." },
      energy: { title: "Cura Energética", description: "Sessões de cuidado energético e cura holística oferecidas gratuitamente a pessoas que sofrem de doenças ou desequilíbrios." }
    },
    participate: { title: "Participe das nossas Obras", description: "Cada membro do GOC dedica tempo e recursos às obras de caridade. Junte-se a nós nesta missão de serviço e compaixão.", donate: "Fazer uma doação", volunteer: "Tornar-se voluntário" }
  },
  fraternity: {
    title: "Fraternidade Universal",
    ourFraternity: "Nossa Fraternidade",
    description: "A Fraternidade da Grande Ordem do Círculo é uma comunidade de mulheres e homens, sem exclusão, de todas as raças, todas as etnias, todos os países e todas as nacionalidades, que aceitam voluntariamente e sem qualquer restrição de qualquer tipo, de qualquer natureza, TORNAR-SE MEMBRO e se comprometem a respeitar escrupulosamente a REGRA em XII Princípios que governa a VIDA da Organização da Grande Ordem do Círculo.",
    transcendentLink: "Um Laço que Transcende",
    transcendentDesc: "A fraternidade dentro da Grande Ordem do Círculo não é mera camaradagem, mas um profundo laço espiritual que une almas em sua busca por luz e conhecimento.",
    features: {
      spiritualHelp: { title: "Ajuda Espiritual Mútua", description: "Irmãos e irmãs ajudam-se mutuamente em sua jornada iniciática" },
      knowledge: { title: "Compartilhamento de Conhecimento", description: "Transmissão de conhecimento esotérico entre membros iniciados" },
      mutualSupport: { title: "Apoio Mútuo", description: "Presença e acompanhamento nas provações da vida" },
      rituals: { title: "Rituais Fraternos", description: "Cerimônias que fortalecem os laços entre os membros da Ordem" },
      network: { title: "Rede Internacional", description: "Conexões com membros ao redor do mundo" },
      meditation: { title: "Meditações Coletivas", description: "Práticas espirituais em grupo para amplificar a energia" }
    },
    commanderies: {
      title: "Comendarias Fraternas",
      description: "Cada região tem sua comendaria, um lugar sagrado onde os membros se reúnem para cultivar a fraternidade, praticar rituais e compartilhar ensinamentos.",
      activities: { meditation: "Reuniões mensais de meditação e estudo", celebrations: "Celebrações de solstícios e equinócios", meals: "Refeições fraternas e momentos de convivência", library: "Biblioteca compartilhada de obras esotéricas" }
    },
    join: { title: "Junte-se à nossa Fraternidade", description: "Torne-se membro da Grande Ordem do Círculo e descubra a profundidade da fraternidade autêntica baseada no amor, sabedoria e serviço.", button: "Saiba mais" }
  }
},
formation: {
  esoterism: {
    title: "Formação em Esoterismo",
    subtitle: "Ciências Ocultas",
    intro: "O esoterismo designa o conjunto de conhecimentos secretos e práticas espirituais transmitidos de mestre a discípulo desde tempos imemoriais. Nossa formação completa inicia você nos mistérios ocultos do universo e nas leis que regem o plano sutil.",
    sections: {
      symbolism: {
        title: "Simbolismo Sagrado",
        items: [
          "Interpretação de símbolos herméticos",
          "Geometria sagrada e números místicos",
          "Alfabetos mágicos e sigilos"
        ]
      },
      alchemy: {
        title: "Alquimia Espiritual",
        items: [
          "Grande Obra alquímica",
          "Transmutação interior",
          "Pedra filosofal e elixir da vida"
        ]
      },
      kabbalah: {
        title: "Cabala & Árvore da Vida",
        items: [
          "Estudo das 10 sefirot",
          "Caminhos da Árvore da Vida",
          "Gematria e numerologia hebraica"
        ]
      },
      tarot: {
        title: "Tarot & Divinação",
        items: [
          "Arcanos maiores e menores",
          "Artes divinatórias tradicionais",
          "Desenvolvimento da intuição"
        ]
      }
    },
    program: {
      title: "Programa de Formação",
      level1: {
        title: "Nível 1 - Aprendiz (12 meses)",
        description: "Fundamentos do esoterismo, simbolismo, meditação, primeiros rituais"
      },
      level2: {
        title: "Nível 2 - Companheiro (18 meses)",
        description: "Alquimia, Cabala, astrologia esotérica, trabalho energético avançado"
      },
      level3: {
        title: "Nível 3 - Mestre (24 meses)",
        description: "Ensinamentos secretos, alta magia, iniciação nos mistérios profundos"
      }
    },
    signup: "Inscrever-se na formação"
  },
  philosophy: {
    title: "Formação Filosófica",
    subtitle: "Filosofia Esotérica",
    intro: "A filosofia esotérica explora as perguntas fundamentais da existência: quem somos, de onde viemos, para onde vamos? Nosso ensino integra as grandes tradições filosóficas orientais e ocidentais em uma síntese única.",
    traditions: {
      hermetic: {
        title: "Filosofia Hermética",
        description: "Estudo dos Sete Princípios Herméticos: Mentalismo, Correspondência, Vibração, Polaridade, Ritmo, Causa e Efeito, Gênero. Aplicação prática dessas leis universais."
      },
      neoplatonic: {
        title: "Neoplatonismo & Gnose",
        description: "Ensinamentos de Platão, Plotino e os gnósticos. A doutrina do Um, a emanação dos mundos, a ascensão da alma em direção à sua fonte divina."
      },
      eastern: {
        title: "Sabedoria Oriental",
        description: "Vedanta, Budismo, Taoísmo: exploração das filosofias orientais e suas práticas contemplativas. Não-dualidade, vacuidade, Wu Wei."
      },
      modern: {
        title: "Metafísica Moderna",
        description: "Síntese entre ciência e espiritualidade. Física quântica e consciência, novos paradigmas da realidade."
      }
    },
    themes: {
      title: "Temas Estudados",
      items: [
        "Natureza da consciência e da alma",
        "Cosmogonia e criação do mundo",
        "Karma, reencarnação e destino",
        "Livre-arbítrio e determinismo",
        "Ética espiritual e moral esotérica"
      ]
    },
    methods: {
      title: "Métodos Pedagógicos",
      items: [
        "Cursos teóricos e seminários",
        "Diálogos socráticos e debates",
        "Meditações filosóficas guiadas",
        "Leituras comentadas de textos sagrados",
        "Trabalhos escritos e dissertações"
      ]
    },
    continuous: {
      title: "Formação Contínua",
      description: "A formação filosófica estende-se por 3 anos com cursos mensais, seminários trimestrais e acesso à nossa biblioteca esotérica.",
      button: "Programa detalhado"
    }
  },
  powers: {
    title: "Desenvolvimento dos Poderes",
    subtitle: "Faculdades Superiores",
    intro: "Além das capacidades ordinárias, o ser humano possui faculdades latentes que pode desenvolver através do treinamento espiritual. Nossa formação guia você no despertar desses poderes psíquicos e espirituais.",
    warning: {
      title: "⚠️ Aviso Importante",
      description: "O desenvolvimento dos poderes requer uma preparação moral e espiritual rigorosa. Esses ensinamentos são transmitidos apenas aos membros iniciados que tenham demonstrado maturidade e ética impecável."
    },
    abilities: {
      clairvoyance: {
        title: "Clarividência",
        description: "Desenvolvimento da visão sutil permitindo perceber os planos energéticos, as auras e as entidades espirituais.",
        items: ["Ativação do 3º olho", "Visão etérica e astral", "Leitura de auras"]
      },
      telepathy: {
        title: "Telepatia",
        description: "Comunicação mental direta, transmissão e recepção de pensamentos, conexão com as consciências à distância.",
        items: ["Transmissão de pensamentos", "Recepção intuitiva", "Comunicação com guias"]
      },
      magnetism: {
        title: "Magnetismo",
        description: "Domínio da energia vital para curar, harmonizar e transformar. Técnicas de magnetismo curativo e imposição de mãos.",
        items: ["Acumulação de energia", "Cura energética", "Harmonização dos chakras"]
      },
      astral: {
        title: "Projeção Astral",
        description: "Saída do corpo físico e viagem nos planos sutis. Exploração consciente das dimensões espirituais.",
        items: ["Descorporação voluntária", "Viagem astral consciente", "Exploração dos planos superiores"]
      },
      psychometry: {
        title: "Psicometria",
        description: "Leitura das energias impregnadas em objetos, lugares e pessoas. Capacidade de perceber a história energética.",
        items: ["Leitura de objetos", "Percepção de memórias", "Psicometria avançada"]
      },
      meditation: {
        title: "Meditação Profunda",
        description: "Estados alterados de consciência, samadhi, união mística. Acesso às dimensões transcendentes do ser.",
        items: ["Estados meditativos profundos", "Experiências místicas", "União com o divino"]
      }
    },
    program: {
      title: "Programa Progressivo",
      subtitle: "O despertar dos poderes segue um processo gradual e seguro ao longo de vários anos",
      year1: {
        title: "Ano 1",
        description: "Preparação & Purificação"
      },
      year2: {
        title: "Ano 2",
        description: "Ativação & Desenvolvimento"
      },
      year3: {
        title: "Ano 3+",
        description: "Maestria & Transmissão"
      }
    }
  }
},
      library: {
  intro: {
    quote: "A matéria se recicla, o espírito se ressourça…",
    description: "Lugar de conhecimentos, a Biblioteca do GOC coloca à disposição dos membros, auditores afiliados e simpatizantes, sua publicação «Mâat», os vídeos e fascículos de seus ensinamentos, livros de filosofia, sabedoria, conhecimentos secretos. Bem como as vestes dos membros e outros acessórios para os ritos.",
    orderForm: "Formulário de pedido"
  },
  accessories: {
    description: "Os acessórios rituais são ferramentas sagradas utilizadas nas práticas esotéricas e nas cerimônias iniciáticas. Cada objeto é consagrado e carregado energeticamente segundo as tradições herméticas.",
    items: {
      candles: { title: "Velas Rituais", description: "Velas consagradas de diferentes cores para rituais específicos: branco (purificação), ouro (espiritualidade), vermelho (amor), verde (prosperidade).", availability: "Disponível para membros" },
      crystals: { title: "Cristais & Pedras", description: "Coleção de cristais purificados e programados: quartzo, ametista, citrino, obsidiana. Cada pedra possui suas propriedades energéticas específicas.", availability: "Disponível para membros" },
      incense: { title: "Incensos Sagrados", description: "Incensos tradicionais para a purificação e elevação vibratória: olíbano, mirra, benjoim, sândalo. Receitas ancestrais dos templos.", availability: "Disponível para membros" },
      sword: { title: "Espada Ritual", description: "Espada simbólica utilizada para traçar os círculos de proteção e dirigir a energia durante os rituais. Forjada segundo as tradições herméticas.", availability: "Reservado aos iniciados" },
      chalice: { title: "Cálice Consagrado", description: "Taça sagrada representando o elemento água e o princípio feminino. Utilizada nos rituais de oferenda e comunhão espiritual.", availability: "Reservado aos iniciados" },
      malas: { title: "Terços & Malas", description: "Terços de meditação em madeira sagrada, pedras semipreciosas ou sementes de rudraksha. 108 contas para a prática do japa (repetição de mantras).", availability: "Disponível para membros" },
      feathers: { title: "Penas Rituais", description: "Penas de pássaros sagrados utilizadas para dispersar a fumaça do incenso e purificar o espaço ritual. Tradição ameríndia e xamânica.", availability: "Disponível para membros" },
      talismans: { title: "Pentáculos & Talismãs", description: "Pentáculos gravados segundo as tradições da magia salomônica. Talismãs personalizados carregados segundo seu tema astrológico.", availability: "Sob encomenda" },
      robes: { title: "Vestes & Roupas", description: "Vestes cerimoniais, capas e roupas rituais nas cores da Ordem. Confeccionadas em tecidos naturais segundo a tradição.", availability: "Reservado aos membros" }
    },
    cta: { title: "Encomendar Acessórios", description: "Os acessórios rituais estão disponíveis para compra pelos membros do GOC. Cada objeto é consagrado individualmente antes da entrega.", button: "Acessar a loja", note: "* Login necessário - Reservado aos membros iniciados" }
  },journals: {
    title: "Revistas & Publicações",
    intro: "A Grande Ordem do Círculo publica regularmente revistas, boletins e revistas destinadas à formação contínua de seus membros e à difusão dos saberes esotéricos.",
    mainJournal: {
      title: "A Luz do Círculo",
      subtitle: "Revista oficial da GOC - Publicação trimestral",
      summary: "Sumário:",
      format: "Formato:",
      items: [
        "Ensinamentos esotéricos aprofundados",
        "Rituais e práticas sazonais",
        "Testemunhos de membros",
        "Notícias da Ordem"
      ],
      formatItems: [
        "40-60 páginas ilustradas",
        "Versão papel e digital",
        "Arquivos completos desde 1985",
        "Reservado aos membros"
      ]
    },
    publications: {
      bulletin: {
        title: "Boletim da Fraternidade",
        description: "Boletim mensal destinado a manter o vínculo entre os membros. Informações sobre encontros, seminários e eventos próximos.",
        frequency: "Mensal",
        pages: "12-16 páginas",
        access: "Apenas membros"
      },
      cahiers: {
        title: "Cadernos de Estudos Herméticos",
        description: "Revista acadêmica aprofundada sobre temas esotéricos específicos: alquimia, Cabala, astrologia, simbolismo, filosofia mística.",
        frequency: "Bimestral",
        pages: "60-80 páginas",
        access: "Membros iniciados"
      },
      lettres: {
        title: "Cartas do Grão-Mestre",
        description: "Ensinamentos diretos do Grão-Mestre da Ordem, transmitindo conhecimentos profundos e orientações espirituais para membros avançados.",
        frequency: "Trimestral",
        pages: "8-12 páginas",
        access: "Iniciados de 2º grau"
      },
      almanach: {
        title: "Almanaque Esotérico",
        description: "Publicação anual contendo datas importantes, fases lunares, posições planetárias, calendário de rituais e práticas recomendadas.",
        frequency: "Anual",
        pages: "120 páginas",
        access: "Acessível a todos"
      }
    },
    archives: {
      title: "Arquivos Históricos",
      description: "Acesse os arquivos completos de nossas publicações desde a fundação da Ordem. Décadas de saber esotérico ao alcance da mão.",
      stats: {
        journal: "Números de A Luz do Círculo",
        bulletins: "Boletins mensais",
        years: "Anos de arquivos"
      }
    },
    cta: {
      title: "Acessar as Publicações",
      description: "Torne-se membro da Grande Ordem do Círculo para receber nossas publicações e acessar os arquivos completos.",
      becomeMember: "Tornar-se membro",
      consultArchives: "Consultar arquivos"
    }
  },
  books: {
    title: "Biblioteca Esotérica",
    intro: "Nossa biblioteca contém uma coleção excepcional de obras esotéricas, herméticas e filosóficas. Alguns textos raros são reservados aos membros iniciados.",
    sections: {
      alchemy: "Alquimia & Hermetismo",
      kabbalah: "Cabala & Mística Judaica",
      magic: "Magia Cerimonial",
      philosophy: "Filosofia Esotérica",
      tarot: "Tarot & Simbolismo"
    },
    access: {
      open: "Acessível a todos",
      members: "Reservado aos membros",
      initiates: "Reservado aos iniciados"
    },
    onSite: {
      title: "Consulta no Local",
      description: "Os membros podem consultar a totalidade da biblioteca em nossas instalações. Ambiente estudioso propício à meditação.",
      note: "Disponível com agendamento para membros"
    },
    digital: {
      title: "Biblioteca Digital",
      description: "Acesso à nossa biblioteca digital com centenas de livros em formato PDF, acessível 24/7 desde seu espaço de membro.",
      note: "Reservado aos membros ativos"
    }
  },
  videos: {
    title: "Videoteca Esotérica",
    intro: "Nossa videoteca oferece conferências, rituais filmados, meditações guiadas e ensinamentos do Grão-Mestre. Conteúdo exclusivo para membros da GOC.",
    categories: {
      conferences: {
        title: "Conferências",
        description: "Conferências magistrais sobre esoterismo, alquimia, Cabala e filosofia hermética por nossos mestres iniciados.",
        count: "45+ vídeos",
        access: "Acesso membros"
      },
      meditations: {
        title: "Meditações Guiadas",
        description: "Sessões de meditação guiada para o desenvolvimento espiritual, ativação dos chakras e conexão com o divino.",
        count: "30+ vídeos",
        access: "Acesso livre"
      },
      rituals: {
        title: "Rituais Filmados",
        description: "Gravações de rituais iniciáticos, cerimônias sazonais e práticas esotéricas transmitidas na Ordem.",
        count: "25+ vídeos",
        access: "Apenas iniciados"
      },
      courses: {
        title: "Cursos Teóricos",
        description: "Cursos completos de formação sobre esoterismo, ciências ocultas, filosofia e simbolismo sagrado.",
        count: "60+ vídeos",
        access: "Acesso membros"
      },
      energy: {
        title: "Práticas Energéticas",
        description: "Exercícios práticos para o desenvolvimento de faculdades psíquicas, trabalho energético e magnetismo.",
        count: "35+ vídeos",
        access: "Acesso membros"
      },
      secret: {
        title: "Ensinamentos Secretos",
        description: "Ensinamentos reservados transmitidos pelo Grão-Mestre sobre os mistérios profundos da tradição hermética.",
        count: "20+ vídeos",
        access: "Apenas mestres"
      }
    },
    recent: {
      title: "Últimas Publicações",
      videos: [
        {
          title: "Introdução à Cabala prática",
          description: "Conferência do Grão-Mestre sobre os fundamentos da Cabala e sua aplicação na vida cotidiana.",
          duration: "1h 25min",
          date: "Janeiro 2026",
          access: "Membros"
        },
        {
          title: "Meditação de lua cheia",
          description: "Meditação guiada especial para se conectar com as energias lunares e receber a iluminação.",
          duration: "45min",
          date: "Janeiro 2026",
          access: "Acesso livre"
        },
        {
          title: "Ritual do solstício de inverno 2025",
          description: "Gravação completa do ritual cerimonial celebrado durante o solstício de inverno na Comendaria central.",
          duration: "2h 10min",
          date: "Dezembro 2025",
          access: "Iniciados"
        }
      ]
    },
    stats: {
      title: "Nossa Coleção de Vídeos",
      total: "Vídeos no total",
      hours: "Conteúdo exclusivo",
      quality: "Qualidade HD & 4K",
      access: "Acesso ilimitado"
    },
    cta: {
      title: "Acessar a Videoteca",
      description: "Torne-se membro para acessar toda a nossa coleção de vídeos e beneficiar-se de novo conteúdo todo mês.",
      button: "Inscrever-se agora"
    }
  }
},
      home: {
        title: "GRANDE ORDEM DO CÍRCULO FRATERNIDADE",
        motto: "Onde se encontra a árvore do conhecimento, encontra-se a felicidade",
        subtitle: {
          line1: "Formação esotérica e filosófica…",
          line2: "Fraternidade espiritual."
        },
        masterDestiny: "Acesse o domínio total do seu destino…",
        benefits: {
          connectForces: "Conectar-se com Forças benéficas",
          innerBeing: "Descobrir seu Ser interior",
          cleansePsyche: "Limpar sua psique",
          masterMind: "Dominar sua mente",
          awakenPowers: "Despertar habilidades ocultas",
          influence: "Influenciar seu ambiente sem ação física",
          regenerate: "Regenerar-se fisicamente",
          longevity: "Aumentar a expectativa de vida",
          achieveGoals: "Definir metas e alcançá-las",
          materialWellbeing: "Acessar o bem-estar material",
          qualityOfLife: "Melhorar a qualidade de vida",
          spiritualAwakening: "Acessar o Despertar Espiritual",
          protection: "Proteger-se contra toda desgraça independentemente da origem",
          betterHealth: "Adquirir melhor saúde"
        },
        carousel: {
          seminar: "Seminário",
          prieure: "Priorado",
          group: "Grupo de Membros",
          symbols: "Símbolos"
        },
        links: {
          formation: "Nossa Formação",
          fraternity: "Nossa Fraternidade",
          seminars: "Nossos Seminários",
          actions: "Nossas Ações"
        },
        vision: {
          title: "Nossa Visão",
          goc: "Grande Ordem do Círculo",
          secrets: "Conhecimento secreto, Sabedoria espiritual e iniciática,",
          awakening: "Despertar de poderes, Poder pessoal, Ferramentas de bem-estar…",
          changeLife: "Mude sua vida e acesse o domínio total dela!",
          description: "Através de uma formação esotérica que lhe dá acesso ao conhecimento secreto e sabedoria espiritual e iniciática, ao despertar de poderes, poder pessoal e ferramentas de bem-estar…",
          quote: "« O Homem foi originalmente concebido como um Ser puramente espiritual, emanado do Princípio Divino 'à imagem e semelhança do Grande Espírito Criador'. Durante sua descida à matéria, é movido por um impulso gêmeo: Atração-Rejeição, Desejo-Repulsão. Revestido de um corpo corruptível, agora está separado da unidade do Princípio. Sua natureza dual – material e espiritual – o submete a um conflito entre aspirações espirituais e as correntes da materialidade. Desde então, realizou atos governados por esses impulsos por orgulho. Mas o homem do desejo busca obter sua reintegração em seu estado original e recuperar seu corpo de glória.",
          mission: "O propósito do GOC é iluminar o Iniciado sobre sua natureza, origem e destino. Ele ou ela recebe ensinamentos essencialmente práticos e iniciáticos, que tratam de esoterismo, espiritualidade, metafísica, os segredos dos Yogues, filosofia e desenvolvimento pessoal; permitindo uma verdadeira purificação, acesso aos estados mais elevados de consciência e a aquisição de poderes atuantes."
        },
        nav: {
          becomeMember: "Tornar-se Membro",
          videos: "Vídeos",
          donation: "Doação",
          commanderies: "Comendarias",
          contacts: "Contatos",
          contact: "Contato"
        },
        image: {
          alt: "Grande Ordem do Círculo",
          caption: "Sabedoria antiga para o homem moderno"
        },
        footer: {
          copyright: "© 2026 Grande Ordem do Círculo - Todos os direitos reservados",
          sapientia: "Sabedoria",
          fraternitas: "Fraternidade",
          spiritus: "Espírito"
        }
      },
      membership: {
        title: "Junte-se à nossa Ordem",
        subtitle: "Escolha o nível de compromisso que corresponde à sua jornada espiritual e filosófica",
        adhesion: "Associação",
        formation: "Formação",
        oneTime: "uma vez",
        perYear: "por ano",
        firstYear: "Primeiro ano",
        renewal: "Renovação",
        becomeMember: "Tornar-se Membro",
        renew: "Renovar",
        currentSubscription: "Assinatura Atual",
        learnMore: "Saiba mais",
        mostPopular: "Mais Popular",
        active: "Ativo",
        expired: "Expirado",
        current: "Atual",
        activeSubscription: "Assinatura Ativa",
        adhesionRequired: "Associação necessária",
        buyTrimester: "Comprar 1 Trimestre",
        buyCourse: "Comprar 1 Curso",
        processing: "Processando...",
        signupAndBuy: "Cadastrar-se e comprar",
        pricePerTrimester: "Preço por trimestre",
        pricePerCourse: "Preço por curso",
        formationAccessible: "A formação só é acessível aos membros ativos da Ordem.",
        cotisation: "Quota anual",
        error: "Ocorreu um erro",
        whyJoin: "Por que tornar-se membro?",
        whyJoinDesc: "Ao se juntar à nossa ordem, você acessa uma comunidade dedicada ao despertar espiritual, conhecimento esotérico e ajuda mútua fraternal.",
        benefit1: "Acesso a ensinamentos exclusivos",
        benefit2: "Participação em eventos e seminários",
        benefit3: "Rede de fraternidade e ajuda mútua",
        benefit4: "Biblioteca de recursos espirituais"
      },
      roles: {
        auditeur: {
          name: "Aprendiz Ouvinte",
          description: "Acesso básico aos ensinamentos",
          formationTitle: "Formação de Aprendiz Ouvinte",
          formationDesc: "Cursos individuais à la carte",
          feature1: "Flexibilidade para comprar no seu próprio ritmo",
          feature2: "Acesso imediato ao curso comprado",
          feature3: "Conteúdo rico e detalhado",
          totalCourses: "Total de 40 cursos disponíveis",
          totalCost: "Custo total completo",
          totalDuration: "Formação completa ao longo de 2 anos"
        },
        apprenti: {
          name: "Membro Aprendiz",
          description: "Formação completa",
          formationTitle: "Formação de Aprendiz",
          formationDesc: "Formação trimestral estruturada",
          feature1: "Ensinamentos aprofundados a cada trimestre",
          feature2: "Acompanhamento personalizado do seu progresso",
          feature3: "Acesso a recursos exclusivos",
          totalCost: "Custo total da formação",
          totalDuration: "Duração total: 8 trimestres (2 anos)"
        },
        "frere-soeur": {
          name: "Membro Irmão/Irmã",
          description: "Acesso premium completo",
          feature1: "Todos os conteúdos e formações",
          feature2: "Mentoria individual",
          feature3: "Suporte prioritário 24/7",
          feature4: "Eventos exclusivos",
          feature5: "Rede internacional"
        }
      },
      organisation: {
        motto: "Onde se encontra a árvore do conhecimento, encontra-se a felicidade",
        title: "Organização do GOC",
        goc: "GOC",
        structure: "A Grande Ordem do Círculo é estruturada em torno de:",
        pillars: "Pilares",
        grades: "Graus",
        rule: "Regra",
        pillarsTitle: "Pilares",
        pillar1: {
          title: "I – Iniciação",
          item1: "Formação",
          item2: "Aperfeiçoamento"
        },
        pillar2: {
          title: "II – Escritórios",
          item1: "Ritos",
          item2: "Cerimônias"
        },
        pillar3: {
          title: "III – Caridade",
          item1: "Obras de caridade",
          item2: "Doações"
        },
        pillar4: {
          title: "IV – Mutualidade",
          item1: "Solidariedade dos iniciados",
          item2: "Apoio financeiro"
        },
        rulesTitle: "Regras do GOC",
        rules: {
          "1": "Crença no Grande Espírito Divino",
          "2": "Fraternidade iniciática e Dever de solidariedade",
          "3": "Ideal de Amor, verdade, justiça e paz",
          "4": "Aperfeiçoamento de membros e humanidade",
          "5": "Prática do Ritual e do Simbolismo",
          "6": "Respeito por Opiniões e Crenças",
          "7": "Juramento sobre Símbolos sagrados",
          "8": "Reunião e trabalho em comendarias",
          "9": "Honrabilidade, Lealdade e discrição",
          "10": "Amor à Pátria, respeito por leis, respeito por Autoridades constituídas",
          "11": "Comportamento sábio e digno",
          "12": "Ajuda e Proteção mútua"
        },
        structureTitle: "Organização do GOC",
        level1: {
          title: "Nível 1: o Círculo dos Irmãos",
          desc: "O CC reúne uma comunidade de até 770 irmãos"
        },
        level2: {
          title: "Nível 2: o Distrito",
          desc: "O Distrito reúne todos os Círculos dos Irmãos a nível departamental"
        },
        level3: {
          title: "Nível 3: a Comendaria",
          desc: "A Comendaria reúne todos os Distritos a nível regional"
        },
        level4: {
          title: "Nível 4: o Governadorado",
          desc: "O Governadorado reúne todas as Comendarias a nível nacional"
        },
        level5: {
          title: "Nível 5: O Primado Supremo",
          desc: "O Primado Supremo é a Instância suprema do GOC"
        },
        gradesTitle: "Graus",
        grade: {
          "1": "Aprendiz",
          "2": "Companheiro",
          "3": "Oficial",
          "4": "Honorável",
          "5": "Venerável",
          "6": "Mestre",
          "7": "Grão-Mestre"
        },
        administration: "Administração",
        admin1: {
          title: "1) O Círculo",
          item1: "A Assembleia dos Irmãos",
          item2: "O Venerável",
          item3: "A Secretaria",
          item4: "A Tesouraria",
          item5: "A Intendência",
          item6: "O Officium"
        },
        admin2: {
          title: "2) O Distrito",
          item1: "O Conselho do Distrito",
          item2: "O Mestre",
          item3: "A Secretaria",
          item4: "A Tesouraria",
          item5: "A Intendência",
          item6: "O Officium"
        },
        admin3: {
          title: "3) A Comendaria",
          item1: "O Conselho da Comendaria",
          item2: "O Comendador",
          item3: "A Secretaria",
          item4: "A Tesouraria",
          item5: "A Intendência",
          item6: "O Officium"
        },
        admin4: {
          title: "4) O Governadorado/Legado",
          item1: "O Cenáculo",
          item2: "O Grão-Mestre",
          item3: "A Secretaria",
          item4: "A Tesouraria",
          item5: "A Intendência",
          item6: "O Officium"
        },
        globalGovernance: "Governança global do GOC",
        global1: {
          title: "O Congresso"
        },
        global2: {
          title: "O Cenáculo Supremo",
          desc: "(Conselho de Administração do GOC)"
        },
        global3: {
          title: "O Primado do GOC"
        },
        global4: {
          title: "Secretaria Geral",
          desc: "(Órgão de gestão do GOC)"
        },
        global5: {
          title: "Tesouraria Central"
        },
        join: "Juntar-se à Ordem"
      },
      fraternity: {
        motto: "Onde se encontra a árvore do conhecimento, encontra-se a felicidade",
        title: "Fraternidade Universal",
        ourFraternity: "Nossa Fraternidade",
        description: "A Fraternidade da Grande Ordem do Círculo é uma comunidade de mulheres e homens, sem exclusão, de todas as raças, todas as etnias, todos os países e todas as nacionalidades, que aceitam voluntariamente e sem qualquer restrição de qualquer tipo, de qualquer natureza, TORNAR-SE MEMBRO e se comprometem a respeitar escrupulosamente a REGRA em XII Princípios que governa a VIDA da Organização da Grande Ordem do Círculo.",
        transcendentLink: "Um Laço que Transcende",
        transcendentDesc: "A fraternidade dentro da Grande Ordem do Círculo não é mera camaradagem, mas um profundo laço espiritual que une almas em sua busca por luz e conhecimento.",
        features: {
          spiritualHelp: "Ajuda Espiritual Mútua",
          spiritualHelpDesc: "Irmãos e irmãs ajudam-se mutuamente em sua jornada iniciática",
          knowledge: "Compartilhamento de Conhecimento",
          knowledgeDesc: "Transmissão de conhecimento esotérico entre membros iniciados",
          mutualSupport: "Apoio Mútuo",
          mutualSupportDesc: "Presença e acompanhamento nas provações da vida",
          rituals: "Rituais Fraternos",
          ritualsDesc: "Cerimônias que fortalecem os laços entre os membros da Ordem",
          network: "Rede Internacional",
          networkDesc: "Conexões com membros ao redor do mundo",
          meditation: "Meditações Coletivas",
          meditationDesc: "Práticas espirituais em grupo para amplificar a energia"
        },
        commanderies: "Comendarias Fraternas",
        commanderiesDesc: "Cada região tem sua comendaria, um lugar sagrado onde os membros se reúnem para cultivar a fraternidade, praticar rituais e compartilhar ensinamentos.",
        activities: {
          meditation: "Reuniões mensais de meditação e estudo",
          celebrations: "Celebrações de solstícios e equinócios",
          meals: "Refeições fraternas e momentos de convivência",
          library: "Biblioteca compartilhada de obras esotéricas"
        },
        joinTitle: "Junte-se à nossa Fraternidade",
        joinDesc: "Torne-se membro da Grande Ordem do Círculo e descubra a profundidade da fraternidade autêntica baseada no amor, sabedoria e serviço.",
        learnMore: "Saiba mais"
      },
      charity: {
        motto: "Onde se encontra a árvore do conhecimento, encontra-se a felicidade",
        title: "Caridade & Obras Sociais",
        serviceTitle: "Serviço Desinteressado",
        serviceDesc: "No coração do nosso ensinamento esotérico encontra-se o princípio do serviço desinteressado. A verdadeira sabedoria é adquirida não apenas através do estudo, mas também através da ação compassiva para com nossos semelhantes.",
        works: {
          spiritual: "Assistência Espiritual",
          spiritualDesc: "Apoio espiritual gratuito para pessoas em angústia moral ou existencial. Nossos membros treinados oferecem escuta, conselho e apoio energético.",
          material: "Ajuda Material",
          materialDesc: "Distribuição de ajuda material a famílias necessitadas: alimentos, roupas, apoio financeiro ocasional para situações de emergência.",
          education: "Educação Gratuita",
          educationDesc: "Cursos gratuitos de filosofia, meditação e desenvolvimento pessoal para pessoas que não podem acessar ensinamentos pagos.",
          energy: "Cura Energética",
          energyDesc: "Sessões de cuidado energético e cura holística oferecidas gratuitamente a pessoas que sofrem de doenças ou desequilíbrios."
        },
        participate: "Participe das nossas Obras",
        participateDesc: "Cada membro do GOC dedica tempo e recursos às obras de caridade. Junte-se a nós nesta missão de serviço e compaixão.",
        donate: "Fazer uma doação",
        volunteer: "Tornar-se voluntário"
      },
      "donation": {
    "charite": {
      "title": "Doação de Caridade",
      "generosityInAction": "Sua Generosidade em Ação",
      "message": "O mínimo ou mais da sua doação é generosidade que nos permite planejar nossas ações de ajuda e solidariedade para pessoas necessitadas.",
      "minimumLabel": "Doação Mínima de Caridade",
      "amount": "€100",
      "actTitle": "Um Ato de Grande Generosidade",
      "actDescription": "A doação de caridade representa um compromisso significativo com os valores de auxílio mútuo e solidariedade da Grande Ordem do Círculo. Através deste gesto generoso, você nos permite apoiar sustentavelmente nossas ações caridosas e ajudar concretamente aqueles que mais precisam.",
      "impact": {
        "title": "Impacto da Sua Doação de Caridade",
        "items": [
          "Ajuda direta a pessoas em grande dificuldade",
          "Financiamento de programas de solidariedade",
          "Apoio a famílias necessitadas",
          "Ações humanitárias concretas",
          "Ajuda de emergência durante crises"
        ]
      },
      "recognition": {
        "title": "Reconhecimento Especial",
        "description": "Como doador caridoso, você recebe reconhecimento especial:",
        "items": [
          "Menção no Círculo de Benfeitores (se desejado)",
          "Relatório anual sobre o uso dos fundos",
          "Convite para eventos de caridade da Ordem",
          "Certificado de reconhecimento (mediante solicitação)",
          "Recibo fiscal para dedução"
        ]
      },
      "examples": {
        "title": "Exemplos de Ações Financiadas",
        "food": "Ajuda alimentar para famílias",
        "medical": "Apoio médico de emergência",
        "education": "Bolsas de estudo para crianças"
      },
      "form": {
        "title": "Faça uma Doação de Caridade",
        "subtitle": "Valor mínimo: €100. Sua generosidade muda vidas.",
        "amountLabel": "Valor da sua doação de caridade (mínimo €100)",
        "customPlaceholder": "Ou insira um valor (mín. €100)",
        "typeLabel": "Tipo de doação",
        "types": {
          "unique": "Doação única",
          "monthly": "Doação mensal recorrente",
          "quarterly": "Doação trimestral",
          "annual": "Doação anual"
        },
        "firstName": "Nome *",
        "lastName": "Sobrenome *",
        "email": "Email *",
        "message": "Mensagem (opcional)",
        "messagePlaceholder": "Compartilhe suas motivações ou dedique sua doação...",
        "receipt": "Desejo receber um recibo fiscal",
        "circle": "Concordo em ser mencionado no Círculo de Benfeitores",
        "submit": "🤲 Fazer minha doação de caridade (mín. €100)",
        "secure": "✓ Pagamento 100% seguro • ✓ Recibo fiscal disponível"
      },
      "thankYou": {
        "title": "Obrigado por Sua Grande Generosidade",
        "description": "Sua doação de caridade faz uma diferença concreta na vida de muitas pessoas. Graças à sua generosidade, podemos continuar nossas ações de ajuda e solidariedade com aqueles que mais precisam. Que seu gesto seja abençoado.",
        "gratitude": "🙏 Com nossa mais profunda gratidão 🙏"
      }
    },
    "soutien": {
      "title": "Apoio ao Desenvolvimento da Ordem",
      "generosityInAction": "Sua Generosidade em Ação",
      "message": "O mínimo ou mais da sua doação é generosidade que nos permite planejar nossas ações de ajuda e solidariedade para pessoas necessitadas.",
      "minimumLabel": "Doação Mínima de Apoio",
      "amount": "€50",
      "contributeTitle": "Contribua com Nossa Missão",
      "contributeDescription": "Suas doações de apoio permitem que a Grande Ordem do Círculo continue transmitindo ensinamentos esotéricos, organizando eventos espirituais e mantendo nossa infraestrutura. Cada contribuição ajuda a preservar e difundir a tradição hermética.",
      "funding": {
        "title": "Financiamento da Formação",
        "items": [
          "Criação de novos cursos online",
          "Compensação para professores qualificados",
          "Produção de conteúdo em vídeo HD",
          "Desenvolvimento de materiais educacionais",
          "Organização de seminários e retiros"
        ]
      },
      "infrastructure": {
        "title": "Manutenção da Infraestrutura",
        "items": [
          "Manutenção das comendarias regionais",
          "Biblioteca esotérica e arquivos",
          "Plataforma digital e site",
          "Aquisição de novas obras raras",
          "Equipamento ritual e acessórios"
        ]
      },
      "editorial": {
        "title": "Projetos Editoriais",
        "items": [
          "Publicação da revista trimestral",
          "Edição de livros esotéricos",
          "Tradução de textos antigos",
          "Cadernos de estudos herméticos",
          "Distribuição de conteúdo gratuito"
        ]
      },
      "international": {
        "title": "Alcance Internacional",
        "items": [
          "Abertura de novas comendarias",
          "Conferências internacionais",
          "Intercâmbios com outras ordens",
          "Tradução das formações",
          "Presença em eventos espirituais"
        ]
      },
      "budget": {
        "title": "Orçamento Anual 2026",
        "training": "Formações",
        "infrastructure": "Infraestrutura",
        "editorial": "Editoração",
        "outreach": "Alcance"
      },
      "levels": {
        "title": "Níveis de Apoio Mensal",
        "friend": {
          "name": "Amigo da Ordem",
          "price": "€10",
          "period": "/mês",
          "benefits": [
            "Agradecimento no site",
            "Newsletter exclusiva",
            "Distintivo de Amigo do GOC"
          ],
          "button": "Apoiar"
        },
        "benefactor": {
          "name": "Benfeitor",
          "price": "€25",
          "period": "/mês",
          "badge": "RECOMENDADO",
          "benefits": [
            "Todos os benefícios anteriores",
            "Acesso a conteúdo exclusivo",
            "Convite para eventos VIP",
            "Revista trimestral gratuita"
          ],
          "button": "Apoiar"
        },
        "patron": {
          "name": "Grande Patrono",
          "price": "€50",
          "period": "/mês",
          "benefits": [
            "Todos os benefícios anteriores",
            "Menção no Panteão dos Patronos",
            "Consulta espiritual anual",
            "Presente espiritual personalizado"
          ],
          "button": "Apoiar"
        }
      },
      "form": {
        "title": "Doação única",
        "amountLabel": "Valor do seu apoio",
        "customPlaceholder": "Outro valor",
        "typeLabel": "Tipo de apoio",
        "types": {
          "unique": "Doação única",
          "monthly": "Apoio mensal recorrente"
        },
        "firstName": "Nome",
        "lastName": "Sobrenome",
        "email": "Email *",
        "submit": "Apoiar agora",
        "secure": "✓ Pagamento 100% seguro • ✓ Cancelamento possível a qualquer momento"
      }
    },
    "sympathie": {
      "title": "Doação de Simpatia",
      "generosityInAction": "Sua Generosidade em Ação",
      "message": "O mínimo ou mais da sua doação é generosidade que nos permite planejar nossas ações de ajuda e solidariedade para pessoas necessitadas.",
      "minimumLabel": "Doação Mínima de Simpatia",
      "amount": "€25",
      "gestureTitle": "Um Gesto do Coração",
      "gestureDescription": "A doação de simpatia é um gesto livre e espontâneo que não exige nada em troca. É uma manifestação de seu apoio e conexão com os valores da Grande Ordem do Círculo, sem expectativas ou obrigações.",
      "freedom": {
        "title": "Total Liberdade",
        "description": "Diferentemente de outras formas de doação, a doação de simpatia é inteiramente livre: valor livre (mínimo €25), frequência livre, anonimato possível. É simplesmente uma maneira de expressar seu apreço pelo trabalho da Ordem e contribuir, em seu nível, para a preservação da tradição esotérica."
      },
      "why": {
        "title": "Por que fazer uma doação de simpatia?",
        "items": [
          "Você aprecia nossa missão e valores",
          "Deseja apoiar sem se comprometer",
          "Quer oferecer um gesto único",
          "Não pode se tornar membro mas quer ajudar",
          "Sente uma conexão espiritual com a Ordem"
        ]
      },
      "usage": {
        "title": "Como é utilizada?",
        "description": "As doações de simpatia contribuem para nossas ações de ajuda e solidariedade. São utilizadas onde a necessidade é maior:",
        "items": [
          "Ajuda a pessoas em dificuldade",
          "Ações de solidariedade comunitária",
          "Desenvolvimento de novo conteúdo gratuito",
          "Projetos especiais e oportunidades",
          "Fundo de reserva para contingências"
        ]
      },
      "noReturn": {
        "title": "Nenhum Retorno, Apenas Gratidão",
        "description": "Não oferecemos nada em troca da sua doação de simpatia, exceto nossa profunda gratidão. Você não receberá uma newsletter especial, nenhum convite exclusivo, nenhum reconhecimento público (a menos que deseje). É um ato puro de generosidade e bondade."
      },
      "testimonials": {
        "title": "Por que fizeram uma doação de simpatia",
        "items": [
          {
            "quote": "Não sou membro do GOC mas leio suas publicações gratuitas há 2 anos. Elas me trouxeram muito e simplesmente quis dizer obrigado.",
            "author": "Marie L., simpatizante"
          },
          {
            "quote": "Seu trabalho de preservação das tradições esotéricas é precioso. Não posso me comprometer plenamente mas quis contribuir à minha maneira.",
            "author": "Jean-Marc D., amigo da Ordem"
          },
          {
            "quote": "Fui membro há alguns anos e tive que parar por motivos pessoais. Esta pequena doação é minha maneira de permanecer conectado à fraternidade.",
            "author": "Sophie R., ex-membro"
          }
        ]
      },
      "form": {
        "title": "Faça uma Doação de Simpatia",
        "subtitle": "Valor mínimo: €25. Cada gesto conta e é apreciado.",
        "amountLabel": "Valor da sua doação (mínimo €25)",
        "customPlaceholder": "Ou insira um valor (mín. €25)",
        "optionalInfo": "As informações abaixo são opcionais",
        "firstName": "Nome (opcional)",
        "lastName": "Sobrenome (opcional)",
        "email": "Email (opcional)",
        "emailNote": "Apenas para recibo de confirmação",
        "message": "Uma mensagem para nós? (opcional)",
        "messagePlaceholder": "Deixe-nos uma nota se desejar...",
        "anonymous": "Prefiro permanecer completamente anônimo",
        "mention": "Podem mencionar meu primeiro nome nos agradecimentos públicos",
        "submit": "💛 Enviar minha doação de simpatia (mín. €25)",
        "secure": "✓ Pagamento 100% seguro"
      },
      "thankYou": {
        "title": "Do fundo dos nossos corações, obrigado",
        "description": "Cada doação de simpatia, qualquer que seja o valor, é recebida com profunda gratidão. Estes gestos espontâneos de generosidade nos lembram que nossa missão toca corações e contribui verdadeiramente para o bem-estar espiritual de muitas pessoas. Obrigado por estar aqui.",
        "gratitude": "🙏 Com toda nossa apreciação 🙏"
      }
    },
    "common": {
      "contact": {
        "title": "Contato",
        "headquarters": "Sede",
        "france": "França",
        "address": "B.P. 13241",
        "city": "Yaoundé - Camarões",
        "contactPerson": "Richard Mbouma Kohomm",
        "street": "11 av. Joseph Rollo",
        "zipCity": "78320 La Verrière – França",
        "email": "mkohomm@gmail.com"
      }
    }
  },
      contact: {
        title: "Contato",
        headquarters: "Sede",
        france: "França"
      },
      common: {
        securePayment: "Pagamento 100% seguro",
        cancel: "Cancelar",
        confirm: "Confirmar",
        save: "Salvar",
        close: "Fechar",
        loading: "Carregando...",
        error: "Erro",
        success: "Sucesso"
      }
    }
  },

  // CHINESE (COMPLETE)
  zh: {
    translation: {
      nav: {
        home: "首页",
        goc: "GOC",
        gocSubtitle: "大圆圈兄弟会",
        gocOrganisation: "组织",
        gocOrganisationDesc: "我们的结构",
        gocActions: "行动",
        gocActionsDesc: "我们的倡议",
        gocCharity: "慈善",
        gocCharityDesc: "慈善事业",
        gocFraternity: "兄弟会",
        gocFraternityDesc: "精神纽带",
        formation: "培训",
        formationEsoterism: "神秘主义",
        formationEsoterismDesc: "古老的奥秘",
        formationPhilosophy: "哲学",
        formationPhilosophyDesc: "神圣的思想",
        formationPowers: "力量",
        formationPowersDesc: "内在发展",
        library: "图书馆",
        libraryAccessories: "仪式配件",
        libraryAccessoriesDesc: "神圣的工具",
        libraryBooks: "书籍",
        libraryBooksDesc: "祖先的知识",
        libraryJournals: "期刊",
        libraryJournalsDesc: "出版物",
        libraryVideos: "视频",
        libraryVideosDesc: "教导",
        becomeMember: "成为会员",
        memberApprentice: "学徒会员",
        memberApprenticeDesc: "第一步",
        memberBrotherSister: "兄弟/姐妹会员",
        memberBrotherSisterDesc: "承诺",
        memberAuditor: "学习者听众",
        memberAuditorDesc: "发现",
        donation: "捐赠",
        donationCharity: "慈善",
        donationCharityDesc: "帮助他人",
        donationSupport: "支持",
        donationSupportDesc: "贡献",
        donationSympathy: "同情",
        donationSympathyDesc: "参与",
        members: "会员区",
        login: "登录",
        signup: "注册",
        logout: "退出",
        myAccount: "我的账户",
        closeMenu: "关闭菜单",
        openMenu: "打开菜单"
      }, enseignements: {
        meta: {
          title: "入门教诲 | GOC",
          description: "改变你生命的入门教诲 - 大圆秩序"
        },
        hero: {
          subtitle: "入门之道",
          title: "入门教诲",
          titleHighlight: "改变你的生命"
        },
        introduction: {
          quote: "无论年龄、性别或文化，每个人都渴望在生活中取得成功。要实现这一目标，你必须利用你积极的能量和品质的力量来确立自己并取得成功。",
          paragraph1: "因此，如果你想取得成功，你能做的最好投资就是利用你内在的光芒——也就是说，你真实的个性、你的力量和你的积极品质。",
          study: "最近的一项美国研究表明，一个人的成功{{percentagePersonality}}取决于他的个性；剩余的{{percentageKnowledge}}代表他的知识和经验。",
          conclusion: "{{goc}}给你实现这一目标的钥匙。"
        },
        mainContent: {
          title: "GOC的教诲",
          subtitle: "哲学和意识形态知识、获取力量和个人发展的极其强大的关键和技术！"
        },
        pillars: {
          esoterisme: {
            title: "神秘主义",
            items: [
              "上帝的概念",
              "宗教知识",
              "不朽",
              "做自己",
              "迷人的生活",
              "磁力",
              "人道主义",
              "意识形态",
              "生命、存在、死亡",
              "阴阳",
              "自我与他者"
            ]
          },
          philosophie: {
            title: "哲学",
            items: [
              { title: "思想", desc: "非洲、中国、印度、希腊" },
              { title: "信仰", desc: "神圣的起源，宗教历史" },
              { title: "神话", desc: "千面英雄" },
              { title: "智慧", desc: "五大支柱" }
            ]
          },
          pouvoirs: {
            title: "力量",
            items: [
              "连接有益的力量",
              "发现你的内在存在",
              "净化你的心灵",
              "掌控你的思想",
              "唤醒你隐藏的能力",
              "无需身体行动就能影响你的环境",
              "身体再生",
              "获得更好的健康",
              "增加你的预期寿命",
              "设定目标并实现它们",
              "获得物质福祉",
              "改善你的生活质量",
              "获得灵性觉醒",
              "保护自己免受无论来源如何的所有不幸"
            ],
            more: "还有更多..."
          }
        },
        development: {
          title: "力量的发展",
          quote: "所有寻求灵性进化和力量获取的人都将接受教诲，使他们能够获得磁性而光辉的个性。",
          cta: "开始你的入门"
        },
        footerQuote: "真正的净化，进入最高的意识状态，获取行动的力量。",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },"memberSpace": {
    "loading": "加载中...",
    "noSubscription": {
      "title": "无有效订阅",
      "description": "您必须订阅会员计划才能访问会员专区",
      "button": "选择订阅"
    },
    "welcome": "欢迎",
    "member": "会员",
    "active": "活跃",
    "contentSections": {
      "esotericTraining": {
        "title": "神秘学培训",
        "description": "访问基础教学"
      },
      "philosophicalTraining": {
        "title": "哲学培训",
        "description": "深化您的知识"
      },
      "powerDevelopment": {
        "title": "能力发展",
        "description": "独家高级内容"
      },
      "library": {
        "title": "图书馆",
        "description": "访问文献资源"
      },
      "videos": {
        "title": "视频",
        "description": "独家视频内容"
      }
    },
    "locked": {
      "requires": "需要",
      "upgradeButton": "升级订阅"
    },
    "access": "访问",
    "upgradeCTA": {
      "title": "解锁更多内容",
      "description": "升级您的订阅以访问所有独家内容",
      "button": "升级"
    },
    "roles": {
      "auditeur": {
        "name": "听众",
        "description": "基础培训访问权限"
      },
      "apprenti": {
        "name": "学徒",
        "description": "高级哲学培训"
      },
      "frere-soeur": {
        "name": "兄弟/姐妹",
        "description": "所有内容的完全访问权限"
      }
    }
  },
      goc: {
  actions: {
    title: "GOC行动",
    subtitle: "我们在世界的行动",
    items: {
      seminars: { title: "入门研讨会", description: "组织研讨会和精神静修，让会员深化他们的神秘旅程并体验变革性的入门体验。" },
      conferences: { title: "公开会议", description: "通过向公众开放的会议传播神秘和哲学知识，主题涉及精神、神秘和形而上学。" },
      publications: { title: "出版物", description: "出版书籍、期刊和教育文件，保存和传递西方和东方神秘主义的传统教导。" },
      rituals: { title: "集体仪式", description: "庆祝季节性和入门仪式，让会员与宇宙力量连接并增强秩序的集体能量场。" }
    },
    program: {
      title: "年度计划",
      seasons: {
        spring: { name: "春季", activity: "春分仪式，精神更新研讨会" },
        summer: { name: "夏季", activity: "夏季静修，夏至庆典，入门仪式" },
        autumn: { name: "秋季", activity: "哲学研讨会，精神收获仪式" },
        winter: { name: "冬季", activity: "冬至，深度冥想，秘密教导" }
      }
    }
  },
  charity: {
    title: "慈善与社会事业",
    serviceTitle: "无私服务",
    serviceDesc: "我们神秘教导的核心是无私服务的原则。真正的智慧不仅通过研究获得，还通过对我们同胞的慈悲行动获得。",
    works: {
      spiritual: { title: "精神援助", description: "为道德或存在困境中的人提供免费精神支持。我们训练有素的会员提供倾听、建议和能量支持。" },
      material: { title: "物质援助", description: "向有需要的家庭分发物质援助：食物、衣服、紧急情况的临时财务支持。" },
      education: { title: "免费教育", description: "为无法获得付费教导的人提供免费哲学、冥想和个人发展课程。" },
      energy: { title: "能量治疗", description: "免费为患有疾病或失衡的人提供能量护理和整体治疗课程。" }
    },
    participate: { title: "参与我们的事业", description: "每个GOC会员都将时间和资源投入到慈善工作中。加入我们这项服务和慈悲的使命。", donate: "捐款", volunteer: "成为志愿者" }
  },
  fraternity: {
    title: "普世兄弟会",
    ourFraternity: "我们的兄弟会",
    description: "大圆圈兄弟会是一个由女性和男性组成的社区，不分种族、民族、国家和国籍，自愿且无任何限制地同意成为会员，并承诺严格遵守管理大圆圈组织生活的XII原则规则。",
    transcendentLink: "超越的纽带",
    transcendentDesc: "大圆圈内的兄弟会不仅仅是友谊，而是一种深刻的精神纽带，将灵魂团结在对光明和知识的追求中。",
    features: {
      spiritualHelp: { title: "精神互助", description: "兄弟姐妹在启蒙旅程中互相帮助" },
      knowledge: { title: "知识分享", description: "启蒙会员之间传递神秘知识" },
      mutualSupport: { title: "相互支持", description: "在生活的考验中陪伴" },
      rituals: { title: "兄弟仪式", description: "加强秩序成员之间联系的仪式" },
      network: { title: "国际网络", description: "与世界各地会员的联系" },
      meditation: { title: "集体冥想", description: "团体精神实践以放大能量" }
    },
    commanderies: {
      title: "兄弟指挥部",
      description: "每个地区都有其指挥部，一个神圣的地方，会员们聚集在那里培养兄弟情谊，实践仪式并分享教导。",
      activities: { meditation: "每月冥想和学习会议", celebrations: "至日和分点庆祝活动", meals: "兄弟餐和聚会时刻", library: "神秘作品共享图书馆" }
    },
    join: { title: "加入我们的兄弟会", description: "成为大圆圈的会员，发现基于爱、智慧和服务的真正兄弟会的深度。", button: "了解更多" }
  }
},
formation: {
  esoterism: {
    title: "神秘学培训",
    subtitle: "神秘科学",
    intro: "神秘学指的是自古以来由师父传授给弟子的秘密知识和灵性实践。我们全面的培训将引导您了解宇宙的隐藏奥秘以及统治微妙层面的法则。",
    sections: {
      symbolism: {
        title: "神圣象征主义",
        items: [
          "赫尔墨斯符号的解释",
          "神圣几何和神秘数字",
          "魔法字母和印记"
        ]
      },
      alchemy: {
        title: "灵性炼金术",
        items: [
          "炼金术的伟大工作",
          "内在转化",
          "哲人石和生命灵药"
        ]
      },
      kabbalah: {
        title: "卡巴拉与生命之树",
        items: [
          "十质点研究",
          "生命之树的路径",
          "希伯来数字学和数秘术"
        ]
      },
      tarot: {
        title: "塔罗与占卜",
        items: [
          "大阿卡纳和小阿卡纳",
          "传统占卜艺术",
          "直觉的发展"
        ]
      }
    },
    program: {
      title: "培训计划",
      level1: {
        title: "级别1 - 学徒（12个月）",
        description: "神秘学基础、象征主义、冥想、初步仪式"
      },
      level2: {
        title: "级别2 - 同伴（18个月）",
        description: "炼金术、卡巴拉、神秘占星术、高级能量工作"
      },
      level3: {
        title: "级别3 - 大师（24个月）",
        description: "秘密教导、高级魔法、深入奥秘的启蒙"
      }
    },
    signup: "报名参加培训"
  },
  philosophy: {
    title: "哲学培训",
    subtitle: "神秘哲学",
    intro: "神秘哲学探索存在的基本问题：我们是谁，我们从哪里来，我们要去哪里？我们的教学将东西方伟大的哲学传统融合成独特的综合。",
    traditions: {
      hermetic: {
        title: "赫尔墨斯哲学",
        description: "研究赫尔墨斯七原则：心智主义、对应、振动、极性、节律、因果、性别。这些宇宙法则的实际应用。"
      },
      neoplatonic: {
        title: "新柏拉图主义与诺斯替",
        description: "柏拉图、普罗提诺和诺斯替派的教导。太一学说、世界的流溢、灵魂向其神圣源头的上升。"
      },
      eastern: {
        title: "东方智慧",
        description: "吠檀多、佛教、道教：探索东方哲学及其沉思实践。非二元性、空性、无为。"
      },
      modern: {
        title: "现代形而上学",
        description: "科学与灵性的综合。量子物理学与意识、现实的新范式。"
      }
    },
    themes: {
      title: "研究主题",
      items: [
        "意识与灵魂的本质",
        "宇宙起源论和世界的创造",
        "业力、轮回和命运",
        "自由意志与决定论",
        "灵性伦理和神秘道德"
      ]
    },
    methods: {
      title: "教学方法",
      items: [
        "理论课程和研讨会",
        "苏格拉底式对话和辩论",
        "引导哲学冥想",
        "神圣文本的评注阅读",
        "书面作业和论文"
      ]
    },
    continuous: {
      title: "持续培训",
      description: "哲学培训为期3年，包括每月课程、季度研讨会以及使用我们的神秘图书馆。",
      button: "详细计划"
    }
  },
  powers: {
    title: "力量发展",
    subtitle: "高级能力",
    intro: "超越普通能力，人类拥有可以通过灵性训练发展的潜在能力。我们的培训指导您唤醒这些灵性和心灵力量。",
    warning: {
      title: "⚠️ 重要警告",
      description: "力量的发展需要严格的道德和灵性准备。这些教导只传授给表现出成熟和无可挑剔的伦理的入门会员。"
    },
    abilities: {
      clairvoyance: {
        title: "透视",
        description: "发展微妙的视觉，能够感知能量层面、光环和灵性实体。",
        items: ["第三眼激活", "以太和星体视觉", "光环阅读"]
      },
      telepathy: {
        title: "心灵感应",
        description: "直接心灵沟通、思想和接收、与远处意识的连接。",
        items: ["思想传输", "直觉接收", "与指导灵的沟通"]
      },
      magnetism: {
        title: "磁力",
        description: "掌握生命能量进行治疗、协调和转化。治疗磁力和双手放置技术。",
        items: ["能量积累", "能量治疗", "脉轮协调"]
      },
      astral: {
        title: "星体投射",
        description: "脱离肉体在微妙层面旅行。有意识地探索灵性维度。",
        items: ["自愿出体", "有意识星体旅行", "高级层面探索"]
      },
      psychometry: {
        title: "心理测量",
        description: "阅读物体、地点和人身上浸透的能量。感知能量历史的能力。",
        items: ["物体阅读", "记忆感知", "高级心理测量"]
      },
      meditation: {
        title: "深度冥想",
        description: "改变的意识状态、三摩地、神秘结合。进入存在的超越维度。",
        items: ["深度冥想状态", "神秘体验", "与神圣结合"]
      }
    },
    program: {
      title: "渐进计划",
      subtitle: "力量的觉醒遵循几年内的渐进和安全过程",
      year1: {
        title: "第1年",
        description: "准备与净化"
      },
      year2: {
        title: "第2年",
        description: "激活与发展"
      },
      year3: {
        title: "第3年+",
        description: "掌握与传承"
      }
    }
  }
},
      library: {
  intro: {
    quote: "物质循环，精神滋养…",
    description: "作为知识之地，GOC图书馆向会员、附属听众和支持者提供其出版物《玛阿特》、教学视频和小册子、哲学、智慧和秘密知识书籍。以及会员服装和其他仪式配件。",
    orderForm: "订购表格"
  },
  accessories: {
    description: "仪式配件是用于神秘实践和入门仪式的神圣工具。每个物品都根据赫尔墨斯传统进行祝圣和能量充电。",
    items: {
      candles: { title: "仪式蜡烛", description: "不同颜色的祝圣蜡烛用于特定仪式：白色（净化）、金色（灵性）、红色（爱情）、绿色（繁荣）。", availability: "会员可用" },
      crystals: { title: "水晶与宝石", description: "净化和编程的水晶收藏：石英、紫水晶、黄水晶、黑曜石。每颗宝石都有其特定的能量属性。", availability: "会员可用" },
      incense: { title: "神圣香薰", description: "用于净化和振动提升的传统香薰：乳香、没药、安息香、檀香。古老的寺庙配方。", availability: "会员可用" },
      sword: { title: "仪式剑", description: "用于绘制保护圈和在仪式期间引导能量的象征性剑。按照赫尔墨斯传统锻造。", availability: "仅限入门者" },
      chalice: { title: "祝圣杯", description: "代表水元素和女性原则的圣杯。用于供奉和精神交流仪式。", availability: "仅限入门者" },
      malas: { title: "念珠与玛拉", description: "由神圣木材、半宝石或金刚菩提子制成的冥想念珠。108颗珠子用于念诵练习（咒语重复）。", availability: "会员可用" },
      feathers: { title: "仪式羽毛", description: "用于分散香薰烟雾和净化仪式空间的神圣鸟类羽毛。美洲原住民和萨满传统。", availability: "会员可用" },
      talismans: { title: "五角星与护身符", description: "根据所罗门魔法传统雕刻的五角星。根据您的星盘定制的个性化护身符。", availability: "需订购" },
      robes: { title: "长袍与服装", description: "秩序颜色的仪式长袍、斗篷和仪式服装。按照传统用天然面料制成。", availability: "仅限会员" }
    },
    cta: { title: "订购配件", description: "仪式配件可供GOC会员购买。每个物品在交付前都单独祝圣。", button: "进入商店", note: "* 需要登录 - 仅限入门会员" }
  },journals: {
    title: "期刊与出版物",
    intro: "大圆圈定期出版期刊、简报和评论，用于成员的继续教育和神秘知识的传播。",
    mainJournal: {
      title: "圆圈之光",
      subtitle: "GOC官方期刊 - 季刊",
      summary: "目录：",
      format: "格式：",
      items: [
        "深入的神秘教导",
        "季节性仪式和实践",
        "会员见证",
        "秩序新闻"
      ],
      formatItems: [
        "40-60页插图",
        "纸质和数字版本",
        "自1985年以来的完整档案",
        "仅限会员"
      ]
    },
    publications: {
      bulletin: {
        title: "兄弟会简报",
        description: "旨在维持会员之间联系的月度简报。有关即将举行的会议、研讨会和活动的信息。",
        frequency: "每月",
        pages: "12-16页",
        access: "仅限会员"
      },
      cahiers: {
        title: "赫尔墨斯研究笔记本",
        description: "关于特定神秘主题的深入学术评论：炼金术、卡巴拉、占星术、象征主义、神秘哲学。",
        frequency: "双月刊",
        pages: "60-80页",
        access: "入门会员"
      },
      lettres: {
        title: "大宗师信函",
        description: "秩序大宗师的直接教导，为高级会员传递深刻的知识和精神指导。",
        frequency: "季刊",
        pages: "8-12页",
        access: "二级入门者"
      },
      almanach: {
        title: "神秘年鉴",
        description: "年度出版物，包含重要日期、月相、行星位置、仪式日历和推荐实践。",
        frequency: "年度",
        pages: "120页",
        access: "对所有人开放"
      }
    },
    archives: {
      title: "历史档案",
      description: "访问自秩序成立以来我们出版物的完整档案。数十年的神秘知识触手可及。",
      stats: {
        journal: "《圆圈之光》期数",
        bulletins: "月度简报",
        years: "档案年数"
      }
    },
    cta: {
      title: "访问出版物",
      description: "成为大圆圈的会员，接收我们的出版物并访问完整档案。",
      becomeMember: "成为会员",
      consultArchives: "查阅档案"
    }
  },
  books: {
    title: "神秘图书馆",
    intro: "我们的图书馆收藏了非凡的秘传、赫尔墨斯和哲学著作。一些珍本仅供入门会员使用。",
    sections: {
      alchemy: "炼金术与赫尔墨斯主义",
      kabbalah: "卡巴拉与犹太神秘主义",
      magic: "仪式魔法",
      philosophy: "神秘哲学",
      tarot: "塔罗与象征主义"
    },
    access: {
      open: "对所有人开放",
      members: "仅限会员",
      initiates: "仅限入门者"
    },
    onSite: {
      title: "现场咨询",
      description: "会员可以在我们的场所查阅整个图书馆。有利于冥想的学术氛围。",
      note: "会员可预约使用"
    },
    digital: {
      title: "数字图书馆",
      description: "访问我们的数字图书馆，包含数百本PDF格式的书籍，可通过您的会员空间24/7访问。",
      note: "仅限活跃会员"
    }
  },
  videos: {
    title: "神秘视频库",
    intro: "我们的视频库提供会议、拍摄的仪式、引导冥想和大宗师的教导。GOC会员的独家内容。",
    categories: {
      conferences: {
        title: "会议",
        description: "我们入门的宗师关于神秘主义、炼金术、卡巴拉和赫尔墨斯哲学的精彩会议。",
        count: "45+ 视频",
        access: "会员访问"
      },
      meditations: {
        title: "引导冥想",
        description: "用于精神发展、脉轮激活和与神圣连接的引导冥想课程。",
        count: "30+ 视频",
        access: "开放访问"
      },
      rituals: {
        title: "拍摄仪式",
        description: "入门仪式、季节性庆典和秩序内传递的神秘实践的记录。",
        count: "25+ 视频",
        access: "仅限入门者"
      },
      courses: {
        title: "理论课程",
        description: "关于神秘主义、神秘科学、哲学和神圣象征主义的完整培训课程。",
        count: "60+ 视频",
        access: "会员访问"
      },
      energy: {
        title: "能量实践",
        description: "发展心灵能力、能量工作和磁性的实践练习。",
        count: "35+ 视频",
        access: "会员访问"
      },
      secret: {
        title: "秘密教导",
        description: "大宗师关于赫尔墨斯传统深层奥秘的保留教导。",
        count: "20+ 视频",
        access: "仅限大师"
      }
    },
    recent: {
      title: "最新出版物",
      videos: [
        {
          title: "实用卡巴拉入门",
          description: "大宗师关于卡巴拉基础及其在日常生活中的应用的会议。",
          duration: "1小时25分钟",
          date: "2026年1月",
          access: "会员"
        },
        {
          title: "满月冥想",
          description: "特殊的引导冥想，用于连接月球能量并获得启示。",
          duration: "45分钟",
          date: "2026年1月",
          access: "开放访问"
        },
        {
          title: "2025年冬至仪式",
          description: "在中央指挥部庆祝的冬至仪式完整记录。",
          duration: "2小时10分钟",
          date: "2025年12月",
          access: "入门者"
        }
      ]
    },
    stats: {
      title: "我们的视频收藏",
      total: "视频总数",
      hours: "独家内容",
      quality: "高清和4K画质",
      access: "无限访问"
    },
    cta: {
      title: "访问视频库",
      description: "成为会员以访问我们的整个视频收藏，并每月受益于新内容。",
      button: "立即注册"
    }
  }
},
      home: {
        title: "大圆圈兄弟会",
        motto: "知识之树所在，幸福所在",
        subtitle: {
          line1: "神秘与哲学培训…",
          line2: "精神兄弟会。"
        },
        masterDestiny: "完全掌握你的命运…",
        benefits: {
          connectForces: "与有益力量连接",
          innerBeing: "发现你的内在存在",
          cleansePsyche: "净化你的心灵",
          masterMind: "掌握你的思想",
          awakenPowers: "唤醒隐藏的能力",
          influence: "无需身体行动影响环境",
          regenerate: "身体再生",
          longevity: "延长寿命",
          achieveGoals: "设定目标并实现",
          materialWellbeing: "获得物质福祉",
          qualityOfLife: "提高生活质量",
          spiritualAwakening: "获得精神觉醒",
          protection: "保护自己免受任何不幸，无论来源",
          betterHealth: "获得更好的健康"
        },
        carousel: {
          seminar: "研讨会",
          prieure: "修道院",
          group: "会员小组",
          symbols: "符号"
        },
        links: {
          formation: "我们的培训",
          fraternity: "我们的兄弟会",
          seminars: "我们的研讨会",
          actions: "我们的行动"
        },
        vision: {
          title: "我们的愿景",
          goc: "大圆圈",
          secrets: "秘密知识，精神与启蒙智慧，",
          awakening: "力量觉醒，个人力量，福祉工具…",
          changeLife: "改变你的生活，完全掌握它！",
          description: "通过神秘培训，让你获得秘密知识和精神启蒙智慧，力量觉醒，个人力量和福祉工具…",
          quote: "« 人类最初被构想为纯粹的精神存在，源自神圣原则'按照伟大创造者之灵的形象和样式'。在下降到物质世界的过程中，他被双重冲动所驱动：吸引-排斥，欲望-反感。穿上可腐朽的身体后，他现在与原则的统一分离。他的双重本性——物质和精神——使他陷入精神渴望与物质锁链之间的冲突。从那时起，他出于骄傲而完成了受这些冲动支配的行为。但欲望之人寻求重新融入其原始状态并恢复其荣耀的身体。",
          mission: "GOC的目的是启发启蒙者了解其本性、起源和命运。他或她接受本质上实用和启蒙的教导，涉及神秘主义、灵性、形而上学、瑜伽士的秘密、哲学和个人发展；实现真正的净化，获得最高意识状态和获得行动力量。"
        },
        nav: {
          becomeMember: "成为会员",
          videos: "视频",
          donation: "捐赠",
          commanderies: "指挥部",
          contacts: "联系方式",
          contact: "联系我们"
        },
        image: {
          alt: "大圆圈",
          caption: "古人的智慧为现代人"
        },
        footer: {
          copyright: "© 2026 大圆圈 - 版权所有",
          sapientia: "智慧",
          fraternitas: "兄弟会",
          spiritus: "精神"
        }
      },
      membership: {
        title: "加入我们的秩序",
        subtitle: "选择与你的精神和哲学旅程相匹配的承诺水平",
        adhesion: "会员资格",
        formation: "培训",
        oneTime: "一次性",
        perYear: "每年",
        firstYear: "第一年",
        renewal: "续订",
        becomeMember: "成为会员",
        renew: "续订",
        currentSubscription: "当前订阅",
        learnMore: "了解更多",
        mostPopular: "最受欢迎",
        active: "活跃",
        expired: "过期",
        current: "当前",
        activeSubscription: "活跃订阅",
        adhesionRequired: "需要会员资格",
        buyTrimester: "购买1个学期",
        buyCourse: "购买1门课程",
        processing: "处理中…",
        signupAndBuy: "注册并购买",
        pricePerTrimester: "每学期价格",
        pricePerCourse: "每门课程价格",
        formationAccessible: "培训仅对秩序的活跃会员开放。",
        cotisation: "年度会费",
        error: "发生错误",
        whyJoin: "为什么要成为会员？",
        whyJoinDesc: "通过加入我们的秩序，你可以访问一个致力于精神觉醒、神秘知识和兄弟互助的社区。",
        benefit1: "访问独家教导",
        benefit2: "参加活动和研讨会",
        benefit3: "兄弟会和互助网络",
        benefit4: "精神资源图书馆"
      },
      roles: {
        auditeur: {
          name: "学习者听众",
          description: "基本访问教导",
          formationTitle: "学习者听众培训",
          formationDesc: "单点式个人课程",
          feature1: "灵活地按照自己的节奏购买",
          feature2: "立即访问购买的课程",
          feature3: "丰富详细的内容",
          totalCourses: "共40门课程可用",
          totalCost: "完整总费用",
          totalDuration: "2年完整培训"
        },
        apprenti: {
          name: "学徒会员",
          description: "完整培训",
          formationTitle: "学徒培训",
          formationDesc: "结构化季度培训",
          feature1: "每个季度深入教导",
          feature2: "个性化跟踪你的进度",
          feature3: "访问独家资源",
          totalCost: "培训总费用",
          totalDuration: "总时长：8个学期（2年）"
        },
        "frere-soeur": {
          name: "兄弟/姐妹会员",
          description: "完整高级访问",
          feature1: "所有内容和培训",
          feature2: "个人指导",
          feature3: "24/7优先支持",
          feature4: "独家活动",
          feature5: "国际网络"
        }
      },
      organisation: {
        motto: "知识之树所在，幸福所在",
        title: "GOC组织",
        goc: "GOC",
        structure: "大圆圈秩序的结构围绕：",
        pillars: "支柱",
        grades: "等级",
        rule: "规则",
        pillarsTitle: "支柱",
        pillar1: {
          title: "I – 启蒙",
          item1: "培训",
          item2: "完善"
        },
        pillar2: {
          title: "II – 办公室",
          item1: "仪式",
          item2: "典礼"
        },
        pillar3: {
          title: "III – 慈善",
          item1: "慈善工作",
          item2: "捐赠"
        },
        pillar4: {
          title: "IV – 互助",
          item1: "启蒙者团结",
          item2: "财务支持"
        },
        rulesTitle: "GOC规则",
        rules: {
          "1": "信仰伟大神圣精神",
          "2": "启蒙兄弟会和团结义务",
          "3": "爱、真理、正义与和平的理想",
          "4": "会员和人类的完善",
          "5": "仪式和象征主义的实践",
          "6": "尊重意见和信仰",
          "7": "神圣符号上的誓言",
          "8": "在指挥部聚集和工作",
          "9": "荣誉、忠诚和谨慎",
          "10": "爱国、尊重法律、尊重既定当局",
          "11": "明智和尊严的行为",
          "12": "互助和保护"
        },
        structureTitle: "GOC组织",
        level1: {
          title: "级别1：兄弟圆圈",
          desc: "CC聚集最多770名兄弟的社区"
        },
        level2: {
          title: "级别2：地区",
          desc: "地区在部门级别聚集所有兄弟圆圈"
        },
        level3: {
          title: "级别3：指挥部",
          desc: "指挥部在区域级别聚集所有地区"
        },
        level4: {
          title: "级别4：总督辖区",
          desc: "总督辖区在国家级别聚集所有指挥部"
        },
        level5: {
          title: "级别5：最高灵长类",
          desc: "最高灵长类是GOC的最高机构"
        },
        gradesTitle: "等级",
        grade: {
          "1": "学徒",
          "2": "同伴",
          "3": "官员",
          "4": "可敬的",
          "5": "值得尊敬的",
          "6": "大师",
          "7": "大大师"
        },
        administration: "管理",
        admin1: {
          title: "1) 圆圈",
          item1: "兄弟大会",
          item2: "值得尊敬的",
          item3: "秘书处",
          item4: "财务处",
          item5: "管理处",
          item6: "办公室"
        },
        admin2: {
          title: "2) 地区",
          item1: "地区理事会",
          item2: "大师",
          item3: "秘书处",
          item4: "财务处",
          item5: "管理处",
          item6: "办公室"
        },
        admin3: {
          title: "3) 指挥部",
          item1: "指挥部理事会",
          item2: "指挥官",
          item3: "秘书处",
          item4: "财务处",
          item5: "管理处",
          item6: "办公室"
        },
        admin4: {
          title: "4) 总督辖区/使节",
          item1: "餐厅",
          item2: "大大师",
          item3: "秘书处",
          item4: "财务处",
          item5: "管理处",
          item6: "办公室"
        },
        globalGovernance: "GOC全球治理",
        global1: {
          title: "大会"
        },
        global2: {
          title: "最高餐厅",
          desc: "（GOC理事会）"
        },
        global3: {
          title: "GOC灵长类"
        },
        global4: {
          title: "总秘书处",
          desc: "（GOC管理机构）"
        },
        global5: {
          title: "中央财务处"
        },
        join: "加入秩序"
      },
      fraternity: {
        motto: "知识之树所在，幸福所在",
        title: "普世兄弟会",
        ourFraternity: "我们的兄弟会",
        description: "大圆圈兄弟会是一个由女性和男性组成的社区，不分种族、民族、国家和国籍，自愿且无任何限制地同意成为会员，并承诺严格遵守管理大圆圈组织生活的XII原则规则。",
        transcendentLink: "超越的纽带",
        transcendentDesc: "大圆圈内的兄弟会不仅仅是友谊，而是一种深刻的精神纽带，将灵魂团结在对光明和知识的追求中。",
        features: {
          spiritualHelp: "精神互助",
          spiritualHelpDesc: "兄弟姐妹在启蒙旅程中互相帮助",
          knowledge: "知识分享",
          knowledgeDesc: "启蒙会员之间传递神秘知识",
          mutualSupport: "相互支持",
          mutualSupportDesc: "在生活的考验中陪伴",
          rituals: "兄弟仪式",
          ritualsDesc: "加强秩序成员之间联系的仪式",
          network: "国际网络",
          networkDesc: "与世界各地会员的联系",
          meditation: "集体冥想",
          meditationDesc: "团体精神实践以放大能量"
        },
        commanderies: "兄弟指挥部",
        commanderiesDesc: "每个地区都有其指挥部，一个神圣的地方，会员们聚集在那里培养兄弟情谊，实践仪式并分享教导。",
        activities: {
          meditation: "每月冥想和学习会议",
          celebrations: "至日和分点庆祝活动",
          meals: "兄弟餐和聚会时刻",
          library: "神秘作品共享图书馆"
        },
        joinTitle: "加入我们的兄弟会",
        joinDesc: "成为大圆圈的会员，发现基于爱、智慧和服务的真正兄弟会的深度。",
        learnMore: "了解更多"
      },
      charity: {
        motto: "知识之树所在，幸福所在",
        title: "慈善与社会工作",
        serviceTitle: "无私服务",
        serviceDesc: "我们神秘教导的核心是无私服务的原则。真正的智慧不仅通过研究获得，还通过对我们同胞的慈悲行动获得。",
        works: {
          spiritual: "精神援助",
          spiritualDesc: "为道德或存在困境中的人提供免费精神支持。我们训练有素的会员提供倾听、建议和能量支持。",
          material: "物质援助",
          materialDesc: "向有需要的家庭分发物质援助：食物、衣服、紧急情况的临时财务支持。",
          education: "免费教育",
          educationDesc: "为无法获得付费教导的人提供免费哲学、冥想和个人发展课程。",
          energy: "能量治疗",
          energyDesc: "免费为患有疾病或失衡的人提供能量护理和整体治疗课程。"
        },
        participate: "参与我们的工作",
        participateDesc: "每个GOC会员都将时间和资源投入到慈善工作中。加入我们这项服务和慈悲的使命。",
        donate: "捐款",
        volunteer: "成为志愿者"
      },
      "donation": {
    "charite": {
      "title": "慈善捐赠",
      "generosityInAction": "您的慷慨行动",
      "message": "您的最低或更多捐赠是一种慷慨，使我们能够为有需要的人规划援助和团结行动。",
      "minimumLabel": "最低慈善捐赠",
      "amount": "€100",
      "actTitle": "一个伟大的慷慨之举",
      "actDescription": "慈善捐赠代表着对大圆圈骑士团互助和团结价值观的重要承诺。通过这个慷慨的举动，您使我们能够可持续地支持我们的慈善行动，并具体帮助那些最需要帮助的人。",
      "impact": {
        "title": "您慈善捐赠的影响",
        "items": [
          "直接帮助处于巨大困难中的人",
          "资助团结项目",
          "支持有需要的家庭",
          "具体的人道主义行动",
          "危机期间的紧急援助"
        ]
      },
      "recognition": {
        "title": "特别认可",
        "description": "作为慈善捐赠者，您将获得特别认可：",
        "items": [
          "在恩人圈中提及（如愿意）",
          "资金使用年度报告",
          "邀请参加骑士团慈善活动",
          "认可证书（应要求）",
          "用于扣除的税务收据"
        ]
      },
      "examples": {
        "title": "资助行动示例",
        "food": "家庭食品援助",
        "medical": "紧急医疗支持",
        "education": "儿童奖学金"
      },
      "form": {
        "title": "进行慈善捐赠",
        "subtitle": "最低金额：€100。您的慷慨改变生活。",
        "amountLabel": "您的慈善捐赠金额（最低€100）",
        "customPlaceholder": "或输入金额（最低€100）",
        "typeLabel": "捐赠类型",
        "types": {
          "unique": "一次性捐赠",
          "monthly": "定期月度捐赠",
          "quarterly": "季度捐赠",
          "annual": "年度捐赠"
        },
        "firstName": "名字 *",
        "lastName": "姓氏 *",
        "email": "电子邮件 *",
        "message": "留言（可选）",
        "messagePlaceholder": "分享您的动机或 dedicating 您的捐赠...",
        "receipt": "我希望收到税务收据",
        "circle": "我同意在恩人圈中被提及",
        "submit": "🤲 进行我的慈善捐赠（最低€100）",
        "secure": "✓ 100%安全支付 • ✓ 可提供税务收据"
      },
      "thankYou": {
        "title": "感谢您的大度",
        "description": "您的慈善捐赠对许多人的生活产生了具体的影响。由于您的慷慨，我们可以继续与最需要帮助的人进行援助和团结行动。愿您的举动得到祝福。",
        "gratitude": "🙏 致以最深的感谢 🙏"
      }
    },
    "soutien": {
      "title": "支持骑士团发展",
      "generosityInAction": "您的慷慨行动",
      "message": "您的最低或更多捐赠是一种慷慨，使我们能够为有需要的人规划援助和团结行动。",
      "minimumLabel": "最低支持捐赠",
      "amount": "€50",
      "contributeTitle": "为我们的使命做出贡献",
      "contributeDescription": "您的支持捐赠使大圆圈骑士团能够继续传授神秘学教导，组织灵性活动，并维护我们的基础设施。每一项贡献都有助于保存和传播赫尔墨斯传统。",
      "funding": {
        "title": "培训资金",
        "items": [
          "创建新的在线课程",
          "合格教师的报酬",
          "高清视频内容制作",
          "开发教材",
          "组织研讨会和静修"
        ]
      },
      "infrastructure": {
        "title": "基础设施维护",
        "items": [
          "维护地区指挥部",
          "神秘学图书馆和档案馆",
          "数字平台和网站",
          "收购新的珍本",
          "仪式设备和配件"
        ]
      },
      "editorial": {
        "title": "编辑项目",
        "items": [
          "出版季刊",
          "编辑神秘学书籍",
          "翻译古代文本",
          "赫尔墨斯研究笔记本",
          "免费内容分发"
        ]
      },
      "international": {
        "title": "国际拓展",
        "items": [
          "开设新指挥部",
          "国际会议",
          "与其他骑士团交流",
          "培训翻译",
          "出席灵性活动"
        ]
      },
      "budget": {
        "title": "2026年度预算",
        "training": "培训",
        "infrastructure": "基础设施",
        "editorial": "出版",
        "outreach": "拓展"
      },
      "levels": {
        "title": "月度支持级别",
        "friend": {
          "name": "骑士团之友",
          "price": "€10",
          "period": "/月",
          "benefits": [
            "网站致谢",
            "独家通讯",
            "GOC之友徽章"
          ],
          "button": "支持"
        },
        "benefactor": {
          "name": "恩人",
          "price": "€25",
          "period": "/月",
          "badge": "推荐",
          "benefits": [
            "所有前述福利",
            "访问独家内容",
            "邀请参加VIP活动",
            "免费季刊"
          ],
          "button": "支持"
        },
        "patron": {
          "name": "大赞助人",
          "price": "€50",
          "period": "/月",
          "benefits": [
            "所有前述福利",
            "在赞助人神殿中提及",
            "年度灵性咨询",
            "个性化灵性礼物"
          ],
          "button": "支持"
        }
      },
      "form": {
        "title": "一次性捐赠",
        "amountLabel": "您的支持金额",
        "customPlaceholder": "其他金额",
        "typeLabel": "支持类型",
        "types": {
          "unique": "一次性捐赠",
          "monthly": "定期月度支持"
        },
        "firstName": "名字",
        "lastName": "姓氏",
        "email": "电子邮件 *",
        "submit": "立即支持",
        "secure": "✓ 100%安全支付 • ✓ 可随时取消"
      }
    },
    "sympathie": {
      "title": "同情捐赠",
      "generosityInAction": "您的慷慨行动",
      "message": "您的最低或更多捐赠是一种慷慨，使我们能够为有需要的人规划援助和团结行动。",
      "minimumLabel": "最低同情捐赠",
      "amount": "€25",
      "gestureTitle": "发自内心的举动",
      "gestureDescription": "同情捐赠是一种自由而自发的举动，不要求任何回报。它是对您对大圆圈骑士团价值观支持和联系的表现，没有任何期望或义务。",
      "freedom": {
        "title": "完全自由",
        "description": "与其他形式的捐赠不同，同情捐赠完全自由：自由金额（最低€25）、自由频率、可匿名。这只是表达您对骑士团工作的赞赏，并在您的水平上为保存神秘学传统做出贡献的一种方式。"
      },
      "why": {
        "title": "为什么要进行同情捐赠？",
        "items": [
          "您欣赏我们的使命和价值观",
          "您希望在不承诺的情况下支持",
          "您想提供一个一次性的举动",
          "您无法成为会员但想帮助",
          "您感到与骑士团有灵性联系"
        ]
      },
      "usage": {
        "title": "如何使用？",
        "description": "同情捐赠有助于我们的援助和团结行动。它们被用于最需要的地方：",
        "items": [
          "帮助有困难的人",
          "社区团结行动",
          "开发新的免费内容",
          "特别项目和机会",
          "应急储备金"
        ]
      },
      "noReturn": {
        "title": "无回报，只有感激",
        "description": "除了我们深深的感激之外，我们不为您的同情捐赠提供任何回报。您不会收到特别通讯，没有独家邀请，没有公开认可（除非您愿意）。这是纯粹的慷慨和善意之举。"
      },
      "testimonials": {
        "title": "他们为什么进行同情捐赠",
        "items": [
          {
            "quote": "我不是GOC的会员，但我已经阅读你们的免费出版物2年了。它们给了我很多，我只是想说谢谢。",
            "author": "Marie L.，同情者"
          },
          {
            "quote": "你们保存神秘学传统的工作是宝贵的。我不能完全承诺，但我想以我的方式做出贡献。",
            "author": "Jean-Marc D.，骑士团之友"
          },
          {
            "quote": "几年前我是会员，由于个人原因不得不停止。这笔小额捐赠是我与兄弟会保持联系的方式。",
            "author": "Sophie R.，前会员"
          }
        ]
      },
      "form": {
        "title": "进行同情捐赠",
        "subtitle": "最低金额：€25。每一个举动都很重要并受到赞赏。",
        "amountLabel": "您的捐赠金额（最低€25）",
        "customPlaceholder": "或输入金额（最低€25）",
        "optionalInfo": "以下信息是可选的",
        "firstName": "名字（可选）",
        "lastName": "姓氏（可选）",
        "email": "电子邮件（可选）",
        "emailNote": "仅用于确认收据",
        "message": "给我们留言？（可选）",
        "messagePlaceholder": "如果您愿意，给我们留个便条...",
        "anonymous": "我宁愿完全匿名",
        "mention": "您可以在公开致谢中提及我的名字",
        "submit": "💛 发送我的同情捐赠（最低€25）",
        "secure": "✓ 100%安全支付"
      },
      "thankYou": {
        "title": "从心底感谢您",
        "description": "每一笔同情捐赠，无论金额多少，都怀着深深的感激之情收到。这些自发的慷慨举动提醒我们，我们的使命触动心灵，真正为许多人的灵性福祉做出贡献。感谢您在这里。",
        "gratitude": "🙏 致以最诚挚的谢意 🙏"
      }
    },
    "common": {
      "contact": {
        "title": "联系",
        "headquarters": "总部",
        "france": "法国",
        "address": "B.P. 13241",
        "city": "雅温得 - 喀麦隆",
        "contactPerson": "Richard Mbouma Kohomm",
        "street": "11 av. Joseph Rollo",
        "zipCity": "78320 La Verrière – 法国",
        "email": "mkohomm@gmail.com"
      }
    }
  },
      contact: {
        title: "联系",
        headquarters: "总部",
        france: "法国"
      },
      common: {
        securePayment: "100%安全支付",
        cancel: "取消",
        confirm: "确认",
        save: "保存",
        close: "关闭",
        loading: "加载中…",
        error: "错误",
        success: "成功"
      }
    }
  },

  // JAPANESE (COMPLETE)
  ja: {
    translation: {
      nav: {
        home: "ホーム",
        goc: "GOC",
        gocSubtitle: "大円兄弟団",
        gocOrganisation: "組織",
        gocOrganisationDesc: "私たちの構造",
        gocActions: "活動",
        gocActionsDesc: "私たちの取り組み",
        gocCharity: "慈善",
        gocCharityDesc: "人道的事業",
        gocFraternity: "兄弟愛",
        gocFraternityDesc: "精神的絆",
        formation: "研修",
        formationEsoterism: "秘教",
        formationEsoterismDesc: "古代の神秘",
        formationPhilosophy: "哲学",
        formationPhilosophyDesc: "神聖な思想",
        formationPowers: "力",
        formationPowersDesc: "内的発展",
        library: "図書館",
        libraryAccessories: "儀式用小物",
        libraryAccessoriesDesc: "神聖な道具",
        libraryBooks: "書籍",
        libraryBooksDesc: "祖先の知識",
        libraryJournals: "雑誌",
        libraryJournalsDesc: "出版物",
        libraryVideos: "動画",
        libraryVideosDesc: "教え",
        becomeMember: "会員になる",
        memberApprentice: "見習い会員",
        memberApprenticeDesc: "第一歩",
        memberBrotherSister: "兄弟/姉妹会員",
        memberBrotherSisterDesc: "献身",
        memberAuditor: "学習者聴衆",
        memberAuditorDesc: "発見",
        donation: "寄付",
        donationCharity: "慈善",
        donationCharityDesc: "他者を助ける",
        donationSupport: "支援",
        donationSupportDesc: "貢献する",
        donationSympathy: "共感",
        donationSympathyDesc: "参加する",
        members: "会員エリア",
        login: "ログイン",
        signup: "登録",
        logout: "ログアウト",
        myAccount: "マイアカウント",
        closeMenu: "メニューを閉じる",
        openMenu: "メニューを開く"
      },enseignements: {
        meta: {
          title: "入会式教え | GOC",
          description: "人生を変える入会式教え - 大円秩序"
        },
        hero: {
          subtitle: "入会の道",
          title: "入会式教え",
          titleHighlight: "人生を変えるために"
        },
        introduction: {
          quote: "年齢、性別、文化に関わらず、誰もが人生で成功することを望んでいます。これを達成するには、ポジティブなエネルギーと資質の力を活用して、自分を主張し、成功を収める必要があります。",
          paragraph1: "したがって、成功したいと思うなら、できる最高の投資は、内なる輝き—つまり、あなたの真の個性、強み、ポジティブな資質—を活用することです。",
          study: "最近のアメリカの研究によると、個人の成功は{{percentagePersonality}}が個性に依存しており、残りの{{percentageKnowledge}}は知識と経験を表しています。",
          conclusion: "{{goc}}はそれを達成するための鍵を与えてくれます。"
        },
        mainContent: {
          title: "GOCの教え",
          subtitle: "哲学的・イデオロギー的知識、力の獲得と個人の発展のための極めて強力な鍵と技術！"
        },
        pillars: {
          esoterisme: {
            title: "秘教",
            items: [
              "神の概念",
              "宗教の知識",
              "不死",
              "自分自身であること",
              "魅惑的な人生",
              "磁気",
              "人道主義",
              "イデオロギー",
              "生命、存在、死",
              "陰と陽",
              "自己と他者"
            ]
          },
          philosophie: {
            title: "哲学",
            items: [
              { title: "思想", desc: "アフリカ、中国、インド、ギリシャ" },
              { title: "信仰", desc: "神聖の起源、宗教の歴史" },
              { title: "神話", desc: "千の顔を持つ英雄" },
              { title: "知恵", desc: "五つの柱" }
            ]
          },
          pouvoirs: {
            title: "力",
            items: [
              "有益な力と繋がる",
              "内なる存在を発見する",
              "精神を浄化する",
              "心を支配する",
              "隠れた能力を目覚めさせる",
              "物理的な行動なしに環境に影響を与える",
              "身体的に再生する",
              "より良い健康を得る",
              "平均寿命を延ばす",
              "目標を設定し、達成する",
              "物質的な福祉にアクセスする",
              "生活の質を向上させる",
              "精神的目覚めにアクセスする",
              "起源に関わらず、あらゆる不運から身を守る"
            ],
            more: "さらに..."
          }
        },
        development: {
          title: "力の発展",
          quote: "精神的進化と力の獲得を求めるすべての人は、磁気的で輝かしい個性を獲得できる教えを受けるでしょう。",
          cta: "あなたの入会を始める"
        },
        footerQuote: "真の浄化、最高の意識状態へのアクセス、行動する力の獲得。",
        percentages: {
          personality: "85%",
          knowledge: "15%"
        }
      },
      "memberSpace": {
    "loading": "読み込み中...",
    "noSubscription": {
      "title": "有効なサブスクリプションがありません",
      "description": "メンバーエリアにアクセスするにはメンバーシッププランに登録する必要があります",
      "button": "サブスクリプションを選択"
    },
    "welcome": "ようこそ",
    "member": "メンバー",
    "active": "有効",
    "contentSections": {
      "esotericTraining": {
        "title": "秘教トレーニング",
        "description": "基礎教義にアクセス"
      },
      "philosophicalTraining": {
        "title": "哲学トレーニング",
        "description": "知識を深める"
      },
      "powerDevelopment": {
        "title": "能力開発",
        "description": "独占プレミアムコンテンツ"
      },
      "library": {
        "title": "図書館",
        "description": "文献リソースへのアクセス"
      },
      "videos": {
        "title": "動画",
        "description": "独占ビデオコンテンツ"
      }
    },
    "locked": {
      "requires": "必要",
      "upgradeButton": "サブスクリプションをアップグレード"
    },
    "access": "アクセス",
    "upgradeCTA": {
      "title": "さらにコンテンツをアンロック",
      "description": "すべての独占コンテンツにアクセスするためにサブスクリプションをアップグレード",
      "button": "アップグレード"
    },
    "roles": {
      "auditeur": {
        "name": "聴講者",
        "description": "トレーニングへの基礎アクセス"
      },
      "apprenti": {
        "name": "見習い",
        "description": "高度な哲学トレーニング"
      },
      "frere-soeur": {
        "name": "兄弟/姉妹",
        "description": "すべてのコンテンツへの完全アクセス"
      }
    }
  },goc: {
  actions: {
    title: "GOCの活動",
    subtitle: "世界における私たちの活動",
    items: {
      seminars: { title: "入門セミナー", description: "会員が秘教的な旅を深め、変容的な入門体験を生きることを可能にするセミナーと精神的リトリートの組織。" },
      conferences: { title: "公開会議", description: "精神的、神秘的、形而上学のテーマに関する一般公開の会議を通じて、秘教的および哲学的知識の普及。" },
      publications: { title: "出版物", description: "西洋と東洋の秘教の伝統的教えを保存し伝える書籍、雑誌、教育文書の出版。" },
      rituals: { title: "集団儀式", description: "会員が宇宙の力とつながり、秩序のエグレゴールを強化することを可能にする季節的および入門的儀式の祝典。" }
    },
    program: {
      title: "年間プログラム",
      seasons: {
        spring: { name: "春", activity: "春分の儀式、精神的更新セミナー" },
        summer: { name: "夏", activity: "夏のリトリート、夏至の祝典、入門式" },
        autumn: { name: "秋", activity: "哲学セミナー、精神的収穫の儀式" },
        winter: { name: "冬", activity: "冬至、深い瞑想、秘密の教え" }
      }
    }
  },
  charity: {
    title: "慈善と社会事業",
    serviceTitle: "無私の奉仕",
    serviceDesc: "私たちの秘教的教えの中心には、無私の奉仕の原則があります。真の知恵は、研究を通じてだけでなく、同胞への思いやりの行動を通じても獲得されます。",
    works: {
      spiritual: { title: "精神的援助", description: "道徳的または存在的苦痛にある人々への無料の精神的支援。訓練を受けた会員が傾聴、アドバイス、エネルギー支援を提供します。" },
      material: { title: "物質的援助", description: "必要な家族への物質的援助の配布：食料、衣類、緊急事態のための一時的な財政支援。" },
      education: { title: "無料教育", description: "有料の教えにアクセスできない人々のための無料の哲学、瞑想、個人開発コース。" },
      energy: { title: "エネルギー治癒", description: "病気や不均衡に苦しむ人々に無料で提供されるエネルギーケアと全体的治癒のセッション。" }
    },
    participate: { title: "私たちの事業に参加する", description: "各GOC会員は慈善事業に時間と資源を捧げています。この奉仕と慈悲の使命に私たちに加わってください。", donate: "寄付する", volunteer: "ボランティアになる" }
  },
  fraternity: {
    title: "普遍的兄弟愛",
    ourFraternity: "私たちの兄弟愛",
    description: "大円兄弟会は、あらゆる人種、民族、国、国籍の女性と男性からなる、除外のないコミュニティであり、いかなる種類の制約もなく、自発的に会員になることに同意し、大円組織の生活を支配するXII原則の規則を厳密に尊重することを約束します。",
    transcendentLink: "超越的な絆",
    transcendentDesc: "大円内の兄弟愛は単なる仲間意識ではなく、光と知識への追求において魂を結びつける深い精神的絆です。",
    features: {
      spiritualHelp: { title: "精神的相互援助", description: "兄弟姉妹が入門的旅で互いを助ける" },
      knowledge: { title: "知識の共有", description: "入門会員間での秘教的知識の伝達" },
      mutualSupport: { title: "相互支援", description: "人生の試練における存在と付き添い" },
      rituals: { title: "兄弟儀式", description: "秩序の会員間の絆を強化する式典" },
      network: { title: "国際ネットワーク", description: "世界中の会員とのつながり" },
      meditation: { title: "集団瞑想", description: "エネルギーを増幅させるグループ精神的実践" }
    },
    commanderies: {
      title: "兄弟コマンダリー",
      description: "各地域にはコマンダリーがあり、会員が集まって兄弟愛を育み、儀式を実践し、教えを分かち合う神聖な場所です。",
      activities: { meditation: "月例瞑想と学習会議", celebrations: "至点と分点の祝典", meals: "兄弟的食事と親睦の時間", library: "秘教作品の共有図書館" }
    },
    join: { title: "私たちの兄弟愛に参加する", description: "大円の会員になり、愛、知恵、奉仕に基づく真の兄弟愛の深さを発見してください。", button: "詳細を見る" }
  }
},formation: {
  esoterism: {
    title: "秘教研修",
    subtitle: "神秘科学",
    intro: "秘教とは、太古から師から弟子へと伝えられてきた秘密の知識と霊的実践の体系を指します。包括的な研修で、宇宙の隠された神秘と微妙な次元を支配する法則を学びます。",
    sections: {
      symbolism: {
        title: "神聖象徴主義",
        items: [
          "ヘルメス主義象徴の解釈",
          "神聖幾何学と神秘数字",
          "魔法文字とシジル"
        ]
      },
      alchemy: {
        title: "霊的錬金術",
        items: [
          "錬金術の大業",
          "内的変成",
          "賢者の石と生命のエリクサー"
        ]
      },
      kabbalah: {
        title: "カバラと生命の樹",
        items: [
          "10のセフィロトの研究",
          "生命の樹の道",
          "ゲマトリアとヘブライ数秘術"
        ]
      },
      tarot: {
        title: "タロットと占術",
        items: [
          "大アルカナと小アルカナ",
          "伝統的な占術",
          "直感の開発"
        ]
      }
    },
    program: {
      title: "研修プログラム",
      level1: {
        title: "レベル1 - 見習い（12ヶ月）",
        description: "秘教の基礎、象徴主義、瞑想、初級儀式"
      },
      level2: {
        title: "レベル2 - 仲間（18ヶ月）",
        description: "錬金術、カバラ、秘教占星術、高度なエネルギーワーク"
      },
      level3: {
        title: "レベル3 - 師（24ヶ月）",
        description: "秘密の教え、高位魔術、深い神秘への入門"
      }
    },
    signup: "研修に申し込む"
  },
  philosophy: {
    title: "哲学研修",
    subtitle: "秘教哲学",
    intro: "秘教哲学は存在の根本的な問いを探求します：私たちは誰か、どこから来たのか、どこへ行くのか？私たちの教えは、東洋と西洋の偉大な哲学伝統を独特の総合に統合します。",
    traditions: {
      hermetic: {
        title: "ヘルメス主義哲学",
        description: "ヘルメス主義七原則の研究：精神主義、対応、振動、極性、リズム、因果、性。これらの宇宙法則の実践的応用。"
      },
      neoplatonic: {
        title: "新プラトン主義とグノーシス",
        description: "プラトン、プロティノス、グノーシス派の教え。「一」の教義、世界の流出、魂の神聖な源への上昇。"
      },
      eastern: {
        title: "東洋の叡智",
        description: "ヴェーダーンタ、仏教、道教：東洋哲学とその瞑想実践の探求。非二元性、空性、無為。"
      },
      modern: {
        title: "現代形而上学",
        description: "科学と霊性の総合。量子物理学と意識、現実の新しいパラダイム。"
      }
    },
    themes: {
      title: "研究テーマ",
      items: [
        "意識と魂の本質",
        "宇宙発生論と世界の創造",
        "カルマ、輪廻と運命",
        "自由意志と決定論",
        "霊的倫理と秘教道徳"
      ]
    },
    methods: {
      title: "教育的方法",
      items: [
        "理論講義とセミナー",
        "ソクラテス的对话と討論",
        "ガイド付き哲学瞑想",
        "聖典の解説付き朗読",
        "筆記課題と論文"
      ]
    },
    continuous: {
      title: "継続研修",
      description: "哲学研修は3年間にわたり、月次講義、四半期セミナー、および秘教図書館へのアクセスを含みます。",
      button: "詳細プログラム"
    }
  },
  powers: {
    title: "能力の開発",
    subtitle: "高位の能力",
    intro: "普通の能力を超えて、人間は霊的訓練によって開発できる潜在能力を持っています。私たちの研修は、これらの霊的・超能力的力の覚醒を導きます。",
    warning: {
      title: "⚠️ 重要な警告",
      description: "能力の開発には厳格な道徳的・霊的準備が必要です。これらの教えは、成熟と非の打ちどころのない倫理を示した入門会員にのみ伝えられます。"
    },
    abilities: {
      clairvoyance: {
        title: "透視",
        description: "エネルギー層、オーラ、霊的実体を知覚できる微妙な視覚の開発。",
        items: ["第三眼の活性化", "エーテルとアストラル視覚", "オーラリーディング"]
      },
      telepathy: {
        title: "テレパシー",
        description: "直接的心霊コミュニケーション、思考の送受信、遠隔意識との接続。",
        items: ["思考伝達", "直感的受信", "ガイドとのコミュニケーション"]
      },
      magnetism: {
        title: "磁気",
        description: "治癒、調和、変容のための生命エネルギーの習得。治癒磁気と手当ての技術。",
        items: ["エネルギー蓄積", "エネルギー治癒", "チャクラ調和"]
      },
      astral: {
        title: "アストラル投射",
        description: "肉体からの離脱と微妙層での旅。霊的次元の意識的な探索。",
        items: ["自発的離脱", "意識的アストラル旅行", "高位層の探索"]
      },
      psychometry: {
        title: "サイコメトリー",
        description: "物体、場所、人に染み込んだエネルギーの読み取り。エネルギー史を知覚する能力。",
        items: ["物体リーディング", "記憶の知覚", "高度サイコメトリー"]
      },
      meditation: {
        title: "深い瞑想",
        description: "変性意識状態、サマディ、神秘的合一。存在の超越的次元へのアクセス。",
        items: ["深い瞑想状態", "神秘的体験", "神聖との合一"]
      }
    },
    program: {
      title: "漸進的プログラム",
      subtitle: "能力の覚醒は数年にわたる漸進的で安全なプロセスに従います",
      year1: {
        title: "第1年",
        description: "準備と浄化"
      },
      year2: {
        title: "第2年",
        description: "活性化と発達"
      },
      year3: {
        title: "第3年+",
        description: "習熟と伝承"
      }
    }
  }
},
      library: {
  intro: {
    quote: "物質は循環し、精神は養われる…",
    description: "知識の場として、GOC図書館は会員、所属聴衆、支持者のために、その出版物「マアト」、教えのビデオと冊子、哲学、知恵、秘密の知識の本を提供しています。会員の服装や儀式用のその他の小物も。",
    orderForm: "注文フォーム"
  },
  accessories: {
    description: "儀式用小物は、秘教的実践と入門式典で使用される神聖な道具です。各物品はヘルメス主義の伝統に従って聖別され、エネルギー充電されています。",
    items: {
      candles: { title: "儀式用キャンドル", description: "特定の儀式用の異なる色の聖別されたキャンドル：白（浄化）、金（スピリチュアリティ）、赤（愛）、緑（繁栄）。", availability: "会員利用可能" },
      crystals: { title: "クリスタル＆ストーン", description: "浄化されプログラムされたクリスタルのコレクション：水晶、アメジスト、シトリン、黒曜石。各石にはその特定のエネルギー特性があります。", availability: "会員利用可能" },
      incense: { title: "神聖な香", description: "浄化と振動上昇のための伝統的な香：乳香、没薬、ベンゾイン、白檀。古代寺院のレシピ。", availability: "会員利用可能" },
      sword: { title: "儀式用剣", description: "保護の輪を描き、儀式中にエネルギーを導くために使用される象徴的な剣。ヘルメス主義の伝統に従って鍛造されています。", availability: "入門者のみ" },
      chalice: { title: "聖別された杯", description: "水の要素と女性の原理を表す神聖な杯。供物と精神的交わりの儀式で使用されます。", availability: "入門者のみ" },
      malas: { title: "ロザリオ＆マーラ", description: "神聖な木、半貴石、またはルドラクシャの実で作られた瞑想用ロザリオ。ジャパの実践（マントラの繰り返し）用の108玉。", availability: "会員利用可能" },
      feathers: { title: "儀式用羽", description: "香の煙を分散させ、儀式空間を浄化するために使用される神聖な鳥の羽。アメリカ先住民とシャーマンの伝統。", availability: "会員利用可能" },
      talismans: { title: "ペンタクル＆タリスマン", description: "ソロモン魔術の伝統に従って彫られたペンタクル。あなたの星図に応じて充電されたパーソナライズされたタリスマン。", availability: "要注文" },
      robes: { title: "ローブ＆衣装", description: "オーダーの色の儀式用ローブ、マント、儀式用衣装。伝統に従って天然素材で作られています。", availability: "会員のみ" }
    },
    cta: { title: "小物を注文する", description: "儀式用小物はGOC会員が購入できます。各物品は配達前に個別に聖別されます。", button: "ショップにアクセス", note: "* ログインが必要 - 入門会員のみ" }
  },journals: {
    title: "ジャーナルと出版物",
    intro: "大円は定期的にジャーナル、ニュースレター、レビューを出版し、会員の継続的な教育と秘教的知識の普及に努めています。",
    mainJournal: {
      title: "円の光",
      subtitle: "GOC公式ジャーナル - 季刊",
      summary: "目次：",
      format: "形式：",
      items: [
        "深い秘教的教え",
        "季節の儀式と実践",
        "会員の証言",
        "秩序のニュース"
      ],
      formatItems: [
        "40-60ページのイラスト付き",
        "紙とデジタル版",
        "1985年以降の完全なアーカイブ",
        "会員のみ"
      ]
    },
    publications: {
      bulletin: {
        title: "兄弟愛ニュースレター",
        description: "会員間の絆を維持するための月刊ニュースレター。今後の会合、セミナー、イベントに関する情報。",
        frequency: "月刊",
        pages: "12-16ページ",
        access: "会員のみ"
      },
      cahiers: {
        title: "ヘルメス研究ノート",
        description: "特定の秘教テーマについての深い学術レビュー：錬金術、カバラ、占星術、象徴主義、神秘哲学。",
        frequency: "隔月刊",
        pages: "60-80ページ",
        access: "入門会員"
      },
      lettres: {
        title: "大宗師の手紙",
        description: "秩序の大宗師からの直接的な教えで、上級会員のために深い知識と精神的指導を伝えます。",
        frequency: "季刊",
        pages: "8-12ページ",
        access: "2級入門者"
      },
      almanach: {
        title: "秘教アルマナック",
        description: "重要な日付、月相、惑星の位置、儀式のカレンダー、推奨される実践を含む年間出版物。",
        frequency: "年刊",
        pages: "120ページ",
        access: "誰でもアクセス可能"
      }
    },
    archives: {
      title: "歴史アーカイブ",
      description: "秩序の設立以来の出版物の完全なアーカイブにアクセス。何十年もの秘教的知識が手の届くところに。",
      stats: {
        journal: "『円の光』の号数",
        bulletins: "月刊ニュースレター",
        years: "アーカイブの年数"
      }
    },
    cta: {
      title: "出版物にアクセス",
      description: "大円の会員になって、出版物を受け取り、完全なアーカイブにアクセスしてください。",
      becomeMember: "会員になる",
      consultArchives: "アーカイブを閲覧"
    }
  },
  books: {
    title: "秘教図書館",
    intro: "私たちの図書館には、秘教的、ヘルメス的、哲学的な作品の特別なコレクションがあります。一部の珍しいテキストは入門会員のために予約されています。",
    sections: {
      alchemy: "錬金術とヘルメス主義",
      kabbalah: "カバラとユダヤ神秘主義",
      magic: "儀式魔術",
      philosophy: "秘教哲学",
      tarot: "タロットと象徴主義"
    },
    access: {
      open: "誰でもアクセス可能",
      members: "会員のみ",
      initiates: "入門者のみ"
    },
    onSite: {
      title: "現地での閲覧",
      description: "会員は私たちの施設で図書館全体を閲覧できます。瞑想に適した学問的雰囲気。",
      note: "会員は予約で利用可能"
    },
    digital: {
      title: "デジタル図書館",
      description: "PDF形式の数百冊の本を含むデジタル図書館へのアクセス。会員専用スペースから24時間365日利用可能。",
      note: "アクティブ会員のみ"
    }
  },
  videos: {
    title: "秘教ビデオライブラリ",
    intro: "私たちのビデオライブラリは、会議、撮影された儀式、ガイド付き瞑想、大宗師の教えを提供しています。GOC会員のための独占コンテンツ。",
    categories: {
      conferences: {
        title: "会議",
        description: "入門した師による神秘主義、錬金術、カバラ、ヘルメス哲学に関する素晴らしい会議。",
        count: "45+ 動画",
        access: "会員アクセス"
      },
      meditations: {
        title: "ガイド付き瞑想",
        description: "精神的発展、チャクラの活性化、神とのつながりのためのガイド付き瞑想セッション。",
        count: "30+ 動画",
        access: "自由アクセス"
      },
      rituals: {
        title: "撮影された儀式",
        description: "入門儀式、季節の式典、秩序内で伝えられる秘教的実践の記録。",
        count: "25+ 動画",
        access: "入門者のみ"
      },
      courses: {
        title: "理論コース",
        description: "神秘主義、オカルト科学、哲学、神聖な象徴主義に関する完全なトレーニングコース。",
        count: "60+ 動画",
        access: "会員アクセス"
      },
      energy: {
        title: "エネルギー実践",
        description: "超能力の発達、エネルギーワーク、磁気のための実践的な練習。",
        count: "35+ 動画",
        access: "会員アクセス"
      },
      secret: {
        title: "秘密の教え",
        description: "大宗師から伝えられる、ヘルメス伝統の深い神秘に関する予約された教え。",
        count: "20+ 動画",
        access: "師のみ"
      }
    },
    recent: {
      title: "最新出版物",
      videos: [
        {
          title: "実践カバラ入門",
          description: "カバラの基礎と日常生活への応用についての大宗師の会議。",
          duration: "1時間25分",
          date: "2026年1月",
          access: "会員"
        },
        {
          title: "満月の瞑想",
          description: "月のエネルギーとつながり、啓発を受けるための特別なガイド付き瞑想。",
          duration: "45分",
          date: "2026年1月",
          access: "自由アクセス"
        },
        {
          title: "2025年冬至の儀式",
          description: "中央コマンダリーで祝われた冬至の儀式の完全な記録。",
          duration: "2時間10分",
          date: "2025年12月",
          access: "入門者"
        }
      ]
    },
    stats: {
      title: "私たちのビデオコレクション",
      total: "動画総数",
      hours: "独占コンテンツ",
      quality: "HD & 4K品質",
      access: "無制限アクセス"
    },
    cta: {
      title: "ビデオライブラリにアクセス",
      description: "会員になって、ビデオコレクション全体にアクセスし、毎月新しいコンテンツを受け取りましょう。",
      button: "今すぐ登録"
    }
  }
},
      home: {
        title: "大円兄弟団",
        motto: "知識の木があるところに、幸せがある",
        subtitle: {
          line1: "秘教的・哲学的研修…",
          line2: "精神的兄弟愛。"
        },
        masterDestiny: "あなたの運命を完全に掌握する…",
        benefits: {
          connectForces: "有益な力とつながる",
          innerBeing: "内なる存在を発見する",
          cleansePsyche: "精神を浄化する",
          masterMind: "心を掌握する",
          awakenPowers: "隠された能力を目覚めさせる",
          influence: "身体的行動なしに環境に影響を与える",
          regenerate: "身体的に再生する",
          longevity: "寿命を延ばす",
          achieveGoals: "目標を設定し達成する",
          materialWellbeing: "物質的福祉にアクセスする",
          qualityOfLife: "生活の質を向上させる",
          spiritualAwakening: "精神的目覚めにアクセスする",
          protection: "起源に関わらずすべての不運から身を守る",
          betterHealth: "より良い健康を得る"
        },
        carousel: {
          seminar: "セミナー",
          prieure: "修道院",
          group: "会員グループ",
          symbols: "象徴"
        },
        links: {
          formation: "私たちの研修",
          fraternity: "私たちの兄弟愛",
          seminars: "私たちのセミナー",
          actions: "私たちの活動"
        },
        vision: {
          title: "私たちのビジョン",
          goc: "大円",
          secrets: "秘密の知識、精神的・入門的知恵、",
          awakening: "力の目覚め、個人的力、幸福の道具…",
          changeLife: "あなたの人生を変え、完全に掌握してください！",
          description: "秘密の知識と精神的・入門的知恵、力の目覚め、個人的力と幸福の道具にアクセスできる秘教的研修を通じて…",
          quote: "« 人間はもともと純粋な精神的存在として構想され、神聖な原則から「偉大な創造主の霊の似姿として」発せられました。物質への降下の間、彼は双生の衝動によって動かされます：吸引-拒絶、欲望-反感。朽ちるべき身体をまとうことで、彼はもはや原則の統一から分離されています。彼の二重性質——物質的かつ精神的——は、精神的渴望と物質性の鎖との間の葛藤に彼を服従させます。それ以来、彼は誇りによってこれらの衝動に支配された行為を成し遂げてきました。しかし、欲望の人間は、元の状態への再統合と栄光の身体の回復を求めています。",
          mission: "GOCの目的は、入門者の本性、起源、目的地について啓発することです。彼または彼女は、本質的に実践的で入門的な教えを受け、秘教、精神性、形而上学、ヨギーの秘密、哲学、個人開発を扱います。真の浄化、最高の意識状態へのアクセス、行動力の獲得を可能にします。"
        },
        nav: {
          becomeMember: "会員になる",
          videos: "動画",
          donation: "寄付",
          commanderies: "コマンダリー",
          contacts: "連絡先",
          contact: "お問い合わせ"
        },
        image: {
          alt: "大円",
          caption: "現代人のための古代の知恵"
        },
        footer: {
          copyright: "© 2026 大円 - 全著作権所有",
          sapientia: "知恵",
          fraternitas: "兄弟愛",
          spiritus: "精神"
        }
      },
      membership: {
        title: "私たちの秩序に参加する",
        subtitle: "あなたの精神的・哲学的旅に合った献身のレベルを選択してください",
        adhesion: "会員資格",
        formation: "研修",
        oneTime: "一度きり",
        perYear: "年間",
        firstYear: "第一年",
        renewal: "更新",
        becomeMember: "会員になる",
        renew: "更新",
        currentSubscription: "現在の購読",
        learnMore: "詳細を見る",
        mostPopular: "最も人気",
        active: "アクティブ",
        expired: "期限切れ",
        current: "現在",
        activeSubscription: "アクティブな購読",
        adhesionRequired: "会員資格が必要",
        buyTrimester: "1学期を購入",
        buyCourse: "1コースを購入",
        processing: "処理中…",
        signupAndBuy: "登録して購入",
        pricePerTrimester: "学期ごとの価格",
        pricePerCourse: "コースごとの価格",
        formationAccessible: "研修は秩序のアクティブ会員のみが利用できます。",
        cotisation: "年会費",
        error: "エラーが発生しました",
        whyJoin: "なぜ会員になるのですか？",
        whyJoinDesc: "私たちの秩序に参加することで、精神的目覚め、秘教的知識、兄弟的相互援助に専念するコミュニティにアクセスできます。",
        benefit1: "独占的な教えにアクセス",
        benefit2: "イベントやセミナーに参加",
        benefit3: "兄弟愛と相互援助のネットワーク",
        benefit4: "精神的資源の図書館"
      },
      roles: {
        auditeur: {
          name: "学習者聴衆",
          description: "教えへの基本的アクセス",
          formationTitle: "学習者聴衆研修",
          formationDesc: "アラカルトの個別コース",
          feature1: "自分のペースで購入する柔軟性",
          feature2: "購入したコースへの即時アクセス",
          feature3: "豊かで詳細な内容",
          totalCourses: "利用可能なコースは合計40",
          totalCost: "完全な総費用",
          totalDuration: "2年間の完全な研修"
        },
        apprenti: {
          name: "見習い会員",
          description: "完全な研修",
          formationTitle: "見習い研修",
          formationDesc: "構造化された四半期研修",
          feature1: "各四半期の深い教え",
          feature2: "進捗の個別フォロー",
          feature3: "独占的なリソースへのアクセス",
          totalCost: "研修の総費用",
          totalDuration: "総期間：8学期（2年）"
        },
        "frere-soeur": {
          name: "兄弟/姉妹会員",
          description: "完全なプレミアムアクセス",
          feature1: "すべてのコンテンツと研修",
          feature2: "個別指導",
          feature3: "24時間365日の優先サポート",
          feature4: "独占的イベント",
          feature5: "国際ネットワーク"
        }
      },
      organisation: {
        motto: "知識の木があるところに、幸せがある",
        title: "GOC組織",
        goc: "GOC",
        structure: "大円秩序の構造は以下を中心に構成されています：",
        pillars: "柱",
        grades: "等級",
        rule: "規則",
        pillarsTitle: "柱",
        pillar1: {
          title: "I – 入門",
          item1: "研修",
          item2: "完成"
        },
        pillar2: {
          title: "II – 事務所",
          item1: "儀式",
          item2: "式典"
        },
        pillar3: {
          title: "III – 慈善",
          item1: "慈善事業",
          item2: "寄付"
        },
        pillar4: {
          title: "IV – 相互援助",
          item1: "入門者の連帯",
          item2: "財政支援"
        },
        rulesTitle: "GOC規則",
        rules: {
          "1": "偉大な神聖精神への信仰",
          "2": "入門的兄弟愛と連帯の義務",
          "3": "愛、真理、正義と平和の理想",
          "4": "会員と人類の完成",
          "5": "儀式と象徴主義の実践",
          "6": "意見と信仰を尊重する",
          "7": "神聖な象徴への誓い",
          "8": "コマンダリーでの集まりと仕事",
          "9": "名誉、忠誠と慎重さ",
          "10": "愛国心、法律尊重、確立された当局の尊重",
          "11": "賢明で尊厳ある行動",
          "12": "相互援助と保護"
        },
        structureTitle: "GOC組織",
        level1: {
          title: "レベル1：兄弟の円",
          desc: "CCは最大770人の兄弟のコミュニティを集める"
        },
        level2: {
          title: "レベル2：地区",
          desc: "地区は部門レベルですべての兄弟の円を集める"
        },
        level3: {
          title: "レベル3：コマンダリー",
          desc: "コマンダリーは地域レベルですべての地区を集める"
        },
        level4: {
          title: "レベル4：総督管轄",
          desc: "総督管轄は国家レベルですべてのコマンダリーを集める"
        },
        level5: {
          title: "レベル5：最高霊長",
          desc: "最高霊長はGOCの最高機関です"
        },
        gradesTitle: "等級",
        grade: {
          "1": "見習い",
          "2": "仲間",
          "3": "役員",
          "4": "尊敬される",
          "5": "敬われる",
          "6": "師",
          "7": "大師"
        },
        administration: "管理",
        admin1: {
          title: "1) 円",
          item1: "兄弟の集会",
          item2: "敬われる者",
          item3: "事務局",
          item4: "財務局",
          item5: "管理局",
          item6: "事務所"
        },
        admin2: {
          title: "2) 地区",
          item1: "地区評議会",
          item2: "師",
          item3: "事務局",
          item4: "財務局",
          item5: "管理局",
          item6: "事務所"
        },
        admin3: {
          title: "3) コマンダリー",
          item1: "コマンダリー評議会",
          item2: "指揮官",
          item3: "事務局",
          item4: "財務局",
          item5: "管理局",
          item6: "事務所"
        },
        admin4: {
          title: "4) 総督管轄/使節",
          item1: "食堂",
          item2: "大師",
          item3: "事務局",
          item4: "財務局",
          item5: "管理局",
          item6: "事務所"
        },
        globalGovernance: "GOCグローバルガバナンス",
        global1: {
          title: "大会"
        },
        global2: {
          title: "最高食堂",
          desc: "（GOC理事会）"
        },
        global3: {
          title: "GOC霊長"
        },
        global4: {
          title: "総事務局",
          desc: "（GOC管理機関）"
        },
        global5: {
          title: "中央財務局"
        },
        join: "秩序に参加する"
      },
      fraternity: {
        motto: "知識の木があるところに、幸せがある",
        title: "普遍的兄弟愛",
        ourFraternity: "私たちの兄弟愛",
        description: "大円兄弟会は、あらゆる人種、民族、国、国籍の女性と男性からなる、除外のないコミュニティであり、いかなる種類の制約もなく、自発的に会員になることに同意し、大円組織の生活を支配するXII原則の規則を厳密に尊重することを約束します。",
        transcendentLink: "超越的な絆",
        transcendentDesc: "大円内の兄弟愛は単なる仲間意識ではなく、光と知識への追求において魂を結びつける深い精神的絆です。",
        features: {
          spiritualHelp: "精神的相互援助",
          spiritualHelpDesc: "兄弟姉妹が入門的旅で互いを助ける",
          knowledge: "知識の共有",
          knowledgeDesc: "入門会員間での秘教的知識の伝達",
          mutualSupport: "相互支援",
          mutualSupportDesc: "人生の試練における存在と付き添い",
          rituals: "兄弟儀式",
          ritualsDesc: "秩序の会員間の絆を強化する式典",
          network: "国際ネットワーク",
          networkDesc: "世界中の会員とのつながり",
          meditation: "集団瞑想",
          meditationDesc: "エネルギーを増幅させるグループ精神的実践"
        },
        commanderies: "兄弟コマンダリー",
        commanderiesDesc: "各地域にはコマンダリーがあり、会員が集まって兄弟愛を育み、儀式を実践し、教えを分かち合う神聖な場所です。",
        activities: {
          meditation: "月例瞑想と学習会議",
          celebrations: "至点と分点の祝典",
          meals: "兄弟的食事と親睦の時間",
          library: "秘教作品の共有図書館"
        },
        joinTitle: "私たちの兄弟愛に参加する",
        joinDesc: "大円の会員になり、愛、知恵、奉仕に基づく真の兄弟愛の深さを発見してください。",
        learnMore: "詳細を見る"
      },
      charity: {
        motto: "知識の木があるところに、幸せがある",
        title: "慈善と社会事業",
        serviceTitle: "無私の奉仕",
        serviceDesc: "私たちの秘教的教えの中心には、無私の奉仕の原則があります。真の知恵は、研究を通じてだけでなく、同胞への思いやりの行動を通じても獲得されます。",
        works: {
          spiritual: "精神的援助",
          spiritualDesc: "道徳的または存在的苦痛にある人々への無料の精神的支援。訓練を受けた会員が傾聴、アドバイス、エネルギー支援を提供します。",
          material: "物質的援助",
          materialDesc: "必要な家族への物質的援助の配布：食料、衣類、緊急事態のための一時的な財政支援。",
          education: "無料教育",
          educationDesc: "有料の教えにアクセスできない人々のための無料の哲学、瞑想、個人開発コース。",
          energy: "エネルギー治癒",
          energyDesc: "病気や不均衡に苦しむ人々に無料で提供されるエネルギーケアと全体的治癒のセッション。"
        },
        participate: "私たちの事業に参加する",
        participateDesc: "各GOC会員は慈善事業に時間と資源を捧げています。この奉仕と慈悲の使命に私たちに加わってください。",
        donate: "寄付する",
        volunteer: "ボランティアになる"
      },
      "donation": {
    "charite": {
      "title": "慈善寄付",
      "generosityInAction": "あなたの寛大さが行動に",
      "message": "あなたの最低限またはそれ以上の寄付は、困っている人々のための援助と連帯活動を計画できるようにする寛大さです。",
      "minimumLabel": "最低慈善寄付額",
      "amount": "€100",
      "actTitle": "大きな寛大さの行為",
      "actDescription": "慈善寄付は、グランド・サークル・オーダーの相互援助と連帯の価値観への重要なコミットメントを表しています。この寛大な行為を通じて、あなたは私たちが慈善活動を持続可能に支援し、最も必要としている人々を具体的に助けることを可能にします。",
      "impact": {
        "title": "あなたの慈善寄付の影響",
        "items": [
          "大きな困難にある人々への直接的な援助",
          "連帯プログラムの資金提供",
          "困窮家庭への支援",
          "具体的な人道支援活動",
          "危機時の緊急援助"
        ]
      },
      "recognition": {
        "title": "特別な表彰",
        "description": "慈善寄付者として、あなたは特別な表彰を受けます：",
        "items": [
          "恩人の輪での言及（希望する場合）",
          "資金使用に関する年次報告書",
          "オーダー慈善イベントへの招待",
          "表彰状（要請により）",
          "控除用の領収書"
        ]
      },
      "examples": {
        "title": "資金提供活動の例",
        "food": "家族への食糧援助",
        "medical": "緊急医療支援",
        "education": "子供たちへの奨学金"
      },
      "form": {
        "title": "慈善寄付を行う",
        "subtitle": "最低金額：€100。あなたの寛大さが人生を変えます。",
        "amountLabel": "あなたの慈善寄付額（最低€100）",
        "customPlaceholder": "または金額を入力（最低€100）",
        "typeLabel": "寄付タイプ",
        "types": {
          "unique": "一回限りの寄付",
          "monthly": "毎月の定期寄付",
          "quarterly": "四半期寄付",
          "annual": "年間寄付"
        },
        "firstName": "名 *",
        "lastName": "姓 *",
        "email": "メールアドレス *",
        "message": "メッセージ（任意）",
        "messagePlaceholder": "動機を共有するか、寄付を捧げる...",
        "receipt": "領収書を希望する",
        "circle": "恩人の輪に名前を載せることに同意する",
        "submit": "🤲 慈善寄付を行う（最低€100）",
        "secure": "✓ 100%安全な支払い • ✓ 領収書利用可能"
      },
      "thankYou": {
        "title": "あなたの大きな寛大さに感謝します",
        "description": "あなたの慈善寄付は多くの人々の人生に具体的な違いをもたらします。あなたの寛大さのおかげで、最も必要としている人々との援助と連帯活動を続けることができます。あなたの行為が祝福されますように。",
        "gratitude": "🙏 深い感謝を込めて 🙏"
      }
    },
    "soutien": {
      "title": "オーダー発展のための支援",
      "generosityInAction": "あなたの寛大さが行動に",
      "message": "あなたの最低限またはそれ以上の寄付は、困っている人々のための援助と連帯活動を計画できるようにする寛大さです。",
      "minimumLabel": "最低支援寄付額",
      "amount": "€50",
      "contributeTitle": "私たちの使命に貢献する",
      "contributeDescription": "あなたの支援寄付により、グランド・サークル・オーダーは秘教の教えを伝え続け、精神的イベントを組織し、インフラを維持することができます。すべての貢献は、ヘルメス主義の伝統を保存し広めるのに役立ちます。",
      "funding": {
        "title": "研修資金",
        "items": [
          "新しいオンラインコースの作成",
          "資格のある教師への報酬",
          "HDビデオコンテンツ制作",
          "教材の開発",
          "セミナーとリトリートの開催"
        ]
      },
      "infrastructure": {
        "title": "インフラの維持",
        "items": [
          "地域コマンドリーの維持",
          "秘教図書館とアーカイブ",
          "デジタルプラットフォームとウェブサイト",
          "新しい希少本の購入",
          "儀式器具とアクセサリー"
        ]
      },
      "editorial": {
        "title": "編集プロジェクト",
        "items": [
          "季刊誌の発行",
          "秘教書籍の編集",
          "古代テキストの翻訳",
          "ヘルメス研究ノート",
          "無料コンテンツの配布"
        ]
      },
      "international": {
        "title": "国際的なアウトリーチ",
        "items": [
          "新しいコマンドリーの開設",
          "国際会議",
          "他のオーダーとの交流",
          "研修の翻訳",
          "精神的イベントへの参加"
        ]
      },
      "budget": {
        "title": "2026年度予算",
        "training": "研修",
        "infrastructure": "インフラ",
        "editorial": "出版",
        "outreach": "アウトリーチ"
      },
      "levels": {
        "title": "月額支援レベル",
        "friend": {
          "name": "オーダーの友",
          "price": "€10",
          "period": "/月",
          "benefits": [
            "ウェブサイトでの謝辞",
            "独占的なニュースレター",
            "GOCの友バッジ"
          ],
          "button": "支援する"
        },
        "benefactor": {
          "name": "恩人",
          "price": "€25",
          "period": "/月",
          "badge": "推奨",
          "benefits": [
            "以前のすべての特典",
            "独占コンテンツへのアクセス",
            "VIPイベントへの招待",
            "無料季刊誌"
          ],
          "button": "支援する"
        },
        "patron": {
          "name": "大後援者",
          "price": "€50",
          "period": "/月",
          "benefits": [
            "以前のすべての特典",
            "後援者の殿堂での言及",
            "年間スピリチュアル相談",
            "パーソナライズされたスピリチュアルギフト"
          ],
          "button": "支援する"
        }
      },
      "form": {
        "title": "一回限りの寄付",
        "amountLabel": "あなたの支援金額",
        "customPlaceholder": "その他の金額",
        "typeLabel": "支援タイプ",
        "types": {
          "unique": "一回限りの寄付",
          "monthly": "毎月の定期支援"
        },
        "firstName": "名",
        "lastName": "姓",
        "email": "メールアドレス *",
        "submit": "今すぐ支援",
        "secure": "✓ 100%安全な支払い • ✓ いつでもキャンセル可能"
      }
    },
    "sympathie": {
      "title": "共感寄付",
      "generosityInAction": "あなたの寛大さが行動に",
      "message": "あなたの最低限またはそれ以上の寄付は、困っている人々のための援助と連帯活動を計画できるようにする寛大さです。",
      "minimumLabel": "最低共感寄付額",
      "amount": "€25",
      "gestureTitle": "心からの行為",
      "gestureDescription": "共感寄付は、何も返すことを求めない自由で自発的な行為です。それは、グランド・サークル・オーダーの価値観に対するあなたの支持とつながりの表れであり、期待や義務はありません。",
      "freedom": {
        "title": "完全な自由",
        "description": "他の形態の寄付とは異なり、共感寄付は完全に自由です：自由な金額（最低€25）、自由な頻度、匿名も可能。それは単に、オーダーの仕事への感謝を表現し、あなたのレベルで秘教の伝統の保存に貢献する方法です。"
      },
      "why": {
        "title": "なぜ共感寄付をするのか？",
        "items": [
          "私たちの使命と価値観を高く評価している",
          "コミットメントせずに支援したい",
          "一回限りの行為を提供したい",
          "会員になれないが助けたい",
          "オーダーとの精神的なつながりを感じる"
        ]
      },
      "usage": {
        "title": "どのように使われるか？",
        "description": "共感寄付は、私たちの援助と連帯活動に貢献します。それらは最も必要とされている場所で使用されます：",
        "items": [
          "困難にある人々への援助",
          "コミュニティ連帯活動",
          "新しい無料コンテンツの開発",
          "特別プロジェクトと機会",
          "緊急時用の準備資金"
        ]
      },
      "noReturn": {
        "title": "返礼なし、感謝だけ",
        "description": "私たちは、あなたの共感寄付に対して、深い感謝以外には何も提供しません。特別なニュースレター、独占的な招待、公の認識はありません（希望しない限り）。それは純粋な寛大さと親切の行為です。"
      },
      "testimonials": {
        "title": "彼らが共感寄付をした理由",
        "items": [
          {
            "quote": "私はGOCの会員ではありませんが、2年間無料出版物を読んでいます。それらは私に多くをもたらし、単にありがとうと言いたかったのです。",
            "author": "Marie L.、共感者"
          },
          {
            "quote": "秘教の伝統を保存するあなたの仕事は貴重です。完全にコミットメントはできませんが、自分の方法で貢献したかったのです。",
            "author": "Jean-Marc D.、オーダーの友"
          },
          {
            "quote": "数年前に会員でしたが、個人的な理由で辞めなければなりませんでした。この小さな寄付は、兄弟団とつながりを保つ私の方法です。",
            "author": "Sophie R.、元会員"
          }
        ]
      },
      "form": {
        "title": "共感寄付を行う",
        "subtitle": "最低金額：€25。すべての行為が大切であり、感謝されています。",
        "amountLabel": "あなたの寄付額（最低€25）",
        "customPlaceholder": "または金額を入力（最低€25）",
        "optionalInfo": "以下の情報は任意です",
        "firstName": "名（任意）",
        "lastName": "姓（任意）",
        "email": "メールアドレス（任意）",
        "emailNote": "確認領収書用のみ",
        "message": "私たちへのメッセージ？（任意）",
        "messagePlaceholder": "ご希望であればメモを残してください...",
        "anonymous": "完全に匿名を希望する",
        "mention": "公開感謝で私の名前を挙げても構わない",
        "submit": "💛 共感寄付を送る（最低€25）",
        "secure": "✓ 100%安全な支払い"
      },
      "thankYou": {
        "title": "心の底から、ありがとう",
        "description": "すべての共感寄付は、金額に関わらず、深い感謝の気持ちで受け取られます。これらの自発的な寛大さの行為は、私たちの使命が心に触れ、多くの人々の精神的な幸福に本当に貢献していることを思い出させてくれます。ここにいてくれてありがとう。",
        "gratitude": "🙏 感謝の気持ちを込めて 🙏"
      }
    },
    "common": {
      "contact": {
        "title": "お問い合わせ",
        "headquarters": "本部",
        "france": "フランス",
        "address": "B.P. 13241",
        "city": "ヤウンデ - カメルーン",
        "contactPerson": "Richard Mbouma Kohomm",
        "street": "11 av. Joseph Rollo",
        "zipCity": "78320 La Verrière – フランス",
        "email": "mkohomm@gmail.com"
      }
    }
  },
      contact: {
        title: "お問い合わせ",
        headquarters: "本部",
        france: "フランス"
      },
      common: {
        securePayment: "100%安全な支払い",
        cancel: "キャンセル",
        confirm: "確認",
        save: "保存",
        close: "閉じる",
        loading: "読み込み中…",
        error: "エラー",
        success: "成功"
      }
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