import React from 'react';
import ReactDOM from 'react-dom';


//setInterval(tick, 1000);

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date: new Date(), interval: props.interval};
	}
	componentDidMount(){
		this.timerID = setInterval(
			()=>this.tick(),this.state.interval
			);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({
			date:new Date()
		});
	}
	render(){
		return(
			<div>
      			<h1>Hello, world!</h1>
      			<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    		</div>
    	)
	}
}

ReactDOM.render( <Clock interval={2000} />, document.getElementById('root')  );