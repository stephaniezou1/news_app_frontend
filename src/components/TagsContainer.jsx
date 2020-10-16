import React from 'react'
import Tag from './Tag.jsx'

const TagsContainer = (props) => {
  let tagsArray = props.tags.map((tag) => {
    return <Tag key={tag.id} tag={tag} handleSearchTerm={props.handleSearchTerm} handleFilterTerm={props.handleFilterTerm} />
  })

  return (
    <div className="tag-list">
      <h2 className="header">Article Tags</h2>
      <div className="tags">
        {tagsArray}
      </div>
    </div>
  )
}

export default TagsContainer