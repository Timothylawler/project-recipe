import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import './sideMenuMaterialize.css';

class SideMenuMaterial extends Component {

  constructor(props) {
    super(props);
    this.state = {
			docked: true,
			style: {
				backgroundColor : "#222 !important"
			}
		};
  }

  handleToggle () {
		this.setState({open: !this.state.open});
	} 

  render() {
		
    return (
      <div >
        <Drawer docked={true} >
					<div className="side center">
						<Link to="/">
							<MenuItem className="menu-brand">Project Recipe</MenuItem>
						</Link>
						<ul>
							<li>
								<Link to="/recipes" activeStyle={{ color: "#4e4e4e" }} className="tooltipped" data-position="right" data-delay="50" data-tooltip="Recipes">
									<i className="material-icons small menu-item">restaurant</i>
								</Link>
							</li>
							
							<li>
								<Link to="/contact" activeStyle={{ color: "#4e4e4e" }} className="tooltipped" data-position="right" data-delay="50" data-tooltip="Contact">
									<i className="material-icons small menu-item">phone</i>
								</Link>
							</li>
							
						</ul>
			
					</div>
			
					<div className="side-menu-alt-text center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit nisl, mattis rhoncus neque ullamcorper, elementum dictum mi. Nunc tincidunt nisl quis risus condimentum, eu dignissim nibh suscipit.

					</div>

				</Drawer>
      </div>
    );
  }
}

export default SideMenuMaterial;