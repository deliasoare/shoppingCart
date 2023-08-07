import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import '../styles/styles.scss';

const categoryFetch = fetch('https://fakestoreapi.com/products/categories', { mode: 'cors'})
const productFetch = fetch('https://fakestoreapi.com/products', { mode: 'cors' });

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const awaitData = async () => {
      try {
        const res = await Promise.all([
          fetch('https://fakestoreapi.com/products/categories', { mode: 'cors'}),
          fetch('https://fakestoreapi.com/products', { mode: 'cors' })
        ])

        res.forEach(r => {
          if (!r.ok)
            throw new Error(`error ${r.status}`);
        })
        
        const data = res.map(r => r.json())

        const [categoryResult, productResult] = await Promise.all(
          data
        );
        
        setCategories(categoryResult);
        setProducts(productResult);
        setError(null);

        console.log({categoryResult, productResult});
      }
      catch(err) {
        setError(err.message);
        setCategories(null);
        setProducts(null);
      }
      finally {
        setLoading(false);
      }
    }
    awaitData();
  }, [])
  return (
    <div className='content'>
      <Header />
      <div className='main'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App;
