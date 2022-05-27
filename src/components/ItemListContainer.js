import { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import { collection, CollectionReference, getDocs, getFirestore, query, QuerySnapshot, where } from "firebase/firestore";

const ItemListContainer = ({ category }) => {

    const [Items, setItems] = useState()
    const [end, SetEnd] = useState(true);

    useEffect(() => {
        getItems()
        SetEnd(true)
    }, [category])

    const getItems = () => {
        const db = getFirestore()
        const q = query(collection(db,'items'), where('category', '==', 'undefined'))
        getDocs(q).then(snapshot => {
           setItems (snapshot.docs.map((doc) => ({id : doc.id, ...doc.data()})))
        })
    }
    return (
        <>{end === false ? <h1>Cargando...</h1> : <ItemList Items={Items} ></ItemList>}</>
    )
}

export default ItemListContainer