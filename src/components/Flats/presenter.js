import React, { Component } from 'react';
class Flats extends Component{
	render(){
		return(
			<div className='flats'>	
		      <ul>
			      {
			      	this.props.apartments.map((apartment) => {
			          return (
					          	<li className="apartments" key={apartment.name.toString()}>
					          		{apartment.name}
					         	</li>
			         		);
			        })
			      }
		      </ul>
		    </div>
		);
	}
}

export default Flats;