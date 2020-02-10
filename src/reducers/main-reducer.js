import {
  TEST,
  UPDATE_INPUTS
}from '../actions/main'

const calculateMonthlyContributions = (s1 = 0, m1 = 0, s2 = 0, m2 = 0, ptc = 0) => {
  return (((s1 + s2) * (ptc/100)) + m1 + m2 )/12
}

const initialState = {
  test: "We're almost there...",
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
      return {
        ...state,
        test: action.string
      }

    case UPDATE_INPUTS:
      let { annual_salary_1, employer_match_1, annual_salary_2, employer_match_2, percent_to_contribute } = state
      let monthly_contribution = calculateMonthlyContributions(annual_salary_1, employer_match_1, annual_salary_2, employer_match_2, percent_to_contribute)

      return {
        ...state,
        [action.input_name]: action.value,
        monthly_contribution: monthly_contribution
      }

    default: return state
  }
}
