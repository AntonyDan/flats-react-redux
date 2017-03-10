import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CHECKED_AMENITIES:
      return checkAmenity(state, action);
  }
  return state;
}

function checkAmenity(state, action) {
  const { checkedAmenity } = action;
  for(let i = 0; i < state.length; i++ ){
  	if(state[i] == checkedAmenity){
  		let newState = state.filter(function(amenit) {
	        return amenit !== checkedAmenity;
	      });
  		return [...newState];
  	}
  }
  return [ ...state, checkedAmenity ];
}