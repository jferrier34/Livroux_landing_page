/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [

    {
      id: 1,
      label: 'Notre Concept',
      path: '#features',
      offset: '81',
    },
    {
      id: 2,
      label: 'Devenir Client',
      path: '#appSlider',
      offset: '81',
    },
    {
      id: 3,
      label: 'Devenir Coursier',
      path: '#banner_section',
      offset: '81',
    },
     {
      id: 4,
      label: 'Notre Produit',
      path: '#product_section',
      offset: '81',
    },
    {
      id: 5,
      label: 'Nos Clients',
      path: '#testimonial',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appModern/company1.png';
import client2 from 'common/assets/image/appModern/company2.png';
import client3 from 'common/assets/image/appModern/company3.png';
import client4 from 'common/assets/image/appModern/company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appModern/icon1.svg';
import featureIcon2 from 'common/assets/image/appModern/icon2.svg';
import featureIcon3 from 'common/assets/image/appModern/icon3.svg';
import featureIcon4 from 'common/assets/image/appModern/icon4.svg';

export const features = {
  slogan: 'NOTRE CONCEPT',
  title: "Livroux c'est",
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Localisation',
      description:
        'Localisez les établissements les plus proches de chez vous.',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon2,
      title: 'Messagerie',
      description:
        'Restez en contact avec vos restaurants favoris.',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon3,
      title: 'Notifications',
      description:
        'Soyez notifié des dernières offres et promotions de vos établissements préférés.',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon4,
      title: 'Sécurité',
      description:
        'Commandez en toute sécurité et protégez vos données.',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/appModern/screen_one.png';
import appSlide2 from 'common/assets/image/appModern/screeen.png';
import appSlide3 from 'common/assets/image/appModern/screen_two.png';
import appIcon from 'common/assets/image/appModern/icon1000.svg';
import appIcon2 from 'common/assets/image/appModern/icon1.svg';
import appIcon3 from 'common/assets/image/appModern/icon1.svg';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  slogan: 'DEVENIR CLIENT',
  title: 'Le clic qui fait la différence.',
  description:
    "En Click&Collect ou en livraison, vos boutiques préférés sont disponibles quand vous voulez.",
  features: [
    {
      id: 1,
      icon: appIcon,
      title: 'Easy Invoicing',
      description: 'Surprice your clients with professional looking invoices.',
    },
    {
      id: 2,
      icon: appIcon,
      title: 'UX Planning',
      description:
        'UI/UX Design by following and maintaining the latest trends .',
    },
    {
      id: 3,
      icon: appIcon,
      title: 'Customer Support',
      description: 'A Dedicated support team will be always ready for you.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import joinusImage from 'common/assets/image/appModern/social.svg';
import iconFacebook from 'common/assets/image/appModern/facebook_logo.svg';
import iconInstagram from 'common/assets/image/appModern/instagram_logo.svg';

export const designAndBuilt = {
  image: joinusImage,
  slogan: 'ILS PARLENT DE NOUS',
  title: 'Rejoignez notre Communauté.',
  facebookIcon: iconFacebook,
  instagramIcon: iconInstagram,
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/appModern/test_appli1.JPG';
import slide2 from 'common/assets/image/appModern/test_appli2.JPG';
import slide3 from 'common/assets/image/appModern/ptest_appli3.JPG';
import slide4 from 'common/assets/image/appModern/test_appli4.JPG';
import slide5 from 'common/assets/image/appModern/test_appli5.JPG';
import slide6 from 'common/assets/image/appModern/test_appli6.JPG';

export const productData = {
  slogan: 'NOTRE PRODUIT',
  title: 'Une application faite pour vous.',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide4,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide5,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide6,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/1.png';
import member2 from 'common/assets/image/appModern/2.png';
import member3 from 'common/assets/image/appModern/7.png';
import member4 from 'common/assets/image/appModern/4.png';
import member5 from 'common/assets/image/appModern/5.png';
import member6 from 'common/assets/image/appModern/6.png';
import member7 from 'common/assets/image/appModern/7.png';

export const teamportfolio = {
  title: 'Vous gérez un établissement ?',
  description:
    "Contactez-nous et déployer votre commerce au delà de votre zone d'activité pour atteindre plus de clients.",

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'Le Touzine',
    },
    {
      id: 2,
      img: member2,
      text: 'Fleurs & Nuances',
    },
    {
      id: 3,
      img: member3,
      text: 'Food Worker',
    },
    {
      id: 4,
      img: member4,
      text: "L'Instant ... V",
    },
    {
      id: 5,
      img: member5,
      text: 'O wok',
    },
    {
      id: 6,
      img: member6,
      text: 'Mondial Relay',
    },
    {
      id: 7,
      img: member7,
      text: 'Food Worker',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'NOS CLIENTS',
  title: 'Commandez parmis ceux qui nous font confiance',
  reviews: [
    {
      id: 1,
      title: 'Client Livroux depuis 6 mois',
      description:
        "L'efficacité Livroux me permet d'ouvrir 1j de plus par semaine grâce à une clientèle qui augmente",
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Yoann',
      designation: 'Gérant Food Worker',
      review: 4,
    },
    {
      id: 2,
      title: 'Client Fleuriste chez Livroux depuis 3 mois',
      description:
        "Les ventes florales n'ont jamais été aussi bonnes, je n'ai plus aucun problème logistique, Livroux s'occupe de tout!",
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Daniel',
      designation: 'Gérant Fleurs & Nuances.',
      review: 5,
    },
    {
      id: 3,
      title: 'Livreur Livroux depuis 4 mois',
      description:
        "Excellent compromis et multiples bénéfices 'Livreur', super boite flexible et arrangeante au possible!",
      avatar:
        'https://zupimages.net/viewer.php?id=21/47/36qo.png',
      name: 'Louis',
      designation: 'Étudiant en Médecine',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/community.svg';
import group from 'common/assets/image/appModern/bull.svg';
import github from 'common/assets/image/appModern/livroux_white_logo.svg';
import footerLogo from 'common/assets/image/appModern/livroux_white_logo.svg';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Rejoindre notre communauté',
      description:
        "Bénéficier des dernières actualités Livroux et découvrez vos commerces préférés à proximité ainsi qu'à leurs services, le tout, à porter de mains.",
    },
    {
      id: 2,
      icon: group,
      title: 'Nous contacter',
      description:
        'Une question ? Nous contacter directement par mail, messenger et via notre profil Instagram.',
    },
    {
      id: 3,
      icon: github,
      title: 'Utiliser Livroux',
      description:
        "Rien de plus facile. Rendez vous sur l'App Store ou le Play Store et bénéficier de toutes nos fonctionnalités gratuitement et sans modération.",
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Accueil',
      link: '#',
    },
    {
      id: 2,
      text: 'Devenir client',
      link: '#',
    },
    {
      id: 3,
      text: 'Devenir coursier',
      link: '#',
    },
    {
      id: 4,
      text: 'Notre produit',
      link: '#',
    },
    {
      id: 5,
      text: 'Nos clients',
      link: '#',
    },
  ],
};
