import { useState, useMemo, useEffect } from 'react'


function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // memorize something that's too slow, so that you don't have to compute
  // on every render
  const double = useMemo(() => {
    return slowFunction(number)
  }, [number]);

  // to maintain referential equalities, so that you can compare with the stored value
  // instead of the rerendered new object with the same value (rerendered, i.e a new object)
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed');
  }, [themeStyles]);

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{double}</div>
    </>
  )

  function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  }

}

export default App
