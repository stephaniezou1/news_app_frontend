import React, { Component } from 'react'
import Tag from './Tag.jsx'
import TagFrom from './TagForm.jsx'
import TagForm from './TagForm.jsx'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

class Article extends Component {

  state = {
    newTag: "",
    displayTagEdit: false,
  }

  handleChange = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addNewTag(this.state.newTag, this.props.article.id)
    this.setState({
      newTag: ""
    })
  }

  handleDelete = (joinerId) => {
    fetch(`http://localhost:3000/joiners/${joinerId}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then((updatedArticle) => {
        this.props.deleteATag(updatedArticle, joinerId)
      })
  }

  handleDisplayTagEdit = () => {
    this.setState({
      displayTagEdit: !this.state.displayTagEdit
    })
  }

  render() {
    let { title, author, source_name, published_at, url, url_to_image } = this.props.article 
    let { displayTagEdit } = this.state
    console.log(displayTagEdit)

    let tagsArray = this.props.article.joiners.map((joiner) => {
      return <div key={joiner.id}> 
        <button
          className="tag"
          key={joiner.id}>
            #{ joiner.tag_name }
        </button>
        <button onClick={(evt) => {
          this.handleDelete(joiner.id)
        }}>x</button> 
      </div>
    })
    
    return (
        <div className = "card">

        <div className="image">
          <a href = { url } target="blank"><img src = { url_to_image } /></a>
        </div>

        <div className="meta">
          <h5 className="header">{ source_name }</h5>
        </div>
        <h2 className="header">{ title }</h2>
        { author === null || author === "" ? <h3 className="header">By {source_name}</h3> : <h3 className="header">By { author }</h3>}
        <h5 className="header" id="date">{ published_at }</h5>

        <div className="article-tag">
          { tagsArray }
        </div>
        
        <button onClick={this.handleDisplayTagEdit}>Edit tags</button>

        { displayTagEdit
          ?
          <TagForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          newTag={this.state.newTag}/>
          :
          null
        }
      </div>
    )
  }
}

export default Article;
