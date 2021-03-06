import {
  ADD_BOOK,
  MODIFY_BOOK,
  GET_BOOKS,
  GET_BOOK,
  SELECT_BOOK,
  SET_EDIT_MODE,
  SET_ADD_NEW_MODE
} from "../action-types/action-types.js";

const initialState = {
  getBooksStatus: { isLoading: false },
  modifyBookStatus: { isLoading: false }
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
    /**/
    case "VALIDATE_TOKEN_LOAD_COMPLETE":
      return {
        ...state,
        access_token: action.payload,
        validateTokenStatus: { isLoading: false }
      };
    case "VALIDATE_TOKEN_LOADING":
      return { ...state, validateTokenStatus: { isLoading: true } };
    case "VALIDATE_TOKEN_LOAD_ERROR":
      return {
        ...state,
        validateTokenStatus: { isLoading: false, error: action.payload }
      };
    /**/
    case "MODIFY_BOOK_LOAD_COMPLETE":
      return {
        ...state,
        modifyBookStatus: { isLoading: false, status: "Book sucessfully saved" }
      };
    case "MODIFY_BOOK_LOADING":
      return { ...state, modifyBookStatus: { isLoading: true } };
    case "MODIFY_BOOK_LOAD_ERROR":
      return {
        ...state,
        modifyBookStatus: { isLoading: false, error: action.payload }
      };
    /**/
    /**/
    case "ADD_BOOK_LOAD_COMPLETE":
      return {
        ...state,
        addBookStatus: {
          isLoading: false,
          status: "Book sucessfully saved",
          book: { bookID: "", bookName: "", bookAuthor: "", bookPrice: "" }
        }
      };
    case "HIDE_ADD_NEW_STATUS_NOTIFICATION":
      let addBookStatus = { ...addBookStatus };
      addBookStatus.status = null;
      return {
        ...state,
        addBookStatus: {
          ...addBookStatus
        }
      };
    case "ADD_BOOK_LOADING":
      return { ...state, addBookStatus: { isLoading: true } };
    case "ADD_BOOK_LOAD_ERROR":
      return {
        ...state,
        addBookStatus: { isLoading: false, error: action.payload }
      };
    /**/
    case MODIFY_BOOK:
      return { ...state, selectedBook: action.payload };
    case SET_EDIT_MODE:
      return { ...state, isEditMode: action.payload };
    case SET_ADD_NEW_MODE:
      return { ...state, isAddNewMode: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
