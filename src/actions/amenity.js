import * as actionTypes from '../constants/actionTypes';
 
export function setAmenities(amenities) {
  return {
    type: actionTypes.SET_AMENITIES,
    amenities
  };
};
export function checkAmenity(checkedAmenity) {
  return {
    type: actionTypes.ADD_TO_CHECKED_AMENITIES,
    checkedAmenity
  };
};