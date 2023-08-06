import { Link } from 'react-router-dom';

function Home() {
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

export default Home;
