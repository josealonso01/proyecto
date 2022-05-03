import { useEffect, useState } from "react";
import { data } from "./data/datos";
import ItemCard from "./ItemCard";


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
         < div style = {{ border: 'solid #1f242d 2px' }}> { Item.map(Item => <ItemCard key={Item.id} itemData={Item} />) }</div > 

        )
        }


export default ItemListContainer
