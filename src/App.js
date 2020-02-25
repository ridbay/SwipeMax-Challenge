import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import axios from 'axios';

class App extends Component {
  state={
    tags: [],
    categories: [],
    searchField: '' 
  }


  componentDidMount() {
    axios.all([
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/'),
      axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    ])
      .then(axios.spread((tag, caption) => {
        this.setState({ tags: tag.data.data.tags });
        this.setState({ categories: caption.data.data.captions });
      })).catch(error => {
        console.log(error)
      });
  }
  render() {
    return (
      <div className="App">
        <AppStyle>
          <div>
            <AppTitle>Tags</AppTitle>
            {this.state.tags.length > 1 ? <div>{this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</div> : <div>Loading tags...</div>}
          </div>
          <div>
            <AppTitle>Categories</AppTitle>
            {this.state.tags.length > 1 ? <div>{this.state.categories.map((category, i) => <li key={i}>{category.caption}</li>)}</div> : <div>Loading categories...</div>}

          </div>

        </AppStyle>
      </div>
    )
  }

};

export default App;
