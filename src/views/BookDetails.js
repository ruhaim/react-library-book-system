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
  console.log(state, "Steatea");
  return { booklist: state.books };
};

class ConnectedBookDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      booklist: []
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
    
    if (!this.props.book){
      return null;
    }
 
    return (
      <div>
        <h1>{this.props.book.bookName}</h1>
      </div>
    );
  }
}

const BookDetails = connect(mapStateToProps)(ConnectedBookDetails);
export default BookDetails;
