import React from 'react';
import NavBar from '../navigation/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout ({children}:LayoutProps)  {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Layout;