import React from "react";
import { connect } from "react-redux";
import { validateToken } from "../actions/index";

const mapStateToProps = state => {
  return {
    validateTokenStatus: state.validateTokenStatus
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
    this.state = { error: true };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.validateTokenStatus) {
      this.setState({ ...nextProps.validateTokenStatus });
    }
  }

  onAccessTokenChange(event) {
    let newVal = String(event.target.value).trim();
    if (newVal === "") {
      this.setState({ error: true });
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
      return <div className="alert"> Loading...</div>;
    } else if (this.state.error) {
      return <div className="danger">{this.state.error} </div>;
    }
  }

  render() {
    return (
      <div>
        {this.getMessagePrompt()}
        <div className="form-inline">
          <input
            className="form-control"
            type="text"
            name="access_token"
            placeholder="Enter Access Token Here..."
            onChange={event => this.onAccessTokenChange(event)}
          />
          <button
            disabled={this.state.error}
            onClick={event => this.onValidateClick(event)}
            className="btn btn-success"
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
}

const ConnectedAccessToken = connect(mapStateToProps, mapDispatchToProps)(
  AccessToken
);
export default ConnectedAccessToken;
