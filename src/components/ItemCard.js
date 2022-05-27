import React from 'react'
import {Link} from 'react-router-dom';

const ItemCard = ({ list }) => {
    const { id, name, stock, img } = list;

    return (
        <div style={{ padding: '20px', border: 'solid #1f242d' }} className="grid grid-cols-4 gap-4 ">

            <figure><img src={img} /></figure>
            <div className="card-body">
            <Link to= {`/item/${id}`}> <button className="btn btn-secondary"> {name} </button></Link>
                <p>Stock: {stock}</p>
            </div>
        </div>
    )
}

export default ItemCard


