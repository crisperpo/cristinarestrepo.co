import React, { Component } from 'react';
import styleVars from '../assets/scss/_vars.scss';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }
  componentDidMount () {
    window.addEventListener('animationend', this.handleAnimationEnd)
  }
  componentWillUnmount () {
    window.removeEventListener('animationend', this.handleAnimationEnd)
  }
  handleOnHover() {
    this.setState({
      isHovered: true
    });
  }
  handleAnimationEnd(e) {
    this.setState({
      isHovered: false
    });
  }

  render() {
    const { text, position } = this.props
    const titleColors = Object.values(styleVars)
    const letterStyle = {
      color: titleColors[position % (titleColors.length)]
    }
    const letterClass = this.state.isHovered ? "Letter hovered" : "Letter";

    return(
      <div className={ letterClass} style={ letterStyle } onMouseEnter={ this.handleOnHover }>
      { text + ' ' }
      </div>
  )
  }
}

export default Letter;
