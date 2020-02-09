export const TEST = 'TEST'
export const UPDATE_INPUTS = 'UPDATE_INPUTS'

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
