const List = ({fruits, dispatch})=>
{
  return (
    <>
    <ul>
    {fruits.map((fruit) => (
         <li key={fruit.id}>
         {fruit.name}
          <button onClick={() => dispatch({ type: 'removeItem', payload: fruit.id })}>Delete</button>
        </li>
      ))}

    </ul>
    </>
)
}
export default List;