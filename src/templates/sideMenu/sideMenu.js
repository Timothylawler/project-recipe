import React, { Component } from 'react';
import './sideMenu.css';



class SideMenu extends Component {

	constructor(props){
		super(props);
		
		
      
		this.state = (
			{hover:false}, 
			{item: 
				{
					desc:"foods eggs", 
					title:"eggs in skillet",
					nutrition: 
					{
						kcal:"1000",
						carbs: "17gr",
						protein: "35gr",
						fat: "5gr"
					}
				}
			}
		);
	}
	
	

	
	
  render() {
		return(
			<div className="side-menu">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Home</a></li>
				</ul>
			</div>
		);
    
  }
}

export default SideMenu;
