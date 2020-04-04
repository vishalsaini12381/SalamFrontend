import React, { useEffect } from 'react';
import Sidebar from '../../component/Sidebar'
import Header from '../../include/header';
import Footer from '../../include/footer';
import './dashboard.css';

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Header />
      <div className="main-container col2-right-layout myorder-fluid">
        <div className="container">
          <div className="row">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}