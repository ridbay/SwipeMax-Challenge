import React from 'react';
import CaptionViewStyle from '../../styled-components/CaptionView.styles'
export const CaptionView = props => (
    <CaptionViewStyle>
        {props.children.caption}
    </CaptionViewStyle>
)