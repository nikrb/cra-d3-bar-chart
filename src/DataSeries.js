import React from 'react';
import Bar from './Bar';

export default class DataSeries extends React.Component {
  render = () => {
    const { data, xScale, yScale, height, colour } = this.props;

    var bars = data.map(function(point, i) {
      // width={xScale.rangeBand()}
      return (
        <Bar height={yScale(point)} width={xScale.rangeBand()}
          offset={xScale(i)} availableHeight={height}
          colour={colour} key={i} />
      )
    });

    return (
      <g>{bars}</g>
    );
  };
}
