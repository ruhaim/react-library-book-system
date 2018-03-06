import {
  ADD_BOOK,
  MODIFY_BOOK,
  GET_BOOKS,
  GET_BOOK,
  SELECT_BOOK,
  SET_EDIT_MODE
} from "../action-types/action-types.js";

const initialState = {
  getBooksStatus: { isLoading: false }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case SELECT_BOOK:
      console.log("select book", action.payload);
      return { ...state, selectedBook: action.payload };
    case "GET_BOOKS_LOAD_COMPLETE":
      return {
        ...state,
        books: [...action.payload],
        getBooksStatus: { isLoading: false }
      };
    case "GET_BOOKS_LOADING":
      return { ...state, getBooksStatus: { isLoading: true } };
    case "GET_BOOKS_LOAD_ERROR":
      return {
        ...state,
        getBooksStatus: { isLoading: false, error: action.payload }
      };
    case MODIFY_BOOK:
      return { ...state, selectedBook: action.payload };
    case SET_EDIT_MODE:
      return { ...state, isEditMode: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
