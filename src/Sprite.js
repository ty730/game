import React, { Component } from 'react';
// This is a test
class Sprite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animations: { idleDown: [[0,0]]},
            currentAnimation: "idleDown",
            currentAnimationFrame: 0
        };
      }
  
    render() {
      return (
        <div className="character" style={{transform: `translate3d(${this.props.x+180}px, ${this.props.y+180}px, 0)`}}>

        </div>
      );
    }
  }

  export default Sprite;