import React, { useContext } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Top from './scroll/Top';
import ScrollTop from './scroll/ScrollTop';
import { dataContext } from './context/Context';
import Gallary from './component/properties/Gallary';

const App = () => {
  const [
        open,
        setOpen,
        gallery,
        setGallery,
        imgIdx,
        setImgIdx
      ] = useContext(dataContext)
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      {
        gallery &&
        <Gallary/>
      }
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollTop></ScrollTop>
      <Top></Top>
    </div>
  );
};

export default App;