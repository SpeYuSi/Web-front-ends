import React, { Component } from 'react';
import './assets/css/App.css';
import Home from './components/Home'
import News from './components/News'
import EventAndFunction from './components/EventAndFunction'
import ReactForm from './components/ReactForm'
import ParentCom from './components/ParentCom'
import Axios from './components/Axios'
import FetchJsonp from "./components/FetchJsonp";
import Lifecycle from "./components/LifeCycle";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home></Home>
          <News></News>
          <EventAndFunction></EventAndFunction>
          <hr/>
          <ReactForm></ReactForm>
          <hr/>
          <ParentCom></ParentCom>
          <Axios></Axios>
          <FetchJsonp></FetchJsonp>
          <hr/>
          <Lifecycle title='父组件title'></Lifecycle>
      </div>
    );
  }
}

export default App;
