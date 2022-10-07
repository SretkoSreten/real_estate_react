import React from "react";
import { AiOutlineArrowRight, AiOutlineCar, AiOutlineHome, AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineWaterDrop,MdOutlineSingleBed } from 'react-icons/md'
import { HiOutlineShieldCheck, HiOutlineLibrary, HiOutlinePlay } from 'react-icons/hi'

export function Features() {
  return (
    <section className="features">
      <div className="container">
        <p className="section-subtitle">Our Aminities</p>

        <h2 className="h2 section-title">Building Aminities</h2>

        <ul className="features-list">
          <li>
            <a href="#" className="features-card">
              <AiOutlineCar className="card-icon" />

              <h3 className="card-title">Parking Space</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
                <MdOutlineWaterDrop className="card-icon" />

              <h3 className="card-title">Swimming Pool</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <HiOutlineShieldCheck className="card-icon"/>

              <h3 className="card-title">Private Security</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
            <AiFillMedicineBox className="card-icon"/>

              <h3 className="card-title">Medical Center</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
            <HiOutlineLibrary className="card-icon"/>

              <h3 className="card-title">Library Area</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <MdOutlineSingleBed className="card-icon"/>

              <h3 className="card-title">King Size Beds</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <AiOutlineHome className="card-icon"/>

              <h3 className="card-title">Smart Homes</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <HiOutlinePlay className="card-icon"/>

              <h3 className="card-title">Kid’s Playland</h3>

              <div className="card-btn">
                <AiOutlineArrowRight />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
