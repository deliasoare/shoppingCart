import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import DataContext from './DataContext';

import { BsArrowReturnLeft } from 'react-icons/bs';

const Items = () => {
    const data = useContext(DataContext); 
    const products = data.products;
    const categories = data.categories;
    const [categoryProducts, setCategoryProducts] = useState([]);
    let category = useParams().category;
    let capitalizedCategory = category;

    if (!category) 
        category = 'All Items';
    if (category !== 'All Items') {
        let aux = capitalizedCategory.split("");
        aux[0] = aux[0].toUpperCase();
        capitalizedCategory = aux.join("");
        if (!categories.includes(category))
            throw new Error('this ain\'t good');
    }

    const rating = (rating) => {
        let colors = [
            '#dc2626',
            '#f87171',
            '#facc15',
            '#bef264',
            '#4d7c0f'
        ]
        let that = ([...Array(5)]).map((star, starIndex) => {
            console.log(starIndex, parseInt(rating));
            if (starIndex < parseInt(rating)) {
                return (
                    <div style={{background: colors[parseInt(rating)]}} className='star fullStar'>
                        <span>★</span>
                    </div>
                );
            }
            else if (starIndex === parseInt(rating)) {
                let nr = String(rating).split("");
                let decimalPoint = Number(nr[2]) ? Number([nr[2]]) : 0;
                console.log(decimalPoint * 10);
                return (
                    <div style={{background: `linear-gradient(to right,${colors[parseInt(rating)]} ${decimalPoint * 10}%, 0%, #bbbac0 ${100 - (decimalPoint * 10)}%)`}} className='star halfStar'>
                        <span>★</span>
                    </div>
                );
            }
            else
                return (
                    <div style={{color: 'white', background: '#bbbac0'}} className='star emptyStar'>
                        <span>★</span>
                    </div>
                );
        })
        return that;
    }
    
    useEffect(() => {
        setCategoryProducts([]);
        if (category !== 'All Items') {
            products.forEach(product => {
                if (product.category === category) 
                    setCategoryProducts(prevProd => prevProd.concat(product));
            })
        }
    }, [category])


    return (
        <div className='itemsSection'>
            <Link className='backButton' to='/'>
                <BsArrowReturnLeft /> Back
            </Link>
            <div className='categoryTitle'>{ category !== "All Items" ? capitalizedCategory : category }</div>
            <div className='categoryItems'>
                {category === 'All Items' ?
                    products.map(product => {
                        console.log(product);
                        return (
                            <div className='item'>
                                <div className='itemImage'>
                                    <img src={product.image}/>  
                                </div>
                                <div className="itemTitle">{product.title}</div>
                                <div className='itemRating'>
                                    <div className="stars">{rating(product.rating.rate)}</div>
                                </div>
                                <div className="itemPrice">${product.price}</div>
                            </div>
                        );
                    })
                    :
                    categoryProducts.map(product => {
                        return (
                            <div className='item'>
                                <div className='itemImage'>
                                    <img src={product.image}/>  
                                </div>
                                <div className="itemTitle">{product.title}</div>
                                <div className='itemRating'>
                                    <div className="stars">{rating(product.rating.rate)}</div>
                                </div>
                                <div className="itemPrice">${product.price}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Items;
