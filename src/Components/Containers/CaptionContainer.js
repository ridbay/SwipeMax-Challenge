import React from 'react';
import {CaptionView} from '../Views/CaptionView';

const CaptionContainer = ({captions}) => (
    <div>
        {captions.map((caption, i) => <CaptionView key={i}>{caption}</CaptionView>)}
    </div>
)

export default CaptionContainer;