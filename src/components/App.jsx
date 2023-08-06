import { Outlet } from 'react-router-dom';

import Header from './Header';
function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App;
