import React from 'react'
import { useEffect, useState } from "react";
import { data } from "./data/datos";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ id }) => {
    const [detailItem, setDetail] = useState([])
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 3000)
        })
        getItem.then((result) => {
            setDetail(result.find(
                (element) => element.id === id
            ))
        })
    }, [])
    return (
        <ItemDetail detailItem={detailItem} />
    )
}

export default ItemDetailContainer
