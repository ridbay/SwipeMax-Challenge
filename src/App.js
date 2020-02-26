import React, { Component } from 'react';
import { AppStyle, AppTitle } from './styled-components/App.styles';
import Axios from 'axios';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Ridbay'
    }
  }
  render() {
    return (
      <div className="App">
        <AppStyle>
    <AppTitle>{this.state.name}</AppTitle>
        </AppStyle>
      </div>
    )
  }

};

export default App;
