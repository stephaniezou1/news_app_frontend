import React, { Component } from 'react'
import Tag from './Tag.jsx'

export default class Article extends Component {

  state = {
    newTag: ""
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
    evt.target.reset()
  }

  render() {
    // turn the published_at value into a string so that we can format it
    let object = this.props.article
    let dateString = JSON.stringify(object.published_at)
    // console.log(dateString)

    let { title, author, description, source_name, published_at, url, url_to_image } = this.props.article 

    let tagsArray = this.props.article.joiners.map((tag) => {
      return <Tag 
        tag={tag.tag_name}
        key={tag.tag_id}
      />
    })

    // console.log("see here", tagsArray)
    // console.log("ARTICLE CONSOLE LOG", this.props.article)
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
          {tagsArray}
        </div>
        
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="tags icon"></i>
            <input type="text" placeholder="Add a new tag" />
          </div>
        </div>

        {/* <h4>Description</h4>
          <p>{ description }</p> */}
        
        {/* <form className="new-tag" onSubmit={this.handleSubmit}>
          <label>
            Add a #tag
          </label>
          <input
            className="new-tag" 
            type="text" 
            name="newTag"
            value={this.state.newTag} 
            onChange={this.handleChange}
          />
          <input className="new-tag-submit" type="submit" value="Create tag" />
        </form> */}

      </div>
    )
  }
}