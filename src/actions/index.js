import {
  ADD_BOOK,
  MODIFY_BOOK,
  GET_BOOKS,
  SELECT_BOOK,
  SET_EDIT_MODE
} from "../action-types/action-types.js";
import {
  getBookListService,
  editBookService,
  deleteBookService,
  addBookService
} from "../services/api-services.js";

export const addBook = book => ({
  type: ADD_BOOK,
  payload: book
});

// export const modifyBook = book => ({
//   type: MODIFY_BOOK,
//   payload: book
// });

// export const getBooks = books => ({
//   type: GET_BOOKS,
//   payload: books
// });

export const getBook = bookID => ({
  type: GET_BOOKS,
  payload: bookID
});

export const selectBook = book => ({
  type: SELECT_BOOK,
  payload: book
});

export const setEditMode = bool => ({
  type: SET_EDIT_MODE,
  payload: bool
});

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      console.log("setting in thunk" + Math.random());
      dispatch(setEditMode(true));
    }, 1000);
  };
}

export const setGetBooksLoading = () => ({
  type: "GET_BOOKS_LOADING"
});

export const setGetBooksLoadComplete = books => ({
  type: "GET_BOOKS_LOAD_COMPLETE",
  payload: books
});

export const setGetBooksLoadError = error => ({
  type: "GET_BOOKS_LOAD_ERROR",
  payload: error
});

export function getBooks() {
  return dispatch => {
    dispatch(setGetBooksLoading);
    getBookListService()
      .then(resp => resp.json())
      .then(data => {
        dispatch(setGetBooksLoadComplete(data.result));
      })
      .catch(err => {
        dispatch(setGetBooksLoadError(err));
      });
  };
}
const modifyBookLoading = () => ({
  type: "MODIFY_BOOK_LOADING"
});

const modifyBookLoadComplete = books => ({
  type: "MODIFY_BOOK_LOAD_COMPLETE",
  payload: books
});

const modifyBookLoadError = error => ({
  type: "MODIFY_BOOK_LOAD_ERROR",
  payload: error
});
export function modifyBook(book) {
  return dispatch => {
    if (!book.bookID) {
      return dispatch(modifyBookLoadError("Invalid Request"));
    }
    dispatch(modifyBookLoading);
    editBookService(book)
      .then(resp => resp.json())
      .then(data => {
        dispatch(modifyBookLoadComplete(data.result));
      })
      .catch(err => {
        dispatch(modifyBookLoadError(err));
      });
  };
}
