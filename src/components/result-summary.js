import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction } from '../actions/main'

class ResultSummary extends Component {
  render() {
    const { test, testFunction } = this.props;
    return (
      <div className='results-block'>
        <p>(Summary of results)</p>
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
)(ResultSummary)
