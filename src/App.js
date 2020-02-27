import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import './App.css';
import axios from 'axios';

import CaptionContainer from './Components/Containers/CaptionContainer'
import TagContainer from './Components/Containers/TagContainer';
import SearchBoxContainer from './Components/Containers/SearchBoxContainer'

class App extends Component {
  state = {
    tags: ["golf", "sports", "food", "fish", "health", "ownership", "health", "jobs", "cars", "random"],
    captions: [{id: 1, caption: "golf is pretty great"},{id: 2, caption: "sports get me energized"}, {id: 3, caption: "golf is the greatest sports game"}, {id: 4, caption: "who likes fish in the morning"},
    {id: 5, caption: "i need food to get me through the day"}, {id: 6, caption: "let's make a fishy for dinner"}, {id: 7, caption: "so many jobs lately"},
    {id: 8, caption: "just got a good job"}, {id: 9, caption: "got to check my medicine"}, {id: 10, caption: "how can that be yours"},
    {id: 11, caption: "nothing is yours till you let it go"}, {id: 12, caption: "i love jogging daily to keep fit"}, {id: 13, caption: "oats is a good meal for kid boop"}, 
    {id: 14, caption: "i love soccer"}, {id: 15, caption: "this is a random caption"}, {id: 16, caption: "i love to eat when i go watch the game"}, 
    {id: 17, caption: "lagos is a good place to be."}, {id: 18, caption: "my favourite food is yam."}],
    searchTagField: '',
    searchCaptionField: '',
    isPending: false
  }


  componentDidMount() {
    axios.all([
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/'),
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    ])
      .then(axios.spread((tag, caption) => {
        this.setState({ tags: tag.data.data.tags });
        console.log(tag.data.data.tags)
        this.setState({ captions: caption.data.data.captions });
        console.log(caption.data.data.captions)
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
