import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Services />
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
