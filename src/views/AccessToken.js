import React from "react";
import { connect } from "react-redux";
import { validateToken } from "../actions/index";

const mapStateToProps = state => {
  return {
    validateTokenStatus: state.validateTokenStatus,
    access_token: state.access_token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateToken: token => dispatch(validateToken(token))
  };
};

class AccessToken extends React.Component {
  constructor() {
    super();
    this.state = { error: false, access_token: "" };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.validateTokenStatus) {
      this.setState({ ...nextProps.validateTokenStatus });
    }
    if (nextProps.access_token) {
      this.setState({ ...nextProps.validateTokenStatus, isTokenLoaded: true });
    }
  }

  onAccessTokenChange(event) {
    let newVal = String(event.target.value).trim();
    if (newVal === "") {
      this.setState({ error: "Please enter a valid token" });
      return;
    }
    this.setState({ access_token: newVal, error: false });
  }
  onValidateClick(event) {
    this.props.validateToken(this.state.access_token);
    event.preventDefault();
  }
  getMessagePrompt() {
    if (this.state.isLoading) {
      return <div className="alert alert-warning">Loading...</div>;
    } else if (this.state.error) {
      return <div className="alert alert-danger">{this.state.error} </div>;
    } else{
      return <div className="alert "> </div>;
    }
  }

  render() {
    if (this.state.isTokenLoaded) {
      return null;
    }
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="jumbotron col-12">
            <h1>ReactJS Book Library System</h1>
            {this.getMessagePrompt()}
            <div className="form">
              <input
                className="form-control"
                type="text"
                name="access_token"
                placeholder="Enter Access Token Here..."
                defaultValue={this.state.access_token}
                onChange={event => this.onAccessTokenChange(event)}
              />
              <button
                disabled={this.state.access_token===""}
                onClick={event => this.onValidateClick(event)}
                className="form-control btn btn-success"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedAccessToken = connect(mapStateToProps, mapDispatchToProps)(
  AccessToken
);
export default ConnectedAccessToken;
