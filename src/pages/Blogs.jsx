import React from 'react';
import BannerCard from '../component/BannerCard.jsx';

const Blogs = () => {
  const url = 'https://images.unsplash.com/photo-1716858803007-b0230740e2be?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Blogs'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
    </div>
  );
};

export default Blogs;