import React from 'react'
import { CartContext, useCartContext } from '../context/CartContextProvider'
import CartItem from './CartItem'

const Cart = () => {
  const cartContext = useCartContext(CartContext)
  const { cartList, deleteItem, removeItem, calculatePrice } = cartContext
  return (
    <section className="list-cart-container">
      {cartList ? (cartList.map(product => {
        return (<CartItem key={product.id}
          item={product}
          calculatePrice={calculatePrice}
          removeItem={removeItem}
        />);
      }))
        : <p>cargando productos</p>

      }
      {cartList.length ? (
        <div className='space-y-4 space-x-4 mx-8'>
          <div className='indicator-item badge badge-secondary p-8 m-8'>
            Total:$ {calculatePrice()}
          </div>
          <br></br>
          <button
            className="btn gap-2"
            onClick={deleteItem}
          > <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg> Vaciar Carrito
          </button>
        </div>)
        : <div className="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>No hay productos en el carrito</span>
          </div>
        </div>
      }
    </section>
  )
}


export default Cart