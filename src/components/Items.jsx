import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './DataContext';

import { BsArrowReturnLeft } from 'react-icons/bs';
const Items = () => {
    const data = useContext(DataContext); 
    const products = data.products;
    const categories = data.categories;
    console.log(categories);
    let category = useParams();
    let categoryProducts = [];
    console.log(products);
    if (!category.category) 
        category = 'All Items';
    if (category !== 'All Items') {
        if (!categories.includes(category.category))
            throw new Error('this ain\'t good');
        products.map(product => {
            if (product.category === category)
                categoryProducts = [...categoryProducts, product];
        })
    }
    return (
        <div className='itemsSection'>
            <Link className='backButton' to='/'>
                <BsArrowReturnLeft /> Back
            </Link>
            <div className='categoryTitle'>{ category.category ? category.category : category }</div>
            <div className='categoryItems'></div>
        </div>
    );
}

export default Items;
