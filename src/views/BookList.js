import React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection
} from "@devexpress/dx-react-grid-bootstrap3";
import { SelectionState } from "@devexpress/dx-react-grid";
import { selectBook, getBooks } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    booklist: state.books,
    isLoading: state.getBooksStatus.isLoading || false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectBook: book => dispatch(selectBook(book)),
    getBooks: () => dispatch(getBooks())
  };
};

class ConnectedBookList extends React.Component {
  constructor() {
    super();
    this.state = { selection: [] };

    this.changeSelection = selection => {
      const selectedBookIndex = selection.pop();
      this.setState({
        selection: [selectedBookIndex]
      });
      this.props.selectBook(this.props.booklist[selectedBookIndex]);
    };
  }

  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    if (this.props.isLoading || !this.props.booklist) {
      return <div>Loading...</div>;
    }

    return (
      <Grid
        rows={this.props.booklist}
        columns={[
          { name: "bookID", title: "ID" },
          { name: "bookName", title: "Name" },
          { name: "bookAuthor", title: "Author" }
        ]}
      >
        <Table />
        <TableHeaderRow />
        <SelectionState
          selection={this.state.selection}
          onSelectionChange={this.changeSelection}
        />
        <TableSelection
          selectByRowClick
          highlightRow
          showSelectionColumn={false}
        />
      </Grid>
    );
  }
}

const BookList = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedBookList
);
export default BookList;
