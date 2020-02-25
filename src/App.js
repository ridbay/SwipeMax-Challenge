import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import axios from 'axios';

import CaptionContainer from './Components/Containers/CaptionContainer'

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
        console.log(caption)
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
            <AppTitle>Tags</AppTitle>
            {tags.length > 1 ? <div>{tags.map((tag, i) => <li key={i}>{tag}</li>)}</div> : <div>Loading tags...</div>}
          </div>
          <div>
            <AppTitle>Captions</AppTitle>
            {/* {tags.length > 1 ? <CaptionContainer captions={captions}/>: <div>Loading categories...</div>} */}
            <CaptionContainer captions={captions}/>

          </div>
          {/* <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
          <CapList monsters={filteredMonsters}/> */}
        </AppStyle>
      </div>
    )
  }

};

export default App;
