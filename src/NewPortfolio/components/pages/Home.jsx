import About from "./About";
import Contacts from "./Contacts";
import Education from "./Education";
import Hero from "./Hero";
import Journey from "./Journey";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";


const Home = () => {
  return (
    <main className="flex flex-col gap-32">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="journey"><Journey /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contacts/></section>
    </main>
  );
};

export default Home;

