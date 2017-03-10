import React, { Component } from 'react';
class Amenities extends Component{
	handleClick(){
		alert(this.amenityTitle);
	}
	render(){
		return(
			<div className='amenities-section'>	
				<h2 className="amenities-section__title" ref={(el) => { this.amenityTitle = el; }} onClick={this.handleClick.bind(this)}>Amenities</h2>
		      {
		        this.props.amenities.map((amenity) => {
		          return (
				          	<div className="amenities-block" key={amenity.id}>
				          		<h2 className="amenities-block__title">{amenity.title}</h2>
				          		<ul className="amenities-block__list">
					          		{
					          			amenity.amenitiesList.map((line) => {
					          				return <li className='amenities-block__item' key={line.lineId}><input type="checkbox" name={line.linetitle} onClick = {this.props.checkAmenity.bind(this,line.linetitle)}/>{line.linetitle}</li>;
					          			})
					          				
					          		}
				          		</ul>
				         	</div>
		         		);
		        })
		      }
		    </div>
		);
	}
}

export default Amenities;