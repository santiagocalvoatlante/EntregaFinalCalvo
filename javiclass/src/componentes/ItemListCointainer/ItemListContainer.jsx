import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useState,useEffect } from 'react';
import { getProductos, getProductosPorCategoria} from '../../asyncsmock';
import { useParams } from 'react-router-dom';



const ItemListContainer = (props) => {
  
  const [productos,setProductos] = useState ([]);

  const {idCategoria} = useParams();
  useEffect ( ()=> {
 
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
    funcionProductos(idCategoria)

    .then (res => setProductos (res))
    .catch(error => console.log (error))


  },[idCategoria])
  
  return (
    <div>
    <h2> {props.greeting} </h2>
    <ItemList productos={productos}></ItemList>
    </div>
  )
}

export default ItemListContainer