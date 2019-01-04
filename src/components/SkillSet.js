import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillSet = ({ icon, title, content }) => (
  <div
    className="SkillSet">
    <FontAwesomeIcon
      className="Icon Icon--circle"
      icon={ icon } />
    <span
      className="Subtitle">
      { title }
    </span>
    { content.map((skill, i) => <span>{ skill }</span>) }
  </div>
)

export default SkillSet
