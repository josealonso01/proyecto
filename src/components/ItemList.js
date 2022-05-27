import React from 'react'
import ItemCard from "./ItemCard";

const ItemList = ({ item }) => {
  return (
    < div style={{ border: 'solid #1f242d 2px' }}>

      {item.map((i) => (
        <ItemCard key={i.id} list={i} />
      ))}
    </div >
  );
}

export default ItemList 
