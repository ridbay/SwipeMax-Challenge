import React from 'react'

const Form = ({handleSubmit, handleChange}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Add:
                    <input type="text" name="newCaption" onChange={handleChange}/>
                </label>
                <button type="submit">Add Caption</button>
            </form>
        </div>
    )
}

export default Form
