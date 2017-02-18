import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import BodyContent from './templates/body/body.js';
import Contact from './templates/contact/contact.js';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="home" component={BodyContent}/>
			<Route path="contact" component={Contact}/>
			<Route path="*" component={BodyContent}/>
		</Route>
	</Router>
  ,
  document.getElementById('root')
);
