import React from 'react';
import BannerCard from '../component/BannerCard.jsx';
import About1 from '../component/about/About1.jsx';
import About2 from '../component/about/About2.jsx';
import About3 from '../component/about/About3.jsx';

const About = () => {
  const url = 'https://images.unsplash.com/photo-1694859035074-cb7166b5e7ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'About'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <About1></About1>
      <About3></About3>
      <About2></About2>
    </div>
  );
};

export default About;