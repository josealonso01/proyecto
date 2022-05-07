import { useEffect, useState } from "react";
import { data } from "./data/datos";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [Item, setItem] = useState([])

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        getItem.then((result) => {
            console.log('se concreto la promesa', result);
            setItem(result)
        })
    }, [])
        return (
            <ItemList Item={Item}/> 
        ) 
}


export default ItemListContainer
