import React from 'react';
import Header from '../components/sections/Header';
import Showcase from '../components/sections/Showcase';
import ProductsGrid from '../components/sections/ProductGrid';
import Stylecase from '../components/sections/Stylecase';

const HomeView = () => {
    return (
        <div id='home'>
            <Header />
            <Showcase/>
            <ProductsGrid title="Featured Products" />
            <Stylecase/>
        </div>
    );
}

export default HomeView;
