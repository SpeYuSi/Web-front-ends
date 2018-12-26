import React, { Component } from 'react';
import './assets/css/App.css';
import Home from './components/Home'
import News from './components/News'
import EventAndFunction from './components/EventAndFunction'
import ReactForm from './components/ReactForm'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home></Home>
          <News></News>
          <EventAndFunction></EventAndFunction>
          <hr/><ReactForm></ReactForm>
      </div>
    );
  }
}

export default App;
