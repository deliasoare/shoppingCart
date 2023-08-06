import { Outlet } from 'react-router-dom';

import Header from './Header';
import '../styles/styles.scss';
function App() {

  return (
    <div className='content'>
      <Header />
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App;
