import {
  ADD_BOOK,
  MODIFY_BOOK,
  GET_BOOKS,
  GET_BOOK,
  SELECT_BOOK
} from "../action-types/action-types.js";

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
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case SELECT_BOOK:
      console.log("select book", action.payload)
      return { ...state, selectedBook: action.payload };
    case GET_BOOKS:
      return { ...state, books: action.payload };
    case MODIFY_BOOK:
      return { ...state };
    default:
      return state;
  }
};

const addBookReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
