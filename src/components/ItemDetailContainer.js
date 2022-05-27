import React from 'react'
import { useEffect, useState } from "react";
import 'firebase/functions';
import { collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [detailItem, setDetail] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const getItems = async () => {
            setLoading(true)
            
            const detailCollection = id
                ? query(collection(db, 'items'), where('id', '==', id))
                : collection(db, 'items')
            const querySnapshot = await getDocs(detailCollection)
            setDetail(
                querySnapshot.docs.map((item) => {
                    return {...item.data(), id: item.id}
                }
                )
            )
            setLoading(false)
        }
        getItems()
    }, [id])
    return (
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail  key={detailItem.id} detailItem={detailItem} />}</>
    )
}

export default ItemDetailContainer
