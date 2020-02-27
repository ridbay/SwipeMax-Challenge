import React from 'react';
import {TagView} from '../Views/TagView';
import TagContainerStyle from '../../styled-components/TagContainer.styles'

const TagContainer = ({tags}) => (
    <TagContainerStyle>
        {tags.map((tag, i) => <TagView key={i}>{tag}</TagView>)}
    </TagContainerStyle>
)

export default TagContainer;