import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "./GameHelpers";

const tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="score" />
          <Display text="Rows" />
          <Display text="level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default tetris;
