import React, { Component } from "react";

export default class VideoAdd extends Component {
  //useState
  state = {
    url: "",
  };

  addVideo = () => {
    const { editorState, onChange } = this.props;
    onChange(this.props.modifier(editorState, { src: this.state.url }));
  };

  changeUrl = (evt) => {
    this.setState({ url: evt.target.value });
  };

  render() {
    return (
      <div onClick={this.onPopoverClick}>
        <h5>videoの埋め込み</h5>
        <input
          type="text"
          placeholder="Paste the video url …"
          onChange={this.changeUrl}
          value={this.state.url}
        />
        <button type="button" onClick={this.addVideo}>
          Add
        </button>
      </div>
    );
  }
}
