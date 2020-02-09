import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction } from './actions/main'

import Header from './components/header'
import UserInput from './components/user-input'

import './App.css';

class App extends Component {
  render() {
    const { test, testFunction } = this.props;
    return (
      <div>
        <Header/>
        <div onClick={ () => testFunction() }>{test}</div>
        <UserInput/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  testFunction
}, dispatch)

const mapStateToProps = state => {
  return {
    test: state.mainReducer.test,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
