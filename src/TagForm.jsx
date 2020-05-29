import React, { Component } from 'react'

class TagForm extends Component {
  state = {
    value: "",
    joiner_id: 0
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    let tagsArray = this.props.joiners.map((joiner) => {
      return <option key={joiner.id} value={joiner.tag_name}>{joiner.tag_name}</option>
    })

    console.log(this.state.value)

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
        <select value={this.state.value} onChange={this.handleChange}>
          { tagsArray }
        </select>
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