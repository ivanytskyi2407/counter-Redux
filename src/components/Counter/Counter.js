function Counter({ onIncrement, onDecrement }) {
  return (
    <div>
      <span>0</span>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
      <button type="button" onClick={onDecrement}>
        -1
      </button>
    </div>
  );
}
export default Counter;
