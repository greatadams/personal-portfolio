import Nav from './components/Nav';
import Hero from './components/Hero';
import Experiences from './components/Experience';
import StackTable from './components/StackTable';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <StackTable />
      </Reveal>
      <Reveal>
        <Experiences />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}

export default App;
