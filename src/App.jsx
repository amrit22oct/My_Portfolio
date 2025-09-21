import Navbar from "./Components/Navbar";
import Home from "./Section/Home";
import About from "./Section/About";
import Journey from "./Section/Journey";
import Skills from "./Section/Skills";
import Projects from "./Section/Projects";
import Education from "./Section/Education";
import Services from "./Section/Services";
import Contacts from "./Section/Contacts";
import Background from "./Components/Background"; 
import Footer from "./Section/Footer";
import "./App.css";
import CursorTrail from "./Components/CursorTrail";

function App() {
  return (
    <div className="app-container relative">
      {/* Full-page background effect */}
      <Background />
       {/* Cursor Tail */}
       <CursorTrail/>

      {/* Navbar and Sections */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
