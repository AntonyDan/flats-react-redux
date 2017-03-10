import * as actionTypes from '../constants/actionTypes';

const apartments = [
  {
    name: "Stylish apartment in el born",
    coin: 85,
    coords: ['41.393592', '2.162570'],
    apartmentAmenities: ['Guarded parking', 'Balcony', 'Dishwasher', 'Freezer']
  },
  {
    name: "A cozy flat near Las Ramblas",
    coin: 70,
    coords: ['41.394195', '2.164844'],
    apartmentAmenities: ['Free wireless internet', 'Fireplace']
  },
  {
    name: "Apartment in the classic Barcelona center",
    coin: 60,
    coords: ['41.393732', '2.165551'],
    apartmentAmenities: ['Air conditioner', 'Elevator', 'Terrace', 'Blender', 'Fridge']
  },
  {
    name: "Classic Eixample place for rent",
    coin: 75,
    coords: ['41.392794', '2.164888'],
    apartmentAmenities: ['Free Transportation', 'Guarded parking', 'Game room']
  },
  {
    name: "Atlantida Beach",
    coin: 90,
    coords: ['41.392876', '2.163260'],
    apartmentAmenities: ['Cooking hob']
  },
  {
    name: "Elegant place in Eixample",
    coin: 150,
    coords: ['41.394479', '2.163797'],
    apartmentAmenities: ['Air conditioner', 'Computerr', 'Free wireless internet', 'Game room', 'Terrace', 'Fridge']
  }
];
export default function(state = apartments, action) {
  switch (action.type) {
    case actionTypes.SET_APARTMENTS:
      return setApartments(state, action);
  }
  return state;
}
 
function setApartments(state, action) {
  const { apartments } = action;
  return [ ...state, ...apartments ];
}