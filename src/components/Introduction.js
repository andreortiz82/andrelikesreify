import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="container">
          <Fade>
          <div className="introduction-copy">
            <h1>Hi, ReifyHealth! <br/>I want to work with you.</h1>
            <p className="lead">My name is <span>Andre Ortiz</span> and I'm a creative living in Austin, TX. I specialize in <span>UI, UX and Front-End Design.</span> I feel that my skills and background would be a complement to your already talented team.</p>
            <p className="lead">Thank you for your consideration.</p>
          </div>
          </Fade>
        </div>
      </div>
    );
  }
}
