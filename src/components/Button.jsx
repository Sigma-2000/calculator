/*const Button = ({name, handleClick}) => {

  return (
      <button onClick={handleClick}>{name}</button>
  )
}

export default Button*/

import NumberButton from "./NumberButton.jsx"
import CalcButton from './CalcButton.jsx'
const Buttons = ({dispatch}) => {

    return (
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <NumberButton dispatch={dispatch} />
            <CalcButton dispatch={dispatch} />
        </div>
    )
}

export default Buttons;