import React from "react";
import { connect } from "react-redux";
import BookList from "./BookList";
import BookOperations from "./BookOperations";
import BookDetails from "./BookDetails";
import AccessToken from "./AccessToken";
import { getBookList } from "../services/api-services";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const mapStateToProps = state => {
  return {
    access_token: state.access_token
  };
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.access_token, "access token");
    if (!this.props.access_token) {
      return <AccessToken />;
    }
    return (
      <div style={styles}>
        <h1>Library System React</h1>
        <div className="row">
          <div className="col-6">
            <BookOperations />
            <BookList />
          </div>
          <div className="col-6">
            <BookDetails />
          </div>
        </div>
      </div>
    );
  }
}
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
