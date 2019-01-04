import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class Nav extends React.Component {

  render () {
    return (
      <div className="Nav">
        <Link smooth to="/#about" className="NavLink">
          <span className="NavItem">About</span>
        </Link>
        <Link smooth to="/#stack" className="NavLink">
          <span className="NavItem">Stack</span>
        </Link>
        <Link smooth to="/#contact" className="NavLink">
          <span className="NavItem">Contact</span>
        </Link>
      </div>
    )
  }

}

export default Nav
