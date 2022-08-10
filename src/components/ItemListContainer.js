import React, { useEffect, useState} from 'react'
import Item from './Item'
import { useParams } from 'react-router'
//import { customFetchFirestore } from '../utils/customFetchFirebase'
import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { collectionFire } from '../utils/customFirebase'


const ItemListContainer = () => {

    const [data, setData]= useState([]);
    const { categoryId } = useParams();

    useEffect(()=> {

        const filter = categoryId ? query(collectionFire, where('categoryId', '==', categoryId))
        : query(collectionFire, orderBy('categoryId'))

        getDocs(filter)
            .then(result => setData(result.docs.map(doc => (doc.data()))))
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