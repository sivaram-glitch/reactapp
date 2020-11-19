import { ADD_TODO_ASYNC, REMOVE_TODO } from "../action/action-types";


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ASYNC:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
  

    default:
      return state;
  }
};
