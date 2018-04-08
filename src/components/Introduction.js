import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <Fade left>
          <div className="introduction-copy">
            <img className="andreortiz-logo" src="/andreortiz.svg" alt="andreortiz"/>
            <h1>Hi, ReifyHealth! <br/>I want to work with you.</h1>
            <p className="lead">My name is <span>Andre Ortiz</span> and I'm a creative living in Austin, TX. I specialize in <span>UI, UX and Front-End Design.</span> I feel that my skills and background would be a compliment to your already talented team.</p>
            <p className="lead">Thank you for your consideration.</p>
          </div>
        </Fade>
        <Fade right>
          <div className="introduction-image">
          </div>
        </Fade>
      </div>
    );
  }
}
