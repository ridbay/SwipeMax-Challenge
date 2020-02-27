import React from 'react'

const AddCaption = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="caption" onChange={handleChange} placeholder='Add a new caption' />
                
                <button type="submit">Add Caption</button>
            </form>
        </div>
    )
}

export default AddCaption
