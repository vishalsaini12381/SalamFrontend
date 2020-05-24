import React from 'react'
import Header from '../include/header';
import Footer from '../include/footer';
import WalletTransaction from "./WalletTransaction";
import Sidebar from '../component/Sidebar'

export default function MyWallet() {
    return (
        <div>
            <Header />
            <div className="main-container col2-right-layout myorder-fluid">
                <div className="container">
                    <div className="row">
                        <Sidebar pageSelected="mywallet" />
                        <WalletTransaction />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

