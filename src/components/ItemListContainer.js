import React, { useEffect, useState} from 'react'
import Item from './Item'
import { useParams } from 'react-router'
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from '../utils/customFirebase'


const ItemListContainer = () => {

    const [data, setData]= useState([]);
    const { categoryId } = useParams();

    useEffect(()=> {
        
        const customFetchFirestore = async (categoryId) => {
            let cat;
            if (categoryId) {
                cat = query(collection(db, "products"), where('categoryId', '===', categoryId))
            } else {
                cat = query(collection(db, "products"), orderBy("categoryId"))
            }
                const querySnapshot = await getDocs(cat);
                const dataFirestore = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
            
            }));
            return dataFirestore
        }
        customFetchFirestore(categoryId)
        .then(res => setData(res))
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