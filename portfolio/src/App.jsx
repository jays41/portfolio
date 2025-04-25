import './App.css';
import './Components/Base.css';
import ContactForm from './Components/ContactForm';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import SkillsMobile from './Components/SkillsMobile';
import Sidebar from './Components/Sidebar';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? <Sidebar /> : null}
      <main className="scroll-container">
        <About />
        {!isMobile ? <Skills /> : <SkillsMobile />}
        <Timeline />
        <Projects />
        {/* <ContactForm /> */}
      </main>
    </>
  )
}

export default App
