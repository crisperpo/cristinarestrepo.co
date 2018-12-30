import React, { Component } from 'react';
import styleVars from '../assets/scss/_vars.scss';

class About extends Component {
    render() {
      const titleStyles = {
        color: styleVars.colorBlue
      }
      return(
        <div id="about" className="Section">
                <span className="Title" style={ titleStyles }>About</span>
                <div className="Body">
                    <div className="Description">
                        <p>
                            I am Cristina, a web enthusiast who started coding in 2011 as a full-stack developer, and later decided to focus exclusively in front-end technologies.
                        </p>
                        <p>
                            Given my full-stack dev past, I have got a diverse set of skills, ranging from PHP/CakePHP, MySQL, AWS and CCNA, all the way down to HTML, CSS/SCSS, JavaScript, VueJS, ReactJS, and Redux.
                        </p>
                        <p>
                            Take me as a self learner who is continuously seeking out for new tools and tech trends in order to be up to date as the web evolves.
                        </p>
                    </div>
                    <div className="Photo">
                        <img src="/me.jpg" alt="My profile picture" />
                    </div>
                </div>
        </div>
    );
    }
}

export default About;
