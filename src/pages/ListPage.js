import React from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer'

const ListPage = ()  => {
  const {category} = useParams();
  console.log('Esta es la category', category)
  return (
    <div><ItemListContainer category={category}/></div>
  )
}

export default ListPage