import React from 'react'

const SearchArticles = (props) => {

  const handleWhichInfoToPassUp = (evt) => {
    props.handleSearchTerm(evt.target.value);
  }

  const handleReset = () => {
    props.handleSearchTerm("")
  }
  
return (
    <div className="search-bar">
      <label><h2 className="header">Search for an article</h2></label>
      <input
        className="search"
        type="text"
        name="searchTerm"
        placeholder="Start typing an article title, author, or tag"
        value={props.searchTerm}
        onChange={handleWhichInfoToPassUp}
      />
      <button className={"search"} id={"clear-search"} onClick={handleReset}>Clear search terms</button>
    </div>
  )
};

export default SearchArticles;