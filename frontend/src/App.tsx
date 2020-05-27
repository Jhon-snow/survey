import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.sass';
import Main from './Components/Main/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="title">Select Employee</div>
          </div>
        </section>
        <Main/>

      </div>
    );
  }
}

export default App;