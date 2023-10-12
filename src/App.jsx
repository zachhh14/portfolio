import About from './components/About/About.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Experience from './components/Experience/Experience.jsx';
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
      <Experience />
      <Certifications />
    </>
  );
}

export default App;
