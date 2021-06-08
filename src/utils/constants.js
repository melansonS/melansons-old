import boulette_s from "../images/boulette_s.png";
import grouped_s from "../images/grouped_s.png";
import remindinator_s from "../images/remindinator_s.png";
import typing_s from "../images/typing_s.png";
import unsplash_s from "../images/unsplash_s.png";

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
    description:
      "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors n",
    id: 101,
  },
  {
    src: typing_s,
    darkImg: true,
    title: "Typing Test",
    url: "https://typing-test-ten.vercel.app/",
    github: "https://github.com/melansonS/typing-test",
    description:
      "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors n",
    id: 102,
  },
  {
    src: unsplash_s,
    darkImg: true,
    title: "Unsplash Demo",
    url: "https://unsplash-search-alpha.vercel.app/",
    github: "https://github.com/melansonS/Unsplash-API",
    description:
      "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors n",
    id: 103,
  },
  {
    src: grouped_s,
    darkImg: false,
    title: "Grouped.",
    url: "https://grouped-b4deb.web.app/",
    github: "https://github.com/melansonS/Grouped",
    description:
      "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors n",
    id: 104,
  },
  {
    src: remindinator_s,
    darkImg: false,
    title: "Remindinator",
    url: "https://remindinator.herokuapp.com/",
    github: "https://github.com/melansonS/remindinator",
    description:
      "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors n",
    id: 105,
  },
];
