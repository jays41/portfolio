import './App.css'
import ContactForm from './Components/ContactForm'
import About from './Components/About'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Links from './Components/Links'
import CV from './Components/CV'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <main>
        <div id="About">
          <About />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Experience">
          <Experience />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="CV">
          <CV />
        </div>
        <div id="ContactForm">
          <ContactForm />
        </div>
        <div id="Links">
          <Links />
        </div>
      </main>
    </>
  )
}

export default App
