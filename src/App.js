import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import SideMenuMaterial from './templates/sideMenu/sideMenuMaterial.js';
import BottomMenu from './templates/bottomMenu/bottomMenu.js';
import SelectedRecipes from './templates/selectedRecipes/selectedRecipesMaterialize.js';


class App extends Component {
	
	
	menu(){
		return(
			<div>
				<MediaQuery query='(min-device-width: 769px)'>
					<SideMenuMaterial />
				</MediaQuery>

				<MediaQuery query='(max-device-width: 768px)'>
					<BottomMenu />
				</MediaQuery>
			</div>
		);
	}
	
	
  render() {
    return (
      <div className="App row">
        <div className="col l3">
					{this.menu()}
					
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
