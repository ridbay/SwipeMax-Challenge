import React from 'react';
import {TagView} from '../Views/TagView';

const TagContainer = ({tags}) => (
    <div>
        {tags.map((tag, i) => <TagView key={i}>{tag}</TagView>)}
    </div>
)

export default TagContainer;