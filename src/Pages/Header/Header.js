import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } to="/home">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/posts">Posts</NavLink>

        </div>
    );
};

export default Header;