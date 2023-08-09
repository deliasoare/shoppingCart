import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import DataContext from './DataContext';

import { BiShoppingBag } from 'react-icons/bi';
import { BsArrowReturnLeft } from 'react-icons/bs';

const addToCart = (data, setData, product) => {
    if (data.shoppingCart.filter(item => item.id === product.id).length > 0) {
        let aux = data.shoppingCart;
        aux.map((item, itemIndex) => {
            if (item.id === product.id) {
                item = {...item, quantity: item.quantity + 1};
                aux[itemIndex] = item;
            }
        });
        setData({
            ...data,
            shoppingCart: aux
        });
        return;
    }
    let productCopy = {...product};
    productCopy.quantity = 1;
    setData({
        ...data,
        shoppingCart: data.shoppingCart.concat(productCopy)
    })
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

export const Items = () => {
    const data = useContext(DataContext)[0]; 
    const setData = useContext(DataContext)[1];
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
            throw new Error();
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
    let allProducts = category === 'All Items' ? products : categoryProducts
    return (
        <div className='itemsSection'>
            <Link className='backButton' to='/'>
                <BsArrowReturnLeft /> Back
            </Link>
            <div className='categoryTitle'>{ category !== "All Items" ? capitalizedCategory : category }</div>
            <div className='categoryItems'>
                    {allProducts.map(product => {
                        return (
                            <a key={product.id} href={`/item/${product.id}`} className='item'>
                                <div className='itemImage'>
                                    <img src={product.image}/>  
                                </div>
                                <div className="itemTitle">{product.title}</div>
                                <div className='itemRating'>
                                    <div className="stars">{rating(product.rating.rate)} ({product.rating.count}) </div>
                                </div>
                                <div className="itemPrice">${product.price}</div>
                                <div className="addToCart" onClick={(e) => {e.preventDefault(); addToCart(data, setData, product)}}>
                                    <BiShoppingBag /> <span>Add to cart</span>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
}

export const Item = () => {
    const id = useParams();
    return (
        <div className='itemSection'>
            <Link className='backButton' to='/items/'>
                <BsArrowReturnLeft /> Back
            </Link>
            
        </div>
    );
}
