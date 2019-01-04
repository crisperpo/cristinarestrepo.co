import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styleVars from '../assets/scss/_vars.scss'

class Nav extends React.Component {

  render () {
    return (
      <div className="Nav">
        <Link
          smooth
          to="/#about"
          className="NavLink"
          style={{ color: styleVars.colorBlue }}>
          <span className="NavItem">About</span>
        </Link>
        <Link
          smooth
          to="/#stack"
          className="NavLink"
          style={{ color: styleVars.colorGreen }}>
          <span className="NavItem">Stack</span>
        </Link>
        <Link
          smooth to="/#contact"
          className="NavLink"
          style={{ color: styleVars.colorPink }}>
          <span className="NavItem">Contact</span>
        </Link>
      </div>
    )
  }

}

export default Nav
