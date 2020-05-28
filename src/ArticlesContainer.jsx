import React, { Component } from 'react'
import Article from "./Article.jsx"

class ArticlesContainer extends Component {
 
  render() {
    let articlesArr = this.props.articles.map((article) => {
      // console.log(article)
      return <Article 
        key = {article.id} 
        article = {article} 
        addNewTag = {this.props.addNewTag}
        deleteATag = {this.props.deleteATag}
      />
    })

    return (
      <div className = "ui two stackable cards"> 
        { articlesArr }
      </div>
    )
  }
}

export default ArticlesContainer