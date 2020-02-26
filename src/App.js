import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import './App.css';
import axios from 'axios';

import CaptionContainer from './Components/Containers/CaptionContainer'
import TagContainer from './Components/Containers/TagContainer';
import SearchBoxContainer from './Components/Containers/SearchBoxContainer'

class App extends Component {
  state = {
    tags: [],
    captions: [],
    searchTagField: '',
    searchCaptionField: '',
    isPending: true
  }


  componentDidMount() {
    axios.all([
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/'),
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    ])
      .then(axios.spread((tag, caption) => {
        this.setState({ tags: tag.data.data.tags });
        this.setState({ captions: caption.data.data.captions });
        this.setState({ isPending: false });
      })).catch(error => {
        console.log(error)
      });
  }
  handleTagChange = (e) => {
    this.setState({
      searchTagField: e.target.value
    })
  }
  handleCaptionChange = (e) => {
    this.setState({
      searchCaptionField: e.target.value
    })
  }
  render() {
    const { tags, captions, searchTagField, searchCaptionField, isPending } = this.state;
    const filteredTags = tags.filter(tag => tag.toLowerCase().includes(searchTagField.toLowerCase()))
    const filteredCaptions = captions.filter(caption => caption.caption.toLowerCase().includes(searchCaptionField.toLowerCase()))
    return (
      <div className="App">
        <AppStyle>
          {isPending ? <h1>Loading Tags And Captions...</h1> : <div><div>
            <SearchBoxContainer placeholder='Filter Tags' handleChange={this.handleTagChange} />

            <AppTitle>Tags</AppTitle>
            <TagContainer tags={filteredTags} />
          </div>
            <div>
              <SearchBoxContainer placeholder='Filter Captions' handleChange={this.handleCaptionChange} />
              <AppTitle>Captions</AppTitle>
              <CaptionContainer captions={filteredCaptions} />
            </div>

          </div>}

        </AppStyle>
      </div>
    )
  }

};

export default App;
