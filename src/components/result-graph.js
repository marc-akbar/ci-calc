import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction } from '../actions/main'

class ResultGraph extends Component {

  render() {
    const { test, testFunction } = this.props;
    
    return (
      <div className='graph'>
        <p>(Graph)</p>
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
)(ResultGraph)
