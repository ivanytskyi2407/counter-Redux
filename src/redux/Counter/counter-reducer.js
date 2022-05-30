import { combineReducers } from 'redux';

const stepReducer = (state = 5, action) => state;

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        value: state + payload,
      };
    case 'counter/Decrement':
      return {
        value: state - payload,
      };
    default:
      return state;
  }
};
export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
