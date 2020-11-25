import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Parallax from './Parallax';
import Portfolio from './Portfolio';
import Contact from './Contact'
import About from './About'
// import Footer from './Footer'
import Testimonials from './Testimonials';
import Services from './Services'

function App()
{



  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>


      <Parallax />

      <About />

      <Services />

      <Portfolio />

      <Testimonials />

      <Contact />
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
