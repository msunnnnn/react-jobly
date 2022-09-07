import React, { useState } from 'react';

function Search({ searchBy }) {

  const [searchTerm, setSearchTerm] = useState('');

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setSearchTerm(input.value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    searchBy(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search-bar"
        name="search-bar"
        className="search-bar"
        placeholder="Enter search term..."
        onChange={handleChange}
        value={searchTerm}
        aria-label="search-bar"
      />
      <button>Submit</button>

    </form>
  );
}

export default Search;