import './calcButton.css'


const CalcButton = ({dispatch}) => {

    const handleOperatorClick = (value) => {
        dispatch({
            type: 'setOperator',
            payload: value
        })
    }

    const handleCalculate = () => {
        dispatch({
            type: 'calculate'
        })
    }

    const handleDecimalClick = () => {
        dispatch({
            type: 'addDecimal'
        })
    }

    return (
        <div className={'calcButton'}>
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleOperatorClick('*')}>x</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={handleDecimalClick}>.</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => dispatch({type: 'reset'})}>c</button>
        </div>
    )
}

export default CalcButton