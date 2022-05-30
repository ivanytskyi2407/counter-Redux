import { connect } from 'react-redux';
import * as actions from '../../redux/action';

function Counter({ onIncrement, onDecrement, value }) {
  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
      <button type="button" onClick={onDecrement}>
        -1
      </button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    value: state.counterValue,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(1)),
    onDecrement: () => dispatch(actions.decrement(1)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
