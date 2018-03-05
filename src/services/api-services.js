//const BASE_URL = "https://n065jpr61p.codesandbox.io/";
const BASE_URL = "https://sheltered-gorge-85466.herokuapp.com/api/";

export const getBookList = () => {
  return fetch(BASE_URL + "/get_books");
};


export const addBook = () => {
  return fetch(BASE_URL + "/add_book");
};


export const editBook = () => {
  return fetch(BASE_URL + "/edit_book");
};



export const deleteBook = () => {
  return fetch(BASE_URL + "/delete_book");
};
