import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div>
        <img id="imagestyle" src={this.props.url} alt={this.props.caption} />
      </div>
    );
  }
}

export default Image;
