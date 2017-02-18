import React, {Component} from 'react';
import FoodCard from '../foodCard/foodCard.js';
import './selectedRecipes.css';




class SelectedRecipes extends Component {

	constructor(props) {
		super(props);
		
		this.state= {
			top: {
				title: "The best chicken ever",
				description: "Omg you cant believe this!",
				image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
			},
			recipes : [
				{
					title: "chicken with sesame oil",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
				{
					title: "chicken with truffle seeds",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
				{
					title: "chicken with chicken seeds",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
				{
					title: "chicken chicken chicken chicken",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
			]
		}
	}

	render() {
		
		const recipes = this.state.recipes.map(function(item, i){
			return(
				<div className="col s6" key={i}>
					<FoodCard title={item.title}/>
				</div>
			);
		});
		
		
    return (
      <div className="selected-recipe-wrapper">
				<div className="center heading">
					<h1>Your daily recipes</h1>
				</div>
				<div className="recipe-wrapper">
					<div className="row">
						<div className="col m6 s12">
							<FoodCard title={this.state.top.title}/>
						</div>
						<div className="col m6 s12">
							<div className="row">
								{recipes}
							</div>
						</div>
					</div>
				</div>
			
			</div>
    );

	}
}


export default SelectedRecipes;