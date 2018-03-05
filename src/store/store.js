import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

const initialState = {
  books: [
    {
      bookID: 1,
      bookName: "FunFun",
      bookAuthor: "NoFun",
      bookYear: "2018",
      bookPrice: 230
    }
  ]
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
export default store;
