import React, {Component,useState} from "react";

import {usePlayer} from './hooks/usePlayer'
import {useStage} from './hooks/useStage'

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { StyledTetrisWraper, StyledTetris } from "./TetrisStyles/StyledTetris";

const Game = () =>{
    const [dropTime,setDropTime] = useState(null);
    const[gameOver, setGameOver] = useState(false); 
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);
  return (
    <StyledTetrisWraper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"/>
          ):(
          <div>
            <Display text="score" />
            <Display text="Rows" />
            <Display text="level" />
          </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWraper>
  );
};

export default Game;
