import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { browserHistory } from 'react-router';
import './bottomMenu.css';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const recipesIcon = <FontIcon className="material-icons">restaurant</FontIcon>;


class BottomMenu extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedIndex : 0
		}
	}

	select(index){
		this.setState({selectedIndex : index});
		switch(index){
			case 0:
				browserHistory.push('/');
				break;
			case 1:
				browserHistory.push('/recipes');
				break;
		}
	}
	
	render() {
		let self = this;
    return (
      <Paper className="bottom-menu" zDepth={1}>
				<BottomNavigation selectedIndex={this.state.selectedIndex}>
					<BottomNavigationItem
						label="Start"
						icon = {homeIcon}
						onTouchTap={function(){
							self.select(0);
						}}
					/>
					<BottomNavigationItem
						label="Recipes"
						icon = {recipesIcon}
						onTouchTap={function(){
							self.select(1);
						}}
					/>
					<BottomNavigationItem
						label="Something else"
						icon = {homeIcon}
						onTouchTap={function(){
							self.select(2);
						}}
					/>
			
				</BottomNavigation>
			
			</Paper>
    );

	}
}


export default BottomMenu;