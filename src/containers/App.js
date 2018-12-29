import React, { Component } from 'react';
import '../assets/scss/App.scss';
import About from '../components/About';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import SocialBar from '../components/SocialBar';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Nav />
            <header className="Header">
              <div className="Heading">
                <div className="Title">Cristina Restrepo</div>
                <div className="Headline">Front-end dev {'\u00b7'} Open-source fan {'\u00b7'} Globe trotter</div>
                <SocialBar />
              </div>
            </header>
            <div className="Content">
              <About />
              <Stack />
              <Contact />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
