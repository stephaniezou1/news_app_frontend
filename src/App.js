import React from 'react'
import './App.css'
import ArticlesContainer from './ArticlesContainer.jsx'
import SearchArticles from './SearchArticles.jsx'
import TagsContainer from './TagsContainer.jsx'

class App extends React.Component {

  state = {
    articles: [],
    searchTerm: ""
  }

  handleSearchTerm = (inputFromChild) => {
    this.setState({
      searchTerm: inputFromChild
    })
  }

  decideWhichArrayToRender = () => {
    let anArray = this.state.articles.filter((article) => {
      return article.description === null
        ?
        null
        :
        article.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        || article.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return anArray
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

  render(){
    console.log("state articles:", this.state.articles)
    console.log("searchresult:", this.decideWhichArrayToRender())

    return (
      <div className="App">
        <h1>News For You 📖</h1>
        <TagsContainer />
        <SearchArticles 
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <ArticlesContainer 
          articles={this.decideWhichArrayToRender()}
        />
      </div>
    );
  }
}

export default App;