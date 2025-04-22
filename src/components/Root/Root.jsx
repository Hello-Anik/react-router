import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import "./Root.css"
const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location) 
    return (
        <div>
            <Header></Header>
            {isNavigating && <span>Loading....</span>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;