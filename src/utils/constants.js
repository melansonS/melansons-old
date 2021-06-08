import grouped_s from "../images/grouped_s.png";
import remindinator_s from "../images/remindinator_s.png";
import typing_s from "../images/typing_s.png";
import unsplash_s from "../images/unsplash_s.png";

export const text = {
  developer: {
    en: "Developer ",
    fr: "Développeur ",
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
    src: unsplash_s,
    title: "Unsplash Demo",
    url: "https://unsplash-search-alpha.vercel.app/",
    github: "https://github.com/melansonS/Unsplash-API",
  },
  {
    src: typing_s,
    title: "Typing Test",
    url: "https://typing-test-ten.vercel.app/",
    github: "https://github.com/melansonS/typing-test",
  },
  {
    src: grouped_s,
    title: "Grouped.",
    url: "https://grouped-b4deb.web.app/",
    github: "https://github.com/melansonS/Grouped",
  },
  {
    src: remindinator_s,
    title: "Remindinator",
    url: "https://remindinator.herokuapp.com/",
    github: "https://github.com/melansonS/remindinator",
  },
];
