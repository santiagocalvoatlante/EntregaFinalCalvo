import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useState,useEffect } from 'react';
import { getProductos, getProductosPorCategoria} from '../../asyncsmock';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = (props) => {
  
  const [productos,setProductos] = useState ([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");
    
    getDocs(misProductos)
      .then(res => {
        console.log(res);
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          console.log(doc.data());
          return {id: doc.id, ...data};
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategoria])
 
  
  return (
    <div>
    <h2> {props.greeting} </h2>
    <ItemList productos={productos}></ItemList>
    </div>
  )
}

export default ItemListContainer