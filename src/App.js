import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodCard from './templates/foodCard/foodCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
				<FoodCard />
      
      </div>
    );
  }
}

export default App;
