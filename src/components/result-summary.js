import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  } from '../actions/main'

class ResultSummary extends Component {

  render() {
    const { monthly_contribution } = this.props;

    return (
      <div className='result-summary-container'>
        <p>(Summary of results)</p>

        <div className='monthly-contribution'>
          Monthly Contribution: ${monthly_contribution}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const mapStateToProps = state => {
  return {
    monthly_contribution: state.mainReducer.monthly_contribution,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultSummary)
