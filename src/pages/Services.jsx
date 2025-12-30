import React from 'react';
import BannerCard from '../component/BannerCard.jsx';
import Service from '../component/servic/Service.jsx';
import About2 from '../component/about/About2.jsx';

const Services = () => {
  const url = 'https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Services'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <Service></Service>
      <About2></About2>
    </div>
  );
};

export default Services;