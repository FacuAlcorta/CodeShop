import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {

    const [data, setData]= useState([])

    useEffect(()=> {
        setInterval(()=>
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=GPU=nvidia')
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(error => console.log(error))
        , 2000);
    }, [])


  return (
    <>
        <h2>Placas de Video</h2>
        {
            data.length > 0 ?
            data.map(item=>(
                <Item 
                thumbnail={item.thumbnail}
                title={item.title}
                condition={item.condition}
                available_quantity={item.available_quantity}
                id={item.id}
                price={item.price}
                />
                )) :
                <p>Cargando contenido...</p>
        }
    </>
  )
}

export default ItemList;