import React, { Component } from "react";
import * as Pages from "./scenes";
import "./App.css";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

class AppComponent extends Component {
  render() {
    return (
      <div className="reduxstagram-app">
        <h1 style={{textAlign: "center"}}>
          Welcome
        </h1>

        <hr style={{margin: 30}}/>

        <AppBar position="static" color="default">
          <Toolbar>
            <Link to={"/"}>Home</Link>
          </Toolbar>
        </AppBar>

        <hr style={{margin: 30}}/>

        <Switch>
          <Route
            path="/"
            exact
            render={({ match }) => {
              return React.cloneElement(<Pages.ImageGrid />, {
                ...this.props
              });
            }}
          />
          <Route
            path="/image-details/:id"
            exact
            render={({ match }) => {
              return React.cloneElement(
                <Pages.ImageDetails postId={match.params.id} />,
                {
                  ...this.props
                }
              );
            }}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(
  connect(mapStateToProps, mapDispachToProps)(AppComponent)
);

export default App;
