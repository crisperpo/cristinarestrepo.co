import React from 'react';

class SkillSet extends React.Component {
    render() {
        const { title, content } = this.props

        return (
            <div className="SkillSet">
                <span className="Subtitle">{ title }:</span>
                <p>{ content }</p>
            </div>
        )
    }
}

export default SkillSet;
