import React, { Component } from 'react';
import Caption from './Caption';
import Image from './Image';

class Container extends Component {
  render() {
    return (
      <div id="container">
        <Caption caption="placeholder caption" />
        <Image
          url="https://images-assets.nasa.gov/image/PIA00122/PIA00122~small.jpg"
          caption="placeholder caption"
        />
      </div>
    );
  }
}

export default Container;
