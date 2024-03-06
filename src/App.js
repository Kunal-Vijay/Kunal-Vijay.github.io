import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
