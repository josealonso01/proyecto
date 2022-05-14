import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContextProvider';
import ItemCount from './ItemCount';


export default function ItemDetail({ detailItem }) {
    const { addToCart } = useCartContext();
    const [end, SetEnd] = useState(false);

    function handleOnAdd(count) {
        console.log(count);
        addToCart(detailItem, count);
        SetEnd(true)
    }


    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={detailItem.img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold"> {detailItem.name} </h1>
                    <p class="py-6"> {detailItem.detailText} </p>
                    {end ? (<Link to='/cart'> <button class="btn btn-secondary">Terminar Compra</button></Link>) : (<ItemCount initial={1} stock={detailItem.stock} onAdd={handleOnAdd}/>)} 
                </div>
            </div>
        </div>
    )
}
