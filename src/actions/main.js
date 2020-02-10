export const TEST = 'TEST'
export const UPDATE_INPUTS = 'UPDATE_INPUTS'
export const CALCULATE_MONTHLY_CONTRIBUTIONS = 'CALCULATE_MONTHLY_CONTRIBUTIONS'

export const testFunction = () => {
  return {
    type: TEST,
    string: "We're on React!"
  }
}
export const updateInputs = (value, input_name) => {
  return {
    type: UPDATE_INPUTS,
    value: value,
    input_name: input_name
  }
}
export const calculateMonthlyContributions = () => {
  return {
    type: CALCULATE_MONTHLY_CONTRIBUTIONS,
  }
}
