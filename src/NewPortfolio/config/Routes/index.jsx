// // src/config/routes.jsx
// import { lazy } from "react";

// const Home = lazy(() => import("../../components/pages/Home"));
// const About = lazy(() => import("../../components/pages/About"));
// const Journey = lazy(() => import("../../components/pages/Journey"));
// const Skills = lazy(() => import("../../components/pages/Skills"));
// const Projects = lazy(() => import("../../components/pages/Projects"));

// const ProjectDetails = lazy(() => import("../../components/pages/ProjectDetails"));
// const Education = lazy(() => import("../../components/pages/Education"));
// const Services = lazy(() => import("../../components/pages/Services"));
// const Contacts = lazy(() => import("../../components/pages/Contacts"));
// const HeroPage = lazy(() => import("../../components/pages/Hero"));

// export const routes = [
//   { id: "home", path: "/", component: Home },
//   { id: "hero", path: "/hero", component: HeroPage },
//   { id: "about", path: "/about", component: About },
//   { id: "journey", path: "/journey", component: Journey },
//   { id: "skills", path: "/skills", component: Skills },
//   { id: "projects", path: "/projects", component: Projects },
//   { id: "project-details", path: "/projects/:id", component: ProjectDetails },
//   { id: "education", path: "/education", component: Education },
//   { id: "services", path: "/services", component: Services },
//   { id: "contact", path: "/contact", component: Contacts },


// ];



import { lazy } from "react";

const loadHome = () => import("../../components/pages/Home");
const loadAbout = () => import("../../components/pages/About");
const loadJourney = () => import("../../components/pages/Journey");
const loadSkills = () => import("../../components/pages/Skills");
const loadProjects = () => import("../../components/pages/Projects");
const loadProjectDetails = () => import("../../components/pages/ProjectDetails");
const loadEducation = () => import("../../components/pages/Education");
const loadServices = () => import("../../components/pages/Services");
const loadContacts = () => import("../../components/pages/Contacts");
const loadHero = () => import("../../components/pages/Hero");

const Home = lazy(loadHome);
const About = lazy(loadAbout);
const Journey = lazy(loadJourney);
const Skills = lazy(loadSkills);
const Projects = lazy(loadProjects);
const ProjectDetails = lazy(loadProjectDetails);
const Education = lazy(loadEducation);
const Services = lazy(loadServices);
const Contacts = lazy(loadContacts);
const HeroPage = lazy(loadHero);

export const routeLoaders = {
  loadHome,
  loadAbout,
  loadJourney,
  loadSkills,
  loadProjects,
  loadProjectDetails,
  loadEducation,
  loadServices,
  loadContacts,
  loadHero,
};

export const routes = [
  { id: "home", path: "/", component: Home },
  { id: "hero", path: "/hero", component: HeroPage },
  { id: "about", path: "/about", component: About },
  { id: "journey", path: "/journey", component: Journey },
  { id: "skills", path: "/skills", component: Skills },
  { id: "projects", path: "/projects", component: Projects },
  { id: "project-details", path: "/projects/:id", component: ProjectDetails },
  { id: "education", path: "/education", component: Education },
  { id: "services", path: "/services", component: Services },
  { id: "contact", path: "/contact", component: Contacts },
];