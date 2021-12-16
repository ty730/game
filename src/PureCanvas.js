import React, { Component } from 'react';

class PureCanvas extends Component {
    shouldComponentUpdate() {
      return false;
    }
  
    render() {
      return (
        <canvas
          width="400"
          height="400"
          ref={node =>
            node ? this.props.contextRef(node.getContext('2d')) : null
          }
        />
      );
    }
  }

  export default PureCanvas;