import React from 'react';
import {SearchBoxStyleInput} from '../../styled-components/Inputs.styles'

const SearchBoxContainer = ({ placeholder, handleChange }) => (
    <SearchBoxStyleInput
        type='search'
        name='search'
        defaultValue=""
        placeholder={placeholder}
        onChange={handleChange} />
)

export default SearchBoxContainer;