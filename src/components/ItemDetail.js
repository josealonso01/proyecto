import React from 'react'

const ItemDetail = ({detailItem}) => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={detailItem.img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold"> {detailItem.name} </h1>
                    <p class="py-6"> {detailItem.detailText} </p>
                    <button class="btn btn-primary"> ${detailItem.price} COMPRAR </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail