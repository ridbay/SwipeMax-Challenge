import React from 'react';

import TagViewStyle from '../../styled-components/TagView.styles'
export const TagView = props => (
    <TagViewStyle>
        {props.children}
    </TagViewStyle>
)