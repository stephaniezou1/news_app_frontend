import React, { Component } from 'react'
import Tag from './Tag.jsx'

class TagsContainer extends Component {

  render() {
   
    let tagArr = this.props.tags.map((tag) => {
      return <Tag 
        key={tag.id}
        tag={tag}
        handleSelectedTag={this.props.handleSelectedTag}
      />
    })

    // console.log("check this out", this.props.tags)

    return (
      <div className="tag-list">
        <h2 className="header">Article Tags</h2>
        <div className="tags">
          {tagArr}
        </div>
      </div>
    )
  }
}

export default TagsContainer