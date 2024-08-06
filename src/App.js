import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Services from './Services';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Services />
      <Project/>
      {/* <Blog/> */}
      <Contact/>
      <Footer/>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
