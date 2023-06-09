import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id,title,overview } = useParams()
    
  return (
    <div>
    {id}
{overview}
    {title}
       
       
    </div>
  )
}

export default Details