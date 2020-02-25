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
    searchField: '' 
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
  handleChange =(e)=>{
    this.setState({
      searchField: e.target.value
    })
  }
  render() {
    const {tags, captions, searchField} = this.state;
    // const filteredCaptions = captions.filter(caption=> caption.toLowerCase().includes(searchField.toLowerCase()))
    // const filteredTags = tags.filter(tag=> tag.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <AppStyle>
          <div>
            <SearchBoxContainer placeholder='Search' handleChange={this.handleChange}/>
            <AppTitle>Tags</AppTitle>
            {tags.length > 1 ? <TagContainer tags={tags}/> : <div>Loading tags...</div>}
          </div>
          <div>
            <AppTitle>Captions</AppTitle>
            {tags.length > 1 ? <CaptionContainer captions={captions}/>: <div>Loading categories...</div>}
          </div>
          {/* <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
          <CapList monsters={filteredMonsters}/> */}
        </AppStyle>
      </div>
    )
  }

};

export default App;
