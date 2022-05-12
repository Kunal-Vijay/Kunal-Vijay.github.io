import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Services />
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
