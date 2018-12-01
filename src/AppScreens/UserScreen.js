import React, { Component } from "react";
import firebase from "firebase";

class UserScreen extends Component {
  state = {
    LoginEmail: "",
    LoginPassword: "",
    RegisterEmail: "",
    RegisterPassword: ""
  };

  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  HandleRegister = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        var errorCode = error.errorcode;
        var errMessage = error.message;
        console.log(errMessage, errorCode);
      });
  };
  HandleLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        var errorCode = error.errorcode;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  LogBois = event => {
    event.preventDefault();
    console.log(this.state);
  };

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
                  type="RegisterPassword"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <button type="submit">Register</button>
            </fieldset>
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
                  type="LoginPassword"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <button type="submit">Login</button>
            </fieldset>
          </form>
        </article>
      </body>
    );
  }
}

export default UserScreen;

{
  /* <article class="mw5 center bg-dark-blue br3 pa3 pa4-ns mv3 ba b--black-10">
          <div class="tc">
            <img
              src="http://tachyons.io/img/avatar_1.jpg"
              class="br-100 h3 w3 dib"
              title="Photo of a kitty staring at you"
            />
            <h1 class="f4">apollo</h1>
            <hr class="mw3 bb bw1 b--black-10" />
          </div>
          <p class="lh-copy measure center f6 black-70">Pain in the butt</p>
        </article>
        <article class="mw5 center bg-dark-blue br3 pa3 pa4-ns mv3 ba b--black-10">
          <div class="tc">
            <img
              src="http://tachyons.io/img/avatar_1.jpg"
              class="br-100 h3 w3 dib"
              title="Photo of a kitty staring at you"
            />
            <h1 class="f4">bob</h1>
            <hr class="mw3 bb bw1 b--black-10" />
          </div>
          <p class="lh-copy measure center f6 black-70">
            this is a sample sentance
          </p>
        </article> */
}
