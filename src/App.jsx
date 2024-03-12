import { useReducer } from 'react'
import './App.css'
import Result from './components/Result.jsx'
import Input from "./components/Input.jsx"
import Button from './components/Button.jsx';
import PavNum from './components/PaveNum.jsx';


const initialState = {
    num1: '',
    num2: '',
    operator: '',
    result: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'set_value':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'set_operator':
            return {
                ...state,
                operator: action.payload,
            }
            case 'calculate': {
                let calculationResult = 0; 
                switch (state.operator) {
                    case '+':
                        calculationResult = parseFloat(state.num1) + parseFloat(state.num2);
                        break;
                    case '-':
                        calculationResult = parseFloat(state.num1) - parseFloat(state.num2);
                        break;
                    case '*':
                        calculationResult = parseFloat(state.num1) * parseFloat(state.num2);
                        break;
                    default:
                        calculationResult = state.result; 
                }
                return {
                    ...state,
                    result: calculationResult,
                };
            }
        case "reset":
            return initialState;

        default:
            return state;
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSetOperator = (operator) => {
        dispatch({ type: 'set_operator', payload: operator });
    };
    const handleNumberClick = (number) => {
        if ((!state.operator)){
        dispatch({
            type: 'set_value',
            payload: {
                name: 'num1', 
                value: state.num1 + number 
            }
        });
    }else{
        dispatch({
            type: 'set_value',
            payload: {
                name: 'num2', 
                value: state.num2 + number 
            }
        });
    }
      };

  return (
    <>
      <Result  result={state.result} />
        <div>
        <Input value={`${state.num1}${state.operator}${state.num2}`} />
        </div>
        <div> <PavNum numberClick={handleNumberClick} /></div>
        <div>
            <Button name={'+'} handleClick={() => handleSetOperator('+')} />
            <Button name={'-'} handleClick={() => handleSetOperator('-')}/>
            <Button name={'X'} handleClick={() => handleSetOperator('*')} />
            <Button name={'='} handleClick={() => dispatch({type: 'calculate'})} />
            <Button name={'reset'} handleClick={()=> dispatch({type: 'reset'})} />
        </div>
    </>
  )
}

export default App