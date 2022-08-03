import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { Product, ProductDetail, ProductPrice, PriceDetail, Details, ImageCart, ContentCart, TitleCart, WrapperCart, ProductAmount } from './styledComponents'

const Cart = () => {

  const global = useContext(CartContext);

  return (
        <WrapperCart>
        <TitleCart>Tu Carrito</TitleCart>
        {
          global.cartList.length > 0 && global.cartList.map((item) => (
            
          <ContentCart>
                <Product>
                <ProductDetail>
                    <ImageCart src={item.img} />
                    <Details>
                    <span>
                        <b>Producto:</b> {item.name}
                    </span>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmount>{item.cantItem} Item</ProductAmount>
                    <ProductPrice>$ {item.price} C/U</ProductPrice>
                    <button onClick={() => global.removeItem(item.id)}>Quitar Producto</button>
                </PriceDetail>
                </Product>
          </ContentCart>
          ))
        }
        <TitleCart>Ttotal de tu compra
          <PriceDetail>${() => global.totalSum()}</PriceDetail>
        </TitleCart>
        <button onClick={global.clear}>Vaciar carrito</button>
      </WrapperCart>
);
}

export default Cart