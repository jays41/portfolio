import './App.css'
import ReactDOM from 'react-dom'
import ContactForm from './Components/ContactForm'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Links from './Components/Links'
import CV from './Components/CV'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <main className="scroll-container">
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <CV />
        <ContactForm />
        <Links />
      </main>
    </>
  )
}

export default App
