import {
  ADD_BOOK,
  MODIFY_BOOK,
  GET_BOOKS,
  SELECT_BOOK,
  SET_EDIT_MODE
} from "../action-types/action-types.js";

export const addBook = book => ({
  type: ADD_BOOK,
  payload: book
});

export const modifyBook = book => ({
  type: MODIFY_BOOK,
  payload: book
});

export const getBooks = books => ({
  type: GET_BOOKS,
  payload: books
});

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
