import React from 'react'
import styleVars from '../assets/scss/_vars.scss'
import Form from './Form'

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
          +(49) 174 8766624
        </span>
        <span>
          Leipzig
        </span>
        <span>
          Germany
        </span>
      </div>
      <Form />
    </div>
  </div>
)

export default Contact
