const siteData = {
  brand: 'Monelle',
  phone: '+33 7 55 00 19 82',
  email: 'contact@monelle-voyance.com',
  navItems: [
    { label: 'Accueil', href: '/' },
    { label: 'Accompagnements', href: '/services' },
    { label: 'Consultations', href: '/consultations' },
    { label: 'Monelle', href: '/apropos' },
    { label: 'Conseils de Monelle', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],
  services: [
    {
      title: 'Guidance sentimentale',
      icon: 'bx-heart',
      text: 'Clarifiez une relation, une rencontre ou une décision de cœur avec une lecture douce et directe.'
    },
    {
      title: 'Éclairage professionnel',
      icon: 'bx-briefcase-alt-2',
      text: 'Prenez du recul sur vos choix, vos opportunités et les moments favorables pour agir.'
    },
    {
      title: 'Tirage intuitif',
      icon: 'bx-moon',
      text: 'Une consultation fluide pour comprendre les énergies du moment et les prochaines étapes.'
    },
    {
      title: 'Relations & Famille',
      icon: 'bx-group',
      text: 'Les tensions relationnelles et familiales peuvent provoquer une profonde souffrance émotionnelle et affecter durablement votre équilibre personnel.',
      details: [
        'Cette consultation est destinée aux personnes confrontées à des disputes fréquentes, des incompréhensions, des éloignements ou des relations devenues difficiles avec un proche, un membre de la famille ou une personne importante de leur entourage.',
        'Grâce à une analyse approfondie de votre situation, cette consultation permet de mieux comprendre les causes des conflits, les blocages émotionnels présents dans vos relations ainsi que les influences pouvant perturber l’harmonie autour de vous.',
        'L’objectif est de vous apporter davantage de clarté sur votre situation relationnelle afin de mieux comprendre les tensions actuelles et leur évolution possible.'
      ],
      suitedFor: [
        'Conflits familiaux',
        'Relations toxiques',
        'Éloignement relationnel',
        'Disputes répétitives',
        'Incompréhensions',
        'Tensions émotionnelles',
        'Relations difficiles',
        'Déséquilibre familial'
      ]
    }
  ],
  consultationFormats: [
    {
      icon: 'bx-phone-call',
      title: 'Téléphone',
      text: 'Un échange direct pour obtenir une réponse claire, sans attendre.'
    },
    {
      icon: 'bx-video',
      title: 'Visio privée',
      text: 'Un rendez-vous plus posé pour les situations qui demandent de la nuance.'
    },
    {
      icon: 'bx-message-square-detail',
      title: 'Message détaillé',
      text: 'Une synthèse écrite, pratique à relire après la consultation.'
    }
  ],
  testimonials: [
    {
      name: 'Claire M.',
      subject: 'Situation sentimentale',
      text: 'Monelle a mis des mots sur une situation que je n’arrivais plus à comprendre. La consultation était douce, précise et très respectueuse.'
    },
    {
      name: 'Nadia R.',
      subject: 'Blocage émotionnel',
      text: 'J’ai apprécié la discrétion et le côté concret. Je suis repartie avec des pistes simples, pas avec des phrases vagues.'
    },
    {
      name: 'Sophie L.',
      subject: 'Choix personnel',
      text: 'La lecture m’a aidée à prendre du recul. Le ton était professionnel, calme et vraiment personnalisé.'
    },
    {
      name: 'Amel B.',
      subject: 'Relation compliquée',
      text: 'Je voulais comprendre une relation instable. Monelle a été claire sans être dure, et cela m’a beaucoup apaisée.'
    }
  ],
  faqs: [
    {
      question: 'La consultation reste-t-elle confidentielle ?',
      answer: 'Oui. Chaque demande est traitée dans un cadre privé, sans jugement et sans partage de vos informations.'
    },
    {
      question: 'Dois-je préparer ma question ?',
      answer: 'Une question principale suffit. Plus elle est claire, plus l’analyse peut aller droit au sujet.'
    },
    {
      question: 'Puis-je réserver pour une urgence sentimentale ?',
      answer: 'Oui, le format court permet d’obtenir un éclairage rapide sur une situation précise.'
    }
  ],
  plans: [
    { name: 'Essentiel', duration: '15 min', price: '29 EUR', details: 'Question précise, réponse rapide et orientation claire.' },
    { name: 'Clarté', duration: '30 min', price: '55 EUR', details: 'Lecture complète pour amour, travail ou choix personnel.' },
    { name: 'Horizon', duration: '60 min', price: '95 EUR', details: 'Accompagnement approfondi avec plan d’action personnalisé.' }
  ],
  posts: [
    {
      title: 'Comment préparer sa première consultation de voyance',
      excerpt: 'Quelques repères simples pour arriver avec les bonnes questions et repartir avec une vision claire.',
      date: '12 mai 2026'
    },
    {
      title: 'Les signes d’une période de changement',
      excerpt: 'Comprendre les moments charnières et les accueillir avec plus de calme.',
      date: '3 mai 2026'
    },
    {
      title: 'Amour: poser une question juste',
      excerpt: 'Transformer une inquiétude vague en demande utile, respectueuse et concrète.',
      date: '21 avril 2026'
    }
  ],
  blogCategories: [
    {
      icon: 'bx-heart',
      title: 'Amour & Retour Affectif',
      articles: [
        'Pourquoi mon ex revient puis repart',
        'Les signes d’un retour affectif',
        'Silence radio : que signifie-t-il vraiment ?',
        'Comment savoir s’il pense encore à vous',
        'Pourquoi certaines relations restent inoubliables',
        'Les signes d’une relation karmique',
        'Pourquoi une personne devient distante soudainement',
        'Comment reconnaître une relation instable',
        'Pourquoi certaines séparations sont difficiles à oublier',
        'Les blocages émotionnels dans une relation amoureuse',
        'Pourquoi votre relation semble bloquée',
        'Les signes d’une forte connexion émotionnelle',
        'Pourquoi votre ex continue de revenir dans votre vie',
        'Les erreurs qui éloignent une personne après une rupture',
        'Comment retrouver plus de clarté après une séparation'
      ]
    },
    {
      icon: 'bx-lock-alt',
      title: 'Déblocage & Ouverture des Chemins',
      articles: [
        'Pourquoi votre vie semble bloquée',
        'Pourquoi les mêmes problèmes se répètent',
        'Comment reconnaître un blocage énergétique',
        'Pourquoi certaines situations n’avancent pas malgré vos efforts',
        'Les signes d’une stagnation émotionnelle',
        'Pourquoi certains projets restent bloqués',
        'Comment retrouver une énergie plus positive',
        'Pourquoi ressentez-vous une fatigue inhabituelle',
        'Les signes d’un déséquilibre émotionnel',
        'Pourquoi certaines périodes semblent plus lourdes que d’autres'
      ]
    },
    {
      icon: 'bx-show',
      title: 'Protection Spirituelle',
      articles: [
        'Comment reconnaître des énergies négatives',
        'Pourquoi ressentez-vous une lourdeur inhabituelle',
        'Les signes d’un environnement émotionnel toxique',
        'Pourquoi certaines personnes vous épuisent émotionnellement',
        'Comment retrouver un meilleur équilibre énergétique',
        'Les signes de tensions émotionnelles persistantes',
        'Pourquoi certaines situations créent un mal-être constant',
        'Comment protéger son énergie émotionnelle'
      ]
    },
    {
      icon: 'bx-briefcase-alt-2',
      title: 'Réussite & Évolution',
      articles: [
        'Pourquoi certaines opportunités semblent vous échapper',
        'Comment retrouver une dynamique positive dans sa vie',
        'Pourquoi vos projets avancent difficilement',
        'Les blocages qui ralentissent votre évolution',
        'Comment retrouver plus de motivation et de clarté',
        'Pourquoi certaines périodes ralentissent votre progression',
        'Les signes d’un besoin de changement dans votre vie'
      ]
    },
    {
      icon: 'bx-group',
      title: 'Relations & Famille',
      articles: [
        'Pourquoi certaines relations familiales deviennent difficiles',
        'Comment gérer les tensions émotionnelles dans une famille',
        'Pourquoi certaines personnes prennent leurs distances',
        'Les signes d’une relation émotionnellement épuisante',
        'Comment retrouver plus d’harmonie dans ses relations',
        'Pourquoi certaines incompréhensions persistent'
      ]
    }
  ]
};

function renderPage(res, page, meta = {}) {
  res.render('layouts/main', {
    ...siteData,
    page,
    currentPath: meta.currentPath || '/',
    title: meta.title ? `${meta.title} | ${siteData.brand}` : `${siteData.brand} | Voyance moderne et bienveillante`,
    description: meta.description || 'Monelle, voyante intuitive, propose des consultations privées, personnalisées et confidentielles.'
  });
}

exports.home = (req, res) => {
  renderPage(res, 'home', {
    currentPath: '/',
    title: 'Voyance moderne et bienveillante'
  });
};

exports.services = (req, res) => {
  renderPage(res, 'services', {
    currentPath: '/services',
    title: 'Accompagnements de Monelle'
  });
};

exports.consultations = (req, res) => {
  renderPage(res, 'consultations', {
    currentPath: '/consultations',
    title: 'Consultations'
  });
};

exports.pricing = (req, res) => {
  renderPage(res, 'pricing', {
    currentPath: '/tarifs',
    title: 'Tarifs'
  });
};

exports.about = (req, res) => {
  renderPage(res, 'about', {
    currentPath: '/apropos',
    title: 'Monelle'
  });
};

exports.blog = (req, res) => {
  renderPage(res, 'blog', {
    currentPath: '/blog',
    title: 'Conseils de Monelle'
  });
};

exports.privacy = (req, res) => {
  renderPage(res, 'privacy', {
    currentPath: '/politique-de-confidentialite',
    title: 'Politique de Confidentialité',
    description: 'Politique de confidentialité des consultations privées Monelle.'
  });
};

exports.contact = (req, res) => {
  renderPage(res, 'contact', {
    currentPath: '/contact',
    title: 'Contact'
  });
};

exports.booking = (req, res) => {
  renderPage(res, 'booking', {
    currentPath: '/reservation',
    title: 'Réservation'
  });
};

exports.sendContact = (req, res) => {
  res.redirect('/contact?sent=1');
};

exports.notFound = (req, res) => {
  res.status(404);
  renderPage(res, '404', {
    currentPath: req.path,
    title: 'Page introuvable'
  });
};
