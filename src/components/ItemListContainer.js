import { useEffect, useState } from "react";
import { data } from "./data/datos";
import ItemList from "./ItemList";
import NavBar from "./NavBar";

const ItemListContainer = ({category}) => {

    const [Item, setItem] = useState([])

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        getItem.then((result) => {
            console.log('Category en itemlistcontainer', category);
            if (category === undefined)
                setItem(result)
            else
                setItem(result.filter(
                    (element) => element.category === category
                ))
        })
    }, [])
    return (
        <ItemList Item={Item} />
    )
}


export default ItemListContainer