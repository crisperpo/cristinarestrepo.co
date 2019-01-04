import React from 'react'
import styleVars from '../assets/scss/_vars.scss'

class Letter extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isHovered: false
    }
    this.handleOnHover = this.handleOnHover.bind(this)
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this)
  }
  componentDidMount () {
    this.letter.addEventListener('animationend', this.handleAnimationEnd)
  }
  componentWillUnmount () {
    this.letter.removeEventListener('animationend', this.handleAnimationEnd)
  }
  handleOnHover () {
    this.setState({
      isHovered: true
    })
  }
  handleAnimationEnd (e) {
    this.setState({
      isHovered: false
    })
  }

  render () {
    const { text, position } = this.props
    const titleColors = Object.values(styleVars)
    const letterStyle = {
      color: titleColors[position % (titleColors.length)]
    }
    const letterClass = this.state.isHovered ? 'Letter hovered' : 'Letter'

    return (
      <div className={ letterClass }
        ref={ (el) => (this.letter = el) }
        style={ letterStyle }
        onMouseEnter={ this.handleOnHover }
        onClick={ this.handleOnHover }>
        { text + ' ' }
      </div>
    )
  }

}

export default Letter
