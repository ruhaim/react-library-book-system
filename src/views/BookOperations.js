import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addBook, setAddNewMode } from "../actions/index";

const mapStateToProps = state => {
  return {
    //book: state.selectedBook,
    isAddNewMode: state.isAddNewMode
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAddNewMode: b => dispatch(setAddNewMode(b))
    //addBook: book => dispatch(addBook(book))
  };
};

class BookOperations extends React.Component {
  constructor() {
    super();
    this.state = { isAddNewMode: false };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "new props");
    let newState = { isAddNewMode: nextProps.isAddNewMode };

    if (nextProps.nextProps.addBookStatus) {
      newState = { ...newState, ...nextProps.modifyBookStatus };
    }
    this.setState({ ...newState });
  }
  onAddNewClick(event) {
    event.preventDefault();
    this.props.setAddNewMode(true);
  }

  render() {
    return (
      <div>
        <button
          disabled={this.state.isAddNewMode}
          onClick={event => this.onAddNewClick(event)}
          className="btn btn-success"
        >
          Add New...
        </button>
      </div>
    );
  }
}

const ConnectedBookOperations = connect(mapStateToProps, mapDispatchToProps)(
  BookOperations
);
export default ConnectedBookOperations;
