import boulette_s from "../images/boulette_s.png";
import grouped_s from "../images/grouped_s.png";
import remindinator_s from "../images/remindinator_s.png";
import typing_s from "../images/typing_s.png";
import unsplash_s from "../images/unsplash_s.png";

import {
  SiFirebase,
  SiMongodb,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiSocketDotIo,
} from "react-icons/si";

export const text = {
  developer: {
    en: "Developer ",
    fr: "Développeur ",
  },

  //HEADER
  toggleLang: {
    en: "Toggle Language En/Fr",
    fr: "Changer de langue Français/Anglais",
  },
  toggleTheme: {
    en: "Toggle Light/Dark Theme",
    fr: "Changer de thème Claire/Sombre",
  },
  // NAV OPTIONS
  home: {
    en: "Home",
    fr: "Acceuil",
  },
  about: {
    en: "About",
    fr: "À propos",
  },
  projects: {
    en: "Projects",
    fr: "Projets",
  },
  contact: {
    en: "Contact",
    fr: "Contact",
  },
  //ABOUT PAGE
  aboutHead: {
    en: "Hi! ",
    fr: "Salut!",
  },
  aboutBody: {
    en: "I'm ##FSamuel## and I build things for the web! It manages to be both a challenge and an outlet for my technical and creative skills ✨ I am continually curious and am excited to see what I can learn next! I am thrilled to continue to build ##Bcool## things with ##Bcool## people!",
    fr: "Moi c'est ##FSamuel## et je construis des trucs pour le Web! Ça me permet de me pousser tant au niveau technique qu'au niveau créatif ✨ Je suis continuellement curieux et j'ai hâte de voir ce que je vais apprendre par la suite. Je suis heureux de continuer à construire des trucs ##Bcool## avec du monde ##Bcool##!",
  },
  // CONTACT PAGE
  contactTitle: {
    en: "Go check out:",
    fr: "Allez voir:",
  },
  workingOn: {
    en: "- ##BWhat## I'm workin on ",
    fr: "- sur ##Bquoi## je travaille",
  },
  workingWith: {
    en: "- ##BWho## I'm working with",
    fr: "- avec ##Bqui## je travaille",
  },
  directContact: {
    en: "Or get in touch with me directly!",
    fr: "Ou contactez-moi directement!",
  },
  greeting: {
    en: "Enjoy the rest of your",
    fr: "Profitez bien du reste de votre",
  },
};

export const weekDays = [
  { en: "Sunday", fr: "Dimanche" },
  { en: "Monday", fr: "Lundi" },
  { en: "Tuesday", fr: "Mardi" },
  { en: "Wednesday", fr: "Mercredi" },
  { en: "Thursday", fr: "Jeudi" },
  { en: "Friday", fr: "Vendredi" },
  { en: "Saturday", fr: "Samedi" },
];

export const breakpoints = {
  mobile: 800,
};

export const projects = [
  {
    src: boulette_s,
    darkImg: true,
    title: "Boulette!",
    url: "https://boulette-melansons.vercel.app/",
    github: "https://github.com/melansonS/boulette",
    description: {
      en: "This project came together out of a desire to play Boulette (a fun take on Charades) with friends and family during this past year's lockdown. It allows all of the remote players to interact with the shared pool of prompts in real time thanks to Socket.io!",
      fr: "Ce projet est né d'une envie de jouer à la Boulette (une version amusante de Charades) avec des amis et la famille pendant le confinement de l'année dernière. Il permet à tous les joueurs distants d'interagir avec le même pool de mots en temps réel grâce à Socket.io !",
    },
    tech: [
      { icon: <SiReact />, p: "React" },
      { icon: <SiNodeDotJs />, p: "Node" },
      { icon: <SiSocketDotIo />, p: "Socket.io" },
    ],
    id: 101,
  },
  {
    src: typing_s,
    darkImg: true,
    title: "Typing Test",
    url: "https://typing-test-ten.vercel.app/",
    github: "https://github.com/melansonS/typing-test",
    description: {
      en: "Put your fingers to the test! See how fast you really are as you compete for a spot at the top of the leader board and keep track of your stats as you hone your skills! Built on a React Frontend and an Express Node Backend which stores all of the incoming results on Mongo DB.",
      fr: "Mettez vos doigts à l'épreuve! Suivez vos statistiques tout en perfectionnant vos compétences lorsque vous luttez pour la première place! Construit sur un frontend React et un backend Express Node qui stocke tous les résultats sur une base de données Mongo à l'aide de Mongoose.",
    },

    tech: [
      { icon: <SiReact />, p: "React" },
      { icon: <SiNodeDotJs />, p: "Node" },
      { icon: <SiMongodb />, p: "Mongo" },
    ],
    id: 102,
  },
  {
    src: unsplash_s,
    darkImg: true,
    title: "Unsplash",
    url: "https://unsplash-search-alpha.vercel.app/",
    github: "https://github.com/melansonS/Unsplash-API",
    description: {
      en: "Thanks to a dynamically generated fully responsive masonry layout users are shown high quality images based on their search query. The images are retrieved procedurally as the user scrolls through. Each image provides a link to the original poster's Unsplash Profile and a download link.",
      fr: "Grâce à une mise en page de maçonnerie entièrement réactive générée de manière dynamique, les utilisateurs voient des images de haute qualité en fonction de leur requête de recherche. Les images sont récupérées de manière procédurale au fur et à mesure du défilement de la page.",
    },
    tech: [
      { icon: <SiReact />, p: "React" },
      { icon: <SiSass />, p: "Sass" },
    ],
    id: 103,
  },
  {
    src: grouped_s,
    darkImg: false,
    title: "Grouped.",
    url: "https://grouped-b4deb.web.app/",
    github: "https://github.com/melansonS/Grouped",
    description: {
      en: "Grouped is a SPA that allows users to add, edit and delete a list people/groups with the goal of assigning people to the various groups. The data is stored on Firebase's firestore and any update made is synchronistically displayed on all open instances of the app in real time.",
      fr: "Grouped est un SPA qui permet de regrouper divers personnes dans divers groupes. Les données sont stockées sur le firestore de Firebase et toute mise à jour effectuée est affichée de manière synchrone sur toutes les instances ouvertes de l'application en temps réel",
    },
    tech: [
      { icon: <SiReact />, p: "React" },
      { icon: <SiNodeDotJs />, p: "Node" },
      { icon: <SiFirebase />, p: "Firebase" },
      { icon: <SiSass />, p: "Sass" },
    ],
    id: 104,
  },
  {
    src: remindinator_s,
    darkImg: false,
    title: "Remindinator",
    url: "https://remindinator.herokuapp.com/",
    github: "https://github.com/melansonS/remindinator",
    description: {
      en: "A straightforward App that allows the user to add and remove items for a list of reminders that they would like sent to their account email address daily! Thanks to node-scheduler and sengrid the user receives daily reminders for their most important tasks! (Currently turned off)",
      fr: "Une application simple qui permet d'ajouter et de supprimer des éléments pour une liste de rappels que l'on souhaite envoyer à notre adresse e-mail! Grâce à node-scheduler et sengrid, on reçoit des rappels quotidiens pour nos tâches les plus importantes ! (Actuellement désactivé)",
    },
    tech: [
      { icon: <SiReact />, p: "React" },
      { icon: <SiNodeDotJs />, p: "Node" },
      { icon: <SiPostgresql />, p: "Postgres" },
    ],
    id: 105,
  },
];
