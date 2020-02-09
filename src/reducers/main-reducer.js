import {
  TEST,
  UPDATE_INPUTS
}from '../actions/main'

const initialState = {
  test: "We're almost there...",
  current_age: 0,
  retirement_age: 0
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
      return {
        ...state,
        test: action.string
      }

    case UPDATE_INPUTS:
    console.log("Reducer input_name: ", action.input_name);
      return {
        ...state,
        [action.input_name]: action.value
      }

    default: return state
  }
}
