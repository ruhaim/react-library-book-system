import React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection
} from "@devexpress/dx-react-grid-bootstrap3";
import { SelectionState } from "@devexpress/dx-react-grid";
import { getBookList } from "../services/api-services";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { booklist: state.books };
};

class ConnectedBookList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      booklist: []
    };
    window.store.subscribe(() => console.log("Look ma, Redux!!"));
    //window.store.dispatch(window.getBooks({ b: 1 }));

    this.changeSelection = selection => {
      this.setState({
        selection: [selection.pop()]
      });
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    //console.log(window.store.dispatch);
    getBookList()
      .then(result => result.json())
      .then(items => {
        this.setState({
          ...this.state,
          booklist: items,
          isLoading: false,
          selection: []
        });
        //alert(items);
      });
  }
  render() {
    if (this.state.isLoading) {
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

const BookList = connect(mapStateToProps)(ConnectedBookList);
export default BookList;
