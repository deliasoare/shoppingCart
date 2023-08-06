import { Link } from 'react-router-dom';
import shoppingCart from '../assets/shpCart.svg';

const HeaderContent = () => {
    return (
        <ul className="headerContent">
            <li className="titleSection">
                <Link to="/"> MiscTech </Link>
            </li>
            <li className='itemSection'>
                <Link to="/items"> Items </Link>
            </li>
            <li className='shoppingCart'>
                <Link to="/shoppingCart">
                    <img className="icon cartIcon" src={shoppingCart} />
                </Link>
            </li>
        </ul>
    );
}

export default HeaderContent;