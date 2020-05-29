import React, { Component } from 'react'

class TagForm extends Component {
  state = {

  }

  render() {
    return (
      <>
      <form className="new-tag" onSubmit={this.props.handleSubmit}>
        <h3 className="header">
          Add a #tag
        </h3>
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

      <form className="new-tag" onSubmit={this.props.handleDelete}>
        <h3 className="header">
          Remove a #tag
        </h3>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        {/* <input
          className="new-tag" 
          type="text" 
          name="newTag"
          value={this.props.newTag} 
          onChange={this.props.handleChange}
          autoComplete="off"
          placeholder="#"
        /> */}
        <input
          className="new-tag-submit" 
          type="submit" 
          value="Delete tag" 
        />
      </form>
      </>
    )
  }
}

export default TagForm