import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Intro from './components/Intro/Intro'
import Exp from './components/Exp/Exp';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HardSkills from './components/Skills/HardSkills/HardSkills';
import SoftSkills from './components/Skills/SoftSkills/SoftSkills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/experience' element={<Exp />} />
        <Route path='/skills' element={<Skills />}>
          <Route path='/skills/hardskills' element={<HardSkills />} />
          <Route path='/skills/softskills' element={<SoftSkills />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Intro />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
