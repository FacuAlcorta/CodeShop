import React, { useEffect, useState } from 'react'
import Item from './Item'
import customFetch from '../utils/customFetch';
const {products} = require('../utils/products');

const ItemList = () => {

    const [data, setData]= useState({});

    useEffect(()=> {
        
        customFetch(2000, products)
            .then(res => setData(res))
            .catch(error => console.log(error))
        
    }, [])


  return (
    <>
        <div><h2>Placas de Video</h2></div>
        <hr/>
        <div className='container-fluid item-card'>
            <div className='row'>
        {
            data.length > 0 ?
            data.map(item=>(
                <Item 
                thumbnail={item.img}
                title={item.title}
                condition={item.condition}
                available_quantity={item.available_quantity}
                id={item.id}
                price={item.price}
                />
                )) :
                <div><p>Cargando contenido...</p></div>
        }
        </div>
        </div>
    </>
  )
}

export default ItemList;