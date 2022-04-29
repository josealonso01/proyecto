import { useEffect, useState } from "react";
import { data } from "./data/datos";
import ItemCard from "./ItemCard";

const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        getItems.then((result) => {
            console.log('se concreto la promesa', result);
            setItems(result)
        })
    }, [])

    return (
        <div style={{border:'solid #1f242d 2px'}} >{items.map( items => <ItemCard key={items.id} itemData={items}/>)}</div>
    )
}

export default Items