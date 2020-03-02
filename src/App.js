import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Row1 from './Components/Row1/Row1';
import Row2 from './Components/Row2/Row2';
import Row3 from './Components/Row3/Row3';
import Row4 from './Components/Row4/Row4';

import './App.css';

class App extends Component {
  state = {
   
  }
  
  

  render() {
    
    return (
      <div className="App">
        <Header />       
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />

      </div>
    )
  }

};

export default App;
