import React from 'react';
import BannerCard from '../component/BannerCard.jsx';
import Property from '../component/properties/Property.jsx';
import Agent from '../component/agent/Agent.jsx';

const Properties = () => {
  const url = 'https://plus.unsplash.com/premium_photo-1745056197488-438b1931fa5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Properties'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <Property></Property>
      <Agent></Agent>
    </div>
  );
};

export default Properties;