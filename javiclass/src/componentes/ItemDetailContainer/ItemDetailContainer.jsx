import React from 'react'
import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asyncsmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailCointariner = () => {
  
  const [producto,setProducto] = useState(null);
 
  const {idItem} = useParams();
  useEffect (()=>{
getUnProducto(idItem)
.then(res =>setProducto (res))
  },[idItem])
  return (
    <div> 
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailCointariner