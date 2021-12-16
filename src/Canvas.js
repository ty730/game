import React, { Component } from 'react';
import PureCanvas from './PureCanvas.js';
import bg from './grass.png';

class Canvas extends Component {
    constructor(props) {
      super(props);
      this.saveContext = this.saveContext.bind(this);
      this.imgRef= React.createRef();
    }

    componentDidMount() {
      const context = this.ctx;

      /*const img = this.imgRef
      console.log(img)
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0)
      }*/
      const image = new Image();
      image.src = "./grass.png";
      image.onLoad = () => {
        this.ctx.drawImage(image, 0, 0);
      };
      
    } 
  
    saveContext(ctx) {
      this.ctx = ctx;
      this.width = this.ctx.canvas.width;
      this.height = this.ctx.canvas.height;
    }

    componentDidUpdate() {
      const { player }  = this.props;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.translate(player.x, player.y);
      this.ctx.fillStyle = '#4397AC';
      this.ctx.fillRect(
        -this.width / 4,
        -this.height / 4,
        this.width / 2,
        this.height / 2
      );
      this.ctx.restore();
    }

    render() {
      return (
        <div className="lmao">
          <PureCanvas contextRef={this.saveContext} />
          <img ref={this.imgRef} src={bg} className="hidden" />
        </div>
        
      );
    }
  }

  export default Canvas;