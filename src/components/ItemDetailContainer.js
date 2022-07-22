import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';
const {products} = require('../utils/products');

const ItemDetailContainer = () => {
    const [data, setData]= useState({});
    const { id } = useParams();

    useEffect(()=> {
        if(id !== undefined){
        customFetch(2000, products[id])
            .then(res => setData(res))
            .catch(error => console.log(error))
        }
    }, [])


  return (
    <>
        <ItemDetail item={data}/>
    </>
  )
}

export default ItemDetailContainer;