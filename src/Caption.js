import React, { Component } from 'react';

class Caption extends Component {
  render() {
    return (
      <div>
        <h2 id="captionstyle">{this.props.caption}</h2>
      </div>
    );
  }
}

export default Caption;
