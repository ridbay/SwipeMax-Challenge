import styled from 'styled-components';

const TagViewStyle= styled.section`
display: flex;
    flex-direction: column;
    background-color: blue;
    color: white;
    text-transform:capitalize;
    border-radius: 20px;
    border: 1px solid grey;
    padding: 25px;
    cursor: pointer;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
`
export default TagViewStyle;
