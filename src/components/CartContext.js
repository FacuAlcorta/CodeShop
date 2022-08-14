import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {

    let found = cartList.find( p => p.id === item.id);

    if (found === undefined) {
        setCartList([
                ...cartList, 
                {
                    id : item.id,
                    name : item.name,
                    price : item.price,
                    img : item.img,
                    cantItem : qty
                }
            ]);
        } else {
                    found.cantItem += qty
            }
    
        }
    
    
    const removeItem = (id) => {
        const newList = cartList.filter(item => item.id !== id)
        setCartList(newList)
    }

    const clear = () => {
        setCartList([])
    }

    const cantItemTotal = () =>{
            let qty = cartList.map(item => item.cantItem);
            return qty.reduce(((anterior, posterior) => anterior + posterior), 0)
    }

    
    const totalItems = (id) => {
        let total= cartList.map(item => item.id).indexOf(id);
        return cartList[total].price * cartList[total].cantItem;
    }
    
    const totalSum = () => {
        let totales = cartList.map(item => totalItems(item.id))
        return totales.reduce(((anterior, posterior) => anterior + posterior), 0)
    }

    const totalFinal = () =>{
        return totalSum()
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, cantItemTotal, totalFinal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;