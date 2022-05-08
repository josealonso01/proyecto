import React from 'react'

const ItemCard = ({ itemData }) => {
    return (
        <div style={{ padding: '20px', border: 'solid #1f242d' }} class="grid grid-cols-4 gap-4 ">

            <figure><img src={itemData.img} /></figure>
            <div class="card-body">
            <link to={`/item/:id`}> <a class="card-title">{itemData.name}</a></link>
                <p>Stock: {itemData.stock}</p>
            </div>
        </div>
    )
}

export default ItemCard


