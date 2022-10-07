import React from "react";
import logoImg from "../assets/images/logo.png";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFacebook, FaPinterest } from 'react-icons/fa'

export function Header() {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <div className="icon">
                  <AiOutlineMail />
                </div>
                <span>info@homeverse.com</span>
              </a>
            </li>

            <li>
              <a href="#" className="header-top-link">
                <div className="icon">
                  <GoLocation />
                </div>
                <address>15/A, Nest Tower, NYC</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                    <FaFacebook/>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                    <AiOutlineTwitter/>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                    <AiOutlineInstagram/>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                    <FaPinterest/>
                </a>
              </li>
            </ul>

            <button className="header-top-btn">Add Listing</button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img src={logoImg} alt="Homeverse logo" />
          </a>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src={logoImg} alt="Homeverse logo" />
              </a>

              <button
                className="nav-close-btn"
                data-nav-close-btn
                aria-label="Close Menu"
              ></button>
            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>

                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Service
                  </a>
                </li>

                <li>
                  <a href="#property" className="navbar-link" data-nav-link>
                    Property
                  </a>
                </li>

                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <div className="icon">
                <AiOutlineSearch />
              </div>
              <span>Search</span>
            </button>

            <button className="header-bottom-actions-btn" aria-label="Profile">
              <div className="icon">
                <AiOutlineUser />
              </div>
              <span>Profile</span>
            </button>

            <button className="header-bottom-actions-btn" aria-label="Cart">
              <div className="icon">
                <AiOutlineShoppingCart />
              </div>
              <span>Cart</span>
            </button>

            <button
              className="header-bottom-actions-btn"
              data-nav-open-btn
              aria-label="Open Menu"
            >
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
