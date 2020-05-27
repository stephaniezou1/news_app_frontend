import React, { Component } from 'react'
import Tag from './Tag.jsx'

class TagsContainer extends Component {

  render() {
   
    let tagArr = this.props.tags.map((tag) => {
      return <Tag 
        key={tag.id} tag={tag}
      />
    })

    // console.log(this.props.tags)

    return (
      <div className="tag-list">
        <h2>Article Tags</h2>
        <div>
          {tagArr}
        </div>
      </div>
    )
  }
}

export default TagsContainer