import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Introduction />
        <FirstSection />
        <Footer />        
      </div>
    );
  }
}

export default App;
