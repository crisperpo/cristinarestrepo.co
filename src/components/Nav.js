import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

class Nav extends React.Component {
    render() {
        return(
            <div className="Nav">
                <Link smooth to="/">Home</Link>
                <Link smooth to="/#about">About</Link>
                <Link smooth to="/#stack">Stack</Link>
                <Link smooth to="/#contact">Contact</Link>
            </div>
        )
    }
}

export default Nav;