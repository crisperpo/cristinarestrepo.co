import React, { Component } from 'react';
import styleVars from '../assets/scss/_vars.scss';

class Contact extends Component {
    render() {
        const titleStyles = {
            color: styleVars.colorPink
        }
        return (
            <div id="contact" className="Section">
                <span className="Title" style={ titleStyles }>Contact</span>
                <div className="Body">
                    <span>+49 174 8766624</span>
                    <span>crispe1586@gmail.com</span>
                    <span>Leipzig, Germany</span>
                </div>
            </div>
    );
    }
}

export default Contact;
