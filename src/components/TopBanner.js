import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
export default class TopBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showBanner: false
    }

    this.scrollWatcher = this.scrollWatcher.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollWatcher);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollWatcher);
  }

  scrollWatcher(e) {
    if (window.pageYOffset > 600) {
      this.setState({
        showBanner: true
      })
    } else {
      this.setState({
        showBanner: false
      })
    }
  }

  render() {
    return (
      <div className={ this.state.showBanner ? "banner-component" : "banner-component hide" }>
        <a href="mailto:hello@andreortiz.com"><span><b>Hey, Reify!</b> I want to work with you. <b>Click the banner</b> and let's talk about it.</span></a>
      </div>
    );
  }
}
