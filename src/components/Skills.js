import React, { Component } from 'react';
import SkillMeter from './SkillMeter.js';

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <div className="container">
          <h2>For the last 12 years... </h2>
          <p className="lead">I've been learning new skills, developing my craft and building up tolerance for this moment. Crafting great products with good people and seeing real results - <span>that's what I'm into.</span></p>
        </div>

        <div className="skill-blocks">
          <div className="skill-block">
            <SkillMeter label="Illustration" amount="85 15" color="orange" caption="I can hang"/>
          </div>
          <div className="skill-block">
            <SkillMeter label="Application Design" amount="98 2" color="green" caption="Level Badass"/>
          </div>
          <div className="skill-block">
            <SkillMeter label="Experience Design" amount="98 2" color="green" caption="Level Badass"/>
          </div>
          <div className="skill-block">
            <SkillMeter label="HTML + CSS" amount="95 5" color="green" caption="Level Badass"/>
          </div>
          <div className="skill-block">
            <SkillMeter label="React JS" amount="65 35" color="yellow" caption="I can be dangerous"/>
          </div>
          <div className="skill-block">
            <SkillMeter label="CLJS" amount="15 85" color="red" caption="Be patient with me"/>
          </div>
        </div>

        <div className="container message-blocks">
          <article className="message">
            <div className="caption">
              <h3>The <i>"I got it!"</i> moment</h3>
              <p className="lead">When creativity hits, I grab something to write with and start planning. After a good sketch session, I transition over to Balsamiq to refine it further.</p>
            </div>
          </article>
          <article className="message">
            <div className="caption">
              <h3>Looking good and feeling good</h3>
              <p className="lead">Once a feature has been refined, it's time to apply style and animation. Using my design toolset, I craft a design worthy of praise and a free beer.</p>
            </div>
          </article>
          <article className="message">
            <div className="caption">
              <h3>Super Nerd Legos&trade;</h3>
              <p className="lead">HTML, SCSS and ReactJS: These are just a few tools I use to bring our features to life. Plus, it gives me mad street-cred with the developers.</p>
            </div>
          </article>
          <article className="message">
            <div className="caption">
              <h3>Holy Deployment, Batman!</h3>
              <p className="lead">Like a loyal sidekick, I'm here support the engineers until the feature is live. Helping to setup the components, test the UX and handle the unexpected.</p>
            </div>
          </article>
        </div>

      </div>
    );
  }
}
