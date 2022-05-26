import { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({category}) => {
    const [Items, setItems] = useState()
    const [end, SetEnd] = useState(false);
    useEffect(() => {
        getItems()
        SetEnd(true)
    }, [category])

    const getItems = () => {
        const db = getFirestore()
        const itemCollection = collection(db, 'items')
        getDocs(itemCollection).then(snapshot => {
            if (snapshot.size > 0){
                const ids = snapshot.docs.map(d => d.id).join(',')
                console.log('ids', ids);
                const itemsData = snapshot.docs.map(d => ({'id': d.id, ... d.data()}))
                console.log(itemsData);
                setItems(itemsData)
                if (category === undefined){
                    console.log('category indefinida');
                }else{
                    console.log('categoria definida');
                }
            }
        })


    }

    return (
        <>{end ? <h1>Cargando...</h1> : <ItemList Items={Items} ></ItemList>}</>
    )
}
export default ItemListContainer