import { useEffect, useState } from 'react'


function App() {

  const [resourceType, setResourceType] = useState('posts');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // clean up (runs first) before you run the useEffect again, also run before unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <>
      {windowWidth}
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App
