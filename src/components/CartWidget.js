import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartWidget= () =>{
    return(
        <Badge badgeContent={1} color="primary">
            <ShoppingCartCheckoutIcon />
        </Badge>
    );
}

export default CartWidget;