import React, { useState } from "react";

const ItemCount = ({ini, stock, onAdd}) => {

    const [contador, setContador] = useState(ini); 

    const suma = () =>{
        if (contador < stock) {
            const res= contador+1
            setContador(res);
        }else {
            alert("Has alcanzado el limite de items.")
        }
    }

    const resta = () =>{
        if (contador > ini) {
            const res= contador-1
            setContador(res);
        }
    }


  return (
    <>
      <div id='btn-contador'>
        <button id='btn-count' onClick={resta}>-</button>
        <div className='btn-show'>{ contador }</div>
        <button id='btn-count' onClick={suma}>+</button>
        {
          contador !== 0   
          ? <button className="btn-agregar" onClick={()=>onAdd(contador)}>Agregar al carro</button>
          : <button className="btn-agregar" disabled>Agregar al carro</button>
        }
      </div>
    </>
  );
};

export default ItemCount;
