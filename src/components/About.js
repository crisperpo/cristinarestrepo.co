import React, { Component } from 'react'
import styleVars from '../assets/scss/_vars.scss'

class About extends Component {

  render () {
    const titleStyles = {
      color: styleVars.colorBlue
    }
    return (
      <div id="about" className="Section">
        <span className="Title" style={ titleStyles }>About</span>
        <div className="Body">
          <div className="Photo">
            <img src="/me.jpg" alt="Me" />
          </div>
          <div className="Description">
            <div>
              <span className="Subtitle">Who I am</span>
                A web enthusiast who started coding in 2011 as a full-stack developer, and later decided to focus in front-end technologies. A self learner continuously seeking for new tech trends in order to be up to date as the web evolves.
            </div>
            <div>
              <span className="Subtitle">My work</span>
                Given my full-stack dev past, I have got a diverse set of skills, ranging from <u>PHP</u>, CakePHP, Python, C, <u>MySQL</u>, <u>AWS</u>, Heroku, and CCNA, all the way down to HTML, Twig, <u>CSS/SCSS</u>, <u>JavaScript</u>, VueJS, <u>ReactJS</u>, and <u>Redux</u>.
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default About
