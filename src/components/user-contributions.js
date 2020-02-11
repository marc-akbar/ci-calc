import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateInputs, calculateMonthlyContributions } from '../actions/main'

const formFields= [
  {title: 'Annual salary', input_name: 'annual_salary_'},
  {title: 'Employer Match', input_name: 'employer_match_'}
]

class UserContributions extends Component {

  createForm = () => {
    const { updateInputs, id, calculateMonthlyContributions } = this.props;
    return formFields.map(field => {
      return (
        <div key={`${field.input_name}${id}`} className='user-input'>
          {field.title}
          <br/>
          <input onChange={ (e) => {updateInputs(e.target.value, `${field.input_name}${id}`); calculateMonthlyContributions()} }/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.createForm()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateInputs,
  calculateMonthlyContributions
}, dispatch)

const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContributions)
