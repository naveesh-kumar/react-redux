import { combineReducers } from "redux";

//TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//INITIAL STATE
const initialState = {
  count: 0,
};

//REDUCERS
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, ["count"]: state.count + 1 };
    case DECREMENT:
      return { ...state, ["count"]: state.count - 1 };
    default:
      return { ...state };
  }
};

//COMBINE REDUCERS
export const reducers = combineReducers({
  countReducer
});