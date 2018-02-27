import React from "react";

export default class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      bookList: ["soemd", "dfsf", "dsdf"]
    };
  }

  render() {
    const renderedBooks = this.state.bookList.map(book => (
      <div>
        <span className="col-sm-4"> {book}</span>
        <button className="btn btn-success">Details</button>
        <button className="btn btn-info">Edit</button>
        <button className="btn btn-warning">Delete</button>
      </div>
    ));
    return <div>{renderedBooks}</div>;
  }
}
