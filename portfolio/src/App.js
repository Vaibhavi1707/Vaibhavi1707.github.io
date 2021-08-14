import './css/App.css';

import Intro from './pages/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Navbar from './components/Navbar';
import SocialAccounts from './components/SocialAccounts';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App__bar">
        <Navbar />
      </div>
      <div className="social__accounts">
        <SocialAccounts />
      </div>
      <Router>
        {/* <Switch> */}
          <Route path = "/home">
            <Intro />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/skills">
            <Skills />
          </Route>
          <Route path = "/achievements">
            <Achievements />
          </Route>
          <Route path = "/experience">
            <Experience />
          </Route> 
          <Route path = "/projects">
            <Projects />
          </Route>
          <Route path = "/contact">
            <Contact />
          </Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
