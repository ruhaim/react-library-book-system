import { ADD_ARTICLE } from "../action-types/action-types.js";

const initialState = {
  books: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
