import React from "react";
import propertyImg from "../assets/images/property-1.jpg";
import property1Img from "../assets/images/author.jpg";
import property2Img from "../assets/images/property-2.jpg";

import {
  AiOutlineHeart,
  AiOutlineCompress,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BiBed } from "react-icons/bi";

export function Property() {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>

        <h2 className="h2 section-title">Featured Listings</h2>

        <ul className="property-list has-scrollbar">
          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src={propertyImg}
                    alt="New Apartment Nice View"
                    className="w-100"
                  />
                </a>

                <div className="card-badge green">For Rent</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">New Apartment Nice View</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>

                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>

                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src={property1Img}
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineCompress />
                  </button>

                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>

                  <button className="card-footer-actions-btn">
                    <AiOutlinePlusCircle />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src={property2Img}
                    alt="Modern Apartments"
                    className="w-100"
                  />
                </a>

                <div className="card-badge orange">For Sales</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Modern Apartments</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>

                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>

                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src={property1Img}
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineCompress />
                  </button>

                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>

                  <button className="card-footer-actions-btn">
                    <AiOutlinePlusCircle />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src={property2Img}
                    alt="Comfortable Apartment"
                    className="w-100"
                  />
                </a>

                <div className="card-badge green">For Rent</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Comfortable Apartment</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>

                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>

                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src={property1Img}
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineCompress />
                  </button>

                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>

                  <button className="card-footer-actions-btn">
                    <AiOutlinePlusCircle />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src="./assets/images/property-4.png"
                    alt="Luxury villa in Rego Park"
                    className="w-100"
                  />
                </a>

                <div className="card-badge green">For Rent</div>

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner-actions-btn">
                    <span>4</span>
                  </button>

                  <button className="banner-actions-btn">
                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Luxury villa in Rego Park</a>
                </h3>

                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>

                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>

                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img
                      src="./assets/images/author.jpg"
                      alt="William Seklo"
                      className="w-100"
                    />
                  </figure>

                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>

                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn"></button>

                  <button className="card-footer-actions-btn"></button>

                  <button className="card-footer-actions-btn"></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
