import React, { Component } from "react";

class FireBaseTest extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  LogBois = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <body class="bg-white" style={{ display: "flex", flexDirection: "row" }}>
        <article>
          <form onSubmit={this.testSubmit}>
            <fieldset>
              <fieldset>
                <input
                  placeholder="email"
                  value={email}
                  name="email"
                  type="email"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="password"
                  name="password"
                  value={password}
                  type="password"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <button type="submit">Test</button>

              <button type="button" onClick={event => this.LogBois(event)}>
                Console State
              </button>
            </fieldset>
          </form>
        </article>
      </body>
    );
  }
}

export default FireBaseTest;

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
