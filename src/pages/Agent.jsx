import React from 'react';
import Age from '../component/agent/Agent.jsx';
import BannerCard from '../component/BannerCard.jsx';

const Agent = () => {
  const url = 'https://images.unsplash.com/photo-1748063578185-3d68121b11ff?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Agent'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <Age></Age>      
    </div>
  );
};

export default Agent;