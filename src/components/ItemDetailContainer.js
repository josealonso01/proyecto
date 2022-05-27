import React from 'react'
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [detailItem, setDetail] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()

        const detailCollection = doc(db, 'items', id);
        getDoc(detailCollection).then((snapshot) => {
            const detail = { id: snapshot.id, ...snapshot.data() }
            setDetail(detail)

        });
        setLoading(false)
    }, [id]);

    return (
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail detailItem={detailItem} />}</>
    )
}

export default ItemDetailContainer
