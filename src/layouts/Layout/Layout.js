import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
import React from 'react';

function Layout() {
    return (
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    )
}

export default Layout