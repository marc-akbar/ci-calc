import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction } from './actions/main'

import Header from './components/header'
import UserInputs from './components/user-inputs'
import ResultGraph from './components/result-graph'
import ResultSummary from './components/result-summary'

import './App.css';

class App extends Component {
  render() {
    const { } = this.props;
    return (
      <div className="App">
        <Header/>
        <UserInputs/>
        <ResultGraph/>
        <ResultSummary/>
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
