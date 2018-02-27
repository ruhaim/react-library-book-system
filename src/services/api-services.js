const BASE_URL = "https://10mlyvv43l.codesandbox.io";

export const getBookList = () => {
  return fetch(BASE_URL + "/data/booklist.json");
};
