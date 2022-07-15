import React from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {
    const onAdd = (p) => {
        (p == 1) ? (console.log(`Se agregó ${p} producto al carrito`)) :
          (console.log(`Se agregaron ${p} productos al carrito`))
        }
  return (
    <div id="card">
        <img src={props.thumbnail} alt=""/>
        <div id="content">              
                     {props.title}
                    <ol>
                    <li>Condición: {props.condition}</li>
                    <li>Cantidad disponible: {props.available_quantity}</li>
                    <li>ID: {props.id}</li>
                    </ol>
                 <div id="price">
                    <div> Precio: ${props.price} </div>
                    <ItemCount ini= {1} stock= {5} onAdd= {onAdd} />
                </div>
            </div>
        </div>
  )
}

export default Item