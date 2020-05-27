import React, { Component } from 'react'

class Tag extends Component {
  render() {
    let { content } = this.props.tag
    let randomColor = require('randomcolor')
    let color = randomColor()
    console.log("HERE", this.props.tag)

    return (
      <>
        <button className="tag">#{content}</button>
      </>
    )
  }
}

export default Tag