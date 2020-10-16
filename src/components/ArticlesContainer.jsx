import React, { Component } from 'react'
import Article from "./Article.jsx"

class ArticlesContainer extends Component {
  render() {
    let articlesArr = this.props.articles.map((article) => {
      return ( <Article
        key = {article.id} 
        article = {article} 
        addNewTag = {this.props.addNewTag}
        deleteATag = {this.props.deleteATag}
        formatDateTime = {this.props.formatDateTime}
        addALike = {this.props.addALike}
     />)
    })

    return (
      <>
      <h3>Showing { this.props.articles.length } articles</h3> 
      <div className = "ui two stackable cards">
        { articlesArr }
      </div>
      </>
    )
  }
}

export default ArticlesContainer