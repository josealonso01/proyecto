import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(item, quantity) {
        console.log({ item, quantity });
        if (isInCart(item.id)) {
            return setCartList(
                cartList.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product
                )
            );
        }
        setCartList([...cartList, { ...item, quantity }]);
    }

    function isInCart(id) {
        return cartList.some((item) => item.id === id);
    }

    function removeItem(id) {
        const newCartList = [...cartList];
        let index = newCartList.findIndex((el) => el.id === id);
    
        newCartList.splice(index, 1);
    
        setCartList([...newCartList]);
    }

    function deleteItem() {
        setCartList([]);
    }
    
    function quantity() {
        cartList.reduce((suma, item) => { return suma + item.quantity }, 0)
    }

    function total() {
        cartList.reduce((suma, item) => { return suma + (item.quantity * item.price) }, 0)
    }


    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                setCartList,
                removeItem,
                deleteItem,
                quantity,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
