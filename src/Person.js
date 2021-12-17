import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movingProgressRemaining: 0,
            isPlayerControlled: false,
            directionUpdate: {
                up: ["y", -1],
                down: ["y", 1],
                left: ["x", -1],
                right: ["x", 1]
            }
        };
    }

    update(state) {
        this.updatePosition();

        if (this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        
    }

    componentDidMount() {
    }
  
    render() {
      return (
      );
    }
  }

  export default Person;