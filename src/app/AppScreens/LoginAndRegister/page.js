"use client";
import React, { Component } from "react";
import firebase from "firebase/compat/app";

class LoginAndRegister extends Component {
  state = {
    LoginEmail: "",
    LoginPassword: "",
    RegisterEmail: "",
    RegisterPassword: "",
  };

  handleInputChange = (event) => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value,
    });
  };

  HandleRegister = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.RegisterEmail,
        this.state.RegisterPassword
      )
      .catch((error) => {
        var errorCode = error.errorcode;
        var errMessage = error.message;
        console.log(errMessage, errorCode);
      });
    //then create the dnd data
  };
  HandleLogin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.LoginEmail,
        this.state.LoginPassword
      )
      .catch((error) => {
        var errorCode = error.errorcode;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
    //recieve dnd information/user info
  };

  LogBois = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { RegisterEmail, LoginEmail, RegisterPassword, LoginPassword } =
      this.state;
    return (
      <body
        className="bg-white"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <article>
          <form
            onSubmit={(event) =>
              this.HandleRegister(event, RegisterEmail, RegisterPassword)
            }
          >
            <fieldset>
              <fieldset>
                <input
                  placeholder="email"
                  value={RegisterEmail}
                  name="RegisterEmail"
                  type="RegisterEmail"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="password"
                  name="RegisterPassword"
                  value={RegisterPassword}
                  type="Password"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <button type="submit">Register</button>
            </fieldset>
            {/* option to have dnd room input */}
          </form>
        </article>
        <article>
          <form
            onSubmit={(event) =>
              this.HandleLogin(event, LoginEmail, LoginPassword)
            }
          >
            <fieldset>
              <fieldset>
                <input
                  placeholder="email"
                  value={LoginEmail}
                  name="LoginEmail"
                  type="LoginEmail"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="password"
                  name="LoginPassword"
                  value={LoginPassword}
                  type="Password"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <button type="submit">Login</button>
            </fieldset>
          </form>
        </article>

        <button onClick={this.LogBois}>Log</button>
      </body>
    );
  }
}

export default LoginAndRegister;
