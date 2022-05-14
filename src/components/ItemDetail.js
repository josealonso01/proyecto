import React from 'react'
import { useCartContext } from '../context/CartContextProvider';
import ItemCount from './ItemCount';


export default function ItemDetail({ detailItem }) {
    const { addToCart } = useCartContext();

    function handleOnAdd(count) {
        console.log(count);
        addToCart(detailItem, count);
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={detailItem.img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold"> {detailItem.name} </h1>
                    <p class="py-6"> {detailItem.detailText} </p>
                    <ItemCount initial={1} stock={detailItem.stock} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>
    )
}
