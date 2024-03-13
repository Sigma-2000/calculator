const List = ({fruits, dispatch})=>
{
  return (
    <>
    <ul>
    {fruits.map((fruit, id) => (
        <li key={id}>
          {fruit}
          <button onClick={() => dispatch({ type: 'removeItem', payload: id })}>Delete</button>
        </li>
      ))}

    </ul>
    </>
)
}
export default List;