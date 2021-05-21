import React from 'react';
import ReactDOM from 'react-dom';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};   
    //in <button onClick=this.handleClick>, "this" isn't binded by default. javascript doesn't know what "this" is
    //so we have to manually declare what "this.handleClick" is
    this.handleClick = this.handleClick.bind(this);
	}
  handleClick() {    
  	this.setState(
  		{isToggleOn: !this.state.isToggleOn}
  		);
    }
  render() {
    return (
      <button onClick={this.handleClick}>        
      {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);