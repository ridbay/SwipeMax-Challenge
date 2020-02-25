import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      categories: []
    }
  }


  // componentDidMount() {
  //   axios.get('https://capcards-api.herokuapp.com/v1.0/api/tags/').then(response => {
  //     console.log(response.data.data.tags)
  //     this.setState({ tags: response.data.data.tags });
  //   }).catch(error => {
  //     console.log(error)
  //   })

  //   axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/').then(response => {
  //     console.log(response.data.data.captions)
  //     this.setState({ categories: response.data.data.captions });
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }


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
            {this.state.tags.length > 1 ? <div>{this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</div>: <div>Loading tags...</div>}
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
