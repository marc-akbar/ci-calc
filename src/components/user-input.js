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
      monthly_contribution
    } = this.props;

    return (
      <div>
        <div className='user-input'>
          Current Age
          <input onChange={ (e) => updateInputs(e.target.value, 'current_age') }></input>
        </div>
        <div className='user-input'>
          Age you plan on retiring
          <input onChange={ (e) => updateInputs(e.target.value, 'retirement_age') }></input>
        </div>
        <div className='user-input'>
          Age you plan to stop making contributions
          <input onChange={ (e) => updateInputs(e.target.value, 'stop_contribution_age') }></input>
        </div>
        <div className='user-input'>
          Current Retirement Savings
          <input onChange={ (e) => updateInputs(e.target.value, 'current_savings') }></input>
        </div>
        <div className='user-input'>
          Percentage annual return low
          <input onChange={ (e) => updateInputs(e.target.value, 'percent_annual_return_low') }></input>
        </div>
        <div className='user-input'>
          Percentage annual return high
          <input onChange={ (e) => updateInputs(e.target.value, 'percent_annual_return_high') }></input>
        </div>
        <div className='user-input'>
          Percentage of salary you would like to contribute
          <input onChange={ (e) => {updateInputs(e.target.value, 'percent_to_contribute'); calculateMonthlyContributions()} }></input>
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
    monthly_contribution: state.mainReducer.monthly_contribution
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput)
