import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, doc, getDocs, getFirestore, query, snapshotEqual, where } from "firebase/firestore";

const ItemListContainer = ({ category }) => {
        const [Items, setItems] = useState()
        
        useEffect(() => {
            getItems()
        }, [])
    
        const getItems = () => {
            const db = getFirestore()
            const itemCollection = collection(db, 'items')
            getDocs(itemCollection).then( snapshot =>  
                {
                    if(snapshot.size > 0){
                        var listOfObjects = snapshot.data;
                        
                        if (category === undefined){
                            const result = snapshot.docs.map( d => ({'id':d.id, ... d.data()}))
                            setItems(result)
                        }
                        else{ 
                            const result = snapshot.docs.map( d => category == d.category ? ({'id':d.id, ... d.data()}) : null)
                            setItems(result)
                        }
                        
    
                    }
                } )
    }
    return (
        <ItemList Items={Items} />
    ) 
    }
    

export default ItemListContainer
