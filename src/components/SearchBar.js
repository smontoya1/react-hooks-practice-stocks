import React from "react";

function SearchBar({ sortType, onSortChange, onFilterChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortType === "Alphabetically"}
          onChange={(e) => onSortChange(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortType === "Price"}
          onChange={(e) => onSortChange(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
