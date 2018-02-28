import { ADD_ARTICLE } from "../action-types/action-types.js";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
