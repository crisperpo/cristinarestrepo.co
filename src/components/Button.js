import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ isDisabled, submitForm }) => (
  <button className="Button"
    disabled={ isDisabled }
    onClick={ () => submitForm() }>
    Send
  </button>
)

Button.propTypes = {
  submitForm: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default Button
