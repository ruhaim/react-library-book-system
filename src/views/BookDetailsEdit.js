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

class ConnectedBookDetailsEdit extends React.Component {
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
  onCancelClick(event) {
    event.preventDefault();

    this.props.setEditMode(false);
  }
  render() {
    return <div>gdgdffd</div>;
  }
}

const BookDetailsEdit = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedBookDetailsEdit
);
export default BookDetailsEdit;
