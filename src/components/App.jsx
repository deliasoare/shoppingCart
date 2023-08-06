import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <p>header</p>
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default App;
