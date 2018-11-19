import React from "react";
import "./styles.css";

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleSignUpClick() {
    this.props.onSignUpClick();
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    //check inputs
    if (!this.state.email.length || !this.state.password.length) {
      alert("Missing email or username!");
      return;
    }
    //extract email and password
    const email = this.state.email;
    const password = this.state.password;
    //cleaning states and text inputs
    this.setState({ email: "", password: "" });
    e.target.email.value = "";
    e.target.password.value = "";

    if (email === "Admin" && password === "12345") {
      //logged-in, start application
      this.props.onLogInClick();
      return;
    } else {
      alert("Incorrect email or password!");
      return;
    }
  }

  render() {
    return (
      <div class="LogInPage">
        <h1>Welcome</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="username is Admin"
              onChange={this.handleEmailChange}
              name="email"
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="password is 12345"
              onChange={this.handlePasswordChange}
              name="password"
            />
          </p>
          <p>
            <input class="logInS" type="submit" value="Log In" />
          </p>
        </form>
        <br /> <br />
        <a href="#" onClick={this.handleSignUpClick}>
          Sign Up
        </a>
        &nbsp; &nbsp;
        <a href="#">Forgot Password?</a>
      </div>
    );
  }
}
