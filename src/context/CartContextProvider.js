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

    function calculatePrice() {
        let total = 0
        cartList.forEach((item)=> {total = total + item.price * item.quantity})
        return total
    }

    function calculateItemCount() {
        let total = 0
        cartList.forEach((item)=> {total = item.quantity + total})
        return total
    }

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                setCartList,
                removeItem,
                deleteItem,
                calculatePrice,
                calculateItemCount
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
