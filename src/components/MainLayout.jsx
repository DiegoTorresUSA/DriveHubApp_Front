import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;