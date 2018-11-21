import React, { Component } from "react";

class FireBaseTest extends Component {
  render() {
    return (
      <body class="bg-white" style={{ display: "flex", flexDirection: "row" }}>
        <article class="mw5 center bg-dark-blue br3 pa3 pa4-ns mv3 ba b--black-10">
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
        </article>
      </body>
    );
  }
}

export default FireBaseTest;
