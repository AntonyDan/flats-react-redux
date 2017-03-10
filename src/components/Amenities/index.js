import React from 'react';
import { connect } from 'react-redux';
import Amenities from './presenter';
import {checkAmenity} from '../../actions/index';
import './amenities.scss';	
function mapStateToProps(state) {
  const amenities = state.amenity;
  return {
    amenities
  }
}
function mapDispatchToProps(dispatch){
    return {
        checkAmenity: (checkedAmenity) => {
            dispatch(checkAmenity(checkedAmenity));
        }
    }
}; 
export default connect(mapStateToProps, mapDispatchToProps)(Amenities);


