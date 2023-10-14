import NavBar from "./components/NavBar/navbar"
import Intro from "./components/Intro/Intro"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro/>
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}
