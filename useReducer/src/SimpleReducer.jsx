import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT: return { count: state.count + 1 };
    case ACTIONS.DECREMENT: return { count: state.count - 1 };
    default: return state;
  }
}

function SimpleReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '200px', fontSize: '48px' }}>
        <button style={{ fontSize: '48px' }} onClick={() => decrement()}>-</button>
        <span>&nbsp; {state.count} &nbsp;</span>
        <button style={{ fontSize: '48px' }} onClick={() => increment()}>+</button>
      </div>
    </>
  )
}

export default SimpleReducer
