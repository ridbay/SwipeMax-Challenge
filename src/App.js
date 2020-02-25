import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import axios from 'axios';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  }
  componentDidMount() {
    axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/').then(response => {
      console.log(response.data.data.tags)
      this.setState({ tags: response.data.data.tags });
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App">
        <AppStyle>
          <AppTitle>{this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</AppTitle>
        </AppStyle>
      </div>
    )
  }

};

export default App;
