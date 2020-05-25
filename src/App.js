import React from 'react'
import './App.css'
import ArticlesContainer from './ArticlesContainer.jsx'
import SearchArticles from './SearchArticles.jsx'

function App() {
  return (
    <div className="App">
      <h1>News For You</h1>
      <SearchArticles />
      <ArticlesContainer />
    </div>
  );
}

export default App