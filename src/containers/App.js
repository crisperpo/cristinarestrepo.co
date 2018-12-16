import React, { Component } from 'react';
import '../App.scss';
import About from '../components/About';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Nav from '../components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <Nav />
            </header>
            <div className="content">
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
