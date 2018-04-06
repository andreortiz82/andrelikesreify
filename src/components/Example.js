import React, { Component } from 'react';
import storyJSON from '../lib/story.json'

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [],
      currentResponse: '',
      questions: storyJSON.story,
      currentState: 0,
      questionCount: storyJSON.story.length
    }

    this.submitResponse = this.submitResponse.bind(this);
    this.updateResponse = this.updateResponse.bind(this);
    this.resetGame = this.resetGame.bind(this);

    this._ui_render_form = this._ui_render_form.bind(this);
    this._ui_render_result = this._ui_render_result.bind(this);
    this._ui_render_actions = this._ui_render_actions.bind(this);
  }

  autogenTheGame () {
    // For lazy asses
    var adjectiveSet1 = ['awesome', 'boring', 'callous', 'dweeb', 'extreme', 'flatulent', 'gaudy']
    var adjectiveSet2 = ['hairy', 'icky', 'jazzy', 'kooky', 'loaded', 'meaty', 'notorious', 'odorous', 'paranormal', 'quirky']
    var adjectiveSet3 = ['ratchet', 'snappy', 'tactful', 'ugly', 'victorious', 'wet', 'xanthous', 'zest']
    var nounSet = ['Cybernetics', 'Titan Colony', 'Crystalline Moon', 'Chooli Prime', 'Floating City', 'Spaceport on Satet', 'Aran Station', 'New Vulcan']
    var verbSet = ['picking my toes', 'air bending', 'pooping', 'watching the grass grow', 'floating', 'surfing the Chans']

    this.setState({
      currentState: this.state.questionCount+1,
      responses: [
        adjectiveSet1[Math.floor(Math.random()*adjectiveSet1.length)],
        verbSet[Math.floor(Math.random()*verbSet.length)],
        nounSet[Math.floor(Math.random()*nounSet.length)],
        adjectiveSet2[Math.floor(Math.random()*adjectiveSet2.length)],
        adjectiveSet3[Math.floor(Math.random()*adjectiveSet3.length)]
      ]
    })
  }

  updateResponse (event) {
    this.setState({
      currentResponse: event.target.value
    })
  }

  submitResponse(){
    var tempArray = this.state.responses
    tempArray.push(this.state.currentResponse)

    this.setState({
      responses: tempArray,
      currentResponse: '',
      currentState: this.state.currentState+1,
    })
  }

  resetGame () {
    this.setState({
      responses: [],
      currentResponse: '',
      currentState: 0
    })
  }

  _ui_render_form(){
    var self = this
    return this.state.questions.map(function(q, index){
      return (
        <div className={self.state.currentState === index ? "active panel-forms" : "panel-forms"} key={index}>
          <div className="field" data-step={index}>
            <span className="instruction">{q.type}</span>
            <div className="field-controls">
              <input type="text" className="input-field" value={self.state.currentResponse} onChange={self.updateResponse}/>
              <button type="button" className="next-btn" onClick={self.submitResponse.bind(self)}>Next</button>
            </div>
          </div>
        </div>
        )
    })
  }

  _ui_render_result(){
    var self = this
    return (
    <div className="story-result">
      <p className="lead">
        Andre Ortiz is a <span>{ this.state.responses[0] }</span> dude living in Austin, TX. He's always learning new skills like <span>{ this.state.responses[1] }</span> and <span>{ this.state.responses[2] }</span> (that new javascript framework). Mostly, he enjoys designing and building software with <span>{ this.state.responses[3] }</span> people and becoming better at his craft. Andre is the type of <span>{ this.state.responses[4] }</span> person you'd want on your team.
      </p>
    </div>
    )
  }

  _ui_render_actions(){
    if (this.state.currentState >= this.state.questionCount) {
      return (
        <div className="panel-actions">
          <button type="button" className="next-btn" onClick={this.resetGame.bind(this)}>Do it again</button>
        </div>
      )
    } else {
      return (
        <div className="panel-actions">
          <button type="button" className="next-btn" onClick={this.submitResponse.bind(this)}>Next</button>
          <button type="button" className="auto-gen-btn" onClick={this.autogenTheGame.bind(this)}>Auto-Generate</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="example-container">
        <div className="container">

          <h2>Honest to goodness, working software</h2>
          <p className="lead">You like Mad Libs&trade;? Of course you do. Here's an example of working components, state management and fun.</p>

          <div className="panel">

            <div className="panel-container">
              { this.state.currentState >= this.state.questionCount ? this._ui_render_result() : this._ui_render_form() }
            </div>

            { this._ui_render_actions() }
          </div>
        </div>
      </div>
    )
  }
}
