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

  
  componentDidMount() {
    axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/').then(response => {
      console.log(response.data.data.tags)
      this.setState({ tags: response.data.data.tags });
    }).catch(error => {
      console.log(error)
    })

    axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/').then(response => {
      console.log(response.data.data.captions)
      this.setState({ categories: response.data.data.captions});
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App">
        <AppStyle>
          
          <div><AppTitle>Tags</AppTitle><div>{this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</div></div>
          <div><AppTitle>Categories</AppTitle><div>{this.state.categories.map((category, i) => <li key={i}>{category.caption}</li>)}</div></div>
          
        </AppStyle>
      </div>
    )
  }

};

export default App;
