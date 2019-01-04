import React from 'react'
import SkillSet from './SkillSet'
import styleVars from '../assets/scss/_vars.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faCogs, faHammer, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
library.add(faCode, faCogs, faHammer, faCodeBranch)

const Stack = () => (
  <div
    id="stack"
    className="Section">
    <span
      className="Title"
      style={{ color: styleVars.colorGreen }}>
      Stack
    </span>
    <div
      className="Body">
      <SkillSet
        icon="code"
        title="Front-End"
        content={ ['JavaScript', 'HTML', 'CSS/SCSS', 'ReactJS/Redux', 'VueJS'] } />
      <SkillSet
        icon="cogs"
        title="Back-End"
        content={ ['PHP', 'CakePHP', 'Python', 'C', 'MySQL'] } />
      <SkillSet
        icon="hammer"
        title="Tools"
        content={ ['Webpack', 'Gulp', 'Grunt', 'Bower', 'Git'] } />
      <SkillSet
        icon="code-branch"
        title="IT"
        content={ ['AWS', 'Heroku', 'CCNA', 'Fiddler', 'Bash'] } />
    </div>
  </div>
)

export default Stack
