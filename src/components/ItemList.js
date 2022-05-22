import React from 'react'
import ItemCard from "./ItemCard";
 
const ItemList = ({Items}) => {
  return (
    < div style = {{ border: 'solid #1f242d 2px' }}> { Items.map(Item => <ItemCard key={Item.id} itemData={Item} />) }</div >
  )
}

export default ItemList 