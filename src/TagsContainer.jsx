import React, { Component } from 'react'

class TagsContainer extends Component {
  state = {
    tags: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/tags")
    .then(r => r.json())
    .then((newTags) => {
      this.setState({
        tags: newTags
      })
    })
  }

  render() {
    console.log(this.state.tags)

    return (
      <div>
        <p>Tags!</p>
      </div>
    )
  }
}

export default TagsContainer