import './css/App.css';
import Intro from './pages/Intro';
import Navbar from './components/Navbar';
import SocialAccounts from './components/SocialAccounts';

function App() {
  return (
    <div className="App">
      <div className="App__bar">
        <Navbar />
      </div>
      <Intro />
      {/* <About /> */}
      {/* <Achievements /> */}
      {/* <Experience /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <SocialAccounts /> */}
    </div>
  );
}

export default App;
