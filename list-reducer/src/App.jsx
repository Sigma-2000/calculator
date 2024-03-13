import {useState} from "react";
const Input = ({dispatch})=>{

  const [value, setValue]= useState('');

  const handleChange = (e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const handleAdd = () => {
    if (!value) return; 
    dispatch({ type: 'addItem', payload: value });
    setValue('');
  };

  return(
    <>
  <input type={'text'} value={value} onChange={handleChange}></input>
  <button onClick={handleAdd}>add</button>
  </>
  )
}
export default Input;