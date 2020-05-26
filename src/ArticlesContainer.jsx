import React, { Component } from 'react'
import Article from "./Article.jsx"

class ArticlesContainer extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/articles")
    .then(r => r.json())
    .then((newArticles) => {
      this.setState({
        articles: newArticles
      })
    })
  }

  render() {
    let articlesArr = this.state.articles.map((article) => {
      console.log(article)
      return <Article key = {article.id} article = {article} />
    })

    return (
      <div className = "article-list"> 
        { articlesArr }
      </div>
    )
  }
}

export default ArticlesContainer