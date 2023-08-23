// import { Routes, Route } from 'react-router-dom'
import './App.scss';
import 'animate.css';
import { LuMail } from "react-icons/lu";
import { BsGithub, BsLinkedin } from "react-icons/bs";

//components
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Expertise from './components/Expertise';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
      <main>
        {/* <Routes>
          <Route index element={<Home />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Routes> */}
        <Home />
        <Expertise />
        <Work />
        <Contact />
      </main>
      <div className="side-links-wrapper animate__animated animate__fadeInUp animate__delay-1s">
        <a href="mailto:jlhadjisaid@gmail.com"><LuMail className='link-icon' /></a>
        <a href="https://github.com/jehan023" target="_blank" rel="noreferrer"><BsGithub className='link-icon' /></a>
        <a href="https://www.linkedin.com/in/jehanhadjisaid/" target="_blank" rel="noreferrer"><BsLinkedin className='link-icon' /></a>
        <div className="links-block"></div>
      </div>

      <ScrollButton />
    </div>
  );
}

export default App;
