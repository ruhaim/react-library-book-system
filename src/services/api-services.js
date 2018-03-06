import store from "../store/store";
//const BASE_URL = "https://n065jpr61p.codesandbox.io/";
const BASE_URL = "https://sheltered-gorge-85466.herokuapp.com";
const API_BASE = BASE_URL + "/api";

export const getBookListService = () => {
  return fetch(BASE_URL + "/get_books");
};

export const addBookService = book => {
  return fetch(API_BASE + "/add_book", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      access_token: store.getState().JWT_TOKEN
    },
    body: JSON.stringify({ book })
  });
};

export const editBookService = book => {
  return fetch(API_BASE + "/edit_book", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      access_token: store.getState().JWT_TOKEN
    },
    body: JSON.stringify({ book })
  });
};

export const deleteBookService = bookID => {
  return fetch(API_BASE + "/delete_book", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      access_token: store.getState().JWT_TOKEN
    },
    body: JSON.stringify({ bookID })
  });
};

export const validateTokenService = token => {
  return fetch(BASE_URL + "/auth/validate_access_token", {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      access_token: token
    }
  });
};
