import React, { Component } from 'react';
import SkillMeter from './SkillMeter.js';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default class Skills extends Component {
  render() {

    return (
      <div className="skills-container">
        <Fade>
        <div className="container">
          <h2>Capabilities + Process</h2>
          <p className="lead">For the last 15 years I have been crafting interactive content. Over that time, I've learned multiple programing languages and watched design trends fall in and out of favor. <br/>As the digital landscape evolves, one thing that remains the same is the Users need for a seemless experience.</p>
        </div>
        </Fade>
        <div className="skill-blocks">
          <Zoom delay={100}>
            <div className="skill-block">
              <SkillMeter label="Illustration" amount="85 15" color="black" caption="I can hang"/>
            </div>
          </Zoom>

          <Zoom delay={200}>
          <div className="skill-block">
            <SkillMeter label="Application Design" amount="98 2" color="black" caption="Level Badass"/>
          </div>
          </Zoom>

          <Zoom delay={300}>
          <div className="skill-block">
            <SkillMeter label="Experience Design" amount="98 2" color="black" caption="Level Badass"/>
          </div>
          </Zoom>

          <Zoom delay={400}>
          <div className="skill-block">
            <SkillMeter label="HTML + CSS" amount="95 5" color="black" caption="Level Badass"/>
          </div>
          </Zoom>

          <Zoom delay={500}>
          <div className="skill-block">
            <SkillMeter label="React JS" amount="65 35" color="black" caption="I can be dangerous"/>
          </div>
          </Zoom>

          <Zoom delay={600}>
          <div className="skill-block">
            <SkillMeter label="CLJS" amount="15 85" color="black" caption="Be patient with me"/>
          </div>
          </Zoom>

        </div>

        <div className="container message-blocks">

          <article className="message">
            <Slide left>
            <div className="caption">
              <h3>It starts with a pencil</h3>
              <p className="lead">New features are born on paper. After a good sketch session, I transition over to <a href="https://balsamiq.com/">Balsamiq</a> to refine it further.</p>
            </div>
            </Slide>
          </article>

          <article className="message">
            <Slide right>
            <div className="caption">
              <h3>Looking good and feeling good</h3>
              <p className="lead">Asethetics and animation are key to the Users overall experience. Using my design toolset, I craft a design worthy of praise and a free beer.</p>
            </div>
            </Slide>
          </article>

          <article className="message">
            <Slide left>
            <div className="caption">
              <h3>Super Nerd Legos&trade;</h3>
              <p className="lead">HTML, CSS and React: These are fantastic tools for build functional prototypes. Plus, it gives me mad street-cred with the developers.</p>
            </div>
            </Slide>
          </article>

          <article className="message">
            <Slide right>
            <div className="caption">
              <h3>Holy Deployment, Batman!</h3>
              <p className="lead">Like a loyal sidekick, I'm here support the engineers until the feature is live. Helping to setup the components, test the UX and handle the unexpected.</p>
            </div>
            </Slide>
          </article>

        </div>

      </div>
    );
  }
}
