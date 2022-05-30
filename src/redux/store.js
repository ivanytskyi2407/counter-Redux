import { createStore } from 'redux';

const initialState = { counterValue: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + 1,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - 1,
      };

    default:
      return state;
  }
};
const store = createStore(counterReducer);
export default store;
