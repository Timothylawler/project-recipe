import React, { Component } from 'react';
import './App.css';
import BodyContent from './templates/body/body.js';
import SideMenu from './templates/sideMenu/sideMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col m3">
					<SideMenu className="side-menu"/>
				</div>
				<div className="col m9">
					<BodyContent />
				</div>
      
      </div>
    );
  }
}

export default App;
