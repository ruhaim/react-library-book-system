import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import BookList from "./views/BookList";
import BookOperations from "./views/BookOperations";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>Library System React</h1>
    <div>
      <BookList />
      <BookOperations />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
