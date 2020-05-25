import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    let { title } = this.props.article 

    return (
      <div className = "article-card">
        <h3>{ title }</h3>
      </div>
    )
  }
}
