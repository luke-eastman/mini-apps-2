import React from 'react';

const Search = ({setSearchTerm}) => {
  return (
    <input type="text" placeholder="Search..." onChange={(event => setSearchTerm(event.target.value))} />
  );
}

export default Search;