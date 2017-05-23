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
          <Links linkinfo={[
    {
        src: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
        text: "Single Orcs in Indianapolis",
        alt: "orc"
    },
    {
        src: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
        text: "You won't believe what's under this mountain",
        alt: "mountain"
    },
    {
        src: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
        text: "Mine 20% more gold with One Weird Trick",
        alt: "gold"
    },
    {
        src: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
        text: "Surprise for Indiana Hobbits born before 1999",
        alt: "hobbit"
    }
]}/>
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
