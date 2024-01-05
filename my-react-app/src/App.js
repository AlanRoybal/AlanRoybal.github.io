import Navbar from "./components/NavBar/navbar"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Hobby from "./components/Hobbies/hobby";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Hobby />
    </div>
  );
}

export default App;
