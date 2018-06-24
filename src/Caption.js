import React, { Component } from 'react';

class Caption extends Component {
  render() {
    return (
      <div>
        <h1 id="captionstyle">{this.props.caption}</h1>
      </div>
    );
  }
}

export default Caption;
