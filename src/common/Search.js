import React, { useState } from 'react';
import "./Search.css";

/** Search bar component.
 *
 * Props:
 * - searchBy: function to set parent component state for search
 *
 * State:
 * - searchTerm
 *
 * Events:
 * - handle searchTerm value change
 * - handle search bar form submit
 *
 * { CompanyList, JobList } -> Search
 */
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
    <form onSubmit={handleSubmit} className="search-bar d-flex">
      <input
        id="search-bar"
        name="search-bar"
        className="form-control me-2"
        placeholder="Enter search term..."
        onChange={handleChange}
        value={searchTerm}
        aria-label="search-bar"
      />
      <button className="btn btn-primary">Submit</button>

    </form>
  );
}

export default Search;