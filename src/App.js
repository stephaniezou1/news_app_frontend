import React from 'react'
import './App.css'
import ArticlesContainer from './components/ArticlesContainer.jsx'
import SearchArticles from './components/SearchArticles.jsx'
import TagsContainer from './components/TagsContainer.jsx'
import CovidToggle from './components/CovidToggle.jsx'
import Header from './components/Header.jsx'

class App extends React.Component {

  state = {
    articles: [],
    searchTerm: "all",
    covidCheck: false,
    tags: [],
    covidTerms: ["coronavirus", "covid", "vaccine", "pandemic", "virus", "covid-19"]
  }
  
  addALike = (updatedLikesFromChild, articleId) => {
    fetch(`http://localhost:3000/articles/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        likes: updatedLikesFromChild
      })
    })
      .then(r => r.json())
      .then(updatedArticle => {
        let copyOfAllArticles = this.state.articles.map((eachArticle) => {
          return (eachArticle.id === updatedArticle.id ? updatedArticle : eachArticle)
        })
        this.setState({
          articles: copyOfAllArticles
        })
      })
  }

  formatDateTime(date) {
    let year = date.getFullYear()
    let day = date.getDate()
    let months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    let monthName = months[date.getMonth()]
    let formattedDate = `${monthName} ${day}, ${year}`
    return formattedDate
  }

  formatString = (string) => {
    return string.replace(/[^A-Za-z0-9_]/g,"");
  }

  deleteATag = (updatedArticleFromChild, joinerId) => {
    console.log("UPDATED ARTICLE", updatedArticleFromChild)
    let copyOfAllArticles = this.state.articles.filter((article) => article.id !== updatedArticleFromChild)
    let copyOfAllTags = this.state.tags.filter((tag) =>
      tag.id !== updatedArticleFromChild.joinerId
    )
    this.setState({
      articles: copyOfAllArticles,
      tags: copyOfAllTags
    })
  }

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
        let copyOfArticles = this.state.articles.map((article) => {
          if (article.id === articleId) {
            return responseObject.article
          } else {
            return article
          }
        })
        
        if (this.state.tags.some((tag) => tag.id === responseObject.tag.id)) {
            this.setState({
              articles: copyOfArticles
          })
        } else {
          this.setState({
            articles: copyOfArticles, 
            tags: [...this.state.tags, responseObject.tag]
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

  covidFilter = (string) => {
    let {covidTerms} = this.state
    let status = false 

    string.split(" ").each((word) => {
      return covidTerms.includes(word) ? status = true : null
    })

    return status
  }

  filterArticlesByTag = () => {
    let {searchTerm, articles} = this.state
    let newArray = []

    if (searchTerm === "all") {
      return articles
    } else {
      articles.forEach((article) => {
        article.joiners.forEach((joiner) => {
          if (joiner.tag_name === searchTerm) {
            newArray.push(article)
          }
        })
      })

      return newArray
    }
  }

  filterCoronaArticles = () => {
    let {covidCheck, searchTerm, articles} = this.state
    let articleArray = [...articles]

    // if covid filter is now an array, turn the article's title and description into an array, and call .includes() on the covid array for each element in the title and description

    if (covidCheck) {
      articleArray = articles.filter((article) => {
        return article.description === null
        ?
        !article.title.toLowerCase().includes("coronavirus")
        :
        !article.title.toLowerCase().includes("coronavirus") && !article.description.toLowerCase().includes("coronavirus")
      })

    } else if (!covidCheck) {
      articleArray = articles.filter((article) => {
        return article.description === null
          ?
          null
          :
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
          || article.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }
    
    return articleArray
  }

  componentDidMount() {
    fetch("http://localhost:3000/articles")
    .then(r => r.json())
    .then((newArticles) => {
      this.setState({
        articles: newArticles
      })
    })
    fetch("http://localhost:3000/tags")
    .then(r => r.json())
    .then((newTags) => {
      this.setState({
        tags: newTags
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1 className="header">Hegelian Bagel 🥯</h1>
        
        <TagsContainer 
          tags={this.state.tags}
          handleSearchTerm={this.handleSearchTerm}
          handleFilterTerm={this.handleFilterTerm}
        />
        {/* <SearchArticles 
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        /> */}
        <CovidToggle
          covidCheck = {this.state.covidCheck}
          handleCovidCheck={this.handleCovidCheck}
        />
        <ArticlesContainer 
          articles={this.filterArticlesByTag()}
          addNewTag={this.addNewTag}
          deleteATag={this.deleteATag}
          formatDateTime={this.formatDateTime}
          addALike={this.addALike}
        />
        <Header />
      </div>
    );
  }
}

export default App;