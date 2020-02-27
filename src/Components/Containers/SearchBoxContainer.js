import React from 'react';
import SearchBoxStyle from '../../styled-components/SearchBox.styles'

const SearchBoxContainer = ({ placeholder, handleChange }) => (
    <SearchBoxStyle
        type='search'
        name='search'
        defaultValue=""
        placeholder={placeholder}
        onChange={handleChange} />
)

export default SearchBoxContainer;