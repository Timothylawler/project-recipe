import React, {Component} from 'react';
import { Link } from 'react-router'
import './sideMenu.css';



class SideMenu extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		

    return (
      <div className="side-menu z-depth-3">
				<Link to="/home">
					<div className="side-menu-brand">
						Project Recipe
					</div>
				</Link>
				<ul>
					<li>
						<Link to="/home" activeStyle={{ color: "#4e4e4e" }} className="tooltipped" data-position="right" data-delay="50" data-tooltip="Recipes">
							<i className="material-icons small">restaurant</i>
						</Link>
					</li>
					<li>
						<Link to="/contact" activeStyle={{ color: "#4e4e4e" }} className="tooltipped" data-position="right" data-delay="50" data-tooltip="Contact">
							
							<i className="material-icons small">phone</i>
						
						</Link>
					</li><li>
						<a href="#" className="tooltipped" data-position="right" data-delay="50" data-tooltip="Profile">
							<i className="material-icons small">person</i>
						</a>
					</li>
					<li>
						<a href="#" className="tooltipped" data-position="right" data-delay="50" data-tooltip="Home">
							<i className="material-icons small">home</i>
						</a>
					</li>
					
					
				</ul>
			
				<div className="side-menu-alt-text center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit nisl, mattis rhoncus neque ullamcorper, elementum dictum mi. Nunc tincidunt nisl quis risus condimentum, eu dignissim nibh suscipit.
			
				</div>
			</div>
    );

	}
}


export default SideMenu;