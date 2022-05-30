import { connect } from 'react-redux';
import * as actions from '../../redux/action';

function Counter({ onIncrement, step, onDecrement, value }) {
  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={() => onIncrement(step)}>
        +{step}
      </button>
      <button type="button" onClick={() => onDecrement(step)}>
        -{step}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state.counteн);
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
