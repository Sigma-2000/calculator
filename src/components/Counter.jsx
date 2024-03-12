import { useReducer } from 'react';

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, result: parseFloat(state.num1) + parseFloat(state.num2) };
    case 'multiply':
      return { ...state, result: parseFloat(state.num1) * parseFloat(state.num2) };
    case 'reset':
      return initialState;
    case 'set_num1':
      return { ...state, num1: parseFloat(action.payload) };
    case 'set_num2':
      return { ...state, num2: parseFloat(action.payload) };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('Current State:', state);
  return (
    <>
    <div>
    <div>Resultat : {state.result}</div>
      <div>
        Num1 : <input type="number" value={state.num1} onChange={(e) => dispatch({ type: 'set_num1', payload: e.target.value })} />  
        Num2 : <input type="number" value={state.num2} onChange={(e) => dispatch({ type: 'set_num2', payload: e.target.value })} />
      </div>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'multiply' })}>*</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
    </>
  );
};

export default Counter;