import React, { Component } from "react";
import { Editor, ConvertFromRaw } from "draft-js";

export default class CustomEditors extends Component {
  render() {
    console.log(this.content);
    return <div>{this.content}</div>;
  }
}
