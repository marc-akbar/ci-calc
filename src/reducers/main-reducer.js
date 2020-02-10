import {
  TEST,
  UPDATE_INPUTS,
  CALCULATE_MONTHLY_CONTRIBUTIONS
}from '../actions/main'

const initialState = {
  test: "We're almost there...",
}

const calculateMonthlyContributions = (salary1 = 0, match1 = 0, salary2 = 0, match2 = 0, percentToContribute = 0) => {
  return Math.round((((salary1 + salary2) * (percentToContribute/100)) + match1 + match2)/12)
}

// const calculateCompoundInterest = (current_age, retirement_age, stop_contribution_age, current_savings, monthly_contribution, percent_annual_return_low, percent_annual_return_high) => {
//   let annualSavingsValues = []
//   let currentSavingsValueLow = current_savings
//   let currentSavingsValueHigh = current_savings
//   let date = new Date().getFullYear()
//
//   let totalMonthsContributing = (stop_contribution_age - current_age) * 12
//   for (let i = 1; i < totalMonthsContributing + 1; i++) {
//
//     currentSavingsValueLow += monthly_contribution + (currentSavingsValueLow * (percent_annual_return_low)/1200)
//     currentSavingsValueLow = currentSavingsValueLow
//
//     currentSavingsValueHigh += monthly_contribution + (currentSavingsValueHigh * (percent_annual_return_high)/1200)
//     currentSavingsValueHigh = currentSavingsValueHigh
//
//     if (i % 12 === 0) {
//       date++
//       annualSavingsValues.push({year: date, currentSavingsValueLow: Math.round(currentSavingsValueLow), currentSavingsValueHigh: Math.round(currentSavingsValueHigh)})
//     }
//   }
//     return annualSavingsValues
// }

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
      return {
        ...state,
        test: action.string
      }

    case UPDATE_INPUTS:
      if (action.value === ""){
        action.value = 0
      }

      return {
        ...state,
        [action.input_name]: parseInt(action.value, 10)
      }

    case CALCULATE_MONTHLY_CONTRIBUTIONS:

      let { annual_salary_1, annual_salary_2, employer_match_1, employer_match_2, percent_to_contribute } = state
      let monthly_contribution = calculateMonthlyContributions(annual_salary_1, employer_match_1, annual_salary_2, employer_match_2, percent_to_contribute)

      return {
        ...state,
        monthly_contribution: monthly_contribution
      }

    default: return state
  }
}
