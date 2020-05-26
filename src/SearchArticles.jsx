import React, { Component } from 'react'

const SearchArticles = (props) => {

  const handleWhichInfoToPassUp = (evt) => {
    props.handleSearchTerm(evt.target.value);
  }
  
return (
    <div className="search-bar">
      <label><h3>Search for an article</h3></label>
      <input
        type="text"
        name="searchTerm"
        placeholder="Start typing an article title, author, or tag"
        value={props.searchTerm}
        onChange={handleWhichInfoToPassUp}
      />
    </div>
  )
};

export default SearchArticles;