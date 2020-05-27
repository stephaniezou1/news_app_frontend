import React, { Component } from 'react'
import Tag from './Tag.jsx'

export default class Article extends Component {
  render() {
    // turn the published_at value into a string so that we can format it
    let object = this.props.article
    let dateString = JSON.stringify(object.published_at)
    // console.log(dateString)

    let { title, author, description, source_name, published_at, url, url_to_image } = this.props.article 

    return (
      <div className = "article-card">
        <a href = { url } target="blank">
          <img src = { url_to_image } />
        </a>
        <div className = "card-container">
          <h5>{ source_name }</h5>
          <h2>{ title }</h2>
          { author === null || "" ? "" : <h3>By { author }</h3>}
          {/* <h5>{ new Intl.DateTimeFormat('en-US').format(dateString) }</h5> */}
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>{ description }</p>
        </div>
        <Tag/>
      </div>
    )
  }
}