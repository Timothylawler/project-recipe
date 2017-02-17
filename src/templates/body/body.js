import React, { Component } from 'react';
import './body.css';
import FoodCard from '../foodCard/foodCard.js';
import SearchBar from '../searchBar/searchBar.js';

class BodyContent extends Component {
  render() {
    return (
      <div className="body-content row">
				<div className="col s12">
					<SearchBar />
				</div>
        <div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
        <div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
        <div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
				<div className="col s6 m4">
					<FoodCard />
				</div>
      </div>
    );
  }
}

export default BodyContent;
