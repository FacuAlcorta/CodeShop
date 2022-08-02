import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget= () =>{
    const global = useContext(CartContext);

    return(
        <Badge badgeContent={global.cantItemTotal()} color="primary">
            <ShoppingCartCheckoutIcon />
        </Badge>
    );
}

export default CartWidget;