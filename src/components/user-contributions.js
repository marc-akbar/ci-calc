import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testFunction, updateInputs } from '../actions/main'

class UserInput extends Component {

  render() {
    const { test,
      testFunction, updateInputs, annual_salary, employer_match, id
    } = this.props;

    return (
      <div>
        <div className='user-input'>
          Annual salary
          <input placeholder={annual_salary} onChange={ (e) => updateInputs(e.target.value, `annual_salary_${id}`) }></input>
        </div>
        <div className='user-input'>
          Employer Match
          <input placeholder={employer_match} onChange={ (e) => updateInputs(e.target.value, `employer_match_${id}`) }></input>
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
    annual_salary: state.mainReducer.annual_salary,
    employer_match: state.mainReducer.employer_match
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput)
