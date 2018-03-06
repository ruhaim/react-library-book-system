import React from "react";

import BookList from "./BookList";
import BookOperations from "./BookOperations";
import BookDetails from "./BookDetails";
import AccessToken from "./AccessToken";
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
        <AccessToken />
        <h1>Library System React</h1>
        <div className="row">
          <div className="col-6">
            <BookOperations />
            <BookList />
          </div>
          <BookDetails className="col-6" />
        </div>
      </div>
    );
  }
}
