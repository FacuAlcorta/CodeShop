import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer= ({listaItems}) =>{
    
    const onAdd = (p) => {
        (p == 1) ? (console.log(`Se agregó ${p} producto al carrito`)) :
          (console.log(`Se agregaron ${p} productos al carrito`))
        }
        

    return(
        <>
        {listaItems}
        <ItemCount ini= {1} stock= {5} onAdd= {onAdd} />
        <ItemList/>
        </>
    );
}

export default ItemListContainer;