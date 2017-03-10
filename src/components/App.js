import React, { Component } from 'react';
import Amenities from './Amenities/';
import Flats from './Flats/';
import './app.scss';
class App extends Component{
	render(){
		return(
			<div className='wrapper'>
				<div className="header">
					<div className='logo header__logo'></div>
					<a className='button header__button'>List your property</a>
				</div>
				<div className='main'>
					<Amenities/>
					<Flats/>
				</div>
			</div>
		);
	}
}

export default App;