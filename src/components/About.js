import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videoIsPlaying: false
    }

    this.playVideo = this.playVideo.bind(this);
    this._ui_render_video_control = this._ui_render_video_control.bind(this);
  }

  playVideo () {
    this.setState({
      videoIsPlaying: !this.state.videoIsPlaying
    }, () => {
      if (this.state.videoIsPlaying) {
        this.refs.video.play()
      } else {
        this.refs.video.pause()
      }
    })
  }

  _ui_render_video_control (bool) {
    console.log(bool, 'bool')
    if (bool) {
      return (<span className="video-state pause">Pause</span>)
    } else {
      return (<span className="video-state play">Play</span>)
    }
  }

  render() {
    return (
      <div className="about-container">

        <div className="container">

          <h2>Trying my best since '82</h2>
          <p className="lead">
            I'm a lot of things - but one thing's for sure: <span>What you see, is what you get.</span>
          </p>

          <div className="block-bio-container">
            <div className="blocks">

              <Fade up>
              <div className="block message yellow">
                <div className="message-wrapper">
                  <h5>Personal Elevator Pitch</h5>
                  <p>I'm a husband, father, creator and friend.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/coffee.jpg" alt="coffee"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message green">
                <div className="message-wrapper">
                  <h5>Work Goals</h5>
                  <p>I'm passionate about my work - I want it to be reliable, fun and sought after.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/meandmergan.jpg" alt="meandmergan"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message red">
                <div className="message-wrapper">
                  <h5>Creative Strategies</h5>
                  <p>I push my abilities to find inspiration on any medium. I'm aware enough to know when to keep going and when to pivot.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/ontheroad.jpg" alt="ontheroad"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message green">
                <div className="message-wrapper">
                  <h5>Humble Pie</h5>
                  <p>It's important to have a good sense of humor and never take yourself too seriously.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/ozzy.jpg" alt="ozzy"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message yellow">
                <div className="message-wrapper">
                  <h5>Have a little patience</h5>
                  <p>I like to see results and sometimes rush an idea to see where it can go.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/robot.jpg" alt="robot"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message red">
                <div className="message-wrapper">
                  <h5>Put me in Coach</h5>
                  <p>I want to be in the trench, heads down with my team. Software is a team effort and I can't get there without you.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block video" onClick={ this.playVideo.bind(this) }>
                { this._ui_render_video_control(this.state.videoIsPlaying) }
                <video ref="video" autostart="false" src="/bio-pics/song2.mp4" type="video/mp4"/>
              </div>
              </Fade>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
