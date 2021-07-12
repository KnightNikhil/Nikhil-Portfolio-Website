import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const [educationOpen, seteducationOpen] = useState(true);

  return (
    <>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Summary />
      <Skills />
      <Experience
        educationOpen={educationOpen}
        seteducationOpen={seteducationOpen}
      />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
