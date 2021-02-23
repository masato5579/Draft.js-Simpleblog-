import React, { Component } from "react"; //Component
import { EditorState } from "draft-js"; //EditorState
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor"; //draft-js-pluginのeditor
import createVideoPlugin from "@draft-js-plugins/video"; //Videoを埋め込むプラグイン
import createImagePlugin from "@draft-js-plugins/image"; //画像を埋め込むプラグイン
import VideoAdd from "./VideoAdd"; //VideoAdd
import ImageAdd from "./ImageAdd"; //ImageAdd
import styled from "styled-components"; //styled-components
import { stateToHTML } from "draft-js-export-html";

const videoPlugin = createVideoPlugin(); //videoPluginを使用

const imagePlugin = createImagePlugin(); //imagePluginを使用

const plugins = [videoPlugin, imagePlugin]; //配列に格納

const text =
  'Click on the + button below and insert "/images/canada-landscape-small.jpg" to add the landscape image. Alternativly you can use any image url on the web.';

export default class CustomEditor extends Component {
  //useState
  state = {
    editorState: EditorState.createEmpty(),
    editorStateImage: createEditorStateWithText(text),
    content: "",
    edit: "",
  };

  //打った文字をStateで更新
  onChange = (editorState) => {
    this.setState({
      editorState: editorState,
      editorStateImage: editorState,
    });
  };

  //editorにfocus
  focus = () => {
    this.editor.focus();
  };

  //エディターに入力した内容をsave
  save = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const content = stateToHTML(contentState);
    const edit = document.querySelector(".edit");
    const edit2 = edit.outerHTML; //htmlを文字列にする
    this.setState({ edit: edit2 });
  };

  render() {
    return (
      <Con>
        <h1>aaa</h1>
        <Wrap onClick={this.focus} className="edit">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
        </Wrap>
        <VideoAdd
          editorState={this.state.editorState}
          onChange={this.onChange}
          modifier={videoPlugin.addVideo}
        />
        <ImageAdd
          editorState={this.state.editorStateImage}
          onChange={this.onChange}
          modifier={imagePlugin.addImage}
        />
        <div>
          <button onClick={this.save}>Save</button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.edit }}></div>
      </Con>
    );
  }
}

const Wrap = styled.div`
  width: 100%;
  background: #eee;
  height: 500px;
`;

const Con = styled.div``;
