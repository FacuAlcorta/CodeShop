import React from "react";
import ItemList from "./ItemList";

const ItemListContainer= ({listaItems}) =>{
   
    return(
        <>
        {listaItems}
        <ItemList/>
        </>
    );
}

export default ItemListContainer;