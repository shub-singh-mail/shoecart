import React, {useEffect, useState} from 'react';

import {ProductContext} from './ProductContext';

import shoesJSON from '../constants/shoes.json';
import IShoe from '../model/Shoe';

const ShoeContextProvider = ({children}: {children: React.ReactNode}) => {
  const [shoes, setShoes] = useState<IShoe[]>([]);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // timeout for loader
    const id = setTimeout(() => {
      setShoes(shoesJSON);
    }, 3000);
    
    return () => clearTimeout(id);
  }, [setShoes]);

  return (
    <ProductContext.Provider value={shoes}>{children}</ProductContext.Provider>
  );
};

export default ShoeContextProvider;
