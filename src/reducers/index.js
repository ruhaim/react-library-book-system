import { ADD_BOOKS } from "../action-types/action-types.js";

const initialState = {
  books: [
    {
      bookID: 1,
      bookName: "FunFun",
      bookAuthor: "NoFun",
      bookYear: "2018",
      bookPrice: 230
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
