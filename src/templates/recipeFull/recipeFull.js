import React, { Component } from 'react';
import {Slider, Slide, Collapsible, CollapsibleItem, Button} from 'react-materialize';
import './recipeFull.css';

class RecipeFull extends Component {
	
	constructor(props){
		super(props);
		this.state= {
			recipe: {
				title: "Flabbergasted chicken",
				description: "Chicken starteled by beauty, HOT HOT HOT!",
				images: [
					"https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg",
					"https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg",
					"https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				],
				cookingTime: "1hr 30 min",
				ingredients: [
					"2 breasts of chicken",
					"1 tbsp table salt"
				],
				instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris libero, porta in massa eget, tempor malesuada ante. Proin venenatis dui ex, ultricies rhoncus sem lacinia eu. Cras sed congue lorem. Nulla porta est ac ante sagittis vehicula. Aenean eu tempor ipsum, eu congue mauris. Quisque ac luctus tellus, vel ultrices ligula. Sed non tortor quis nunc sodales auctor. Nam sed auctor ex. Vestibulum pretium diam non sapien sagittis euismod. Nunc mollis sapien sit amet ipsum hendrerit, ut interdum lorem ultricies. Pellentesque risus diam, dictum quis luctus faucibus, pretium sit amet massa. Suspendisse pretium ipsum vel rutrum luctus. Donec varius nisi risus, ut luctus dui condimentum a. Pellentesque sed lobortis risus, sed blandit nisi. Duis vestibulum aliquam convallis. Morbi pharetra at erat quis finibus.Cras ac massa sed nisi hendrerit iaculis non nec erat. Ut eu diam in dui blandit fermentum. Curabitur accumsan aliquam arcu, eget sagittis nisi mollis ac. Sed quis dui quis ipsum facilisis semper a vitae nisi. Ut justo nisl, accumsan et tortor in, consequat fringilla ante. Sed dictum velit vitae libero facilisis, quis porttitor turpis porta. Morbi augue lectus, vestibulum in luctus eu, mattis sed ligula."
			}
		}
	}
	

	
  render() {
		let self = this;
		const ingredients = this.state.recipe.ingredients.map(function(item, i){
			return(
				<li key={i}>{item}</li>
			);
		});
		const sliderImages = this.state.recipe.images.map(function(item, i){
			return(
				<Slide key={"slider" + i}
					src={item}
					title={self.state.recipe.title}>
				</Slide>
				
			);
		});
		
    return (
      <div className="recipe-full-wrapper">
				<div className="slider">
					<Slider >
						{sliderImages}
						<Button floating large className="red add-recipe-fab tooltipped" data-position="top" data-delay="50" data-tooltip="Add to my recipes" waves="light" icon="playlist_add" />
					</Slider>
				</div>
				<div className="description-wrapper">
					{this.state.recipe.description}
				</div>
				<Collapsible popout>
					<CollapsibleItem header="Ingredients" expanded={true} >
						<ul>
							{ingredients}
						</ul>
					</CollapsibleItem>
					<CollapsibleItem header="Instructions" expanded={true}>
						Total time: {this.state.recipe.cookingTime}.
						<br></br>
						<br></br>
						{this.state.recipe.instructions}
					</CollapsibleItem>
				</Collapsible>
        
				
				
      </div>
    );
  }
}

export default RecipeFull;
