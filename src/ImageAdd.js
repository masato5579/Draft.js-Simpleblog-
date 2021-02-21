import React, { Component } from "react";

export default class ImageAdd extends Component {
  //useState
  state = {
    url: "",
  };

  //画像を追加
  addImage = () => {
    const { editorState, onChange } = this.props;
    onChange(this.props.modifier(editorState, this.state.url));
  };

  //
  changeUrl = (evt) => {
    this.setState({ url: evt.target.value });
  };

  render() {
    return (
      <div>
        <h5>Imageの埋め込み</h5>
        <input
          type="text"
          placeholder="Paste the Image url"
          onChange={this.changeUrl}
          value={this.state.url}
        />
        <button type="button" onClick={this.addImage}>
          Add
        </button>
      </div>
    );
  }
}
