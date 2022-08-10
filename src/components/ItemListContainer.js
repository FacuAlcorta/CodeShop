import React, { useEffect, useState} from 'react'
import Item from './Item'
import { useParams } from 'react-router'
import { customFetchFirestore } from '../utils/customFetchFirebase'


const ItemListContainer = () => {

    const [data, setData]= useState([]);
    const { categoryId } = useParams();

    useEffect(()=> {
        
        customFetchFirestore(categoryId)
            .then(result => setData(result))
            .catch(err => console.log(err))
        
    }, [categoryId]);


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
                stock={item.stock}
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