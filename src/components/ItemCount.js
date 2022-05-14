import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleSubstract = () => {
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
                <div class="btn-group">
                    <button onClick={handleSubstract} class="btn">«</button>
                    <button class="btn">{count}</button>
                    <button onClick={handleAdd} class="btn">»</button>
                    <button class="btn btn-secondary" onClick={() => onAdd(count)}> AGREGAR AL CARRITO </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
