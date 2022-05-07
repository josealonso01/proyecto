import React from 'react'
import ItemCard from "./ItemCard";

const ItemList = ({Item}) => {
  return (
    < div style = {{ border: 'solid #1f242d 2px' }}> { Item.map(Item => <ItemCard key={Item.id} itemData={Item} />) }</div > 
  )
}

export default ItemList