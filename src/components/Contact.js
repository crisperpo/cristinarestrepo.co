import React from 'react'
import styleVars from '../assets/scss/_vars.scss'

const Contact = () => (
  <div
    id="contact"
    className="Section">
    <span
      className="Title"
      style={{ color: styleVars.colorPink }}>
      Contact
    </span>
    <div
      className="Body">
      <div
        className="Info">
        <span>
          Leipzig
        </span>
        <span>
          Germany
        </span>
      </div>
      <div
        className="Form">
        Form
      </div>
    </div>
  </div>
)

export default Contact
