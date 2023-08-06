import { useState, useEffect } from 'react';
import shoppingCartBlk from '../assets/shpCartBlack.svg';
import shoppingCartWht from '../assets/shpCartWhite.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150)
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
                    <li className="titleSection">
                        <Link to="/"> <b>M</b>isc<b>T</b>ech </Link>
                    </li>
                    <div className="categories">
                        CATEGORIES
                    </div>
                    <li className='shoppingCart'>
                        <Link to="/shoppingCart">
                            <img className="icon cartIcon" src={shoppingCartWht} />
                        </Link>
                    </li>
                </div>
            ) : (
                <div className="unscrolledHeader"> 
                    <ul className='headerUpperSection'>
                        <li className='titleSection'>
                            <Link to="/"> <b>M</b>isc<b>T</b>ech </Link>
                        </li>
                        <li className='shoppingCart'>
                            <Link to="/shoppingCart">
                                <img className="icon cartIcon" src={shoppingCartBlk} />
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