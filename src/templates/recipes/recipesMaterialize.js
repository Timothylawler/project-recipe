import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router';
import SearchBar from '../searchBar/searchBar.js';
import './recipes.css';



class Recipes extends Component {

	constructor(props) {
		super(props);
		
		this.state= {
			top: {
				
			},
			recipes : [
				{
					id: "123",
					title: "The best chicken ever",
					description: "Omg you cant believe this!",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg",
					
				},
				{
					id: "321",
					title: "chicken with sesame oil",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
				{
					id: "432",
					title: "chicken with truffle seeds",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
				{
					id: "534",
					title: "chicken with chicken seeds",
					description: "very tasty indeed",
					image: "http://i.huffpost.com/gen/997773/images/o-BEAUTIFUL-FOOD-facebook.jpg"
				},
				{
					id: "121",
					title: "chicken chicken chicken chicken",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},{
					id: "12",
					title: "chicken chicken chicken chicken",
					description: "very tasty indeed",
					image: "http://static.fjcdn.com/pictures/Beautiful_e3a5c7_5469517.jpg"
				},{
					id: "11",
					title: "chicken chicken chicken chicken",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},{
					id: "21",
					title: "chicken chicken chicken chicken",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},{
					id: "131",
					title: "chicken chicken chicken chicken",
					description: "very tasty indeed",
					image: "https://iso.500px.com/wp-content/uploads/2015/12/food_cover-1500x1000.jpg"
				},
			]
		}
	}

	render() {
		
		const recipes = this.state.recipes.map(function(item, i){
			
			const style = {
				width: "auto",
				height: "100%",
				
			}
			
			return(
				<GridTile
					key={item.id}
					title={item.title}
					cols={1}
					rows={1}
				>
				
					<Link to="/recipe"><img src={item.image} style={style}  alt={item.description}/></Link>
				
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
		}
		
		
    return (
      <div className="margin-top-48">
				<SearchBar />
			
				<div>
					<GridList 
						cols={4}
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


export default Recipes;