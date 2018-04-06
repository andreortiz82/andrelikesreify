import React, { Component } from 'react';
import storyJSON from '../lib/story.json'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [],
      currentResponse: '',
      questions: storyJSON.story,
      currentStep: 0,
      questionCount: storyJSON.story.length,
      isReadable: false
    }

    this.submitResponse = this.submitResponse.bind(this);
    this.updateResponse = this.updateResponse.bind(this);
    this.resetGame = this.resetGame.bind(this);

    this._ui_render_form = this._ui_render_form.bind(this);
    this._ui_render_result = this._ui_render_result.bind(this);
    this._ui_render_actions = this._ui_render_actions.bind(this);
    this._ui_render_label = this._ui_render_label.bind(this);
    this._ui_render_bullets = this._ui_render_bullets.bind(this);


  }

  autogenTheGame () {
    this.setState({
      currentStep: this.state.questionCount+1,
      isReadable: true,
      responses: [
        storyJSON.adjective[Math.floor(Math.random()*storyJSON.adjective.length)],
        storyJSON.verb[Math.floor(Math.random()*storyJSON.verb.length)],
        storyJSON.noun[Math.floor(Math.random()*storyJSON.noun.length)],
        storyJSON.adjective[Math.floor(Math.random()*storyJSON.adjective.length)],
        storyJSON.adjective[Math.floor(Math.random()*storyJSON.adjective.length)]
      ]
    })
  }

  updateResponse (event) {
    this.setState({
      currentResponse: event.target.value
    })
  }

  submitResponse(e){
    if (e.key === 'Enter') {
      var tempArray = this.state.responses
      tempArray.push(this.state.currentResponse)
      if (this.state.currentStep !== (this.state.questionCount-1)) {
        this.setState({
          responses: tempArray,
          currentResponse: '',
          currentStep: this.state.currentStep+1,
          isReadable: false
        })
      } else {
        this.setState({
          responses: tempArray,
          currentResponse: '',
          currentStep: this.state.currentStep+1,
          isReadable: true
        })
      }
    }
  }

  resetGame () {
    this.setState({
      responses: [],
      currentResponse: '',
      currentStep: 0,
      isReadable: false
    })
  }

  _ui_render_label () {
    return this.state.questions.map(function(q, index) {
      return (
          <span className="instruction" key={index}>{q.type}</span>
        )
    })
  }

  _ui_render_bullets () {
    var self = this
    return this.state.questions.map(function(q, index) {
      return (
          <span className={ self.state.currentStep === index ? "bullet active" : "bullet"} key={index}></span>
        )
    })
  }

  _ui_render_form () {
    var self = this
    return (
      <div className="form">
        <div className="label-wrapper">
          <div className={"instruction-stack step-"+this.state.currentStep}>
            { this._ui_render_label() }
          </div>
        </div>
        <div className="field">
          <div className="field-controls">
            <input type="text" className="input-field" onKeyPress={self.submitResponse.bind(self)} value={self.state.currentResponse} onChange={self.updateResponse}/>
            <span>Hit "Enter"</span>
          </div>

          <div className="bullet-container">
            { this._ui_render_bullets() }
          </div>
        </div>
      </div>
    )
  }

  _ui_render_result(){
    return (
    <div className="story-result">
      <p className={ this.state.isReadable ? "lead readable" : "lead"}>
        Andre Ortiz is a <Fade delay={100}><span>{ this.state.responses[0]}</span></Fade> dude living in Austin, TX. He's always learning new skills like <Fade delay={200}><span>{ this.state.responses[1] }</span></Fade> and <Fade delay={300}><span>{ this.state.responses[2] }</span></Fade> (that new javascript framework). Mostly, he enjoys designing and building software with <Fade delay={400}><span>{ this.state.responses[3] }</span></Fade> people and becoming better at his craft. Andre is the type of <Fade delay={500}><span>{ this.state.responses[4] }</span></Fade> person you'd want on your team.
      </p>
    </div>
    )
  }

  _ui_render_actions(){
    if (this.state.currentStep >= this.state.questionCount) {
      return (
        <div className="panel-actions">
          {/*<button type="button" className="next-btn" onClick={this.resetGame.bind(this)}>Do it again</button>*/}
        </div>
      )
    } else {
      return (
        <div className="panel-actions">
          {/*<button type="button" className="auto-gen-btn" onClick={this.autogenTheGame.bind(this)}>Auto-Generate</button>*/}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="example-container">
        <Slide left>
          <div className="form-container">
            <div className="panel">
              <h2>Golly gee! Real code.</h2>
              <p className="lead">Here's a quick example of my capabilities. It's totally original. I call it <strike>MadLibs&trade;</strike> ... <br/>ZannyWordprov&trade; (it's a working title)</p>
              { this._ui_render_form() }
            </div>
          </div>
        </Slide>
        <div className="story-container">
          <div className="panel">
            { this._ui_render_result() }
          </div>
          {/*<button type="button" className="auto-gen-btn" onClick={this.autogenTheGame.bind(this)}>Auto-Generate</button>*/}
          {/*<button type="button" className="next-btn" onClick={this.resetGame.bind(this)}>Do it again</button>*/}
        </div>
      </div>
    )
  }
}
