import React, { Component } from 'react';

// Sections
import TopBanner from './components/TopBanner.js'
import Introduction from './components/Introduction.js'
import Skills from './components/Skills.js'
import ZannyWordprov from './components/ZannyWordprov.js'
import About from './components/About.js'
import Conclusion from './components/Conclusion.js'

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TopBanner/>
        <Introduction/>
        <Skills/>
        <ZannyWordprov/>
        <About/>
        <Conclusion/>
      </div>
    );
  }
}
