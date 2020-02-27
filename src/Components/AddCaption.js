import React from 'react';
import ButtonStyle from '../styled-components/Button.style'

const AddCaption = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="caption" onChange={handleChange} placeholder='Add a new caption' />

            <ButtonStyle type="submit">Add Caption</ButtonStyle>
                {/* <button type="submit">Add Caption</button> */}
            </form>
        </div>
    )
}

export default AddCaption
