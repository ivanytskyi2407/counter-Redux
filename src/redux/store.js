import { createStore } from 'redux';

const initialState = {
  counterValue: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - payload,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
