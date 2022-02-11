import React, { useEffect, useState } from 'react';

const Search = ({search, setSearch}) => {
  const changeFunction = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  return (
    <input type='text' value={search} onChange={changeFunction}/>
  );
}

export default Search;