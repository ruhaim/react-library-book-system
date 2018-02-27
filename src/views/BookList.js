import React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection
} from "@devexpress/dx-react-grid-bootstrap3";
import { SelectionState } from "@devexpress/dx-react-grid";
import { getBookList } from "../services/api-services";

export default class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      booklist: []
    };
    this.changeSelection = selection =>
      this.setState({
        selection: selection.pop()
      });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
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
        rows={this.state.booklist}
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
