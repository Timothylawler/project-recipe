import React, { Component } from 'react';
import './foodCard.css';


class FoodCard extends Component {

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
		this.hover = this.hover.bind(this);
		this.notHover = this.notHover.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
	}
	
	hover(){
		this.setState({hover:true});
	}
	
	notHover(){
		this.setState({hover:false});
	}
	
	onMouseOver(){
		return(
			<div className="food-card-on-hover-wrapper">
			
				<div className="">
					<h3>{this.state.item.title}</h3>
				</div>
			
				<div className="chips-wrapper">
					<div className="chip">
						<i className="tiny material-icons">close</i>
							{this.state.item.nutrition.kcal}
					</div>
					<div className="chip">
							<i className="tiny material-icons">close</i>
							{this.state.item.nutrition.carbs}
					</div>
					<div className="chip">
						<i className="tiny material-icons">close</i>
							{this.state.item.nutrition.protein}

					</div>
					<div className="chip">
						<i className="tiny material-icons">close</i>
							{this.state.item.nutrition.fat}
					</div>
				</div>
			</div>
		);
	}
	

	
	
  render() {
		var imgSrc = "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg";
		var classname = "food-card-image z-depth-3 responsive-img";
		
		return(
			<div className="row">
				<div 
					className="col s4 offset-s4 food-card food-card"
					onMouseOver={this.hover} 
					onMouseLeave={this.notHover} >
					<img 
						className={classname}
						role="food" 
						
						width="auto" 
						height="auto" 
						src={imgSrc}
					/>
					{
						this.state.hover &&
						this.onMouseOver()
						
					}
					
				</div>
			</div>
		);
    
  }
}

export default FoodCard;
