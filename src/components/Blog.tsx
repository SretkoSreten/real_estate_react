import React from "react";
import blog1Img from '../assets/images/blog-1.png'
import blog2Img from '../assets/images/blog-2.jpg'
import blog3Img from '../assets/images/blog-3.jpg'

export function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>

        <h2 className="h2 section-title">Leatest News Feeds</h2>

        <ul className="blog-list has-scrollbar">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img
                  src={blog1Img}
                  alt="The Most Inspiring Interior Design Of 2021"
                  className="w-100"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-content-top">
                  <ul className="card-meta-list">
                    <li>
                      <a href="#" className="card-meta-link">
                        <span>by: Admin</span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card-meta-link">
                        <span>Interior</span>
                      </a>
                    </li>
                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#">The Most Inspiring Interior Design Of 2021</a>
                  </h3>
                </div>

                <div className="blog-content-bottom">

                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img
                  src={blog2Img}
                  alt="Recent Commercial Real Estate Transactions"
                  className="w-100"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-content-top">
                  <ul className="card-meta-list">
                    <li>
                      <a href="#" className="card-meta-link">
                        <span>by: Admin</span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card-meta-link">
                        <span>Estate</span>
                      </a>
                    </li>
                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#">Recent Commercial Real Estate Transactions</a>
                  </h3>
                </div>

                <div className="blog-content-bottom">

                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <img
                  src={blog3Img}
                  alt="Renovating a Living Room? Experts Share Their Secrets"
                  className="w-100"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-content-top">
                  <ul className="card-meta-list">
                    <li>
                      <a href="#" className="card-meta-link">
                        <span>by: Admin</span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card-meta-link">
                        <span>Room</span>
                      </a>
                    </li>
                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#">
                      Renovating a Living Room? Experts Share Their Secrets
                    </a>
                  </h3>
                </div>

                <div className="blog-content-bottom">

                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
