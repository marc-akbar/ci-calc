import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction, updateInputs } from '../actions/main'

class UserInput extends Component {
  render() {
    const { test,
      testFunction,
      updateInputs,
      current_age,
      retirement_age,
      stop_contribution_age,
      current_savings,
      monthly_contribution,
      percent_annual_return
    } = this.props;
    console.log("Line 9 user-input.js", current_age);
    return (
      <div>
        <div className='user-input'>
          Current Age
          <input placeholder={current_age} onChange={ (e) => updateInputs(e.target.value, 'current_age') }></input>
        </div>
        <div className='user-input'>
          Age you plan on retiring
          <input placeholder={retirement_age} onChange={ (e) => updateInputs(e.target.value, 'retirement_age') }></input>
        </div>
        <div className='user-input'>
          Age you plan to stop making contributions
          <input placeholder={stop_contribution_age} onChange={ (e) => updateInputs(e.target.value, 'stop_contribution_age') }></input>
        </div>
        <div className='user-input'>
          Current Retirement Savings
          <input placeholder={current_savings} onChange={ (e) => updateInputs(e.target.value, 'current_savings') }></input>
        </div>
        <div className='user-input'>
          Monthly Contribution
          <input placeholder={monthly_contribution} onChange={ (e) => updateInputs(e.target.value, 'monthly_contribution') }></input>
        </div>
        <div className='user-input'>
          Percentage annual return
          <input placeholder={percent_annual_return} onChange={ (e) => updateInputs(e.target.value, 'percent_annual_return') }></input>
        </div>
        <div className='sumbit-button'>
          Calculate
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  testFunction,
  updateInputs
}, dispatch)

const mapStateToProps = state => {
  return {
    test: state.mainReducer.test,
    current_age: state.mainReducer.current_age,
    retirement_age: state.mainReducer.retirement_age,
    stop_contribution_age: state.mainReducer.stop_contribution_age,
    current_savings: state.mainReducer.current_savings,
    monthly_contribution: state.mainReducer.monthly_contribution,
    percent_annual_return: state.mainReducer.percent_annual_return
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput)
