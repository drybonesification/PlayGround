import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "./GameHelpers";
import { StyledTetrisWraper, StyledTetris } from "./TetrisStyles/StyledTetris";

const tetris = () => {
  return (
    <StyledTetrisWraper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="score" />
            <Display text="Rows" />
            <Display text="level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWraper>
  );
};

export default tetris;
