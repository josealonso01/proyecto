import React from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer'

const ListPage = () => {
  const {id} = useParams();
  return (
    <div><ItemListContainer id={parseInt(id)}/></div>
  )
}

export default ListPage