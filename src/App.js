import React, { Component } from 'react';
import './App.css';
import BodyContent from './templates/body/body.js';
import SideMenu from './templates/sideMenu/sideMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
				<SideMenu />
				<BodyContent />
      
      </div>
    );
  }
}

export default App;
