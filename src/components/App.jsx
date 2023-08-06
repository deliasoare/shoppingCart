import { Link, Outlet } from 'react-router-dom';

import Header from './Header';
function App() {

  return (
    <div style={{height:'200vh'}}>
      <Header />
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App;
