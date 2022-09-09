import React, { useState, useMemo } from 'react';
import { debounce } from "lodash";
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

  const debouncedSearch = useMemo(() =>
    debounce (
      async (value) => {
        await searchBy(value);
      }, 500),[searchBy]);

  /** Update form input. */
  async function handleChange(evt) {
    const input = evt.target;
    setSearchTerm(input.value);
    debouncedSearch(input.value);
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