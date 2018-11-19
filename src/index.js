import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./App/App";
import store, { history } from "./store";
import { ConnectedRouter } from "react-router-redux";
import "./styles.css";
import LogInPage from "./login-page.js";
import SignUpPage from "./signup-page.js";


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      signUpClicked: false,
      forgotPasswordClicked: false,
      buttonClicked: false
    };
    this.handleLogInClick = this.handle_LogIn_Exit.bind(this);
    this.handleExitClick = this.handle_LogIn_Exit.bind(this);
    this.handleSignUpClick = this.handle_SignUp_CreateAccount.bind(this);
    this.handleCreateAccountClick = this.handle_SignUp_CreateAccount.bind(this);
    this.handleForgotPasswordClick = this.handleForgotPasswordClick.bind(this);
  }

  handleForgotPasswordClick() {
    // do something
  }

  handle_SignUp_CreateAccount() {
    this.setState(prevStates => ({ signUpClicked: !prevStates.signUpClicked }));
  }

  handle_LogIn_Exit() {
    this.setState(prevStates => ({ isLoggedIn: !prevStates.isLoggedIn }));
  }

  render() {
    const buttonClicked = this.state.buttonClicked;
    const logInClicked = this.state.isLoggedIn;
    const signUpClicked = this.state.signUpClicked;
    const forgotPasswordClicked = this.state.forgotPasswordClicked;

    switch (!buttonClicked) {
      case logInClicked:
        return <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>;
      case signUpClicked:
        return (
          <SignUpPage onCreateAccountClick={this.handleCreateAccountClick} />
        );
      case forgotPasswordClicked:
        // do something
        break;
      default:
        return (
          <LogInPage
            onLogInClick={this.handleLogInClick}
            onSignUpClick={this.handleSignUpClick}
            onForgotPasswordClick={this.handleForgotPasswordClick}
          />
        );
    }
  }
}

const rootElement = document.getElementById("app-root");
ReactDOM.render(<TodoApp />, rootElement);
