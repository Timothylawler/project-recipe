import React, { Component } from 'react';
import './App.css';
import SideMenu from './templates/sideMenu/sideMenu.js';
import SelectedRecipes from './templates/selectedRecipes/selectedRecipes.js';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col l3">
					<SideMenu className="side-menu"/>
				</div>
				<div className="col s12 l9 content container">
					{
						this.props.children || 
						<SelectedRecipes />
					}
				</div>
      
      </div>
    );
  }
}

export default App;

/*
					<BodyContent />
				*/
