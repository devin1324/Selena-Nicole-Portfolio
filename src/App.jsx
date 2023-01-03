import Nav from './components/navbar';
import Hero from './components/hero';

import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <Nav />
      <div  className="bg-[url('/public/common/bg.jpg')] w-full h-[300vh]">

      </div>
    </div>
  );
}

export default App;
