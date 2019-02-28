import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';

import './App.css';

import Container1 from './containers/Container1';
import Container2 from './containers/Container2';
import Main from './containers/Main';

const reduxStore = configureStore();

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <BrowserRouter>
          <div>
            <Route path='/login' component={() => <div>LOGIN!</div>} />
            <Route path='/' component={Main} />
            <Route exact path='/container1' component={Container1} />
            <Route exact path='/container2' component={Container2} />
          </div>
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}

export default App;