import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Hobby from "./components/Hobbies/hobby";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Flowers from "./components/Flowers/Flowers"; 
import Banner from "./components/Banner/Banner";
import Buttons from "./components/Buttons/Buttons";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <Intro />
              <Skills />
              <Projects />
              <Hobby />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/flowers" element={
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', width: '100vw'
          }}>
            <Banner />
            {/* <p style={{ color: 'white', display: 'block', height: 'fit-content' }}>test</p> */}

            <div style={{ display: 'block', width: '100%' }}>
              <Flowers />
            </div>

            </div>
            <Buttons />
            </div> }
             />
      </Routes>
    </Router>
  );
}

export default App;
