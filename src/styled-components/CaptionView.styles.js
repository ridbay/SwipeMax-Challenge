import styled from 'styled-components';

const CaptionViewStyle= styled.section`
display: flex;
    flex-direction: column;
    background-color: white;
    color: blue;
    font-weight: bold;
    text-transform:capitalize;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 25px;
    cursor: pointer;
    box-shadow: 5px 3px #888888;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
`
export default CaptionViewStyle;
