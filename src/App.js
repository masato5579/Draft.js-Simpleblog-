import React from "react";
import DraftBasic from "./DraftBasic/DraftBasic";
import VideoImage from "./DraftPlugin/Video&Image/VideoImage";
import InlineToolbar from "./DraftPlugin/Inlinetoolbar/InlineToolbar";
import styled from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Draft.js練習用</h1>
      <Wrap>
        <Router>
          <Route exact path="/" component={DraftBasic} />
          <Route exact path="/video&image" component={VideoImage} />
          <Route exact path="/InlineToolbar" component={InlineToolbar} />
        </Router>
      </Wrap>
    </>
  );
};

export default App;

const Wrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;
