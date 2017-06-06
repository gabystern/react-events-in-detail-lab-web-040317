import React from 'react';
import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (<button onClick={this.handleClick}>Tickle me!!!</button>)
  }
}

export default CoordinatesButton;
