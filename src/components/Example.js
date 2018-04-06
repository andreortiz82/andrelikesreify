import React, { Component } from 'react';
import storyJSON from '../lib/story.json'
import Slide from 'react-reveal/Slide';
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
      isReadable: false,
      isValid: null
    }

    this.submitResponse = this.submitResponse.bind(this);
    this.updateResponse = this.updateResponse.bind(this);
    this.resetGame = this.resetGame.bind(this);

    this._ui_render_form = this._ui_render_form.bind(this);
    this._ui_render_result = this._ui_render_result.bind(this);
    this._ui_render_label = this._ui_render_label.bind(this);
    this._ui_render_bullets = this._ui_render_bullets.bind(this);
  }

  autogenTheGame () {
    this.setState({
      currentStep: this.state.questionCount,
      isReadable: true,
      currentResponse: '',
      isValid: null,
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
      if (this.state.currentResponse === '') {

        this.setState({
          isValid: false
        })

      } else {
        var _responses = this.state.responses
        var _step = this.state.currentStep

        _responses.push(this.state.currentResponse)
        _step = _step+1

        this.setState({
          isValid: true,
          responses: _responses,
          currentStep: _step,
          currentResponse: '',
          isReadable: _step >= this.state.questionCount ? true : false
        })
      }
    }
  }

  resetGame () {
    this.setState({
      responses: [],
      currentResponse: '',
      questions: storyJSON.story,
      currentStep: 0,
      questionCount: storyJSON.story.length,
      isReadable: false,
      isValid: null
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

  _validation_message () {
    var messages = [
      'Add something...',
      'You have to add something...',
      'Just add something...',
      'Type something...'
    ]

    if (this.state.isValid !== null || this.state.isValid !== false) {
      return messages[Math.floor(Math.random()*messages.length)]
    } else {
      return null
    }
  }

  _ui_render_form () {
    return (
      <div className="form">
        <div className="label-wrapper">
          <div className={"instruction-stack step-"+this.state.currentStep}>
            { this._ui_render_label() }
            <span className="instruction" >Such great fun!</span>
          </div>
        </div>
        <div className="field">

          <Fade collapse left when={ this.state.isReadable === false }>
            <div className="field-controls">
              <input type="text" className="input-field" placeholder={ this._validation_message() } onKeyPress={this.submitResponse.bind(this)} value={this.state.currentResponse} onChange={this.updateResponse}/>
              <span>Hit "Enter"</span>
            </div>

            <div className="bullet-container">
              { this._ui_render_bullets() }
            </div>
          </Fade>

          <Fade collapse cascade right when={ this.state.isReadable === true }>
            <div className="field-actions">
              <button type="button" className="reset-btn" onClick={this.resetGame.bind(this)}>Do it again</button>
              <button type="button" className="auto-gen-btn" onClick={this.autogenTheGame.bind(this)}>Auto-Generate</button>
            </div>
          </Fade>
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
        </div>
      </div>
    )
  }
}
