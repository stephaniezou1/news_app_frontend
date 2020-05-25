import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    let { title, author, description, source_name, published_at, url, url_to_image } = this.props.article 

    return (
      <div className = "article-card">
        <img src = { url_to_image } />
        <div className = "card-container">
          <h5>{ source_name }</h5>
          <h2>{ title }</h2>

          { author === null ? "" : <h3>By { author }</h3>}
          <hr></hr>
          <p>{ description }</p>

          
        </div>
      </div>
    )
  }
}
