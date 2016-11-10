import React from 'react';
//import ReactDOM from 'react-dom'
import logo from './logo.svg';
//import Chart from './chart.js';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Bar from './bar';
import BarStack from './barStack';
import Pie from './pie';

const style = {
  margin: 12,
};

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			chartType: ''
		}
	}
	componentWillMount(){

	}

	componentWillUnmount(){

	}

	_displayChart(){
		switch(this.state.chartType){
			case "bar":
				return <Bar />
				break;
			case "pie":
				return <Pie />
				break;
			case "bar-stack":
				return <BarStack />
				break;
			default: 
				return ''
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React Charts</h2>
					</div>
					<div>
						<RaisedButton label="Bar Chart" primary={true} style={style} onTouchTap={(event,value)=>{this.setState({chartType:"bar"})}}/>
						<RaisedButton label="Bar Stack Chart" primary={true} style={style} onTouchTap={(event,value)=>{this.setState({chartType:"bar-stack"})}}/>
						<RaisedButton label="Pie Chart" primary={true} style={style} onTouchTap={(event,value)=>{this.setState({chartType:"pie"})}}/>
					</div>
					{ this._displayChart()}
				</div>
			</MuiThemeProvider>
		);
	}
}