import './App.css'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <CV />
        <ContactForm />
        <Links />
      </main>
    </>
  )
}

export default App
