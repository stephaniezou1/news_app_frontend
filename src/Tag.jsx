import React, { Component } from 'react'

class Tag extends Component {
  render() {
    let { content } = this.props.tag 

    return (
      <div className="tag-list">
        <button className="tag">{content}</button>
      </div>
    )
  }
}

export default Tag