const PavNum = ({ numberClick }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const handleClick = (e) => {
    const value = (e.target.textContent);
    numberClick(value);
  }
  return (
    <div>
        {digits.map((item, i) => (
          <button key={i} onClick={handleClick}>{item}</button> 
        ))}
    </div>
  );
};
export default PavNum;