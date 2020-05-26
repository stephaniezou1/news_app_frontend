import React, { Component } from 'react'
import Tag from './Tag.jsx'

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
      <>
        { this.state.tags.map((tag) => {
          return <Tag key={tag.id} tag={tag} />
        }) }
      </>
    )
  }
}

export default TagsContainer