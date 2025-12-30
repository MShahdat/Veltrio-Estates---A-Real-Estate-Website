import React from 'react';
import BannerCard from '../component/BannerCard.jsx';

const Event = () => {
  const url = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Event'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
    </div>
  );
};

export default Event;