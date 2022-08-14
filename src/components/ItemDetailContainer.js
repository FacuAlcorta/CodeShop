import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/customFirebase'


const ItemDetailContainer = () => {
    const [data, setData]= useState({});
    const { id } = useParams();

    useEffect(()=> {

      const firebaseDetail = async () => {
        
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
  
            if (docSnap.exists()) {
              return{
                ...docSnap.data()}
            } else {
              console.log("Producto no encontrado!");
            }
      }
        firebaseDetail(data)
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