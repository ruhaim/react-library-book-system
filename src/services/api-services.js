//const BASE_URL = "https://n065jpr61p.codesandbox.io/";
const BASE_URL = "https://sheltered-gorge-85466.herokuapp.com/api";

export const getBookListService = () => {
  return fetch(BASE_URL + "/get_books");
};

export const addBookService = book => {
  return fetch(BASE_URL + "/add_book", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ book })
  });
};

export const editBookService = book => {
  return fetch(BASE_URL + "/edit_book", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ book })
  });
};

export const deleteBookService = bookID => {
  return fetch(BASE_URL + "/delete_book", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ bookID })
  });
};
