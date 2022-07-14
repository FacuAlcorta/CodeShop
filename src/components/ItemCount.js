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


    // const onAdd = () => {
    //   if (contador == 1) {
    //     console.log(`Se agregó ${contador} producto al carrito`)
    //   } else if (contador > 1) {
    //     console.log(`Se agregaron ${contador} productos al carrito`)
    //   }
    //   }
      

    
  return (
    <>
      <div>Tu lista de items!</div>
      <div>
        <button onClick={resta}>-</button>
            <p>{ contador }</p>
        <button onClick={suma}>+</button>
      </div>
      <div>
        <button onClick={()=>onAdd(contador)}>Agregar al carro</button>
      </div>
    </>
  );
};

export default ItemCount;
