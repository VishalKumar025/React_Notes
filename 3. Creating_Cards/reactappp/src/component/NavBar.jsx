
import React from 'react';

const NavBar = () => {
    const listItems = ["Home", "Products", "Categories", "About", "Contact"];   //it control repeat concept,..

    return (
        <nav className="navbar">
            <div className="logo">Accessories</div>
            <ul className="nav-links"> 
                {listItems.map((ele, i) => (
                    <li key={i}>
                        <a href="#">{ele}</a>
                    </li>
                ))}
            </ul>
            <button className="btn">Login</button>
        </nav>
    );
};

export default NavBar;
