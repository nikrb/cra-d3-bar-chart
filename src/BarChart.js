import React from 'react';
import DataSeries from './DataSeries';
import d3 from 'd3';

export default class BarChart extends React.Component {
  render = () => {
    console.log( "render BarChart");

    var yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    return (
      <svg width={this.props.width} height={this.props.height} >
        <DataSeries
            xScale={xScale}
            yScale={yScale}
            data={this.props.data}
            width={this.props.width}
            height={this.props.height}
            colour="cornflowerblue"
          />
      </svg>
    );
  }
}
