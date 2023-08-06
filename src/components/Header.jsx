import { useState, useEffect } from 'react';
import shoppingCart from '../assets/shpCart.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160)
                setIsScrolled(true);
            else 
                setIsScrolled(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            { isScrolled ? (
                <div className="scrolledHeader"> 
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
                </div>
            ) : (
                <div className="unscrolledHeader"> 
                    <ul className='headerUpperSection'>
                        <li className='titleSection'>
                            <Link to="/"> MiscTech </Link>
                        </li>
                        <li className='shoppingCart'>
                            <Link to="/shoppingCart">
                                <img className="icon cartIcon" src={shoppingCart} />
                            </Link>
                        </li>
                    </ul>
                    <ul className='headerLowerSection'>
                        CATEGORIES
                    </ul>
                 </div>
            )}
        </>
    );

}

export default Header;