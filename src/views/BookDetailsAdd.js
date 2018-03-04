import React from "react";
import { connect } from "react-redux";
import { setEditMode, modifyBook } from "../actions/index";

const mapStateToProps = state => {
  return {
    //book: state.selectedBook,
    isEditMode: state.isEditMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEditMode: b => dispatch(setEditMode(b)),
    modifyBook: book => dispatch(modifyBook(book))
  };
};

class ConnectedBookDetailsAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      booklist: []
    };
  }

  componentDidMount() {}
  onSaveClick(event) {
    event.preventDefault();

    this.props.setEditMode(true);
  }
  onFormSubmit(event) {
    event.preventDefault();

    this.props.setEditMode(true);
  }
  onCancelClick(event) {
    event.preventDefault();

    this.props.setEditMode(false);
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    const selectedBook = this.props.book;
    console.log("Editing", this.props);
    if (!selectedBook) {
      return <div>No Book Selected, Please Select a book</div>;
    }
    const { bookID, bookName, bookAuthor, bookPrice, bookYear } = selectedBook;

    return (
      <div>
        <h2>Edit Book ({bookID})</h2>
        <h3>
          {bookName} by {bookAuthor}
        </h3>
        <form className="form" onSubmit={event => this.onFormSubmit(event)}>
          <div className="form-inline">
            <label className="col" for="bookName">
              Book Name
            </label>
            <input
              className="form-control"
              type="text"
              id="bookName"
              defaultValue={bookName}
              required
            />
          </div>
          <div className="form-inline">
            <label className="col" for="bookAuthor">
              Book Author
            </label>
            <input
              className="form-control"
              type="text"
              id="bookAuthor"
              defaultValue={bookAuthor}
              required
            />
          </div>
          <div className="form-inline">
            <label className="col" for="bookYear">
              Book Year
            </label>
            <input
              className="form-control"
              type="text"
              id="bookYear"
              defaultValue={bookYear}
              required
            />
          </div>
          <div className="form-inline">
            <label className="col" for="bookPrice">
              Book Price
            </label>
            <input
              className="form-control"
              type="text"
              id="bookPrice"
              defaultValue={bookPrice}
              required
            />
          </div>

          <button className="btn btn-danger" type="submit">
            Save
          </button>
          <button
            className="btn btn-warning"
            onClick={event => this.onCancelClick(event)}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const BookDetailsAdd = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedBookDetailsAdd
);
export default BookDetailsAdd;
