/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [

    {
      id: 1,
      label: 'Nos Atouts',
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
      label: 'Nos Partenaires',
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
  slogan: 'NOS ATOUTS',
  title: 'Pourquoi nous choisir ?',
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
import appSlide1 from 'common/assets/image/appModern/appSlider1.png';
import appSlide2 from 'common/assets/image/appModern/appSlider2.png';
import appSlide3 from 'common/assets/image/appModern/appSlider3.png';
import appIcon from 'common/assets/image/appModern/icon1.svg';

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
  title: 'Commandez près de chez vous en 2 clics.',
  description:
    "Bénéficier d’un produit et à porté de main. Trouvez un produit, choisissez un coursier et faites-vous livrer quand vous voulez!",
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
import codingImage from 'common/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'ILS PARLENT DE NOUS',
  title: 'Rejoignez notre Espace Presse',
  description: 'Lire le contenu de l’article ',
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
import member3 from 'common/assets/image/appModern/3.png';
import member4 from 'common/assets/image/appModern/4.png';
import member5 from 'common/assets/image/appModern/5.png';
import member6 from 'common/assets/image/appModern/6.png';
import member7 from 'common/assets/image/appModern/7.png';

export const teamportfolio = {
  title: 'Meet our awesome team members, work behind the sense',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'Berlin Corleone',
    },
    {
      id: 2,
      img: member2,
      text: 'Jona White',
    },
    {
      id: 3,
      img: member3,
      text: 'Michael Price',
    },
    {
      id: 4,
      img: member4,
      text: 'Gullyboy Rana',
    },
    {
      id: 5,
      img: member5,
      text: 'Miss Clair',
    },
    {
      id: 6,
      img: member6,
      text: 'Bucky Ali',
    },
    {
      id: 7,
      img: member7,
      text: 'Arthus Doe',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'NOS PARTENAIRES',
  title: 'Commandez chez ceux qui nous font confiance',
  reviews: [
    {
      id: 1,
      title: 'Client Livroux depuis 6 mois',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'Client Livroux depuis 2 mois',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'Livreur Livroux depuis 1 mois',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:
        'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/chat.svg';
import group from 'common/assets/image/appModern/group.svg';
import github from 'common/assets/image/appModern/github.svg';
import footerLogo from 'common/assets/image/appModern/livroux_white.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};