import React, { Component } from 'react'
import Tag from './Tag.jsx'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

class Article extends Component {

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

  // handleDelete = (tagToBeDeleted) => {
  //   let newArticleTags = []
  //   this.props.article.joiners.map((joiner) => {
  //     if (joiner.tag_id === tagToBeDeleted.id) {
  //       newArticleTags = this.props.article.joiners.filter(tag => tag !== tagToBeDeleted)
  //     }
  //   })
  //   return newArticleTags  
  // }

  // deleteATag = (idOfJoinerFromArticle) => {
  //   fetch(`http://localhost:3000/joiners/${idOfJoinerFromArticle}`, {
  //     method: "DELETE"
  //   })
  //     .then(resp => resp.json())
  //     .then((deletedTag) => {

  //       handleDelete(deletedTag)
  //     })
  // } 

  render() {

    console.log("article joiner id", this.props.article.joiners.tag_id)
    let { title, author, description, source_name, published_at, url, url_to_image } = this.props.article 

    let tagsArray = this.props.article.joiners.map((joiner) => {
      return <div> 
        <button className="tag" key={joiner.tag_id}>#{ joiner.tag_name }</button>
        {/* <button onChange={this.deleteATag}>x</button>  */}
      </div>
    })

    // console.log("see here", tagsArray)
    // console.log("ARTICLE CONSOLE LOG", this.props.article)
    return (
        <div className = "card">

        <div className="image">
          {/* <a href = { url } target="blank"> */}
            <img src = { url_to_image } />
            {/* </a> */}
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
        
        {/* <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="tags icon"></i>
            <input 
              type="text" 
              placeholder="Add a new tag" 
              name="newTag"
              value={this.state.newTag} 
              onChange={this.handleChange}
            />
            <button type="submit" class="ui button">Submit</button>          </div>
        </div> */}

        {/* <h4>Description</h4>
          <p>{ description }</p> */}
        
        <form className="new-tag" onSubmit={this.handleSubmit}>
          <h5>
            Add a #tag
          </h5>
          <input
            className="new-tag" 
            type="text" 
            name="newTag"
            value={this.state.newTag} 
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="#"
          />
          <input 
            className="new-tag-submit" 
            type="submit" 
            value="Create tag" 
          />
        </form>

      </div>
    )
  }
}

export default Article;
