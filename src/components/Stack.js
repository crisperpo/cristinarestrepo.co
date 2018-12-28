import React, { Component } from 'react';
import SkillSet from './SkillSet';
class Stack extends Component {
    render() {
        return (
            <div id="stack" className="Section">
                <span className="Title">Stack</span>
                    <div className="Content">
                        <SkillSet />
                        <SkillSet />
                        <SkillSet />
                        <SkillSet />
                    </div>
                </div>
        );
    }
}

export default Stack;
