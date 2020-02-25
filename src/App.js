import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import './App.css';
import axios from 'axios';

import CaptionContainer from './Components/Containers/CaptionContainer'
import TagContainer from './Components/Containers/TagContainer';
import SearchBoxContainer from './Components/Containers/SearchBoxContainer'

class App extends Component {
  state={
    tags: [],
    captions: [],
    searchTagField: '',
    searchCaptionField: '' 
  }


  componentDidMount() {
    axios.all([
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/'),
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    ])
      .then(axios.spread((tag, caption) => {
        this.setState({ tags: tag.data.data.tags });
        this.setState({ captions: caption.data.data.captions });
      })).catch(error => {
        console.log(error)
      });
  }
  handleTagChange =(e)=>{
    this.setState({
      searchTagField: e.target.value
    })
  }
  handleCaptionChange =(e)=>{
    this.setState({
      searchCaptionField: e.target.value
    })
  }
  render() {
    const {tags, captions, searchTagField, searchCaptionField} = this.state;
    const filteredTags = tags.filter(tag=> tag.toLowerCase().includes(searchTagField.toLowerCase()))
    const filteredCaptions = captions.filter(caption=> caption.caption.toLowerCase().includes(searchCaptionField.toLowerCase()))
    return (
      <div className="App">
        <AppStyle>
          <div>
            <SearchBoxContainer placeholder='Filter Tags' handleChange={this.handleTagChange}/>
            <AppTitle>Tags</AppTitle>
            {tags.length > 1 ? <TagContainer tags={filteredTags}/> : <div>Loading tags...</div>}
          </div>
          <div>
          <SearchBoxContainer placeholder='Filter Captions' handleChange={this.handleCaptionChange}/>
            <AppTitle>Captions</AppTitle>
            {tags.length > 1 ? <CaptionContainer captions={filteredCaptions}/>: <div>Loading categories...</div>}
          </div>
          {/* <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
          <CapList monsters={filteredMonsters}/> */}
        </AppStyle>
      </div>
    )
  }

};

export default App;
