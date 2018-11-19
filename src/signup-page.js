import React, { Fragment } from "react";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password1: "", password2: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassword1Change = this.handlePassword1Change.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //check inputs
    if (
      !this.state.username.length ||
      !this.state.email.length ||
      !this.state.password1.length ||
      !this.state.password2.length
    ) {
      console.log("missing inputs!");
      return;
    }
    //extract inputs
    const username = this.state.username;
    const email = this.state.email;
    const password1 = this.state.password1;
    const password2 = this.state.password2;
    if (password1 !== password2) {
      document.getElementById("NotMatch").style.visibility = "visible";
      return;
    } else {
      document.getElementById("NotMatch").style.visibility = "hidden";
    }
    //clean states
    this.setState({ username: "", email: "", password1: "", password2: "" });
    //save inputs
    const user = {
      username: username,
      email: email,
      password: password1
    };
    console.log("Success! You have been registered!");
    this.props.onCreateAccountClick();
    return;
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword1Change(e) {
    this.setState({ password1: e.target.value });
    //if password1 is none, delete password2
    if (!e.target.value.length) {
      this.setState({ password2: "" });
    }
  }
  handlePassword2Change(e) {
    this.setState({ password2: e.target.value });
    //show notice if the two passwords are not equal
    if (this.state.password1 !== e.target.value) {
      document.getElementById("NotMatch").style.visibility = "visible";
    } else {
      document.getElementById("NotMatch").style.visibility = "hidden";
    }
  }

  render() {
    var style1 = {
      visibility: "hidden",
      color: "red"
    };
    return (
      <Fragment>
        <h1>Create Account</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Choose username..."
              onChange={this.handleUsernameChange}
              name="username"
              value={this.state.username}
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="Enter your email..."
              onChange={this.handleEmailChange}
              name="email"
              value={this.state.email}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Enter new password..."
              onChange={this.handlePassword1Change}
              name="password1"
              value={this.state.password1}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Re-enter the new password..."
              onChange={this.handlePassword2Change}
              name="password2"
              value={this.state.password2}
            />{" "}
            <span id="NotMatch" style={style1}>
              Passwords must match!
            </span>
          </p>
          <p>
            <input type="submit" value="Create Account" />
          </p>
        </form>
      </Fragment>
    );
  }
}
