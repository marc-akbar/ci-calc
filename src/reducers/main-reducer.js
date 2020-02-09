import {
  TEST
}from '../actions/main'

const initialState = {
  test: "We're almost there..."
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
    console.log(action.string)
      return {
        ...state,
        test: action.string
      }

    default: return state

  }
}
