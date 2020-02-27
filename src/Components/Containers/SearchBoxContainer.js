import React from 'react';

const SearchBoxContainer = ({ placeholder, handleChange }) => (
    <input

        type='search'
        placeholder={placeholder}
        onChange={handleChange} />
)

export default SearchBoxContainer;