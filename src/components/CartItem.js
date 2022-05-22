import React from 'react'

const CartItem = ({ item, removeItem }) => {
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Detalle</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={item.img} />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.detailText}
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>${item.price}</td>
                        <td>${item.quantity * item.price}</td>
                        <th>
                                <button class='btn' onClick={() => removeItem(item.id)}>Eliminar Item</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartItem