import React from 'react';
import BannerCard from '../component/BannerCard.jsx';
import Testimonials from '../component/testimonial/Testimonials.jsx';

const Testimonial = () => {
  const url = 'https://images.unsplash.com/photo-1631238426783-0fa98b5fb3be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Testimonial'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Testimonial;