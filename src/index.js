import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Recipes from './templates/recipes/recipes.js';
import Contact from './templates/contact/contact.js';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="home" component={Recipes}/>
			<Route path="contact" component={Contact}/>
			<Route path="*" component={Recipes}/>
		</Route>
	</Router>
  ,
  document.getElementById('root')
);
