import React, { Component } from 'react'

class TagForm extends Component {
  render() {
    return (
      <>
      <form className="new-tag" onSubmit={this.props.handleSubmit}>
        <h5>
          Add a #tag
        </h5>
        <input
          className="new-tag" 
          type="text" 
          name="newTag"
          value={this.props.newTag} 
          onChange={this.props.handleChange}
          autoComplete="off"
          placeholder="#"
        />
        <input
          className="new-tag-submit" 
          type="submit" 
          value="Create tag" 
        />
      </form>
      </>
    )
  }
}

export default TagForm