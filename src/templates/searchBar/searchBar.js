import React, {Component} from 'react';
import './searchBar.css';



class SearchBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		
    return (
      <div className="">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<i className="material-icons prefix">search</i>
							<input id="search-area" className="novalidate"/>
						</div>
					</div>
				</form>
			</div>
    );

	}
}


export default SearchBar;