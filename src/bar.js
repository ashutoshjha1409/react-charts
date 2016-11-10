import React from 'react';
import {BarChart} from 'react-d3-basic';

var width=700,
    height=400,
    title="Bar Chart",
    chartSeries=[
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x=function(d) {
      return d.letter;
    },
    xScale='ordinal',
    xLabel="Letter",
    yLabel="Frequency",
    yTicks=[10, "%"];

    let generalChartData=[
      {
        "letter": "A",
        "frequency": ".08167"
      },
      {
        "letter": "B",
        "frequency": ".01492"
      },{
        "letter": "C",
        "frequency": ".02782"
      },{
        "letter": "D",
        "frequency": ".04253"
      },{
        "letter": "E",
        "frequency": ".12702"
      },{
        "letter": "F",
        "frequency": ".08167"
      },{
        "letter": "G",
        "frequency": ".02288"
      },{
        "letter": "H",
        "frequency": ".08167"
      },{
        "letter": "I",
        "frequency": ".08167"
      },{
        "letter": "J",
        "frequency": ".08167"
      },{
        "letter": "K",
        "frequency": ".08167"
      },{
        "letter": "L",
        "frequency": ".08167"
      },{
        "letter": "M",
        "frequency": ".08167"
      },{
        "letter": "N",
        "frequency": ".08167"
      },{
        "letter": "O",
        "frequency": ".08167"
      },{
        "letter": "P",
        "frequency": ".08167"
      },{
        "letter": "Q",
        "frequency": ".08167"
      },{
        "letter": "R",
        "frequency": ".08167"
      },{
        "letter": "S",
        "frequency": ".08167"
      },{
        "letter": "T",
        "frequency": ".08167"
      },{
        "letter": "U",
        "frequency": ".08167"
      },{
        "letter": "V",
        "frequency": ".08167"
      },{
        "letter": "W",
        "frequency": ".08167"
      },{
        "letter": "X",
        "frequency": ".08167"
      },{
        "letter": "Y",
        "frequency": ".08167"
      },{
        "letter": "Z",
        "frequency": ".08167"
      }
]

export default class Bar extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render(){
    return (
        <div>
        	<BarChart
		      title={title}
		      data={generalChartData}
		      width={width}
		      height={height}
		      chartSeries={chartSeries}
		      x={x}
		      xLabel={xLabel}
		      xScale={xScale}
		      yTicks={yTicks}
		      yLabel={yLabel}
		    />
        </div>
    );
  }
}