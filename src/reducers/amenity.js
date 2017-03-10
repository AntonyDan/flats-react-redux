import * as actionTypes from '../constants/actionTypes';

const amenities = [
      {
        title: 'Popular',
        id: 1,
        amenitiesList : [
          {linetitle :'Air conditioner', lineId: 100},
          {linetitle :'Free Transportation', lineId: 101},
          {linetitle :'Hair dryer', lineId: 102},
          {linetitle :'Wireless internet', lineId: 103},
          {linetitle :'Computer', lineId: 104},
          {linetitle :'Free wireless internet', lineId: 105},
          {linetitle :'Washing machine', lineId: 106},
          {linetitle :'Elevator', lineId: 107},
          {linetitle :'Guarded parking', lineId: 108},
          {linetitle :'Vacuum cleaner', lineId: 109},
          {linetitle :'TV', lineId: 110}
        ]
      },
      {
        title: 'Apartment',
        id: 2,
        amenitiesList: [
          {linetitle :'Balcony', lineId: 200},
          {linetitle :'Game room', lineId: 201},
          {linetitle :'Fireplace', lineId: 202},
          {linetitle :'Terrace', lineId: 203},
          {linetitle :'Floor heating', lineId: 204}
        ]
      },
      {
        title: 'Kitchen',
        id: 3,
        amenitiesList: [
          {linetitle :'Blender', lineId: 300},
          {linetitle :'Dishwasher', lineId: 301},
          {linetitle :'Coffe maker', lineId: 302},
          {linetitle :'Freezer', lineId: 303},
          {linetitle :'Cooking hob', lineId: 304},
          {linetitle :'Fridge', lineId: 305}
        ]
      }
];
export default function(state = amenities, action) {
  switch (action.type) {
    case actionTypes.SET_AMENITIES:
      return setAmenities(state, action);
  }
  return state;
}
 
function setAmenities(state, action) {
  const { amenities } = action;
  return [ ...state, ...amenities ];
}