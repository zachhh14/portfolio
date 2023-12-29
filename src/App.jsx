import About from './components/About/About.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Experience from './components/Experience/Experience.jsx';
import Footer from './components/Footer/Footer.jsx';
import Index from './components/Index/Index.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';

function App() {
  return (
    <>
      {/* <Navbar /> might remove it on the future, but stayed commented for now.*/}
      <Index />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;
