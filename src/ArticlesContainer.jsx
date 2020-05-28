import React, { Component } from 'react'
import Article from "./Article.jsx"
import { BrowserRouter as Router, Route } from 'react-router-dom';

class ArticlesContainer extends Component {
  render() {
    let articlesArr = this.props.articles.map((article) => {
      return ( <Article
        key = {article.id} 
        article = {article} 
        addNewTag = {this.props.addNewTag}
        deleteATag = {this.props.deleteATag}
     />)
    })

    // can import a link inside article, use the link and in the app build out the slug function where
    // I pull from my url params --> the id, and parse int it into a number and based on the id   
    // I can find the article tahat's in my state and pass that down thecomponent to return in render functino
    // separate component to render to the page

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