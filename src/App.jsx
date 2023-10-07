import './App.css';
import About from './components/About/About.jsx';
import Index from './components/Index/Index.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Index />
      <About />
      <Projects />
    </>
  );
}

export default App;
