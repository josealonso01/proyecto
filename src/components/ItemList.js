import React from 'react'
import ItemCard from "./ItemCard";
 
const ItemList = ({Items}) => {
  return (
    < div style = {{ border: 'solid #1f242d 2px' }}> { Items === undefined ? null : Items.map(<ItemCard key={Items.id} itemData={Items}/>) }</div >
  )
}

export default ItemList 
