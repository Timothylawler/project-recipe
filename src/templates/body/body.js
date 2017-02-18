import React, { Component } from 'react';
import './body.css';
import FoodCard from '../foodCard/foodCard.js';
import SearchBar from '../searchBar/searchBar.js';

class BodyContent extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			data: [
				{title: "Kyckling"},
				{title: "Bacon"},
				{title: "Tonfisk"},
				{title: "Grislever"},
				{title: "Ostburgare"},
				{title: "kyckling"},
				{title: "kyckling"},
				{title: "kyckling"},
				{title: "kyckling"},
			]
		}
	}
	
  render() {
		
		const cards = this.state.data.map(function(item, i){
			return (
				<div className="col s6 m4">
					<FoodCard title={item.title} key={i}/>
				</div>
			);
		});
		
		
    return (
      <div className="body-content row">
				<div className="col s12">
					<SearchBar />
				</div>
			
				{cards}
        
      </div>
    );
  }
}

export default BodyContent;
