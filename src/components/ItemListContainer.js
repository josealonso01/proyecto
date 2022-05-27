import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const ItemListContainer = () => {
    const {category} = useParams ()
    const [item, setItems] = useState()
    const [end, SetEnd] = useState(true);

    useEffect(() => {
        const db = getFirestore()
        const getItems = async () => {
            SetEnd(true)

            const itemCollection = category
                ? query(collection(db, 'items'), where('category', '==', category))
                : collection(db, 'items')
            const querySnapshot = await getDocs(itemCollection)
            setItems(
                querySnapshot.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }
                )
                )
            SetEnd(false)
        }
        getItems()
    }, [category])
  

    return (
        <>{end ? <h1>Cargando...</h1> : <ItemList item={item} />}</>
    )

}


export default ItemListContainer
