import React from 'react'

const Item = (props) => {
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
                    <div> {props.price} </div>
                    <button> Agregar </button>
                </div>
            </div>
        </div>
  )
}

export default Item