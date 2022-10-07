import React from "react";
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {About} from './components/About';
import {Service} from './components/Service';
import {Property} from './components/Property';
import {Features} from './components/Features';
import {Blog} from './components/Blog';
import {CTA} from './components/CTA';
import {Footer} from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Property/>
      <Features/>
      <Blog/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
