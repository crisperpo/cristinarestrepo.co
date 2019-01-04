import React, { Component } from 'react'
import Letter from './Letter'

class Title extends Component {

  splitTitle (titleString, lineIndex) {
    const titleArray = titleString.split('')

    return titleArray.map(function (letter, i) {
      return (<Letter key={ i } position={ i + lineIndex } text={ letter } />)
    })
  }
  render () {
    return (
      <div
        className="Title">
        {
          ['Cristina', 'Restrepo'].map((titleSegment, lineIndex) => <div className="TitleSegment" key={ lineIndex }>{ this.splitTitle(titleSegment, lineIndex) }</div>)
        }
      </div>
    )
  }

}

export default Title
