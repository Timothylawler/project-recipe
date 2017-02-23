import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';

class ProfilePage extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			user: {
				id: "1",
				userName: "user-name",
				fullName: "full-name",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nunc lorem. Nulla dignissim ante in sollicitudin aliquam. Curabitur finibus ipsum ac ante sodales mattis. Praesent tortor est, condimentum porttitor justo ac, tempor faucibus ex. Duis semper ornare elit ac pharetra. Integer pretium dolor in erat interdum luctus. Etiam porttitor vulputate eleifend.",
				profileImage: "https://opennebula.org/wp-content/uploads/2017/01/placeholder.jpg"
				
			}
		}
		
		this.leftInformation = this.leftInformation.bind(this);
	}
	
	leftInformation(){
		return(
			<Card>
				<CardHeader
					title={this.state.user.userName}
					subtitle={this.state.user.fullName}
					avatar={this.state.user.profileImage}
				/>
				<CardText>
					{this.state.user.description}
				</CardText>
			</Card>
		);
	}
	
	groceryList(){
		return(
			<Card>
				<CardHeader
					title="Grocery list"
				/>
				<CardText>
					<List>
						<ListItem
							leftCheckbox={<Checkbox />}
							primaryText="Chicken"
							secondaryText="4 breasts"
							rightIcon={<Delete />}
						/>
						<ListItem
							leftCheckbox={<Checkbox />}
							primaryText="More Chicken"
							secondaryText="4 breasts"
							rightIcon={<Delete />}
						/>
						<ListItem
							leftCheckbox={<Checkbox />}
							primaryText="Chicken is never wrong"
							secondaryText="4 breasts"
							rightIcon={<Delete />}
						/>
						<ListItem
							leftCheckbox={<Checkbox />}
							primaryText="Chicken... why not?"
							secondaryText="4 breasts"
							rightIcon={<Delete />}
						/>
					</List>
				</CardText>
			</Card>
		);
	}
	
	render() {
		
    return (
      <div className="margin-top-48">
				PROFILE
			
				<div className="row">
					<div className="col m3">
						{this.leftInformation()}
					</div>
					
					<div className="col m9">
						{this.groceryList()}
					</div>
				</div>
			</div>
    );

	}
}


export default ProfilePage;