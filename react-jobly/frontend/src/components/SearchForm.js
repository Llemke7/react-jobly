import React, { useState } from 'react';

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search term..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

