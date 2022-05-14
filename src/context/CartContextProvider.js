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
        return cartList.splice((itemId) => itemId === id)

    }

    function deleteItem() {
        setCartList([]);
    }

    return (
        <CartContext.Provider
            value={{
                addToCart,
                setCartList,
                removeItem,
                deleteItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
