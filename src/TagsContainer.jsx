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
      <div className="tag-list">
        <h2>Article Tags</h2>
        { this.state.tags.map((tag) => {
          return <Tag key={tag.id} tag={tag} />
        }) }
      </div>
    )
  }
}

export default TagsContainer