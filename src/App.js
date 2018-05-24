import React, { Component } from 'react';
import './App.css';
import Todo from './todo';
import Header from './header';

class App extends Component{
  render() {
    return (
      <div className="heading">
      <Header />
      <Todo />
      </div>
    );
  }
}

export default App;
