import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
            let found = cartList.find( prod => prod.idItem === item.id);
            if (found === undefined) {
                setCartList([
                    {
                        idItem : item.id,
                        name : item.name,
                        price : item.price,
                        img : item.img,
                        cantItem : qty
                    },
                    ...cartList
                    ]);
                } else {
                            found.cantItem += qty;
                    }
            
                }
    
    
    const removeItem = (id) => {
        const newList = cartList.filter(item => item.id !== id)
        setCartList(newList)
    }

    const clear = () => {
        setCartList([])
    }
    
    const totalSum = () => {
        return cartList.reduce((total, product)=> total + product.cantItem * product.price, 0)
    }

    
    const totalFinal = () =>{
        return totalSum()
    }


    const cantItemTotal = () =>{
            let qtys = cartList.map(item => item.cantItem).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
            return qtys
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, cantItemTotal, totalFinal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;