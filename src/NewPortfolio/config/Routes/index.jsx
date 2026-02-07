// src/config/routes.jsx
import { lazy } from "react";

const Home = lazy(() => import("../../components/pages/Home"));
const About = lazy(() => import("../../components/pages/About"));
const Journey = lazy(() => import("../../components/pages/Journey"));
const Skills = lazy(() => import("../../components/pages/Skills"));
const Projects = lazy(() => import("../../components/pages/Projects"));
const Education = lazy(() => import("../../components/pages/Education"));
const Services = lazy(() => import("../../components/pages/Services"));
const Contacts = lazy(() => import("../../components/pages/Contacts"));
const HeroPage = lazy(() => import("../../components/pages/Hero"));

export const routes = [
  { id: "home", path: "/", component: Home },
  { id: "hero", path: "/hero", component: HeroPage },
  { id: "about", path: "/about", component: About },
  { id: "journey", path: "/journey", component: Journey },
  { id: "skills", path: "/skills", component: Skills },
  { id: "projects", path: "/projects", component: Projects },
  { id: "education", path: "/education", component: Education },
  { id: "services", path: "/services", component: Services },
  { id: "contact", path: "/contact", component: Contacts },
];
