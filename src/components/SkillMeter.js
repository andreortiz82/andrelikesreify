import React, { Component } from 'react';

export default class SkillMeter extends Component {
  render() {
    return (
      <div className="skill-meter-component">
        <svg width="100%" height="100%" viewBox="0 0 40 40" className={"donut " + this.props.color}>
          <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954"></circle>
          <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" stroke-width="2"></circle>
          <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" stroke-width="2" stroke-dasharray={ this.props.amount } stroke-dashoffset="25"></circle>


          <text x="14.5" y="24" font-family="Roboto Slab" font-weight="bold" font-size="9" stroke="none" fill="black">
            {this.props.amount[0] + this.props.amount[1]}
          </text>
          <text x="24.5" y="24" font-family="Roboto Slab" font-weight="normal" font-size="6" stroke="none" fill="black">
            {"%"}
          </text>
        </svg>
        <label>{this.props.label}</label>
        <span>{this.props.caption}</span>
      </div>
    );
  }
}
