import React from "react";

import BookList from "./BookList";
import BookOperations from "./BookOperations";
import { getBookList } from "../services/api-services";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles}>
        <h1>Library System React</h1>
        <div>
          <BookList />
          <BookOperations />
        </div>
      </div>
    );
  }
}
