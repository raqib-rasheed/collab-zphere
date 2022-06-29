import React, { FC } from "react";
import {zphereIcon} from 'helpers/assets/Images'

export const Nav: FC = () => {
    return (
        <header>
            <div className="header__bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="logo">
                                <a href="/">
                                    <img src={zphereIcon} style={{ height: "62px" }} alt="logo" />
                                </a>
                            </div>
                            <div className="logo-gradient">
                                <a href="/">
                                    <img src={zphereIcon} style={{ height: "62px" }} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                            <div className="header__bottom-right d-flex justify-content-end align-items-center">
                                <div className="main-menu"> 
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/">About Us </a>
                                            </li>
                                            <li>
                                                <a href="/">Services</a>
                                            </li>

                                            <li>
                                                <a href="/">Contact Us</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                                    <a href="login.html" className="z-btn z-btn-white">
                                        Login
                                    </a>
                                </div>
                                <div className="sidebar__menu d-lg-none">
                                    <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__search-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <form action="#">
                                <input type="text" placeholder="Your Keywords" />
                                <button type="submit">
                                    <i className="far fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay-2"></div>
        </header>
    );
    // return head
};

export default Nav;
