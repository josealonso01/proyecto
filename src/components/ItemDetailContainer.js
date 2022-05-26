import React from 'react'
import { useEffect, useState } from "react";
import { data } from "./data/datos";
import ItemDetail from './ItemDetail';
import 'firebase/functions';

const ItemDetailContainer = ({ id }) => {
    const [detailItem, setDetail] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000)
        })
        getItem.then((result) => {
            setDetail(result.find(
                (element) => element.id === id
            ))
        })
        getItem.finally(() => setLoading(false));
    }, [])
    return (
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail  detailItem={detailItem} />}</>
    )
}

export default ItemDetailContainer
