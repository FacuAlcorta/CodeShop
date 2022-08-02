import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);
   
 const addToCart = (item, qty) => {
            let itemCant = cartList.find(product => product.itemId === item.id);
            if (itemCant === undefined) {
                setCartList([
                    ...cartList, 
                    {
                        itemId : item.id,
                        name : item.name,
                        price : item.price,
                        img : item.img,
                        cantItem : qty
                    }
                ]);
            } else {
                    itemCant.cantItem += qty;
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

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, cantItemTotal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;