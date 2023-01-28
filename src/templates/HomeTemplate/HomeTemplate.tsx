import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <div>
        <Header />
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeTemplate