import React from 'react';
import ButtonStyle from '../styled-components/Button.style'
import {AddCaptionStyleInput} from '../styled-components/Inputs.styles'

const AddCaption = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <AddCaptionStyleInput type="text" name="caption" onChange={handleChange} placeholder='Add a new caption' />
            <ButtonStyle type="submit">Add Caption</ButtonStyle>
            </form>
        </div>
    )
}

export default AddCaption
