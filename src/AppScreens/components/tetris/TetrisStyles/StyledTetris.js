import styled from "styled-components";

import Space from "./Space.png";

export const StyledTetrisWraper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${Space}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
