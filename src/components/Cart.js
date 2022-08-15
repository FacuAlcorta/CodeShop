import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { Product, ProductDetail, ProductPrice, PriceDetail, Details, ImageCart, ContentCart, TitleCart, WrapperCart, ProductAmount } from './styledComponents'
import { Link } from 'react-router-dom';
import { serverTimestamp, doc, collection, setDoc } from 'firebase/firestore';
import { db } from '../utils/customFirebase'
import { clear } from '@testing-library/user-event/dist/clear';

const Cart = () => {

  const global = useContext(CartContext);

  const createOrder = () => {
    let itemDB= global.cartList.map(item => ({
      id:item.idItem,
      title: item.name,
      price: item.price,
      qty: item.cantItem
    }))
    let order= {
      buyer: {
        email: "pepe@pepe.com",
        name: "Pepe",
        phone: "1166664444"
      },
      date: serverTimestamp(),
      items: itemDB,
      total: global.totalFinal(),
      }
      console.log(order);

      const createOrderFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)
        return newOrderRef
      }

      createOrderFirestore()
      .then(result => alert("Se ha creado tu orden n° " + result.id + "\nTe enviaremos un email con el detalle de tu compra."))
      .catch(err => console.log(err))

      global.clear()
    }
  

  return (
    <WrapperCart>
        <TitleCart>Tu Carrito</TitleCart>
        {
          global.cartList.length === 0 ?
          <TitleCart>Tu carrito esta vacío, compra <Link to="/">aca</Link></TitleCart>
          : global.cartList.map(item =>
            
            <ContentCart>
                <Product key={item.id}>
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
          )
        }
        {
          global.cartList.length > 0 && 
          <ProductPrice>
            <TitleCart>Total de tu compra $ {global.totalFinal()}</TitleCart>
            <PriceDetail><button onClick={()=> global.clear()}>Vaciar carrito</button></PriceDetail>
            <PriceDetail><button onClick={()=> createOrder()}>Finalizar compra</button></PriceDetail>
          </ProductPrice>
        }
      </WrapperCart>
);
}

export default Cart