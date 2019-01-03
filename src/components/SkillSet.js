import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SkillSet extends React.Component {
    render() {
        const { icon, title, content } = this.props

        return (
            <div className="SkillSet">
                <FontAwesomeIcon
                    className="Icon Icon--md"
                    icon={ icon } />
                <span className="Subtitle">{ title }</span>
                { content.map((skill, i) => <span>{ skill }</span>) }
            </div>
        )
    }
}

export default SkillSet;
