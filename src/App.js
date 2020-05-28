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
    allTags: [],
    arrayOfThingsToCheckFor: []
  }

  ///if the array is empty, show all the articles, if the array is populated, render conditionally

// method 1: create the tag first, and then create a joiner with that tag ID
// create a pure tag without any article associations
// somehow pull in the specific article that we want to create a tag for
// AND THEN create a joiner instance

  addNewTag = (newTag, articleId) => {
    fetch(`http://localhost:3000/tags`, {
      method: "POST",
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        content: newTag,
        article_id: articleId
      })
    })
      .then(response => response.json())
      .then((responseObject) => {
        console.log(responseObject)
        // let updatedArticlesList = [...this.state.articles, responseObject]
        let copyOfArticles = this.state.articles.map((article) => {
          if (article.id === articleId) {
            return responseObject.article
          } else {
            return article
          }
        })
        
        if (this.state.allTags.some((tag) => tag.id === responseObject.tag.id)) {
            this.setState({
              articles: copyOfArticles
          })
        } else {
          this.setState({
            articles: copyOfArticles, 
            allTags: [...this.state.allTags, responseObject.tag]
          })
        }
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
    // console.log("STATE LOG", this.state)
    let anArray = [...this.state.articles]
    // let coronaKeywords = ["coronavirus", "covid-19", "virus"]

    if (this.state.covidCheck) {
      anArray = this.state.articles.filter((article) => {
        return !article.description.toLowerCase().includes("coronavirus")
      })
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
      // console.log("SEE HERE", newArticles)
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

    console.log("STATE CONSOLE LOG", this.state.articles)
    // console.log("searchresult:", this.decideWhichArrayToRender())

    return (
      <div className="App">
        <h1 className="header">The Hegel Bagel 📖</h1>
        <TagsContainer 
          tags={this.state.allTags}
        />
        <CovidToggle
          covidCheck = {this.state.covidCheck}
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