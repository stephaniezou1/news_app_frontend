import React, { Component } from 'react'

class TagForm extends Component {
  state = {
    selectedTag: "",
    joiner_id: 0
  }

  handleChange = (event) => {
    let joinerId = 0

    this.props.joiners.map((joiner) => {
      if (this.state.selectedTag === joiner.tag_name) {
        joinerId = joiner.id
      }
    })

    this.setState({
      selectedTag: event.target.value,
      joiner_id: joinerId
    })
  }

  handleDelete = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/joiners/${this.state.joiner_id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then((updatedArticle) => {
        this.props.deleteATag(updatedArticle, this.state.joiner_id)
      })
  }

  render() {

    console.log(this.state.selectedTag, this.props.joiners, this.state.joiner_id)

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

      { this.props.joiners.length < 1 ? null :
        <>
          <form className="new-tag" onSubmit={this.handleDelete} >
            <h3 className="header">
              Remove a #tag
            </h3>

            <select value={this.state.selectedTag} onChange={this.handleChange} className="select-tag">
              { this.props.joiners.map((joiner) =>
                <option key={joiner.id} value={joiner.tag_name}>{joiner.tag_name}</option>)
              }
            </select>

            <input
              className="new-tag-submit" 
              type="submit" 
              value="Delete tag" 
            />
          </form>
        </>
      }
      </>
    )
  }
}

export default TagForm