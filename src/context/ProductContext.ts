import {createContext, useContext} from 'react';

import IShoe from '../model/Shoe';

export const ProductContext = createContext<IShoe[]>([]);

export const useProducts = () => useContext(ProductContext);
