import React from 'react'
import './App.css'
import ArticlesContainer from './ArticlesContainer.jsx'
import SearchArticles from './SearchArticles.jsx'
import TagsContainer from './TagsContainer.jsx'
import CovidToggle from './CovidToggle.jsx'

class App extends React.Component {

  state = {
    articles: [],
    searchTerm: "",
    covidCheck: false,
    allTags: []
  }

  addNewTag = (newTag, articleId) => {
    fetch(`http://localhost:3000/tags`, {
      method: "POST",
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(newTag)
    })
      .then(response => response.json())
      .then((newlyAddedTag) => {
        let updatedTagsList = [...this.state.allTags, newlyAddedTag]
        let targetArticle = this.state.articles.map((article) => {
          if (article.id === articleId) {
            article.tags.push(newTag)
            return article
          } else {
            return article
          }
        })
        console.log("TARGET ARTICLE", targetArticle)
        let copyOfArticles = [...this.state.articles, targetArticle]
        this.setState({
          allTags: updatedTagsList,
          articles: copyOfArticles
        })
      })
  }

  handleCovidCheck = (inputFromChild) => {
    this.setState({
      covidCheck: inputFromChild
    })
  }

  handleSearchTerm = (inputFromChild) => {
    this.setState({
      searchTerm: inputFromChild
    })
  }

  decideWhichArrayToRender = () => {
    console.log("STATE LOG", this.state)
    let anArray = [...this.state.articles]
    if (this.state.covidcheck === "true") {
      anArray = this.state.articles.filter(article => article.content !== "covid-19" || article.content !== "coronavirus")
    } else {
      anArray = this.state.articles.filter((article) => {
        return article.description === null
          ?
          null
          :
          article.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          || article.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
    }
    return anArray
  }

  componentDidMount() {
    fetch("http://localhost:3000/articles")
    .then(r => r.json())
    .then((newArticles) => {
      console.log("SEE HERE", newArticles)
      this.setState({
        articles: newArticles
      })
    })
    fetch("http://localhost:3000/tags")
    .then(r => r.json())
    .then((newTags) => {
      this.setState({
        allTags: newTags
      })
    })
  }

  render(){

    console.log("STATE CONSOLE LOG", this.state)
    // console.log("searchresult:", this.decideWhichArrayToRender())

    return (
      <div className="App">
        <h1>The Hegel Bagel 📖</h1>
        <TagsContainer 
          tags={this.state.allTags}
        />
        <CovidToggle 
          handleCovidCheck={this.handleCovidCheck}
        />
        <SearchArticles 
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <ArticlesContainer 
          articles={this.decideWhichArrayToRender()}
          addNewTag={this.addNewTag}
        />
      </div>
    );
  }
}

export default App;