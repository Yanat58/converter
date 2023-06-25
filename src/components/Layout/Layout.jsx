import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rates">Rates</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
