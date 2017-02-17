import React, { Component } from 'react';
import './body.css';
import FoodCard from '../foodCard/foodCard.js';

class BodyContent extends Component {
  render() {
    return (
      <div className="body-content">
        
				<FoodCard />
      
      </div>
    );
  }
}

export default BodyContent;
