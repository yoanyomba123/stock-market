const ADD_STOCK = 'ADD_STOCK';
const REMOVE_STOCK = 'REMOVE_STOCK';

const stockReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STOCK:
      return [
        ...state, {
          code: action.code,
          id: action.id
        }
      ]
    case REMOVE_STOCK:
      return state.filter(stock => stock.id !== action.id);
    default:
      return state;
  }
};

export default stockReducer;