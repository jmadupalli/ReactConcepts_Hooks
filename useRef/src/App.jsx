import { useState, useEffect, useRef } from 'react'


function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef('');

  //refs do not cause to update your state/render!!!
  //do not use refs to append childs or bypass react state
  //persists values between renders!!!!
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  useEffect(() => {
    prevName.current = name
  }, [name])

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}, it used to be {prevName.current}</div>

      <div>I rendered {renderCount.current} times.</div>

      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
