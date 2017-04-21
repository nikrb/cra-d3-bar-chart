import React from 'react';
import DataSeries from './DataSeries';
import d3 from 'd3';
import XYAxis from './XYAxis';

export default class BarChart extends React.Component {
  render = () => {
    const padding = 30;
    var yScale = d3.scale.linear()
      .domain([d3.max(this.props.data), 0])
      .range([padding, this.props.height-padding]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([padding, this.props.width-padding], 0.05);

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
          <XYAxis
            xScale={xScale}
            yScale={yScale}
            data={this.props.data}
            width={this.props.width}
            height={this.props.height}
            padding={padding}
          />
      </svg>
    );
  }
}
