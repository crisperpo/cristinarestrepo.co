import React from 'react'
import Field from './Field'
import Button from './Button'
import Axios from 'axios'

class Form extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      msg: '',
      nameValid: false,
      emailValid: false,
      msgValid: false,
      isValid: false,
      isSubmiting: false,
      isSubmitted: false,
      formFields: [
        {
          name: 'name',
          value: '',
          validity: false,
          label: 'Name',
          placeholder: 'Your name...',
          isTextarea: false
        },
        {
          name: 'email',
          value: '',
          validity: false,
          label: 'Email',
          placeholder: 'Your email...',
          isTextarea: false
        },
        {
          name: 'msg',
          value: '',
          validity: false,
          label: 'Message',
          placeholder: 'Drop me a line...',
          isTextarea: true
        }
      ]
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleUpdate (field, value) {
    this.setState(
      function (newState) {
        const formFields = newState.formFields.map(
          function (f) {
            if (f.name === field) {
              f.value = value
            }
            return f
          })
        return {
          formFields: formFields
        }
      },
      // Callback
      () => { this.validateField(field, value) }
    )
  }

  validateField (fieldName, fieldValue) {
    let validity = false

    switch (fieldName) {
      case 'name':
        validity = fieldValue.trim().length > 0
        break
      case 'email':
        validity = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        break
      case 'msg':
        validity = fieldValue.trim().length > 0
        break
      default:
        break
    }

    this.setState(
      function (newState) {
        const formFields = newState.formFields.map(
          function (f) {
            if (f.name === fieldName) {
              f.isValid = validity
            }
            return f
          })
        return {
          formFields: formFields
        }
      }
      // Callback
      , this.validateForm)
  }

  validateForm () {
    this.setState({ isValid: this.state.formFields.every((field) => field.isValid) })
  }

  submitForm () {
    const { isValid, formFields } = this.state

    if (isValid) {
      Axios.post(
        `https://formspree.io/crispe1586@gmail.com`,
        {formFields},
        {headers: {'Accept': 'application/json'}}
      )
        .then(res => {
          this.clearForm()
        })
    } else {
      this.setState({ isSubmitted: true })
    }
  }

  clearForm () {
    const newFormFields = this.state.formFields.map(
      f => ({...f, value: '', isValid: false})
    )

    this.setState({
      formFields: newFormFields,
      isValid: false,
      isSubmiting: false,
      isSubmitted: false
    })
  }

  render () {
    const {
      formFields,
      isSubmitting,
      isSubmitted,
      isValid
    } = this.state

    return (
      <div
        className="Form">
        {formFields.map((field, i) => <Field
          key={ i }
          label={ field.label }
          placeholder={ field.placeholder }
          textarea={ field.isTextarea }
          onChange={ (e) => this.handleUpdate(field.name, e.target.value) }
          value={ field.value }
          error={ !field.isValid && isSubmitted } />)}
        <Button
          submitForm={ this.submitForm }
          isDisabled={ (!isValid && isSubmitted) || isSubmitting }>
            Send
        </Button>
      </div>
    )
  }

}

export default Form
