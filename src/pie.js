import React from 'react';
import {PieChart} from 'react-d3-basic';

var width=700,
    height=400,
    value = function(d) {
      return +d.population;
    },
    name = function(d) {
      return d.age;
    },
    chartSeries=[
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      },
      {
        "field": "≥65",
        "name": "greater than 64"
      }
    ];

  let generalChartData = [
  {
    "age": "<5",
    "population": 2704659
  },
  {
    "age": "5-13",
    "population": 4499890
  },
  {
    "age": "14-17",
    "population": 2159981
  },
  {
    "age": "18-24",
    "population": 3853788
  },
  {
    "age": "25-44",
    "population": 4106543
  },
  {
    "age": "45-64",
    "population": 8819342
  },
  {
    "age": "≥65",
    "population": 14106543
  }
];
    
export default class Pie extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render(){
    return (
        <div>
        	<PieChart
  		      data={generalChartData}
  		      width={width}
  		      height={height}
  		      chartSeries={chartSeries}
  		      value={value}
            name={name}
  		    />
        </div>
    );
  }
}