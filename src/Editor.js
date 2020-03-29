import React, { Component } from 'react'
import './Editor.scss';

export default class FormHtmlEditor extends Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    const ReactQuill = this.ReactQuill;
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          theme="snow"
        />

      )
    } else {
      return <textarea />;
    }
  }
}
