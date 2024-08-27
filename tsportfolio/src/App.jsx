import './App.css'
import NavBar from './components/NavBar/NavBar';
import Experience from './components/Experience/Experience';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';

function App() {

  return (
    <>
      <div>
        <h3> Tianna Spears, Software Dev Portfolio </h3>
        <NavBar />
        <Experience />
        <Projects />
        <Contact />

      </div>
    </>
  )
}

export default App
