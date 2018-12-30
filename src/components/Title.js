import React, { Component } from 'react';
import styleVars from '../assets/scss/_vars.scss';

const Letter = function({ text, position }) {
  const titleColors = Object.values(styleVars)
  const letterStyle = {
    color: titleColors[position]
  }
  return(
    <div className="Letter" style={ letterStyle }>
    { text + ' ' }
    </div>
)
} ;

class Title extends Component {
  splitTitle(titleString, lineIndex) {
    const titleArray = titleString.split('');

    return (
      <div className="TitleSegment">
        { titleArray.map(function(letter, i) {
            return (<Letter key={ i } position={ i + lineIndex } text={ letter } />);
          })
        }
      </div>);
  }
  render() {
    return(
      <div className="Title">
        {
          ['Cristina', 'Restrepo'].map((titleSegment, lineIndex) => this.splitTitle(titleSegment, lineIndex) )
        }
      </div>
    )
  }
}

export default Title;
