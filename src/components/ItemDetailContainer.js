import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [data, setData]= useState({});

    useEffect(()=> {
        setInterval(()=>
        fetch('https://api.mercadolibre.com/items/MLA1142833255')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.log(error))
        , 2000);
    }, [])


  return (
    <>
        <ItemDetail item={data}/>
    </>
  )
}

export default ItemDetailContainer;