import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleRemove = () => {
        if (count > initial) {
            setCount((counter) => counter - 1);
        }
    };
    const handleAdd = () => {
        if (count < stock) {
            setCount((counter) => counter + 1);
        }
    };

    return (
        <div>
            <div>
                <div className="btn-group">
                    <button onClick={handleRemove} className="btn">«</button>
                    <button className="btn">{count}</button>
                    <button onClick={handleAdd} className="btn">»</button>
                    <button className="btn btn-secondary" onClick={() => onAdd(count)}> AGREGAR AL CARRITO </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
