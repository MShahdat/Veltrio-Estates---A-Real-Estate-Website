import React from 'react';
import Banner from '../component/home/Banner';
import Property from '../component/properties/Property';
import About3 from '../component/about/About3';
import Agent from '../component/agent/Agent';
import Service from '../component/servic/Service';
import About2 from '../component/about/About2';
import Testimonials from '../component/testimonial/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Property></Property>
      <About3></About3>
      <Agent></Agent>
      <Service></Service>
      <About2></About2>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;