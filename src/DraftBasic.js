import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
} from "draft-js";
import "draft-js/dist/Draft.css";
import styled from "styled-components";
import Immutable from "immutable";
import "./style.css";

//styleMap
const styleMap = {
  INLINETHROUGH: {
    textDecoration: "line-through",
  },
};

const App = () => {
  //useState
  const [editor, setEditor] = useState(EditorState.createEmpty());

  //入力した文字がエディターに格納される
  const onChange = (editor) => {
    setEditor(editor);
  };

  //contentBlockのTypeが"h1"だったらheader1というクラスを付与
  const myBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "h1") {
      return "header1";
    }
  };

  //タグの登録
  const blockReanderMap = Immutable.Map({
    h1: {
      element: "h1",
    },
    h2: {
      element: "h2",
    },
  });

  //タグの登録を反映
  const extendsBlockReaderMap = DefaultDraftBlockRenderMap.merge(
    blockReanderMap
  );

  //クリックしたらfont-weight:bold;が適用される
  const _onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editor, "BOLD"));
  };

  //クリックしたらtextDecoration: "line-through"が適用される
  const _onLineThrough = () => {
    onChange(RichUtils.toggleInlineStyle(editor, "INLINETHROUGH"));
  };

  //クリックしたら”h1”になる
  const _h1 = () => {
    onChange(RichUtils.toggleBlockType(editor, "h1"));
  };

  //クリックしたら"h2"になる
  const _h2 = () => {
    onChange(RichUtils.toggleBlockType(editor, "h2"));
  };

  return (
    <>
      <Wrap>
        <h1>App</h1>
        <button onClick={_onBoldClick.bind(this)}>Bold</button>
        <button onClick={_onLineThrough.bind(this)}>Through</button>
        <button onClick={_h1.bind(this)}>h1</button>
        <button onClick={_h2.bind(this)}>h2</button>
        <Row>
          <Editor
            blockRenderMap={extendsBlockReaderMap}
            blockStyleFn={myBlockStyleFn}
            customStyleMap={styleMap}
            editorState={editor}
            onChange={onChange}
            placeholder="ここに文字を入力してください"
          />
        </Row>
      </Wrap>
    </>
  );
};

export default App;

const Wrap = styled.div`
  width: 40%;
`;

const Row = styled.div`
  background: #ccc;
  height: 60vh;
`;
