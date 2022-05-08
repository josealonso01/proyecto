import React from 'react'
import {Link} from 'react-router-dom';


const ItemCard = ({ itemData }) => {
    return (
        <div style={{ padding: '20px', border: 'solid #1f242d' }} class="grid grid-cols-4 gap-4 ">

            <figure><img src={itemData.img} /></figure>
            <div class="card-body">
            <Link to= {`/item/${itemData.id}`}> <p> {itemData.name} </p></Link>
                <p>Stock: {itemData.stock}</p>
            </div>
        </div>
    )
}

export default ItemCard


