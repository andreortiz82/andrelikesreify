import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="container">
          <div className="introduction-copy">
            <h1>User Focued. <br/>Clear &amp; Simple.</h1>
            <p className="lead">My name is <span>Andre Ortiz</span> and I'm creative. I live in Austin, TX and specialize in UI, UX and Front-End Design.</p>
            <p className="lead">What's up Reify?! I heard you're doing some cool stuff. <span>I want in.</span></p>
          </div>
        </div>
      </div>
    );
  }
}
