import React from 'react'
import { CartContext, useCartContext } from '../context/CartContextProvider'
import CartItem from './CartItem'

const Cart = () => {
  const cartContext = useCartContext(CartContext)
  const { cartList, deleteItem, removeItem } = cartContext
  return (
    <section className="list-cart-container">
      {cartList ? (cartList.map(product => {
        return (<CartItem key={product.id}
          item={product}
          removeItem={removeItem}
        />);
      }))
        : <p>cargando productos</p>
      }
      {cartList.length ? (<button
        class="btn gap-2"
        onClick={deleteItem}
      > <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg> Vaciar Carrito</button>)
        : <p>No hay productos en el carrito</p>
      }
    </section>
  )
}


export default Cart