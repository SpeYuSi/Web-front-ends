import React, { Component } from 'react';
import './assets/css/App.css';
import Home from './components/Home'
import News from './components/News'
import EventAndFunction from './components/EventAndFunction'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
        <Home></Home>
        <News></News>
        <EventAndFunction></EventAndFunction>
      </div>
    );
  }
}

export default App;
