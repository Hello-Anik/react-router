import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav className='root-main'>
                <NavLink to={'/laptops'}>Laptops</NavLink>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/mobiles'}>Mobiles</NavLink>
                <NavLink to={'./users'}>Users</NavLink>
                <NavLink to={'./users2'}>Users2</NavLink>
                <NavLink to={'./Posts'}>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;