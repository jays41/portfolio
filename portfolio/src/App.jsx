import './App.css';
import './Components/Base.css';
import ContactForm from './Components/ContactForm';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Sidebar from './Components/Sidebar';

function App() {

  return (
    <>
      <Sidebar />
      <main className="scroll-container">
        <About />
        <Skills />
        <Timeline />
        <Projects />
        {/* <ContactForm /> */}
      </main>
    </>
  )
}

export default App
