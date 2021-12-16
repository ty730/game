import './App.css';
//import { Canvas } from '@react-three/fiber'
import React, { Component } from 'react';
import Canvas from './Canvas.js';

const speed = 2;

const directions = {
  ArrowUp: "ArrowUp",
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      heldDirs: [],
      width: 0,
      height: 0,
    };
    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    window.addEventListener('keydown', (e) => {
      let dir = directions[e.key];
      if (dir && this.state.heldDirs.indexOf(dir) === -1) {
        //console.log("keydown2");
        this.setState(prevState => ({ x: prevState.x, y: prevState.y, heldDirs: [dir, prevState.heldDirs], }));
      }
    });
    window.addEventListener('keyup', (e) => {
      let dir = directions[e.key];
      let index = this.state.heldDirs.indexOf(dir);
      if (index > -1) {
        let hDirs = [...this.state.heldDirs];
        hDirs.splice(index, 1);
        this.setState(prevState => ({ x: prevState.x, y: prevState.y, heldDirs: hDirs, }));
      }
    });
  }

  updateAnimationState() {
    //console.log("here")
    let direction = this.state.heldDirs[0];
    //console.log(direction)
    if (direction) {
      if (direction === "ArrowRight") {
        this.setState(prevState => ({ x: prevState.x + speed, y: prevState.y, heldDirs: prevState.heldDirs, }));
      }
      if (direction === "ArrowLeft") {
        this.setState(prevState => ({ x: prevState.x - speed, y: prevState.y, heldDirs: prevState.heldDirs, }));
      }
      if (direction === "ArrowUp") {
        this.setState(prevState => ({ x: prevState.x, y: prevState.y - speed, heldDirs: prevState.heldDirs, }));
      }
      if (direction === "ArrowDown") {
        this.setState(prevState => ({ x: prevState.x, y: prevState.y + speed, heldDirs: prevState.heldDirs, }));
      }
    }
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  placeCharacter() {

  }
  /*
<div className="camera" style={{transform: `translate3d(${(this.state.width/2 - 200)}px, ${(this.state.height/2 - 300)}px, 0)`}}>
          <div className="map" style={{transform: `translate3d(${-1 * this.state.x}px, ${-1 * this.state.y}px, 0)`}}>
            <div className="character" style={{transform: `translate3d(${this.state.x+180}px, ${this.state.y+180}px, 0)`}}></div>
          </div>
        </div>
  */
  // <Canvas player={this.state} />
  render() {
    console.log(this.state.width)
    return (
      <div className="App">
        <Canvas player={this.state} />
      </div>
    );
  }
}

export default App;