import React, { Component } from 'react';

class DirectionInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heldDirections: [],
            map: {
                "ArrowUp": "up",
                "KeyW": "up",
                "ArrowDown": "down",
                "KeyS": "down",
                "ArrowLeft": "left",
                "KeyA": "left",
                "ArrowRight": "right",
                "KeyD": "right",
            },
        };
    }

    getDirection() {
        return this.state.heldDirections[0];
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            let dir = this.state.map[e.key];
            if (dir && this.state.heldDirections.indexOf(dir) === -1) {
                this.setState(prevState => ({ heldDirections: [dir, prevState.heldDirections], }));
            }
        });
        window.addEventListener('keyup', (e) => {
            let dir = this.state.map[e.key];
            let index = this.state.heldDirections.indexOf(dir);
            if (index > -1) {
                let hDirs = [...this.state.heldDirections];
                hDirs.splice(index, 1);
                this.setState(prevState => ({ heldDirections: hDirs, }));
            }
        });
    }
  
    render() {
      return (
      );
    }
  }

  export default DirectionInput;