import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import customFetch from '../utils/customFetch';
const {products} = require('../utils/products');

const ItemDetailContainer = () => {
    const [data, setData]= useState({});

    useEffect(()=> {
        
        customFetch(2000, products[2])
            .then(res => setData(res))
            .catch(error => console.log(error))
        
    }, [])


  return (
    <>
        <ItemDetail item={data}/>
    </>
  )
}

export default ItemDetailContainer;