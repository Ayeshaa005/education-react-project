


/*
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our PROGRAM" title="What We Offer"/>
        <Programs/>
        <About/>
        <Title subTitle="Gallery" title="Campus Photos"/>

        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Student Says"/>

        <Testimonials/>
         <Title subTitle="Contact Us" title="Get in Touch"/>
         <Contact/>
         <Footer/>

      </div>
      
    </div>
  )
}

export default App
*/


import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

  const [playstate,setPLaystate] = useState(false);


   



  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      <div className='container'>

        {/* Programs Section */}
        <section id="Programs">
          <Title subTitle="Our PROGRAM" title="What We Offer"/>
          <Programs/>
        </section>

        {/* About Section */}
        <section id="aboutUs">
          <About setPLaystate={setPLaystate} />
        </section>

        {/* Campus Section */}
        <section id="Campus">
          <Title subTitle="Gallery" title="Campus Photos"/>
          <Campus/>
        </section>

        {/* Testimonials Section */}
        <section id="Testimonials">
          <Title subTitle="TESTIMONIALS" title="What Student Says"/>
          <Testimonials/>
        </section>

        {/* Contact Section */}
        <section id="contactUs">
          <Title subTitle="Contact Us" title="Get in Touch"/>
          <Contact/>
        </section>

      </div>

      <Footer/>

     


    </div>
  );
}

export default App;
