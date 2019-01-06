import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ label, textarea, onChange, value, placeholder, error }) => (
  <div className="Field">
    <label>{label}</label>
    {textarea &&
    <textarea
      className={ error ? 'Invalid' : '' }
      onChange={ onChange }
      value={ value }
      placeholder={ placeholder }
      rows="4" />
    }
    {!textarea &&
    <input
      className={ error ? 'Invalid' : '' }
      type="text"
      onChange={ onChange }
      value={ value }
      placeholder={ placeholder } />
    }
  </div>
)

Field.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

Field.defaultProps = {
  textarea: false,
  placeholder: ''
}

export default Field
