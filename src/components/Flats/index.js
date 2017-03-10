import React from 'react';
import { connect } from 'react-redux';
import Flats from './presenter';
import './flats.scss';
function mapStateToProps(state) {
  const checkedAmenity = state.checkedAmenity;
  const apartments = state.apartment.filter(apartment=>{
  	for (let i = 0; i<checkedAmenity.length; i++){
		if (apartment.apartmentAmenities.indexOf(checkedAmenity[i]) == -1){
			return false;
		}
	}
	return true;
  });

  return {
    apartments
  }
}
export default connect(mapStateToProps)(Flats);


