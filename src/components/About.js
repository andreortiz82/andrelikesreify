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
    if (bool) {
      return (<span className="video-state pause">Pause</span>)
    } else {
      return (<span className="video-state play">Play</span>)
    }
  }

  render() {
    return (
      <div className="about-container">

          <div className="bio-container">
            <h2>About me</h2>
            <p className="lead">
              I'm a family man with a passion for making things. A self-starter, list maker and strong teammate.
            </p>

            <ul>
              <label>Hobbies</label>
              <li>Walking + Hiking</li>
              <li>Music + Video production</li>
              <li>Drawing + Graffiti</li>
              <li>Dad life</li>
            </ul>

            <ul>
              <label>Strengths</label>
              <li>15 years experience</li>
              <li>Creative thinker</li>
              <li>Strong teammate</li>
              <li>Focused + Driven</li>
              <li>Self-Managed</li>
            </ul>

            <ul>
              <label>Weaknesses</label>
              <li>Impatient</li>
              <li>Over analytical</li>
              <li>Self-Critical</li>
            </ul>
          </div>


          <div className="block-bio-container">
            <div className="blocks">

              <Fade up>
              <div className="block message black">
                <div className="message-wrapper">
                  <h5>The Elevator Pitch</h5>
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
              <div className="block message white">
                <div className="message-wrapper">
                  <h5>Work Goals</h5>
                  <p>Build products with a great team and drive the industry forward.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/meandmergan.jpg" alt="meandmergan"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message white">
                <div className="message-wrapper">
                  <h5>Personal Goals</h5>
                  <p>Continue to stay disciplined in my pursuit of mastery.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/ontheroad.jpg" alt="ontheroad"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message white">
                <div className="message-wrapper">
                  <h5>Humble Pie</h5>
                  <p>Have a good sense of humor and never take myself too seriously.</p>
                </div>
              </div>
              </Fade>

              <Fade up>
              <div className="block image">
                <img src="/bio-pics/ozzy.jpg" alt="ozzy"/>
              </div>
              </Fade>

              <Fade up>
              <div className="block message white">
                <div className="message-wrapper">
                  <h5>Don't flake</h5>
                  <p>Be reliable. Keep my name in the minds of others.</p>
                </div>
              </div>
              </Fade>

              {/*<Fade up>
              <div className="block video" onClick={ this.playVideo.bind(this) }>
                { this._ui_render_video_control(this.state.videoIsPlaying) }
                <video loop ref="video" autostart="false" src="/bio-pics/song2.mp4" type="video/mp4"/>
              </div>
              </Fade>*/}
            </div>

            {/*<Fade up>
            <div className="quote-container">
              <blockquote>
                <span>You're cool</span>
                <svg className="tip">
                  <polygon points="0,0 40,0 20,20"/>
                </svg>
                <cite>Mom</cite>
              </blockquote>
            </div>
            </Fade>*/}
          </div>


      </div>
    );
  }
}
