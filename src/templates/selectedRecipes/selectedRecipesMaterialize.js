import React, {Component} from 'react';
import FoodCard from '../foodCard/foodCard.js';
import {GridList, GridTile} from 'material-ui/GridList';
import './selectedRecipes.css';




class SelectedRecipes extends Component {

	constructor(props) {
		super(props);
		
		this.state= {
			top: {
				
			},
			recipes : [
				{
					title: "The best chicken ever",
					description: "Omg you cant believe this!",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg",
					featured: true,
				},
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
				<GridTile
					key={i}
					title={item.title}
					cols={item.featured ? 3:1}
					rows={item.featured ? 2:1}
				>
					<FoodCard />
				</GridTile>
			);
		});
		
		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
			},
			gridList: {
				
				overflowY: 'auto',
			},
		};
		
		
    return (
      <div className="selected-recipe-wrapper">
				<div className="center heading">
					<h1>Recommended recipes</h1>
				</div>
				
				<div>
					<GridList 
						cols={3}
						cellHeight={250}
						padding={12}
						style={styles.gridList}
					>
						{recipes}
					</GridList>
				</div>
			
			</div>
    );

	}
}

/*
<div className="col s6" key={i}>
					<FoodCard title={item.title}/>
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
				</div>*/


export default SelectedRecipes;