import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Recommendations from './pages/Recommendations'
import Contact from './pages/Contact'

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar className="nav"/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/expr" element={<WorkExperience/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/recommendations" element={<Recommendations/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
