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
    filterTerm: ""
  }

  handleFilterTerm = (filterFromChild) => {
    this.setState({
      filterTerm: filterFromChild
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
    let copyOfAllTags = this.state.allTags.filter((tag) =>
      tag.id !== updatedArticleFromChild.joinerId
    )
    this.setState({
      articles: copyOfAllArticles,
      allTags: copyOfAllTags
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
        console.log(responseObject)
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
    let { covidCheck, searchTerm, articles, filterTerm } = this.state
    let anArray = [...articles]

    if (covidCheck === true) {
      anArray = articles.filter((article) => {
        return article.description === null
        ?
        !article.title.toLowerCase().includes("coronavirus")
        :
        !article.title.toLowerCase().includes("coronavirus") && !article.description.toLowerCase().includes("coronavirus")
      })

    } else if (covidCheck === false) {
      anArray = articles.filter((article) => {
        return article.description === null
          ?
          null
          :
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
          || article.title.toLowerCase().includes(searchTerm.toLowerCase())
      })

    } else if (filterTerm !== "") {
      anArray = articles.map((article) => {
        return article.joiners.filter((joiner) => {
          joiner.filter((joiner) => {
            return joiner.tag_name === filterTerm
          })
        })
      })
    }
    return anArray
  }

  // pickArticles = () => {
  //   let { searchTerm, articles } = this.state
  //   let newArray = [...articles]
  //   if (searchTerm === "") {
  //     return newArray
  //   } else {
  //     newArray = articles.filter((article) => {
  //       article.joiners.map((joiner) => {
  //         return joiner.tag_name === searchTerm.replace(/[^A-Za-z0-9_]/g,"")
  //       })
  //     })
  //   }
  //   return newArray
  // }

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
        allTags: newTags
      })
    })
  }

  render(){

    console.log("filter term:", this.state.filterTerm)
    console.log("article:", this.state.articles)


    return (
  
      <div className="App">
        <h1 className="header">Hegelian Bagel 🥯</h1>
        <TagsContainer 
          tags={this.state.allTags}
          handleSearchTerm={this.handleSearchTerm}
          handleFilterTerm={this.handleFilterTerm}
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
          // articles={this.pickArticles()}
          addNewTag={this.addNewTag}
          deleteATag={this.deleteATag}
          formatDateTime={this.formatDateTime}
        />
      </div>
    );
  }
}

export default App;