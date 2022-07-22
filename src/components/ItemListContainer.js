import React, { useEffect, useState} from 'react'
import Item from './Item'
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router'
const {products} = require('../utils/products');


const ItemListContainer = () => {

    const [data, setData]= useState([]);
    const { id } = useParams();

    useEffect(()=> {
        if (id === undefined){
        customFetch(2000, products)
            .then(res => setData(res))
            .catch(error => console.log(error))
        } else {
            customFetch(2000, products.filter(item => item.categoryId === parseInt(id)))
            .then(res => setData(res))
            .catch(error => console.log(error))
        }
    }, []);


  return (
    <>
        <div><h2>Productos</h2></div>
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

export default ItemListContainer;