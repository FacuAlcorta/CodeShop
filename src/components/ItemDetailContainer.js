import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';
const {products} = require('../utils/products');

const ItemDetailContainer = () => {
    const [data, setData]= useState({});
    const { id } = useParams();

    useEffect(()=> {
        customFetch(2000, products.find(item => item.id === parseInt(id)))
            .then(res => setData(res))
            .catch(error => console.log(error))
        
    }, [id])


  return (
    <>
        <ItemDetail item={data}/>
    </>
  )
}

export default ItemDetailContainer;