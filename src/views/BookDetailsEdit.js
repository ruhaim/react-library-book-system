import React from "react";
import { connect } from "react-redux";
import { setEditMode, modifyBook, addBook } from "../actions/index";

const mapStateToProps = state => {
  return {
    //book: state.selectedBook,
    isEditMode: state.isEditMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEditMode: b => dispatch(setEditMode(b)),
    modifyBook: book => dispatch(modifyBook(book)),
    addBook: book => dispatch(addBook(book))
  };
};

class ConnectedBookDetailsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: props.book
    };
  }

  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    this.setState({ book: nextProps.book });
  }
  onSaveClick(event) {
    event.preventDefault();

    this.props.setEditMode(true);
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(event);
    this.props.modifyBook({ ...this.state.book });
  }
  onCancelClick(event) {
    event.preventDefault();

    this.props.setEditMode(false);
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
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    const selectedBook = this.props.book;
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
              id="bookAuthor"
              onChange={event => this.onValueChange(event, "bookName")}
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
              type="text"
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
    );
  }
}

const BookDetailsEdit = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedBookDetailsEdit
);
export default BookDetailsEdit;
