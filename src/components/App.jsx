import { useState, useEffect, useContext } from 'react';
import DataContext from './DataContext';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen'
import '../styles/styles.scss';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const awaitData = async () => {
      try {
        const res = await Promise.all([
          fetch('https://fakestoreapi.com/products/categories', { mode: 'cors' }),
          fetch('https://fakestoreapi.com/products', { mode: 'cors' })
        ])

        res.forEach(r => {
          if (!r.ok)
            throw new Error(`error ${r.status}`);
        })
        
        const dataRes = res.map(r => r.json())

        const [categoryResult, productResult] = await Promise.all(
          dataRes
        );
        
        setData({categories: categoryResult, products: productResult, shoppingCart: []});
        setError(null);

      }
      catch(err) {
        setError(err.message);
        setData(null);
      }
      finally {
        setLoading(false);
      }
    }
    awaitData();
  }, [])

  useEffect(() => {
      console.log(data.shoppingCart);
  }, [data])
  return (
    <>
    {loading ? 
        <LoadingScreen />
        :
        <DataContext.Provider value={[data, setData]}>
        <div className='content'>
          <Header />
          <div className='main'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </DataContext.Provider>
      }
    </>
  )
}

export default App;
