import React from "react";
import { connect } from "react-redux";
import {
  setEditMode,
  modifyBook,
  setAddNewMode,
  addBook
} from "../actions/index";

const mapStateToProps = state => {
  return {
    //book: state.selectedBook,
    addBookStatus: state.addBookStatus,
    isAddNewMode: state.isAddNewMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAddNewMode: b => dispatch(setAddNewMode(b)),
    addBook: book => dispatch(addBook(book))
  };
};

class ConnectedBookDetailsAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      book: { bookID: "", bookName: "", bookAuthor: "", bookPrice: "" }
    };
  }

  componentWillReceiveProps(nextProps) {
    let newState = { isAddNewMode: nextProps.isAddNewMode };

    if (nextProps.addBookStatus) {
      newState = { ...newState, ...nextProps.addBookStatus };
    }
    this.setState({ ...newState });
  }
  onValueChange(event, paramName) {
    let newVal = String(event.target.value).trim();
    if (newVal == "") {
      this.setState({ hasError: true });
      return;
    }

    const book = { ...this.state.book, [paramName]: newVal };
    this.setState({ book });
    this.setState({ hasError: false });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addBook(this.state.book);
  }
  onCancelClick(event) {
    event.preventDefault();

    this.props.setAddNewMode(false);
  }
  onValueChange(event, paramName) {
    let newVal = String(event.target.value).trim();
    if (newVal == "") {
      this.setState({ hasError: true });
      return;
    }

    const book = { ...this.state.book, [paramName]: newVal };
    this.setState({ book });
    this.setState({ hasError: false });
  }
  render() {
    let loadingMsg, errorMsg;
    if (this.state.isLoading) {
      loadingMsg = <div className="alert alert-warning">Loading...</div>;
    }
    if (this.state.error) {
      errorMsg = <div className="alert alert-danger">{this.state.error}</div>;
    }
    if (this.state.status) {
      errorMsg = <div className="alert alert-success">{this.state.status}</div>;
    }
    const selectedBook = this.state.book;
    if (!selectedBook) {
      return <div>No Book Selected, Please Select a book</div>;
    }
    const { bookID, bookName, bookAuthor, bookPrice, bookYear } = selectedBook;

    return (
      <div className="card">
        <div className="card-header">Add new book</div>
        <div className="card-block">
          {loadingMsg}
          {errorMsg}
          <form
            key={bookID}
            className="form"
            onSubmit={event => this.onFormSubmit(event)}
          >
            <div className="form-inline">
              <label className="col" for="bookName">
                Book Name
              </label>
              <input
                className="form-control"
                type="text"
                id="bookName"
                defaultValue={bookName}
                onChange={event => this.onValueChange(event, "bookName")}
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
                onChange={event => this.onValueChange(event, "bookAuthor")}
                required
              />
            </div>
            <div className="form-inline">
              <label className="col" for="bookYear">
                Book Year
              </label>
              <input
                className="form-control"
                type="number"
                id="bookYear"
                defaultValue={bookYear}
                onChange={event => this.onValueChange(event, "bookYear")}
                required
              />
            </div>
            <div className="form-inline">
              <label className="col" for="bookPrice">
                Book Price
              </label>
              <input
                className="form-control"
                type="number"
                id="bookPrice"
                defaultValue={bookPrice}
                onChange={event => this.onValueChange(event, "bookPrice")}
                required
              />
            </div>

            <button
              className="btn btn-danger"
              type="submit"
              disabled={this.state.hasError}
            >
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
      </div>
    );
  }
}

const BookDetailsAdd = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedBookDetailsAdd
);
export default BookDetailsAdd;
