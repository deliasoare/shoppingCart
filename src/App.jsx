import { useState } from 'react'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>This is the home section.</>
      <p>
        <Link to="/items">Items</Link>
      </p>
      <p>
        <Link to="/shoppingCart">Shopping Cart</Link>
      </p>
    </>
  )
}

export default App;
