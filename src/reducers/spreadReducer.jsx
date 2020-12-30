import * as actions from "../actions";

const counterInitialState = {
  value: 0,
  diff: 1,
};

const spreadReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        value: state.value + state.diff,
      };
    case actions.DECREMENT:
      return {
        ...state,
        value: state.value - state.diff,
      };
    case actions.SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
};

export default spreadReducer;
