import React, { Component } from 'react'
import TagForm from './TagForm.jsx'

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

  handleDisplayTagEdit = () => {
    this.setState({
      displayTagEdit: !this.state.displayTagEdit
    })
  }

  render() {
    console.log("likes:", this.props.article.likes)
    let { title, author, source_name, published_at, url, url_to_image, joiners, likes } = this.props.article 
    let { displayTagEdit } = this.state

    let tagsArray = this.props.article.joiners.map((joiner) => {
      return <div key={joiner.id}> 
        <button
          className="tag"
          key={joiner.id}>
            { joiner.tag_name }
        </button>
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
        <h5 className="header" id="date">
          {/* { this.props.formatDateTime(published_at) } */}
          { published_at }
        </h5>

        <div className="article-tag">
          { tagsArray }
        </div>
        
        <button
          onClick={this.handleDisplayTagEdit}
          className="tag-toggle"
          id="edit"
        >
          Edit tags
        </button>

        { displayTagEdit
          ?
          <TagForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deleteATag = {this.props.deleteATag}
          newTag={this.state.newTag}
          joiners={joiners}/>
          :
          null
        }
        <span className="like-button">
            <i className="heart outline like icon"></i>
              {likes} likes
         </span>

      </div>
    )
  }
}

export default Article;
