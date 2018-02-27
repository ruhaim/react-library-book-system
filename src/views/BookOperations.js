import React from "react";

export default class BookOperations extends React.Component {
  constructor() {
    super();
    this.state = {
      bookList: ["soemd", "dfsf", "dsdf"]
    };
  }

  render() {
    return (
      <div>
        <button className="btn btn-success">Add New</button>
      </div>
    );
  }
}
