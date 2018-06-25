import React, { Component } from 'react';
import Caption from './Caption';
import Image from './Image';

class Container extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid col-1">
        </div>
        <div id="container" className="container-fluid col-10">
          <Caption caption={this.props.caption} />
          <Image
            url={this.props.url}
            caption={this.props.caption}
          />
        </div>
        <div className="container-fluid col-1">
        </div>
      </div>
    );
  }
}

export default Container;
