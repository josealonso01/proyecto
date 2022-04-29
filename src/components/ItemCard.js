import React from 'react'

const ItemCard = ({ itemData }) => {
    return (
        <div style={{ padding: '20px', border: 'solid #1f242d' }} class="grid grid-cols-4 gap-4">

            <figure><img src={itemData.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{itemData.name}</h2>
                <p>Stock: {itemData.stock}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-outline">${itemData.price} Comprar ahora</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard


