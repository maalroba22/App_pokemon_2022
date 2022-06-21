import { GET_ALL_POKEMON, SEARCH_POKEMON } from '../accion/accion';
const initialState = {
  pokemon: [],
  buscar: '',
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON: {
      return {
        ...state,
        pokemon: action.payload,
      };
    }
    case SEARCH_POKEMON: {
      return {
        ...state,
        buscar: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
