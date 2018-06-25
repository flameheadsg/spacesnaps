import React, { Component } from 'react';
import Caption from './Caption';
import Image from './Image';

class Container extends Component {
  render() {
    return (
      <div id="container">
        <Caption caption={this.props.caption} />
        <Image
          url={this.props.url}
          caption={this.props.caption}
        />
      </div>
    );
  }
}

export default Container;
