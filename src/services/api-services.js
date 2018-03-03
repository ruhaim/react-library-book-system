const BASE_URL = "https://n065jpr61p.codesandbox.io/";

export const getBookList = () => {
  return fetch(BASE_URL + "/data/booklist.json");
};
