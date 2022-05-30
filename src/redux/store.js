import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './Counter/counter-reducer';

const rootCreducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootCreducer, composeWithDevTools());

export default store;

// const initialState = {
//   counter: {
//     value: 0,
//     step: 5,
//   },
// };

// const counterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);
