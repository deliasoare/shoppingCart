import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    return (
        <>
            This is the shopping cart section.
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/items">Items</Link>
            </p>
        </>

    );
}

export default ShoppingCart;