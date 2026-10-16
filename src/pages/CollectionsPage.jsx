import React from 'react'
import { useParams } from 'react-router-dom'

const CollectionsPage = () => {
    const {handle} = useParams()
  return (
    <div>CollectionsPage : {handle}</div>
  )
}

export default CollectionsPage