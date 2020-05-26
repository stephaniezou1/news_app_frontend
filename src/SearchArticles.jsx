import React, { Component } from 'react'

const SearchArticles = (props) => {

  const handleWhichInfoToPassUp = (evt) => {
    props.handleSearchTerm(evt.target.value);
  }
  
return (
    <div className="search-bar">
      <input
        type="text"
        name="searchTerm"
        value={props.searchTerm}
        onChange={handleWhichInfoToPassUp}
      />
    </div>
  )
};

export default SearchArticles;