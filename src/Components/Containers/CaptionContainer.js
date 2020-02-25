import React from 'react';
import {CaptionView} from '../Views/CaptionView';

const CaptionContainer = props => (
    <div>
        {props.captions.map((caption, i) => <CaptionView key={i}>{caption}</CaptionView>)}
    </div>
)

export default CaptionContainer;