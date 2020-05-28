import React, { Component } from 'react'

class Tag extends Component {

  handleTagFilter = (event) => {
    this.props.handleSearchTerm(event.target.innerText);
  }

  render() {
    let { content } = this.props.tag
    console.log("SHOULD BE AN OBJECT", this.props.tag)

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