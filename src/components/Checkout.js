import React, { useState } from 'react'
import { useCartContext } from '../context/CartContextProvider'
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { Link } from 'react-router-dom';

const Checkout = ({ }) => {
    const { cartList, calculatePrice, calculateItemCount } = useCartContext();

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
    })

    const orderDate = new Date().toLocaleDateString()

    const orderHandler = () => {
        const order = {
            user,
            item: cartList,
            price: calculatePrice(),
            date: orderDate,

        }
        saveToFirestore(order)
    }


    const saveToFirestore = (order) => {
        const db = getFirestore()
        const orderCollection = collection(db, 'order')

        addDoc(orderCollection, order).then(response => {
            console.log('response', response.id);
        })
    }

    const submitOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    console.log('cartList', cartList)
    cartList.map((item) => {
        console.log('item', item);
    })



    return (

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold  my-8">Resumen de compra</h1>
                        <div className="stats shadow">

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Total</div>
                                <div className="stat-value text-primary"> ${calculatePrice()} </div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title">Cantidad total de Items</div>
                                <div className="stat-value text-secondary"> {calculateItemCount()} </div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1>DATOS DE ENVIO</h1>
                            <div className="form-control">
                                <label className="label">
                                </label>
                                <input placeholder="Nombre" type="text" name="name" value={user.name} onChange={submitOnChange} required className="input input-bordered input-primary w-full max-w-xs my-8 " />
                                <input placeholder="Apellido" type="text" name="lastname" value={user.lastname} onChange={submitOnChange} required className="input input-bordered input-primary w-full max-w-xs my-8" />
                                <input placeholder="Email" type="email" name="email" value={user.email} onChange={submitOnChange} required className="input input-bordered input-primary w-full max-w-xs my-8" />
                                <input placeholder="Telefono" type="phone" name="phone" value={user.phone} onChange={submitOnChange} required className="input input-bordered input-primary w-full max-w-xs my-8" />
                            </div>
                            <label for="my-modal-6" class="btn btn-secondary modal-button" onClick={() => { orderHandler() }}>Enviar</label>

                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Gracias por tu compra!</h3>
                                <p class="py-4">En breve te llegara un detalle de tu compra al mail..</p>
                                <div class="modal-action">
                                    <Link to='/' for="my-modal-6" class="btn">Volver a INICIO</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >

    )
}

export default Checkout