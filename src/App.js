import React, { Component } from 'react';
import logo from './logo.svg';

//import {Paragraph} from './components/paragraph';
//import {Button} from './components/button'

//what we want
import { Button, Paragraph } from './components';

import './App.css';

// below is the app (Button)
class App extends Component {
  render() {
    return (
      <div className ="App">
        <Button isPrimary={true}/>
        <Paragraph type ="p-primary"/>
        <Paragraph type ="p-secondary"/>
      </div>

    );
  }
}

export default App;
