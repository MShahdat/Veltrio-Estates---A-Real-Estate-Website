import React, {createContext, useState } from 'react';

export const dataContext = createContext();

const Context = (props) => {

  const [open, setOpen] = useState(false);
  const [gallery, setGallery] = useState(false)
  const [imgIdx, setImgIdx] = useState(0);
  const [urlIdx, setUrlIdx] = useState(null)

  return (
    <div>
      <dataContext.Provider value={[
        open,
        setOpen,
        gallery,
        setGallery,
        imgIdx,
        setImgIdx,
        urlIdx,
        setUrlIdx,
      ]}>
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default Context;