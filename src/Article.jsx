import React, { Component } from 'react'

export default class Article extends Component {
  render() {
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
          {/* <h5>{ published_at }</h5> */}
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>{ description }</p>
        </div>
      </div>
    )
  }
}