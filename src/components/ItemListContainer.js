import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer= ({listaItems}) =>{

    const onAdd = () => alert(`Producto agregado con exito.`)

    return(
        <>
        {listaItems}
        <ItemCount ini= {0} stock= {5} onAdd= {onAdd}/>
        </>
    );
}

export default ItemListContainer;