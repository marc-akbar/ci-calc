import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction } from '../actions/main'

class UserInput extends Component {
  render() {
    const { test, testFunction } = this.props;
    return (
      <div>
        <div className='user-input'>Current Age</div>
        <input></input>
        <div className='user-input'>Planned Retirement Age</div>
        <input></input>
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
)(UserInput)
