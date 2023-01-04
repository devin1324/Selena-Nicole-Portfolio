import Nav from './components/navbar';
import Hero from './components/hero';
import AboutMe from './components/aboutMe';
import NewReleased from './components/newReleased';

import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <div className="bg-[url('/public/common/bg.jpg')] w-full h-[300vh]">
        <AboutMe />
        <NewReleased />
      </div>
      <Nav />
    </div>
  );
}

export default App;
