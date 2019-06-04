import React, { Component } from "react";
import firebase from "firebase";

class LoginAndRegister extends Component {
  state = {
    LoginEmail: "",
    LoginPassword: "",
    RegisterEmail: "",
    RegisterPassword: ""
  }; //creating empty local state for passing props, will later be pushed using redux

  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  }; // handle changes in the input feilds

  HandleRegister = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.RegisterEmail,
        this.state.RegisterPassword
      )
      .catch(error => {
        var errorCode = error.errorcode;
        var errMessage = error.message;
        console.log(errMessage, errorCode);
      });
    //then create the dnd data
  }; //Creates a registered user via firebase
  HandleLogin = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.LoginEmail,
        this.state.LoginPassword
      )
      .catch(error => {
        var errorCode = error.errorcode;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
    //recieve dnd information/user info
  }; //Signs registered user in, no redirect yet

  LogBois = event => {
    event.preventDefault();
    console.log(this.state);
  }; //for dev purposes

  render() {
    const {
      RegisterEmail,
      LoginEmail,
      RegisterPassword,
      LoginPassword
    } = this.state;
    return (
      <body
        className="bg-white"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <article>
          <form
            onSubmit={event =>
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
            onSubmit={event =>
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

//creates very basic login/register page

export default LoginAndRegister;
