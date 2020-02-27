import React from 'react';
import {CaptionView} from '../Views/CaptionView';
import CaptionContainerStyle from '../../styled-components/CaptionContainer.styles'

const CaptionContainer = ({captions}) => (
    <CaptionContainerStyle>
        {captions.map((caption, i) => <CaptionView key={i}>{caption}</CaptionView>)}
    </CaptionContainerStyle>
)

export default CaptionContainer;