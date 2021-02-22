import React from "react";
import DraftBasic from "./DraftBasic";
import DraftPlugin from "./DraftPlugin";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <h1>Draft.js練習用</h1>
      <Wrap>
        <DraftBasic />
        <DraftPlugin />
      </Wrap>
    </>
  );
};

export default App;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
