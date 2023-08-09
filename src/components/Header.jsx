import { useState, useEffect, useContext } from 'react';
import shoppingCartBlk from '../assets/shpCartBlack.svg';
import shoppingCartWht from '../assets/shpCartWhite.svg';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const data = useContext(DataContext)[0];
    const [cartIconQuantity, setCartIconQuantity] = useState(0);

    useEffect(() => {
        let totalQuantity = 0;
        data.shoppingCart.forEach(item => {
            totalQuantity += item.quantity;
        })
        setCartIconQuantity(totalQuantity);
        console.log('changed');
    }, [data.shoppingCart])
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
                        <Link to='/items' key='all' className='scrolledHeaderCategory'>ALL</Link>
                        {
                            data.categories.map(category => {
                                return (
                                        <Link to={`/items/${category}`} key={category} className="scrolledHeaderCategory">{category}</Link>
                                )
                            })
                        }
                    </div>
                    <li className='shoppingCart'>
                        <Link to="/shoppingCart">
                        <div className="cartIconContainer">
                            <img className="icon cartIcon" src={shoppingCartWht} />
                            {cartIconQuantity !== 0 &&
                                        <span className='cartIconDisplayer'>{cartIconQuantity}</span>
                            }
                        </div>
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
                                <div className="cartIconContainer">
                                    <img className="icon cartIcon"  src={shoppingCartBlk} />
                                    {cartIconQuantity !== 0 &&
                                        <span className='cartIconDisplayer'>{cartIconQuantity}</span>
                                    }
                                </div>
                                
                            </Link>
                        </li>
                    </ul>
                    <ul className='headerLowerSection'>
                        <Link key='all' to='/items' className='unscrolledHeaderCategory'>ALL</Link>
                        {data.categories.map(category => {
                                return (
                                    <li key={category} className="unscrolledHeaderCategory">
                                        <Link to={`/items/${category}`}>{category}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                 </div>
            )}
        </>
    );

}

export default Header;