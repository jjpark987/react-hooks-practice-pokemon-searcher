import React from "react";

function Search({ searchInput, onSetSearchInput }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchInput} onChange={e => onSetSearchInput(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
