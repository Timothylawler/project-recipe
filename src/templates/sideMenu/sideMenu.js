import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import './sideMenu.css';



class SideMenu extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		

    return (
      <div className="side-menu z-depth-2">
				<a href="#">
					<div className="side-menu-brand">
						Project Recipe
					</div>
				</a>
				<ul>
					<li>
						<a href="#" className="tooltipped" data-position="right" data-delay="50" data-tooltip="Recipes">
							<i className="material-icons small">restaurant</i>
						</a>
					</li>
					<li>
						<a href="#" className="tooltipped" data-position="right" data-delay="50" data-tooltip="Contact">
							<i className="material-icons small">phone</i>
						</a>
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
			</div>
    );

	}
}


export default SideMenu;