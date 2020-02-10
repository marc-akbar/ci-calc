import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction, updateInputs, calculateMonthlyContributions } from '../actions/main'

import UserContributions from './user-contributions'

class UserInput extends Component {

  state = {
    contributer_added: false
  }

  render() {
    const { test,
      testFunction,
      updateInputs,
      calculateMonthlyContributions,
      current_age,
      retirement_age,
      stop_contribution_age,
      current_savings,
      percent_annual_return,
      percent_to_contribute,
      monthly_contribution
    } = this.props;

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
          Percentage annual return
          <input placeholder={percent_annual_return} onChange={ (e) => updateInputs(e.target.value, 'percent_annual_return') }></input>
        </div>
        <div className='user-input'>
          Percentage of salary you would like to contribute
          <input placeholder={percent_to_contribute} onChange={ (e) => {updateInputs(e.target.value, 'percent_to_contribute'); calculateMonthlyContributions()} }></input>
        </div>
        <UserContributions id="1"/>
        { this.state.contributer_added ?
          <UserContributions id="2"/> :
          <div className='add-user-button' onClick={ () => this.setState({ contributer_added: true }) }>
            Add contributer
          </div>
        }
        <div className='monthly-contribution'>
          Monthly Contribution: ${monthly_contribution}
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
  updateInputs,
  calculateMonthlyContributions
}, dispatch)

const mapStateToProps = state => {
  return {
    test: state.mainReducer.test,
    current_age: state.mainReducer.current_age,
    retirement_age: state.mainReducer.retirement_age,
    stop_contribution_age: state.mainReducer.stop_contribution_age,
    current_savings: state.mainReducer.current_savings,
    monthly_contribution: state.mainReducer.monthly_contribution,
    percent_annual_return: state.mainReducer.percent_annual_return,
    percent_to_contribute: state.mainReducer.percent_to_contribute,
    monthly_contribution: state.mainReducer.monthly_contribution
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput)
