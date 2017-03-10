import { combineReducers } from 'redux';
import amenity from './amenity';
import checkedAmenity from './checkedAmenity';
import apartment from './apartment';
export default combineReducers({
  amenity,
  checkedAmenity,
  apartment
});