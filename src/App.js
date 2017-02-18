import React, { Component } from 'react';
import './App.css';
import BodyContent from './templates/body/body.js';
import SideMenu from './templates/sideMenu/sideMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col l3">
					<SideMenu className="side-menu"/>
				</div>
				<div className="col s12 l9">
					{this.props.children}
				</div>
      
      </div>
    );
  }
}

export default App;

/*
					<BodyContent />
				*/
