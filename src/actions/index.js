import {
  ADD_BOOK,
  MODIFY_BOOK,
  GET_BOOKS,
  SELECT_BOOK,
  SET_EDIT_MODE,
  SET_ADD_NEW_MODE
} from "../action-types/action-types.js";
import {
  getBookListService,
  editBookService,
  validateTokenService,
  deleteBookService,
  addBookService
} from "../services/api-services.js";
const uuidv4 = require("uuid/v4");
// export const addBook = book => ({
//   type: ADD_BOOK,
//   payload: book
// });

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

export const setAddNewMode = bool => ({
  type: SET_ADD_NEW_MODE,
  payload: bool
});
/**/
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
      .then(responseHandler)
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
    dispatch(modifyBookLoading());
    editBookService(book)
      .then(responseHandler)
      .then(data => {
        dispatch(modifyBookLoadComplete(data.result));
        dispatch(getBooks());
      })
      .catch(err => {
        dispatch(modifyBookLoadError(err));
      });
  };
}

const validateTokenLoading = () => ({
  type: "VALIDATE_TOKEN_LOADING"
});

const validateTokenLoadComplete = access_token => ({
  type: "VALIDATE_TOKEN_LOAD_COMPLETE",
  payload: access_token
});

const validateTokenLoadError = error => ({
  type: "VALIDATE_TOKEN_LOAD_ERROR",
  payload: error
});

export function validateToken(token) {
  return dispatch => {
    if (token.trim().length === 0) {
      return dispatch(validateTokenLoadError("Token ID can't be empty"));
    }

    dispatch(validateTokenLoading());
    validateTokenService(token)
      .then(responseHandler)
      .then(data => {
        dispatch(validateTokenLoadComplete(token));
      })
      .catch(err => {
        dispatch(validateTokenLoadError("Invalid access code"));
      });
  };
}

const responseHandler = resp => {
  if (!resp.ok) {
    console.log(resp.statusText);
    throw new Error(resp.statusText);
  }
  return resp.json();
};

const addBookLoading = () => ({
  type: "ADD_BOOK_LOADING"
});

const addBookLoadComplete = book => ({
  type: "ADD_BOOK_LOAD_COMPLETE",
  payload: book
});

const addBookLoadError = error => ({
  type: "ADD_BOOK_LOAD_ERROR",
  payload: error
});

const hideAddNewStatusNotification = () => ({
  type: "HIDE_ADD_NEW_STATUS_NOTIFICATION"
});

export function addBook(book) {
  return dispatch => {
    book.bookID = uuidv4();

    dispatch(addBookLoading());
    addBookService(book)
      .then(responseHandler)
      .then(data => {
        dispatch(addBookLoadComplete(book));
        dispatch(getBooks());
        setTimeout(() => {
          dispatch(hideAddNewStatusNotification());
        }, 2000);
      })
      .catch(err => {
        dispatch(addBookLoadError("Invalid Request"));
      });
  };
}
