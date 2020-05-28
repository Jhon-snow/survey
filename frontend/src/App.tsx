import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.sass';
import Main from './Components/Main/Main';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import verifyReducer from './store/reducers/verify';
const rootReducer = combineReducers({
  verify:verifyReducer
})

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="title">Select Employee</div>
          </div>
        </section>
        <Main/>
      </div>
      </Provider>
    );
  }
}

export default App;