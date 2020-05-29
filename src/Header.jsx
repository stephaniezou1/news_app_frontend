import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="ui container">
        <h4 id="contributors">
          Made by <a href="https://github.com/stephaniezou1/news_frontend" target="blank" className="link">Isabel K. Lee</a> and Stephanie Zou
        </h4>
        <a href="https://github.com/stephaniezou1/news_frontend" target="blank" className="link">
          <h4 id="header-link">GitHub repo</h4>
        </a>
      </div>
    )
  }
}

export default Header