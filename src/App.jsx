import { useState } from "react";
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
import "./App.css";
import Footer from "./Section/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      {/* Background Effect */}
      <Background />

      
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
  );
}

export default App;
