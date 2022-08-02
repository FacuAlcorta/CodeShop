import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = (props) => {
    const onAdd = (p) => {
        (p === 1) ? (console.log(`Se agregó ${p} producto al carrito`)) :
          (console.log(`Se agregaron ${p} productos al carrito`))
        }

  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='card'>
        <img src={props.thumbnail} alt="Gpu Img"/>
    <div id="content">              
        {props.title}
            <ol>
            <li>Condición: {props.condition}</li>
            <li>Cantidad disponible: {props.stock}</li>
            <li>ID: {props.id}</li>
            <Link to={`/item/${props.id}`}><li>--DETALLE--</li></Link>
            </ol>
        <div id="price">
            <div>Precio: ${props.price}</div>
        </div>
            <div className='btns'><ItemCount ini= {0} stock= {props.stock} onAdd= {onAdd} /></div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Item