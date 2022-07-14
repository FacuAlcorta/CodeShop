import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer= ({listaItems}) =>{
    
    const onAdd = (p) => {
        if (p == 1) {
          console.log(`Se agregó ${p} producto al carrito`)
        } else if (p > 1) {
          console.log(`Se agregaron ${p} productos al carrito`)
        }
        }
        

    return(
        <>
        {listaItems}
        <ItemCount ini= {1} stock= {5} onAdd= {onAdd} />
        </>
    );
}

export default ItemListContainer;