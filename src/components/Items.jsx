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

    useEffect(() => {
        setCategoryProducts([]);
        if (category !== 'All Items') {
            console.log('running');
            products.forEach(product => {
                if (product.category === category) 
                    setCategoryProducts(prevProd => prevProd.concat(product));
            })
        }
        console.log(categoryProducts)
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
                        return <p>{product.title}</p>
                    })
                    :
                    categoryProducts.map(product => {
                        return <p>{product.title}</p>
                    })
                }
            </div>
        </div>
    );
}

export default Items;
