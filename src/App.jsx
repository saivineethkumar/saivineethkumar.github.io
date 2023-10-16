import NavBar from "./components_old/NavBar/navbar"
import Intro from "./components_old/Intro/Intro"
import Skills from "./components_old/Skills/skills"
import Works from "./components_old/Works/Works"
import Contact from "./components_old/Contact/Contact"
import Footer from "./components_old/Footer/Footer"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro/>
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}
