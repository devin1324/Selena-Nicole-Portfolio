import Nav from './components/navbar';
import Hero from './components/hero';
import AboutMe from './components/aboutMe';
import NewReleased from './components/newReleased';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <div className="bg-[url('/common/bg.jpg')] w-full h-[300vh] flex flex-col  items-center">
        <AboutMe />
        <NewReleased />
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
