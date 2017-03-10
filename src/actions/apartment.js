import * as actionTypes from '../constants/actionTypes';
 
export function setApartments(apartments) {
  return {
    type: actionTypes.SET_APARTMENTS,
    apartments
  };
};