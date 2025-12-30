import React from 'react';
import BannerCard from '../component/BannerCard.jsx';
import Conta from '../component/contact/Conta.jsx';

const Contact = () => {
  const url = 'https://images.unsplash.com/photo-1551077033-17922cc03010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const page = 'Contact Us'
  return (
    <div>
      <BannerCard url = {url} page = {page} ></BannerCard>
      <Conta></Conta>
    </div>
  );
};

export default Contact;