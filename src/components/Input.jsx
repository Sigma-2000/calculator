
const Input = ({value, changeValue, name}) => {
//espace affichage
  const handleChange = (e) => {
      const {value, name} = e.target

      if(!isNaN(parseFloat(value)) || value === '') {
          changeValue({type:'set_value', payload: {name, value}})
      }

  }

  return (
      <>
          <input type={'text'} name={name} value={value} onChange={handleChange} />
      </>
  )
}

export default Input 