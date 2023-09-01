import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count <= 0) {
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '200px', fontSize: '48px' }}>
        <button style={{ fontSize: '48px' }} onClick={() => decrement()}>-</button>
        <span>&nbsp; {count} &nbsp;</span>
        <button style={{ fontSize: '48px' }} onClick={() => increment()}>+</button>
      </div>
    </>
  )
}

export default App
