import Lobby from './assets/components/Lobby';
import Works from './assets/components/Works';
import Experience from './assets/components/Experience';
import Skills from './assets/components/Skills';
import Navbar from './assets/components/Navbar';
import Contact from './assets/components/Contact';
import './assets/styles/style.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Lobby/>
      <Works/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
