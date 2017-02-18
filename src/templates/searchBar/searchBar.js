import React, {Component} from 'react';
import {Input, Icon, Dropdown, NavItem} from 'react-materialize';
import './searchBar.css';



class SearchBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		
    return (
      <div className="search-bar-wrapper">
				<form className="col s12">
					<div className="row">
						<Input className="input-field" s={6} label="Search..." >
							<Icon>search</Icon>
						</Input>
						
						<Dropdown className="filter-wrapper" trigger={
								<Input className="" s={6} label="Filter"/>
							}>
							<NavItem>one</NavItem>
							<NavItem>two</NavItem>
							<NavItem>three</NavItem>
						</Dropdown>
					</div>
				</form>
			</div>
    );

	}
}


export default SearchBar;

/*
<div className="input-field col s6">
<i className="material-icons prefix">search</i>
							<input id="search-area" className="novalidate"/>
							</div>*/