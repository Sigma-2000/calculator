import List from "./components/List";
import Input from "./components/Input";
import './App.css'
import { useReducer } from "react";

const fruits = ['pomme', 'banane', "poire", "ananas"]
const initialState = {
  fruits : fruits
}
const reducer = (state, action) => {
  switch(action.type) {
      case 'addItem':
          return {
              ...state,
            fruits: [...state.fruits, action.payload],
          }
      case 'removeItem':
        return{
          ...state,
          fruits: state.fruits.filter((fruit, index) => index !== action.payload)
        }
      default:
          return state;
  }
}

function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);


  return (
    <>
      <List fruits={state.fruits} dispatch={dispatch}/>
      <Input dispatch={dispatch}/>
    </>
  )
}

export default App
