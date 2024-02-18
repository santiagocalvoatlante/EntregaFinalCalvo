import React from 'react'
import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asyncsmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import {getDoc, doc} from "firebase/firestore";

const ItemDetailCointariner = () => {
  
  const [producto,setProducto] = useState(null);
 
  const {idItem} = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = {id: res.id, ...data};
        setProducto(nuevoProducto);

      })
      .catch(error => console.log("Error", error))
}, [idItem]) 
  return (
    <div> 
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailCointariner