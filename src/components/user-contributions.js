import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction, updateInputs, calculateMonthlyContributions } from '../actions/main'

class UserInput extends Component {

  render() {
    const { test, testFunction, updateInputs, id, calculateMonthlyContributions } = this.props;

    return (
      <div>
        <div className='user-input'>
          Annual salary
          <input onChange={ (e) => {updateInputs(e.target.value, `annual_salary_${id}`); calculateMonthlyContributions()} }></input>
        </div>
        <div className='user-input'>
          Employer Match
          <input onChange={ (e) => {updateInputs(e.target.value, `employer_match_${id}`); calculateMonthlyContributions()} }></input>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  testFunction,
  updateInputs,
  calculateMonthlyContributions
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
