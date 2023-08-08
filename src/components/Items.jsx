import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './DataContext';

import { BsArrowReturnLeft } from 'react-icons/bs';

const Items = () => {
    const data = useContext(DataContext); 
    const products = data.products;
    const categories = data.categories;
    let category = useParams();
    let categoryProducts = [];
    let capitalizedCategory = category.category;

    if (!category.category) 
        category = 'All Items';
    if (category !== 'All Items') {
        let aux = capitalizedCategory.split("");
        aux[0] = aux[0].toUpperCase();
        capitalizedCategory = aux.join("");
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
            <div className='categoryTitle'>{ category.category ? capitalizedCategory : category }</div>
            <div className='categoryItems'></div>
        </div>
    );
}

export default Items;
