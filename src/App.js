import React, { Component } from 'react';
import Header from './Header'
import Links from './Links'
import Article from './Article'
import Ad from './Ad'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Article />
        
        <Ad />

        <main className="expanded row">
          <Links />
        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
