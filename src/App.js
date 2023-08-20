import { Routes, Route } from 'react-router-dom'
import './App.scss';

//components
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Expertise from './components/Expertise';

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
    </div>
  );
}

export default App;
