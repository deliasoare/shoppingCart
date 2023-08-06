import { Link } from 'react-router-dom';
const Items = () => {
    return (
        <>
            This is the items section.
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/shoppingCart">Shopping Cart</Link>
            </p>
        </>
    );
}

export default Items;
