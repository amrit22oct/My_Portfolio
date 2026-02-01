// src/config/routes.jsx

import Home from "../../../Section/Home.jsx";
import About from "../../../Section/About";
import Journey from "../../../Section/Journey";
import Skills from "../../../Section/Skills";
import Projects from "../../../Section/Projects";
import Education from "../../../Section/Education";
import Services from "../../../Section/Services";
import Contacts from "../../../Section/Contacts";

export const routes = [
  {
    id: "home",
    path: "/",
    component: <Home />,
  },
  {
    id: "about",
    path: "/about",
    component: <About />,
  },
  {
    id: "journey",
    path: "/journey",
    component: <Journey />,
  },
  {
    id: "skills",
    path: "/skills",
    component: <Skills />,
  },
  {
    id: "projects",
    path: "/projects",
    component: <Projects />,
  },
  {
    id: "education",
    path: "/education",
    component: <Education />,
  },
  {
    id: "services",
    path: "/services",
    component: <Services />,
  },
  {
    id: "contact",
    path: "/contact",
    component: <Contacts />,
  },
];
