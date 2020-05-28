import React, { Component } from 'react'

class Tag extends Component {
  render() {
    let { content } = this.props.tag
    console.log("SHOULD BE AN OBJECT", this.props.tag)

  return (
    <>
      <button className="tag">
        #{ content } 
      </button>
    </>
  )
  }
}

export default Tag