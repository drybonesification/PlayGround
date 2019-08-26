import React from "react";
import { StyledCell } from "./TetrisStyles/StyledCells";
import { TETROMINOS } from "./Tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}/>
);

export default Cell;
