import React from 'react';
import BannerCard from '../component/BannerCard.jsx';
import Detail from '../component/blogs/Detail.jsx';

const DetailBlog = () => {
  const url = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Single Blog'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <Detail/>
    </div>
  );
};

export default DetailBlog;