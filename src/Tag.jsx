import React, { Component } from 'react'

class Tag extends Component {

  handleTagFilter = (event) => {
    this.props.handleSearchTerm(event.target.innerText)
    console.log(event.target.innerText)
  }

  render() {
    let { content } = this.props.tag
  return (
    <>
      <button className="tag" onClick={this.handleTagFilter}>
        #{ content } 
      </button>
    </>
  )
  }
}

export default Tag