import React, { Component } from 'react';
import SkillSet from './SkillSet';
import styleVars from '../assets/scss/_vars.scss';

class Stack extends Component {
    render() {
        const titleStyles = {
            color: styleVars.colorGreen
        }
        return (
            <div id="stack" className="Section" >
                <span className="Title" style={ titleStyles }>Stack</span>
                <div className="Body">
                    <SkillSet
                        title="Coding"
                        content="JavaScript, HTML, CSS/SCSS, PHP, Python, Scala" />
                    <SkillSet
                        title="Frameworks"
                        content="ReactJS/Redux, VueJS, Jquery, Flexbox, Laravel" />
                    <SkillSet
                        title="Tools"
                        content="Webpack, Gulp, Grunt, bower, AWS, Github" />
                    <SkillSet
                        title="Languages"
                        content="Spanish, English, Portuguese" />
                </div>
            </div>
        );
    }
}

export default Stack;
