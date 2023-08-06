import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import '../styles/styles.scss';
function App() {

  return (
    <div className='content'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
