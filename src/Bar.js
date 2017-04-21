import React from 'react';

export default class Bar extends React.Component {
  render = () => {
    return (
      <rect fill={this.props.colour}
        width={this.props.width} height={this.props.height}
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    );
  };
}
