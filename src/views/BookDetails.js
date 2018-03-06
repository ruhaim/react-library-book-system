import React from "react";
import { connect } from "react-redux";
import BookDetailsEdit from "./BookDetailsEdit";
import { setEditMode, addBook } from "../actions/index";

const mapStateToProps = state => {
  return {
    book: state.selectedBook,
    isEditMode: state.isEditMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEditMode: b => dispatch(setEditMode(b))
  };
};

class ConnectedBookDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      booklist: []
    };
  }

  componentDidMount() {}
  onEditClick(event) {
    event.preventDefault();

    this.props.setEditMode(true);
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    const selectedBook = this.props.book;
    if (!selectedBook) {
      return (
        <div className="card">
          <div className="card-header">
            No Book Selected, Please Select a book
          </div>
        </div>
      );
    }
    const { bookID, bookName, bookAuthor, bookPrice, bookYear } = selectedBook;

    if (this.props.isEditMode) {
      return <BookDetailsEdit book={selectedBook} />;
    }

    return (
      <div className="card">
        <div className="card-header">Book Details ({bookID})</div>
        <div className="card-block">
          <h4 className="card-title">
            {bookName} by {bookAuthor}
          </h4>
          <div className="card-text">Year : {bookYear} </div>
          <div className="card-text">Price : {bookPrice} </div>
          <button
            className="btn btn-primary"
            onClick={event => this.onEditClick(event)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

const BookDetails = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedBookDetails
);
export default BookDetails;
