import React from 'react';
import Link from 'react-router-dom'
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/products">VENIA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/products">women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Smart Gear</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Accessories</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-grey">
                                <i className='fa fa-search'>Search</i>
                            </a>
                            <a href="" className="btn btn-grey">
                                <i className='fa fa-signin'>Sign in</i>
                            </a>
                           

                            {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink> */}
                            <NavLink to="/cart" className="btn btn-grey ms-2"> <i className="fa fa-shopping-cart me-1"></i>

                                Cart{' '}
                                {props.countCartItems ? (
                                    <button className="btn btn-primary">{props.countCartItems}</button>
                                ) : (
                                    ''
                                )}
                            </NavLink>{' '}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar