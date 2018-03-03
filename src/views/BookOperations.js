import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addBook } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addBook: book => dispatch(addBook(book))
  };
};

class BookOperations extends React.Component {
  constructor() {
    super();
  }

  onAddNewClick(event) {
    event.preventDefault();
    const title = "Ruuha";
    const id = uuidv1();
    this.props.addBook({ title, id });

    this.setState({ title: "" });
  }

  render() {
    return (
      <div>
        <button
          onClick={event => this.onAddNewClick(event)}
          className="btn btn-success"
        >
          Add New
        </button>
      </div>
    );
  }
}

const ConnectedBookOperations = connect(null, mapDispatchToProps)(
  BookOperations
);
export default ConnectedBookOperations;
