import {
  TEST,
  UPDATE_INPUTS,
  CALCULATE_MONTHLY_CONTRIBUTIONS
}from '../actions/main'

const initialState = {
  test: "We're almost there...",
}

const calculateMonthlyContributions = (salary1 = 0, match1 = 0, salary2 = 0, match2 = 0, percentToContribute = 0) => {
  salary1 = parseInt(salary1)
  salary2 = parseInt(salary2)
  match1 = parseInt(match1)
  match2 = parseInt(match2)
  percentToContribute = parseInt(percentToContribute)
  return Math.round((((salary1 + salary2) * (percentToContribute/100)) + match1 + match2)/12)
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
      return {
        ...state,
        test: action.string
      }

    case UPDATE_INPUTS:
      return {
        ...state,
        [action.input_name]: action.value,
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
