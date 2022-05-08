import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'

const DetailPage = () => {
  const {id} = useParams();
  return (
    <div> <ItemDetailContainer id={parseInt(id)}/> </div>
  )
}
export default DetailPage