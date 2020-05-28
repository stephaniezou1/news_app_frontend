import React, { Component } from 'react'
import Article from "./Article.jsx"
import { BrowserRouter as Router, Route } from 'react-router-dom';


class ArticlesContainer extends Component {

  
 
  render() {
    let articlesArr = this.props.articles.map((article) => {
      // console.log(article)
      return <Route path={`/articles/${article.id}`}> 
      <Article
        key = {article.id} 
        article = {article} 
        addNewTag = {this.props.addNewTag}
        deleteATag = {this.props.deleteATag}/>
      </Route>
    })

    return (
      <>
      <div className = "ui two stackable cards"> 
        { articlesArr }
      </div>
      </>
    )
  }
}

export default ArticlesContainer